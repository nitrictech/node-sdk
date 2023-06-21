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
import { SERVICE_BIND } from '../../constants';

import { FaasServiceClient } from '@nitric/api/proto/faas/v1/faas_grpc_pb';
import {
  ServerMessage,
  ClientMessage,
  HttpResponseContext,
  HeaderValue,
  TriggerResponse,
  TopicResponseContext,
  ScheduleCron,
  ScheduleRate,
  SubscriptionWorker,
  ScheduleWorker,
  InitRequest,
  ApiWorker,
  ApiWorkerOptions as ApiWorkerOptionsPb,
  ApiWorkerScopes,
  NotificationResponseContext,
  BucketNotificationWorker,
  BucketNotificationConfig,
  HttpWorker,
} from '@nitric/api/proto/faas/v1/faas_pb';

import {
  createHandler,
  EventMiddleware,
  GenericMiddleware,
  HttpMiddleware,
  ScheduleMiddleware,
  BucketNotificationMiddleware,
  TriggerContext,
  TriggerMiddleware,
  FileNotificationMiddleware,
} from '.';

import newTracerProvider from './traceProvider';

import {
  ApiWorkerOptions,
  CronWorkerOptions,
  RateWorkerOptions,
  SubscriptionWorkerOptions,
  BucketNotificationWorkerOptions,
} from '../../resources';

import * as grpc from '@grpc/grpc-js';
import { HttpWorkerOptions } from '@nitric/sdk/resources/http';

export class FaasWorkerOptions {}

type FaasClientOptions =
  | ApiWorkerOptions
  | RateWorkerOptions
  | CronWorkerOptions
  | FaasWorkerOptions
  | HttpWorkerOptions
  | BucketNotificationWorkerOptions;

/**
 *
 */
export class Faas {
  private httpHandler?: HttpMiddleware;
  private eventHandler?: EventMiddleware | ScheduleMiddleware;
  private bucketNotificationHandler?:
    | BucketNotificationMiddleware
    | FileNotificationMiddleware;
  private anyHandler?: TriggerMiddleware;
  private readonly options: FaasClientOptions;

  constructor(opts: FaasClientOptions) {
    this.options = opts;
  }

  /**
   * Add an event handler to this Faas server
   *
   * @param handlers the functions to call to respond to events
   * @returns self
   */
  event(...handlers: EventMiddleware[] | ScheduleMiddleware[]): Faas {
    this.eventHandler = createHandler<any>(...handlers);
    return this;
  }

  /**
   * Add an http handler to this Faas server
   *
   * @param handlers the functions to call to respond to http requests
   * @returns self
   */
  http(...handlers: HttpMiddleware[]): Faas {
    this.httpHandler = createHandler(...handlers);
    return this;
  }

  /**
   * Add a notification handler to this Faas server
   *
   * @param handlers the functions to call to respond to notification requests
   * @returns self
   */
  bucketNotification(
    ...handlers: BucketNotificationMiddleware[] | FileNotificationMiddleware[]
  ): Faas {
    this.bucketNotificationHandler = createHandler(...handlers);
    return this;
  }

  /**
   * Get http handler for this server
   *
   * @returns the registered HTTP handler for this server
   */
  private getHttpHandler(): HttpMiddleware | TriggerMiddleware | undefined {
    return this.httpHandler || this.anyHandler;
  }

  /**
   * Get event handler for this server
   *
   * @returns the registered event handler for this server
   */
  private getEventHandler(): EventMiddleware | TriggerMiddleware | undefined {
    return this.eventHandler || this.anyHandler;
  }

  /**
   * Get notification handler for this server
   *
   * @returns the registered notification handler for this server
   */
  private getBucketNotificationHandler():
    | BucketNotificationMiddleware
    | FileNotificationMiddleware
    | TriggerMiddleware
    | undefined {
    return this.bucketNotificationHandler || this.anyHandler;
  }

  /**
   * Start the Faas server
   *
   * @param handlers to use as the default when no other handler is registered for the request type
   * @returns a promise that resolves when the server terminates
   */
  async start(...handlers: TriggerMiddleware[]): Promise<void> {
    const provider = newTracerProvider();

    this.anyHandler = handlers.length && createHandler(...handlers);
    if (
      !(this.options instanceof HttpWorkerOptions) &&
      !this.httpHandler &&
      !this.eventHandler &&
      !this.bucketNotificationHandler &&
      !this.anyHandler
    ) {
      throw new Error('A handler function must be provided.');
    }

    // Actually start the server...
    const faasClient = new FaasServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );

    // Begin Bi-Di streaming
    const faasStream = faasClient.triggerStream();

    // Start Node application that HTTP proxy sits on
    if (
      this.options instanceof HttpWorkerOptions &&
      process.env.NITRIC_ENVIRONMENT !== 'build'
    ) {
      this.options.app.listen(this.options.port, this.options.callback);
    }

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
          const ctx = TriggerContext.fromGrpcTriggerRequest(
            triggerRequest,
            this.options
          );

