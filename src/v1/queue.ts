import { queue, common } from "../interfaces/v1";
import { SERVICE_BIND } from "../constants";
import * as grpc from "@grpc/grpc-js";
import { NitricEvent } from "./types";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";

interface FailedMessage {
  event: NitricEvent;
  message: string;
}

interface QueueItem {
  event: NitricEvent;
  leaseId: string;
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
   * Push a collection of events to a queue, which can be retrieved by other services.
   *
   * @param queueName the of the queue to publish to
   * @param events the event to push to the queue
   * @returns a list containing details of any messages that failed to publish.
   */
  async push(
    queueName: string,
    events: NitricEvent[]
  ): Promise<FailedMessage[]> {
    return new Promise((resolve, reject) => {
      const request = new queue.QueueBatchPushRequest();

      const wireEvents = events.map((e) => {
        const wireEvent = new common.NitricEvent();
        wireEvent.setRequestid(e.requestId);
        wireEvent.setPayloadtype(e.payloadType);
        wireEvent.setPayload(Struct.fromJavaScript(e.payload));

        return wireEvent;
      });

      request.setEventsList(wireEvents);
      request.setQueue(queueName);

      this.grpcClient.batchPush(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            response.getFailedeventsList().map((m) => ({
              event: {
                requestId: m.getEvent().getRequestid(),
                payload: m.getEvent().getPayload().toJavaScript(),
                payloadType: m.getEvent().getPayloadtype(),
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
   * Queue items are Nitric Events that are leased for a limited period of time, where they may be worked on.
   * Once complete or failed they must be acknowledged using request specified leaseId.
   *
   * If the lease on a queue item expires before it is acknowledged or the lease is extended the event will be returned to the queue for reprocessing.
   *
   * @param queueName the Nitric name for the queue. This will be automatically resolved to the provider specific queue identifier.
   * @param depth the maximum number of items to return. Default 1, Min 1.
   */
  async pop(queueName: string, depth: number): Promise<QueueItem[]> {
    return new Promise((resolve, reject) => {
      const request = new queue.QueuePopRequest();

      // Set the default and min depth to 1.
      if (Number.isNaN(depth) || depth < 1) {
        depth = 1;
      }

      request.setQueue(queueName);
      request.setDepth(depth);

      this.grpcClient.pop(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            response.getItemsList().map((m) => ({
              event: {
                requestId: m.getEvent().getRequestid(),
                payload: m.getEvent().getPayload().toJavaScript(),
                payloadType: m.getEvent().getPayloadtype(),
              },
              leaseId: m.getLeaseid(),
            }))
          );
        }
      });
    });
  }
}
