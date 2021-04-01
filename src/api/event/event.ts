import { SERVICE_BIND } from "../../constants";
import { event } from "../../interfaces";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import * as grpc from "@grpc/grpc-js";
import { uuid } from "uuidv4";
import type { NitricEvent } from "../../types";

/**
 *
 */
export class EventClient {
  private grpcClient: event.EventClient;

  constructor() {
    this.grpcClient = new event.EventClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async publish(
    topic: string,
    { id = uuid(), payloadType = "none", payload }: NitricEvent
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
          resolve(id);
        }
      });
    });
  }
}
