import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { queues, Queue } from '../api/';
import { make, Resource as Base } from './common';

type QueuePermission = 'sending' | 'receiving';

const everything: QueuePermission[] = ['sending', 'receiving'];

/**
 * Queue resource for async send/receive messaging
 */
class QueueResource extends Base {
  /**
   * Register this queue as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<void> {
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

export const queue = make(QueueResource)
