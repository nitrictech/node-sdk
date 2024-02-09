// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { QueuesClient as QueueServiceClient } from '@nitric/proto/queues/v1/queues_grpc_pb';
import {
  QueueSendRequest,
  QueueReceiveRequest,
  QueueCompleteRequest,
  QueueSendRequestBatch,
} from '@nitric/proto/queues/v1/queues_pb';
import { SERVICE_BIND } from '../../../constants';
import * as grpc from '@grpc/grpc-js';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import {
  fromGrpcError,
  InvalidArgumentError,
  InternalError,
} from '../../errors';

/**
 * A message that has failed to be enqueued
 */
interface FailedMessage<T> {
  task: T;
  message: string;
}

/**
 * Constructs a new queue service client.
 *
 * @returns a queue service client.
 */
function newQueueServiceClient(): QueueServiceClient {
  return new QueueServiceClient(
    SERVICE_BIND,
    grpc.ChannelCredentials.createInsecure()
  );
}

/**
 * Nitric queue client, facilitates pushing and popping to distributed queues.
 */
export class Queueing {
  QueueServiceClient: QueueServiceClient;

  constructor() {
    this.QueueServiceClient = newQueueServiceClient();
  }

  queue = <T>(name: string): Queue<T> => {
    if (!name) {
      throw new Error('A queue name is needed to use a Queue.');
    }

    return new Queue<T>(this, name);
  };
}

export class Queue<T extends Record<string, any> = Record<string, any>> {
  queueing: Queueing;
  name: string;

  constructor(queueing: Queueing, name: string) {
    this.queueing = queueing;
    this.name = name;
  }

  /**
   * Send an task to a queue, which can be retrieved by other services.
   *
   * If an array of tasks is provided the returns promise will resolve to an array containing
   * any tasks that failed to be sent to the queue.
   *
   * When a single task is provided a void promise will be returned, which rejects if the
   * task fails to be sent to the queue.
   *
   * @param tasks one or more tasks to push to the queue
   * @returns A void promise for a single task or a list of failed tasks when sending an array of tasks.
   *
   * Example:
   * ```typescript
   * import { Queueing } from "@nitric/sdk";
   *
   * const queueing = new Queueing();
   * const queue = queueing.queue("my-queue")
   * await queue.send({ value: "test" });
   */
  public async send(tasks: T[]): Promise<FailedMessage<T>[]>;
  public async send(tasks: T): Promise<void>;
  public async send(
    tasks: T[] | T
  ): Promise<void | FailedMessage<T>[]> {
    return new Promise((resolve, reject) => {
      const request = new QueueSendRequestBatch();

      // Convert to NitricTask if not specified
      const tasksArray = Array.isArray(tasks) ? tasks : [tasks];

      request.setRequestsList(tasksArray.map(inputTask => {
        const task = new QueueSendRequest();
        task.setPayload(Struct.fromJavaScript(inputTask));
        return task;
      }))
      request.setQueueName(this.name);

      this.queueing.QueueServiceClient.send(request, (error, response) => {
        if (error) {
          reject(fromGrpcError(error));
          return;
        }
        const failedTasks = response.getFailedRequestsList().map((m) => ({
          task: m.getRequest().getPayload().toJavaScript() as T,
          message: m.getMessage(),
        }));
        if (!Array.isArray(tasks)) {
          // Single Task returns
          if (failedTasks.length > 0) {
            reject(new Error(failedTasks[0].message));
          }
          resolve();
        } else {
          // Array of Tasks return
          resolve(failedTasks);
        }
      });
    });
  }

  /**
   * Pop 1 or more queue items from the specified queue up to the depth limit.
   *
   * Nitric Tasks are leased for a limited period of time, where they may be worked on.
   * Once complete or failed they must be acknowledged using request specified leaseId.
   *
   * If the lease on a queue item expires before it is acknowledged or the lease is extended the task will be returned to the queue for reprocessing.
   *
   * @param depth the maximum number of items to return. Default 1, Min 1.
   * @returns The list of received tasks
   *
   * Example:
   * ```typescript
   * import { Queueing } from "@nitric/sdk"
   *
   * const queueing = new Queueing();
   *
   * const [task] = await queueing.queue("my-queue").receive();
   *
   * // do something with task
   * ```
   */
  public async receive(depth?: number): Promise<ReceivedTask<T>[]> {
    return new Promise((resolve, reject) => {
      const request = new QueueReceiveRequest();

      // Set the default and min depth to 1.
      if (Number.isNaN(depth) || depth < 1) {
        depth = 1;
      }

      request.setQueueName(this.name);
      request.setDepth(depth);

      this.queueing.QueueServiceClient.receive(request, (error, response) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(
            response.getTasksList().map((m) => {
              return new ReceivedTask({
                task: m.getPayload().toJavaScript() as T,
                leaseId: m.getLeaseId(),
                queue: this,
              });
            })
          );
        }
      });
    });
  }
}

export class ReceivedTask<
  T extends Record<string, any> = Record<string, any>
> {
  payload: T;
  leaseId: string;
  queue: Queue;

  constructor({
    leaseId,
    task: payload,
    queue,
  }: {
    task: T;
    leaseId: string;
    queue: Queue;
  }) {
    this.payload = payload;
    this.leaseId = leaseId;
    this.queue = queue;
  }

  /**
   * Marks a queue item as successfully completed and removes it from the queue.
   *
   * @returns A void promise
   *
   * Example:
   * ```typescript
   * import { Queueing } from "@nitric/sdk"
   *
   * const queueing = new Queueing();
   *
   * const [task] = await queueing.queue("my-queue").receive();
   *
   * // do something with task
   *
   * // complete the task
   * await task.complete();
   * ```
   */
  public async complete(): Promise<void> {
    try {
      const request = new QueueCompleteRequest();

      request.setQueueName(this.queue.name);
      request.setLeaseId(this.leaseId);

      return await new Promise((resolve, reject) => {
        this.queue.queueing.QueueServiceClient.complete(request, (error) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

// Queues client singleton
let QUEUES = undefined;

/**
 * Queues API Client.
 *
 * @returns a Queues API client.
 * @example
 * ```typescript
 * import { queues } from "@nitric/sdk";
 *
 * async function publishToQueue() {
 *  await queues()
 *  .queue('my-queue')
 *  .send({
 *    payload: {
 *      example: 'payload',
 *    },
 *  });
 * }
 * ```
 */
export const queues = (): Queueing => {
  if (!QUEUES) {
    QUEUES = new Queueing();
  }

  return QUEUES;
};