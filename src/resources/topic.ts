import { Faas, EventMiddleware } from '../faas';
import { events, Topic } from '../api/';
import { NitricEvent } from '../types';
import resourceClient from './client';
import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';

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
class Subscription {
  private readonly faas: Faas;

  constructor(name: string, ...mw: EventMiddleware[]) {
    this.faas = new Faas(new SubscriptionWorkerOptions(name)).event(...mw);
  }

  private async start(): Promise<void> {
    return this.faas.start();
  }
}

/**
 * Topic resource for pub/sub async messaging.
 */
class TopicResource {
  private readonly name: string;
  private hasPublisher: boolean;
  private hasSubscriber: boolean;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * Register this topic as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  private async register(): Promise<void> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.TOPIC);
    req.setResource(resource);

    return new Promise<void>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            // TODO: remove this ignore when not using link
            // @ts-ignore
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        }
      );
    });
  }

  /**
   * Register and start a subscription handler that will be called for all events from this topic.
   * @param mw handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  subscribe(...mw: EventMiddleware[]): Promise<void> {
    // TODO: Check if publish policy has already been registered and error.
    // TODO: register subscription policy

    const sub = new Subscription(this.name, ...mw);
    return sub['start']();
  }

  /**
   * Return a topic reference and register the permissions required by the currently scoped function for this resource.
   * 
   * e.g. const updates = resources.topic('updates').for('publishing')
   * 
   * @param perms the required permission set
   * @returns a usable topic reference
   */
  public for(...perms: TopicPermission[]): Topic {
    // TODO: check if subscriber has been registered and error if so.
    // TODO: register required policy resource.
    return events().topic(this.name)
  }
}

// This singleton helps avoid duplicate references to topic('name')
// will return the same topic resource
const topics: Record<string, TopicResource> = {};

/**
 * Provides a cloud topic resource.
 * 
 * @param name the _unique_ name of the topic
 * @returns the topic resource
 */
export const topic = (name: string): TopicResource => {
  if (!topics[name]) {
    topics[name] = new TopicResource(name);
    topics[name]['register']();
  }

  return topics[name];
};
