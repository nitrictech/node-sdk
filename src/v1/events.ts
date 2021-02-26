import { SERVICE_BIND } from "../constants"
import { events, common } from '../interfaces/v1';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import { uuid } from "uuidv4"
import { NitricEvent } from './types';


/**
 * 
 */
export class EventClient {
  private grpcClient: events.EventClient;

  constructor() {
    this.grpcClient = new events.EventClient(
      SERVICE_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async publish(
    topic: string, 
    { requestId = uuid(), payloadType = "none", payload }: NitricEvent
  ): Promise<string> {
    const request = new events.EventPublishRequest();
    const evt = new common.NitricEvent();

    evt.setRequestid(requestId);
    evt.setPayload(Struct.fromJavaScript(payload));
    evt.setPayloadtype(payloadType);

    request.setTopic(topic);
    request.setEvent(evt);
    
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.publish(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(requestId);
        }
      });
    });
  }
}