          let handler: GenericMiddleware<TriggerContext> = undefined;
          let triggerType = 'Unknown';
          if (ctx.http) {
            triggerType = 'HTTP';
            handler =
              this.getHttpHandler() as GenericMiddleware<TriggerContext>;
          } else if (ctx.event) {
            triggerType = 'Event';
            handler =
              this.getEventHandler() as GenericMiddleware<TriggerContext>;
          } else if (ctx.bucketNotification) {
            triggerType = 'Notification';
            handler =
              this.getBucketNotificationHandler() as GenericMiddleware<TriggerContext>;
          } else {
            console.error(
              `received an unexpected trigger type, are you using an outdated version of the SDK?`
            );
          }

          if (!handler) {
            // No handler defined for the trigger type received.
            console.error(`no handler defined for ${triggerType} triggers`);
            faasStream.cancel();
            return;
          }

          const result = (await handler(ctx, async (ctx) => ctx)) || ctx;
          responseMessage.setTriggerResponse(
            TriggerContext.toGrpcTriggerResponse(result)
          );
        } catch (e) {
          // generic error handling
          console.error(e);
          const triggerResponse = new TriggerResponse();
          responseMessage.setTriggerResponse(triggerResponse);
          triggerResponse.setData(
            new TextEncoder().encode('Internal Server Error')
          );

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
          } else if (triggerRequest.hasNotification()) {
            const notificationResponse = new NotificationResponseContext();
            notificationResponse.setSuccess(false);
            triggerResponse.setNotification(notificationResponse);
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
      const apiWorker = new ApiWorker();
      apiWorker.setApi(this.options.api);
      apiWorker.setMethodsList(this.options.methods);
      apiWorker.setPath(this.options.route);

      const opts = new ApiWorkerOptionsPb();
      if (this.options.opts && this.options.opts.security) {
        if (Object.keys(this.options.opts.security).length == 0) {
          // disable security if empty security is explicitly set
          opts.setSecurityDisabled(true);
        } else {
          const methodOpts = this.options.opts;
          Object.keys(methodOpts.security).forEach((k) => {
            const scopes = new ApiWorkerScopes();
            scopes.setScopesList(methodOpts.security[k]);
            opts.getSecurityMap().set(k, scopes);
          });
        }
      }

      apiWorker.setOptions(opts);
      initRequest.setApi(apiWorker);
    } else if (this.options instanceof RateWorkerOptions) {
      const scheduleWorker = new ScheduleWorker();
      scheduleWorker.setKey(this.options.description);
      const rate = new ScheduleRate();
      rate.setRate(`${this.options.rate} ${this.options.frequency}`);
      scheduleWorker.setRate(rate);
      initRequest.setSchedule(scheduleWorker);
    } else if (this.options instanceof CronWorkerOptions) {
      const scheduleWorker = new ScheduleWorker();
      scheduleWorker.setKey(this.options.description);
      const cron = new ScheduleCron();
      cron.setCron(this.options.cron);
      scheduleWorker.setCron(cron);
      initRequest.setSchedule(scheduleWorker);
    } else if (this.options instanceof SubscriptionWorkerOptions) {
      const subscriptionWorker = new SubscriptionWorker();
      subscriptionWorker.setTopic(this.options.topic);
      initRequest.setSubscription(subscriptionWorker);
    } else if (this.options instanceof BucketNotificationWorkerOptions) {
      const notificationWorker = new BucketNotificationWorker();
      notificationWorker.setBucket(this.options.bucket);
      const config = new BucketNotificationConfig();
      config.setNotificationPrefixFilter(this.options.notificationPrefixFilter);
      config.setNotificationType(this.options.notificationType);
      notificationWorker.setConfig(config);
      initRequest.setBucketNotification(notificationWorker);
    } else if (this.options instanceof HttpWorkerOptions) {
      const httpWorker = new HttpWorker();
      httpWorker.setPort(this.options.port);
      initRequest.setHttpWorker(httpWorker);
    }
    // Original faas workers should return a blank InitRequest for compatibility.

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

    // Shutdown the trace provider, flushing the stream and stopping listeners
    await provider?.shutdown();
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
 *
 * @param handlers the functions to call to respond to http requests
 * @returns the FaaS service factory
 */
export const http = (...handlers: HttpMiddleware[]): Faas =>
  getFaasInstance().http(...handlers);

/**
 * Register an event handler
 *
 * @param handlers the functions to call to respond to events
 * @returns the FaaS service factory
 */
export const event = (...handlers: EventMiddleware[]): Faas =>
  getFaasInstance().event(...handlers);

/**
 * Register a notification handler
 *
 * @param handlers the functions to call to respond to events
 * @returns the FaaS service factory
 */
export const notification = (
  ...handlers: BucketNotificationMiddleware[]
): Faas => getFaasInstance().bucketNotification(...handlers);

/**
 * Start the FaaS server with a universal handler
 *
 * @param handlers default handlers
 * @returns a promise that resolves when the server terminates
 */
export const start = async (...handlers: TriggerMiddleware[]): Promise<void> =>
  await getFaasInstance().start(...handlers);
