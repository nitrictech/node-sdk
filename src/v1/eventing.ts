import { AMBASSADOR_BIND } from "../constants"
import { eventing } from '../interfaces/v1';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import { uuid } from "uuidv4"
import { NitricEvent } from './types';


/**
 * 
 */
export class EventingClient {
  private grpcClient: eventing.EventingClient;

  constructor() {
    this.grpcClient = new eventing.EventingClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async getTopics(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.grpcClient.getTopics(null, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response.getTopicsList());
        }
      });
    });
  }

  async publish(
    topic: string, 
    { requestId = uuid(), payloadType = "none", payload }: NitricEvent
  ): Promise<string> {
    const request = new eventing.PublishRequest();
    const evt = new eventing.NitricEvent();

    evt.setRequestid(requestId);
    evt.setPayload(Struct.fromJavaScript(payload));
    evt.setPayloadtype(payloadType);

    request.setTopicname(topic);
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