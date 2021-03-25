import { queue } from "@/interfaces";
import { SERVICE_BIND } from "@/constants";
import * as grpc from "@grpc/grpc-js";
import type { Task } from "../../types";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";

interface FailedMessage {
  task: Task;
  message: string;
}

function taskToWire(task: Task) {
  const wireTask = new queue.NitricTask();

  wireTask.setId(task.id);
  wireTask.setPayloadtype(task.payloadType);
  wireTask.setPayload(Struct.fromJavaScript(task.payload));

  return wireTask;
}

/**
 * Nitric queue client, facilitates pushing and popping to distributed queues.
 */
export class QueueClient {
  private grpcClient: queue.QueueClient;

  constructor() {
    this.grpcClient = new queue.QueueClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Send an task to a queue, which can be retrieved by other services.
   *
   * @param queueName the of the queue to publish to
   * @param task the task to push to the queue
   */
  async send(queueName: string, task: Task): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new queue.QueueSendRequest();

      request.setTask(taskToWire(task));
      request.setQueue(queueName);

      this.grpcClient.send(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Send a collection of tasks to a queue, which can be retrieved by other services.
   *
   * @param queueName the of the queue to publish to
   * @param tasks the tasks to push to the queue
   * @returns a list containing details of any messages that failed to publish.
   */
  async sendBatch(
    queueName: string,
    tasks: Task[]
  ): Promise<FailedMessage[]> {
    return new Promise((resolve, reject) => {
      const request = new queue.QueueSendBatchRequest();

      const wireTasks = tasks.map(taskToWire);

      request.setTasksList(wireTasks);
      request.setQueue(queueName);

      this.grpcClient.sendBatch(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            response.getFailedtasksList().map((m) => ({
              task: {
                id: m.getTask().getId(),
                payload: m.getTask().getPayload().toJavaScript(),
                payloadType: m.getTask().getPayloadtype(),
              },
              message: m.getMessage(),
            }))
          );
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
   * @param queueName the Nitric name for the queue. This will be automatically resolved to the provider specific queue identifier.
   * @param depth the maximum number of items to return. Default 1, Min 1.
   */
  async receive(queueName: string, depth: number): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      const request = new queue.QueueReceiveRequest();

      // Set the default and min depth to 1.
      if (Number.isNaN(depth) || depth < 1) {
        depth = 1;
      }

      request.setQueue(queueName);
      request.setDepth(depth);

      this.grpcClient.receive(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            response.getTasksList().map((m) => ({
              task: {
                id: m.getId(),
                payload: m.getPayload().toJavaScript(),
                payloadType: m.getPayloadtype(),
              },
              leaseId: m.getLeaseid(),
              queue: queueName,
            }))
          );
        }
      });
    });
  }

  /**
   * Marks a queue item as successfully completed and removes it from the queue.
   *
   * @param queueItem the queue item to complete
   */
  async complete(queueName: string, task: Task): Promise<void> {
    try {
      const request = new queue.QueueCompleteRequest();

      request.setQueue(queueName);
      request.setLeaseid(task.leaseId);
      
      return await new Promise((resolve, reject) => {
        this.grpcClient.complete(request, (error, response) => {
          if (error) {
            reject(error);
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
