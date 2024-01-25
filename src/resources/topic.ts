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
import { Topic, topics } from '@nitric/sdk/api/topics';
import resourceClient from './client';
import {
  ResourceIdentifier,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
  Action,
} from '@nitric/proto/resources/v1/resources_pb';
import {
  ActionsList,
  make,
  SecureResource,
  startStreamHandler,
} from './common';
import { SERVICE_BIND } from '../constants';

import { SubscriberClient } from '@nitric/proto/topics/v1/topics_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import {
  ClientMessage,
  MessageResponse,
  RegistrationRequest,
  ServerMessage,
} from '@nitric/proto/topics/v1/topics_pb';
import { MessageContext } from '../context/message';
import { MessageMiddleware, createHandler } from '../helpers/handler';
import { fromGrpcError } from '../api/errors';

type TopicPermission = 'publishing';

export class SubscriptionWorkerOptions {
  public readonly topic: string;

  constructor(topic: string) {
    this.topic = topic;
  }
}

/**
 * Creates a subscription worker
 */
export class Subscription<T extends Record<string, any> = Record<string, any>> {
  private readonly options: SubscriptionWorkerOptions;
  private readonly handler: MessageMiddleware;

  constructor(name: string, ...middleware: MessageMiddleware<T>[]) {
    this.options = new SubscriptionWorkerOptions(name);
    this.handler = createHandler(...middleware);
  }

  private async start(): Promise<void> {
    return startStreamHandler(async () => {
      if (!this.handler) {
        throw new Error(
          `A handler function must be provided for topic ${this.options.topic}.`
        );
      }

      const subscriberClient = new SubscriberClient(
        SERVICE_BIND,
        grpc.ChannelCredentials.createInsecure()
      );

      // Begin Bi-Di streaming
      const stream = subscriberClient.subscribe();

      stream.on('data', async (message: ServerMessage) => {
        // We have an init response from the membrane
        if (message.hasRegistrationResponse()) {
          console.log('Function connected with membrane');
          // We got an init response from the membrane
          // The client can configure itself with any information provided by the membrane..
        } else if (message.hasMessageRequest()) {
          // We want to handle a function here...
          const messageRequest = message.getMessageRequest();
          const clientMessage = new ClientMessage();

          clientMessage.setId(message.getId());

          try {
            const ctx = MessageContext.fromMessageRequest(messageRequest);
            const result = (await this.handler(ctx, async (ctx) => ctx)) || ctx;
            const messageResponse = MessageContext.toMessageResponse(result);

            clientMessage.setMessageResponse(messageResponse);
          } catch (e) {
            // generic error handling
            console.error(e);
            const messageResponse = new MessageResponse();
            messageResponse.setSuccess(false);
            clientMessage.setMessageResponse(messageResponse);
          }
          // Send the response back to the membrane
          stream.write(clientMessage);
        }
      });

      // Let the membrane know we're ready to start
      const initRequest = new RegistrationRequest();
      const initMessage = new ClientMessage();

      initRequest.setTopicName(this.options.topic);
      initMessage.setRegistrationRequest(initRequest);
      stream.write(initMessage);

      return stream;
    });
  }
}

/**
 * Topic resource for pub/sub async messaging.
 */
export class TopicResource<
  T extends Record<string, any> = Record<string, any>
> extends SecureResource<TopicPermission> {
  /**
   * Register this topic as a required resource for the calling function/container
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();
    const resource = new ResourceIdentifier();
    resource.setName(this.name);
    resource.setType(ResourceType.TOPIC);
    req.setId(resource);

    return new Promise<ResourceIdentifier>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(resource);
          }
        }
      );
    });
  }

  protected permsToActions(...perms: TopicPermission[]): ActionsList {
    return perms.reduce((actions, p) => {
      switch (p) {
        case 'publishing':
          return [
            ...actions,
            Action.TOPICEVENTPUBLISH,
            Action.TOPICLIST,
            Action.TOPICDETAIL,
          ];
        default:
          throw new Error(
            `unknown permission ${p}, supported permissions is publishing.}
            )}`
          );
      }
    }, []);
  }

  /**
   * Register and start a subscription handler that will be called for all events from this topic.
   *
   * @param middleware handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  subscribe(...middleware: MessageMiddleware<T>[]): Promise<void> {
    const sub = new Subscription<T>(this.name, ...middleware);
    return sub['start']();
  }

  protected resourceType() {
    return ResourceType.TOPIC;
  }

  /**
   * Return a topic reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const updates = resources.topic('updates').for('publishing')
   *
   * @param perm the required permission set
   * @param perms additional required permissions set
   * @returns a usable topic reference
   */
  public for(perm: TopicPermission, ...perms: TopicPermission[]): Topic<T> {
    this.registerPolicy(perm, ...perms);
    return topics().topic(this.name);
  }
}

/**
 * Create a reference to a named topic in this project.
 *
 * If the topic hasn't been referenced before this is a request for a new resource. Otherwise, the existing topic with the same name will be used.
 *
 * @param name the name of the topic.
 * @returns a reference to the topic.
 */
export function topic<T extends Record<string, any> = Record<string, any>>(
  name: string
): TopicResource<T> {
  return make<TopicResource<T>>(TopicResource)(name);
}
