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
import { Faas, EventMiddleware } from '../faas';
import { events, Topic } from '../api/';
import resourceClient from './client';
import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
  Action,
} from '@nitric/api/proto/resource/v1/resource_pb';
import { ActionsList, make, SecureResource } from './common';
import { fromGrpcError } from '../api/errors';
import { NitricEvent } from '../types';

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
class Subscription<T> {
  private readonly faas: Faas;

  constructor(name: string, ...mw: EventMiddleware<T>[]) {
    this.faas = new Faas(new SubscriptionWorkerOptions(name));
    this.faas.event(...mw);
  }

  private async start(): Promise<void> {
    return this.faas.start();
  }
}

/**
 * Topic resource for pub/sub async messaging.
 */
export class TopicResource<
  T extends NitricEvent = NitricEvent
> extends SecureResource<TopicPermission> {
  /**
   * Register this topic as a required resource for the calling function/container
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.TOPIC);
    req.setResource(resource);

    return new Promise<Resource>((resolve, reject) => {
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
   * @param mw handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  subscribe(...mw: EventMiddleware<T>[]): Promise<void> {
    const sub = new Subscription<T>(this.name, ...mw);
    return sub['start']();
  }

  protected resourceType() {
    return ResourceType.TOPIC;
  }

  /**
   * Unwraps the response details.
   *
   * Not used for topics.
   *
   * @param resp {never}
   */
  protected unwrapDetails(resp: ResourceDeclareResponse): never {
    throw new Error('details unimplemented for topic');
  }

  /**
   * Return a topic reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const updates = resources.topic('updates').for('publishing')
   *
   * @param perms the required permission set
   * @returns a usable topic reference
   */
  public for(...perms: TopicPermission[]): Topic<T> {
    this.registerPolicy(...perms);
    return events().topic(this.name);
  }
}

export const topic = make(TopicResource) as <
  T extends Record<string, any> = Record<string, any>
>(
  name: string
) => TopicResource<NitricEvent<T>>;
