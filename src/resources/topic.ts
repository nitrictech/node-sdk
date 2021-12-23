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
import { SERVICE_BIND } from 'src/constants';

/**
 * Creates a new event publisher
 */
class Publisher {
  public topic: Topic;

  constructor(name: string) {
    this.topic = events().topic(name);
  }

  // publishes events to a topic
  async publish(event: NitricEvent) {
    this.topic.publish(event);
  }
}

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

class TopicResource {
  private readonly name: string;
  private hasPublisher: boolean;
  private hasSubscriber: boolean;

  constructor(name: string) {
    this.name = name;
  }

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

  publisher(): Publisher {
    if (this.hasSubscriber) {
      // TODO: Move this logic into the server
      // TODO: Allow cycles based on config e.g. app().enableCycles();
      throw new Error(
        'cannot create subscriber and publisher in same nitric function!'
      );
    }

    this.hasPublisher = true;
    return new Publisher(this.name);
  }

  subscribe(...mw: EventMiddleware[]): Promise<void> {
    if (this.hasPublisher) {
      // TODO: Move this logic into the server
      throw new Error(
        'cannot create subscriber and publisher in same nitric function!'
      );
    }

    this.hasSubscriber = true;

    const sub = new Subscription(this.name, ...mw);
    return sub['start']();
  }
}

// This singleton helps avoid duplicate references to topic('name')
// will return the same topic resource
const topics: Record<string, TopicResource> = {};

export const topic = (name: string): TopicResource => {
  if (!topics[name]) {
    topics[name] = new TopicResource(name);
    topics[name]['register']();
  }

  return topics[name];
};
