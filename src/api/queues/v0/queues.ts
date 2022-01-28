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
import { QueueServiceClient } from '@nitric/api/proto/queue/v1/queue_grpc_pb';
import {
  NitricTask,
  QueueSendRequest,
  QueueSendBatchRequest,
  QueueReceiveRequest,
  QueueCompleteRequest,
} from '@nitric/api/proto/queue/v1/queue_pb';
import { SERVICE_BIND } from '../../../constants';
import * as grpc from '@grpc/grpc-js';
import type { Task } from '../../../types';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import {
  fromGrpcError,
  InvalidArgumentError,
  InternalError,
} from '../../errors';

/**
 * A message that has failed to be enqueued
 */
interface FailedMessage {
  task: Task;
  message: string;
}

/** @internal */
function taskToWire(task: Task) {
  const wireTask = new NitricTask();

  wireTask.setId(task.id);
  wireTask.setPayloadType(task.payloadType);
  wireTask.setPayload(Struct.fromJavaScript(task.payload));

  return wireTask;
}

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

  queue = (name: string): Queue => {
    if (!name) {
      throw new InvalidArgumentError('A queue name is needed to use a Queue.');
    }

    return new Queue(this, name);
  };
}

export class Queue {
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
   * await queue.send({
   *   id: "1234";
   *   payloadType: "my-payload";
   *   payload: {
   *     value: "test"
   *   };
   * });
   */
  async send(tasks: Task[]): Promise<FailedMessage[]>;
  async send(tasks: Task): Promise<void>;
  async send(tasks: Task | Task[]): Promise<void | FailedMessage[]> {
    return new Promise((resolve, reject) => {
      const request = new QueueSendBatchRequest();

      request.setTasksList(
        Array.isArray(tasks)
          ? tasks.map((task) => taskToWire(task))
          : [taskToWire(tasks)]
      );
      request.setQueue(this.name);

      this.queueing.QueueServiceClient.sendBatch(request, (error, response) => {
        if (error) {
          // TODO: remove this ignore when not using link
          // @ts-ignore
          reject(fromGrpcError(error));
        }
        const failedTasks = response.getFailedtasksList().map((m) => ({
          task: {
            id: m.getTask().getId(),
            payload: m.getTask().getPayload().toJavaScript(),
            payloadType: m.getTask().getPayloadType(),
          },
          message: m.getMessage(),
        }));
        if (!Array.isArray(tasks)) {
          // Single Task returns
          if (failedTasks.length > 0) {
            reject(new InternalError(failedTasks[0].message));
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
  receive = async (depth?: number): Promise<ReceivedTask[]> => {
    return new Promise((resolve, reject) => {
      const request = new QueueReceiveRequest();

      // Set the default and min depth to 1.
      if (Number.isNaN(depth) || depth < 1) {
        depth = 1;
      }

      request.setQueue(this.name);
      request.setDepth(depth);

      this.queueing.QueueServiceClient.receive(request, (error, response) => {
        if (error) {
          // TODO: remove this ignore when not using link
          // @ts-ignore
          reject(fromGrpcError(error));
        } else {
          resolve(
            response.getTasksList().map((m) => {
              return new ReceivedTask({
                id: m.getId(),
                payload: m.getPayload().toJavaScript(),
                payloadType: m.getPayloadType(),
                leaseId: m.getLeaseId(),
                queue: this,
              });
            })
          );
        }
      });
    });
  };
}

export class ReceivedTask implements Task {
  id: string;
  leaseId: string;
  payloadType?: string;
  payload?: Record<string, any>;
  queue: Queue;

  constructor({
    id,
    leaseId,
    payload,
    payloadType,
    queue,
  }: Task & { id: string; leaseId: string; queue: Queue }) {
    this.id = id;
    this.leaseId = leaseId;
    this.payloadType = payloadType;
    this.payload = payload;
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
  complete = async (): Promise<void> => {
    try {
      const request = new QueueCompleteRequest();

      request.setQueue(this.queue.name);
      request.setLeaseId(this.leaseId);

      return await new Promise((resolve, reject) => {
        this.queue.queueing.QueueServiceClient.complete(request, (error) => {
          if (error) {
            // TODO: remove this ignore when not using link
            // @ts-ignore
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        });
      });
    } catch (error) {
      throw error;
    }
  };
}

// Queues client singleton
let QUEUES = undefined;

/**
 * Queues
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
