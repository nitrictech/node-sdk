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
import { SERVICE_BIND } from '../../constants';

import { FaasServiceClient } from '@nitric/api/proto/faas/v1/faas_grpc_pb';
import {
  ServerMessage,
  ClientMessage,
  HttpResponseContext,
  HeaderValue,
  TriggerResponse,
  TopicResponseContext,
  RouteWorker,
  ScheduleRate,
  SubscriptionWorker,
  ScheduleWorker,
  InitRequest,
} from '@nitric/api/proto/faas/v1/faas_pb';

import {
  createHandler,
  EventMiddleware,
  GenericMiddleware,
  HttpContext,
  HttpMiddleware,
  TriggerContext,
  TriggerMiddleware,
} from '.';

import { ApiWorkerOptions, RateWorkerOptions, SubscriptionWorkerOptions } from "../../resources";

class FaasWorkerOptions {}

type FaasClientOptions = ApiWorkerOptions | RateWorkerOptions | FaasWorkerOptions; 

/**
 *
 */
export class Faas {
  private httpHandler?: HttpMiddleware;
  private eventHandler?: EventMiddleware;
  private anyHandler?: TriggerMiddleware;
  private readonly options: FaasClientOptions;


  constructor(opts: FaasClientOptions) {
    this.options = opts;
  }

  /**
   * Add an event handler to this Faas server
   */
  event(...handlers: EventMiddleware[]): Faas {
    this.eventHandler = createHandler(...handlers);
    return this;
  }

  /**
   * Add a http handler to this Faas server
   */
  http(...handlers: HttpMiddleware[]): Faas {
    this.httpHandler = createHandler(...handlers);
    return this;
  }

  /**
   * Get http handler for this server
   */
  private getHttpHandler(): HttpMiddleware | TriggerMiddleware | undefined {
    return this.httpHandler || this.anyHandler;
  }

  /**
   * Get event handler for this server
   */
  private getEventHandler(): EventMiddleware | TriggerMiddleware | undefined {
    return this.eventHandler || this.anyHandler;
  }



  /**
   * Start the Faas server
   */
  async start(...handlers: TriggerMiddleware[]): Promise<void> {
    this.anyHandler = handlers.length && createHandler(...handlers);
    if (!this.httpHandler && !this.eventHandler && !this.anyHandler) {
      throw new Error('A handler function must be provided.');
    }

    // Actually start the server...
    const faasClient = new FaasServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );

    // Begin Bi-Di streaming
    const faasStream = faasClient.triggerStream();

    faasStream.on('data', async (message: ServerMessage) => {
      // We have an init response from the membrane
      if (message.hasInitResponse()) {
        console.log('Function connected with membrane');
        // We got an init response from the membrane
        // The client can configure itself with any information provided by the membrane..
      } else if (message.hasTriggerRequest()) {
        // We want to handle a function here...
        const triggerRequest = message.getTriggerRequest();
        const responseMessage = new ClientMessage();

        responseMessage.setId(message.getId());

        try {
          const ctx = TriggerContext.fromGrpcTriggerRequest(triggerRequest);

          let handler: GenericMiddleware<TriggerContext> = undefined;
          let triggerType = 'Unknown';
          if (ctx.http) {
            triggerType = 'HTTP';
            handler = this.getHttpHandler() as GenericMiddleware<TriggerContext>;
          } else if (ctx.event) {
            triggerType = 'Event';
            handler = this.getEventHandler() as GenericMiddleware<TriggerContext>;
          } else {
            console.error(
              `received an unexpected trigger type, are you using an outdated version of the SDK?`
            );
          }

          if (!handler) {
            // No handler defined for the trigger type received.
            console.error(`no handler defined for ${triggerType} triggers`);
            faasStream.cancel();
          }

          const result = await handler(ctx, async (ctx) => ctx) || ctx;
          responseMessage.setTriggerResponse(
            TriggerContext.toGrpcTriggerResponse(result)
          );
        } catch (e) {
          // generic error handling
          console.error(e);
          const triggerResponse = new TriggerResponse();
          responseMessage.setTriggerResponse(triggerResponse);
          triggerResponse.setData(new TextEncoder().encode('Internal Server Error'));

          if (triggerRequest.hasHttp()) {
            const httpResponse = new HttpResponseContext();
            triggerResponse.setHttp(httpResponse);
            httpResponse.setStatus(500);
            const headersOld = httpResponse.getHeadersOldMap();
            headersOld.set('Content-Type', 'text/plain');
            const headers = httpResponse.getHeadersMap();
            const contentTypeHeader = new HeaderValue();
            contentTypeHeader.addValue('text/plain');
            headers.set('Content-Type', contentTypeHeader);
          } else if (triggerRequest.hasTopic()) {
            const topicResponse = new TopicResponseContext();
            topicResponse.setSuccess(false);
            triggerResponse.setTopic(topicResponse);
          }
        }
        // Send the response back to the membrane
        faasStream.write(responseMessage);
      }
    });

    // Let the membrane know we're ready to start
    const initRequest = new InitRequest();
    const initMessage = new ClientMessage();

    if (this.options instanceof ApiWorkerOptions) {
      const apiWorker = new RouteWorker();
      apiWorker.setMethodsList(this.options.methods)
      apiWorker.setPath(this.options.route);
      initRequest.setRoute(apiWorker);
    } else if(this.options instanceof RateWorkerOptions) {
      const scheduleWorker = new ScheduleWorker();
      const rate = new ScheduleRate();
      rate.setRate(`${this.options.rate} ${this.options.frequency}`);
      scheduleWorker.setRate(rate);
      initRequest.setSchedule(scheduleWorker);
    } else if (this.options instanceof SubscriptionWorkerOptions) {
      const subscriptionWorker = new SubscriptionWorker()
      subscriptionWorker.setTopic(this.options.topic);
      initRequest.setSubscription(subscriptionWorker);
    }

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

const getFaasInstance = (): Faas => {
 INSTANCE = INSTANCE || new Faas(new FaasWorkerOptions());
 return INSTANCE;
};

/**
 * Register a HTTP handler
 */
export const http = (...handlers: HttpMiddleware[]): Faas =>
  getFaasInstance().http(...handlers);

/**
 * Register an event handler
 */
export const event = (...handlers: EventMiddleware[]): Faas =>
  getFaasInstance().event(...handlers);

/**
 * Start the FaaS server with a universal handler
 */
export const start = async (...handlers: TriggerMiddleware[]): Promise<void> =>
  await getFaasInstance().start(...handlers);
