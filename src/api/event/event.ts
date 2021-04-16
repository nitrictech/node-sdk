import { SERVICE_BIND } from '../../constants';
import { event } from '../../interfaces';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import type { NitricEvent } from '../../types';

/**
 * EventClient
 *
 * Used to publish events to nitric topics
 */
export class EventClient {
  private grpcClient: event.EventClient;

  constructor() {
    this.grpcClient = new event.EventClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Publishes an event to a nitric topic
   * @param topic The topic to publish to
   * @param event The event to publish
   * @returns The unique id of the event (if one was not provided it will be generated)
   *
   * Example:
   * ```typescript
   * import { EventClient } from "@nitric/sdk";
   *
   * async function publishEvent(): string {
   *   const client = new EventClient("my-topic", {
   *     payloadType: "my-payload",
   *     payload: {
   *       value: "Hello World!"
   *     }
   *   });
   *
   *   const requestId = await client.publish();
   *
   *   return requestId;
   * }
   * ```
   */
  async publish(
    topic: string,
    { id, payloadType = 'none', payload }: NitricEvent
  ): Promise<string> {
    const request = new event.EventPublishRequest();
    const evt = new event.NitricEvent();

    evt.setId(id);
    evt.setPayload(Struct.fromJavaScript(payload));
    evt.setPayloadtype(payloadType);

    request.setTopic(topic);
    request.setEvent(evt);

    return new Promise<string>((resolve, reject) => {
      this.grpcClient.publish(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getId());
        }
      });
    });
  }
}
