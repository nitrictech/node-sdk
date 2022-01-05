import { Faas, EventMiddleware } from '../faas';
import { events, Topic } from '../api/';
import resourceClient from './client';
import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import { make, Resource as Base } from './common';

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
class TopicResource extends Base {

  /**
   * Register this topic as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<void> {
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

export const topic = make(TopicResource)
