import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import { Task } from 'src/types';
import resourceClient from './client';
import { queues, Queue } from '../api/';

type QueuePermission = 'sending' | 'receiving';

const everything: QueuePermission[] = ['sending', 'receiving'];

/**
 * Queue resource for async send/receive messaging
 */
class QueueResource {
  private readonly name: string;
  private hasPublisher: boolean;
  private hasSubscriber: boolean;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * Register this queue as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  private async register(): Promise<void> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.QUEUE);
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
   * Return a queue reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const taskQueue = resources.queue('work').for('sending')
   *
   * @param perm
   * @param perms
   * @returns
   */
  public for(
    perm: QueuePermission[] | QueuePermission,
    ...perms: QueuePermission[]
  ): Queue {
    // TODO: register required policy resources.
    return queues().queue(this.name);
  }
}

// This singleton ensures duplicate references to queue('name') return the same topic resource
const queuesCache: Record<string, QueueResource> = {};

/**
 * Provides a queue resources.
 * @param name the _unique_ name of the queue within the stack
 * @returns the queue resource
 */
export const queue = (name: string): QueueResource => {
  if (!queuesCache[name]) {
    queuesCache[name] = new QueueResource(name);
    queuesCache[name]['register']();
  }

  return queuesCache[name];
};
