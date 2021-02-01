import { queue, common } from '../interfaces/v1';
import { AMBASSADOR_BIND } from "../constants"
import * as grpc from '@grpc/grpc-js';
import { NitricEvent } from './types';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';

interface FailedMessage {
  event: NitricEvent;
  message: string;
}

/**
 * 
 */
export class QueueClient {
  private grpcClient: queue.QueueClient; 

  constructor() {
    this.grpcClient = new queue.QueueClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async push(queueName: string, events: NitricEvent[]): Promise<FailedMessage[]> {
    return new Promise((resolve, reject) => {
      const request = new queue.PushRequest();

      const wireEvents = events.map(e => {
        const wireEvent = new common.NitricEvent();
        wireEvent.setRequestid(e.requestId);
        wireEvent.setPayloadtype(e.payloadType);
        wireEvent.setPayload(Struct.fromJavaScript(e.payload))

        return wireEvent;
      })

      request.setEventsList(wireEvents)
      request.setQueue(queueName)
    
      return new Promise<FailedMessage[]>((resolve,reject) => {
        this.grpcClient.push(request, (error, response) => {
          if (error) {
            reject(error)
          } else {
            resolve(response.getFailedmessagesList().map(m => ({
              event: {
                requestId: m.getEvent().getRequestid(),
                payload: m.getEvent().getPayload().toJavaScript(),
                payloadType: m.getEvent().getPayloadtype(),
              },
              message: m.getMessage(),
            })))
          }
        });
      })
    });
  }
}