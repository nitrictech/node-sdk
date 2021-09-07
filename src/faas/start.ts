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
import * as grpc from '@grpc/grpc-js';
import { SERVICE_BIND } from '../constants';
import { faas } from '../interfaces';
import { TriggerResponse } from '../interfaces/faas';
import { EventHandler, GenericHandler, HttpHandler, TriggerContext, TriggerHandler } from '.';


class Faas {
  private httpHandler?: HttpHandler;
  private eventHandler?: EventHandler;
  private anyHandler?: TriggerHandler;

  /**
   * Add an event handler to this Faas server
   */
  event(handler: EventHandler): Faas {
    this.eventHandler = handler;
    return this;
  }

  /**
   * Add a http handler to this Faas server
   */
  http(handler: HttpHandler): Faas {
    this.httpHandler = handler;
    return this;
  }

  /**
   * Get http handler for this server
   */
  private getHttpHandler(): HttpHandler | TriggerHandler | undefined {
    return this.httpHandler || this.anyHandler;
  }

  /**
   * Get event handler for this server
   */
  private getEventHandler(): EventHandler | TriggerHandler | undefined {
    return this.eventHandler || this.anyHandler;
  }

  /**
   * Start the Faas server
   */
  async start(handler?: TriggerHandler): Promise<void> {
    this.anyHandler = handler;
    if(!this.httpHandler && !this.eventHandler && !this.anyHandler) {
      throw new Error("A handler function must be provided.");
    }

    // Actually start the server...
    const faasClient = new faas.FaasServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  
    // Begin Bi-Di streaming
    const faasStream = faasClient.triggerStream();
  
    faasStream.on('data', async (message: faas.ServerMessage) => {
      // We have an init response from the membrane
      if (message.hasInitResponse()) {
        console.log('Function connected with membrane');
        // We got an init response from the membrane
        // The client can configure itself with any information provided by the membrane..
      } else if (message.hasTriggerRequest()) {
        // We want to handle a function here...
        const triggerRequest = message.getTriggerRequest();
        const responseMessage = new faas.ClientMessage();
  
        responseMessage.setId(message.getId());
  
        try {
          const ctx = TriggerContext.fromGrpcTriggerRequest(triggerRequest);

          let handler: GenericHandler<TriggerContext> = undefined;
          let triggerType = "Unknown";
          if (ctx.http) {
            triggerType = "HTTP";
            handler = this.getHttpHandler() as GenericHandler<TriggerContext>;
          } else if (ctx.event) {
            triggerType = "Event";
            handler = this.getEventHandler() as GenericHandler<TriggerContext>;
          } else {
            console.error(`received an unexpected trigger type, are you using an outdated version of the SDK?`);
          }
          
          if(!handler) {
            // No handler defined for the trigger type received.
            console.error(`no handler defined for ${triggerType} triggers`);
            faasStream.cancel();
          }
          
          const result = await handler(ctx, async (ctx) => ctx);
          responseMessage.setTriggerResponse(TriggerContext.toGrpcTriggerResponse(result));
        } catch (e) {
          console.error(e);
          // generic error handling
          console.error(e);
          const triggerResponse = new TriggerResponse();
          responseMessage.setTriggerResponse(triggerResponse);
  
          if (triggerRequest.hasHttp()) {
            const httpResponse = new faas.HttpResponseContext();
            triggerResponse.setHttp(httpResponse);
            const headers = httpResponse.getHeadersMap();
            httpResponse.setStatus(500);
  

            headers.set('Content-Type', 'text/plain');
            triggerResponse.setData('Internal Server Error');
          } else if (triggerRequest.hasTopic()) {
            const topicResponse = new faas.TopicResponseContext();
  
            topicResponse.setSuccess(false);
            triggerResponse.setTopic(topicResponse);
            triggerResponse.setData('Internal Server Error');
          }
        }
        // Send the response back to the membrane
        faasStream.write(responseMessage);
      }
    });
  
    // Let the membrane know we're ready to start
    const initRequest = new faas.InitRequest();
    const initMessage = new faas.ClientMessage();
    initMessage.setInitRequest(initRequest);
    faasStream.write(initMessage);
  
    // Block until the stream has closed...
    await new Promise<void>((res) => {
      // The server has determined this stream must close
      faasStream.on('end', () => {
        console.log('Membrane has terminated the trigger stream');
        res();
      });
    });
  }
}

// Faas Singleton
let INSTANCE: Faas = undefined;

/**
 * Register a HTTP handler
 */
export const http = (handler: HttpHandler): Faas => {
  INSTANCE = INSTANCE || new Faas();
  
  return INSTANCE.http(handler);
}

/**
 * Register an event handler
 */
export const event = (handler: EventHandler): Faas => {
  INSTANCE = INSTANCE || new Faas();

  return INSTANCE.event(handler);
}

/**
 * Start the FaaS server with a universal handler
 */
export const start = async (handler: TriggerHandler): Promise<void> => {
  INSTANCE = INSTANCE || new Faas();

  return await INSTANCE.start(handler);
}
