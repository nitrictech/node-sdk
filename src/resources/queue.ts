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
import {
  Resource,
  ResourceDeclareRequest,
  ResourceType,
  Action,
  ResourceDeclareResponse,
  ResourceTypeMap,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { queues, Queue } from '../api/';
import { fromGrpcError } from '../api/errors';
import { ActionsList, make, SecureResource } from './common';

export type QueuePermission = 'sending' | 'receiving';

/**
 * Queue resource for async send/receive messaging
 */
export class QueueResource<
  T extends Record<string, any> = Record<string, any>
> extends SecureResource<QueuePermission> {
  /**
   * Register this queue as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.QUEUE);
    req.setResource(resource);

    return new Promise<Resource>((resolve, reject) => {
      resourceClient.declare(req, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(resource);
        }
      });
    });
  }

  protected permsToActions(...perms: QueuePermission[]): ActionsList {
    let actions: ActionsList = perms.reduce((actions, p) => {
      switch (p) {
        case 'sending':
          return [...actions, Action.QUEUESEND];
        case 'receiving':
          return [...actions, Action.QUEUERECEIVE];
        default:
          throw new Error(
            `unknown permission ${p}, supported permissions is publishing.}
            )}`
          );
      }
    }, []);

    if (actions.length > 0) {
      actions = [...actions, Action.QUEUELIST, Action.QUEUEDETAIL];
    }

    return actions;
  }

  protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap] {
    return ResourceType.QUEUE;
  }

  protected unwrapDetails(_resp: ResourceDeclareResponse): never {
    throw new Error('details unimplemented for queue');
  }

  /**
   * Return a queue reference and registers the permissions required by the currently scoped function for this resource.
   *
   * e.g. const taskQueue = resources.queue('work').for('sending')
   *
   * @param perm the access that the currently scoped function is requesting to this resource.
   * @param perms additional access that the currently scoped function is requesting to this resource.
   * @returns a useable queue.
   */
  public for(perm: QueuePermission, ...perms: QueuePermission[]): Queue<T> {
    this.registerPolicy(perm, ...perms);

    return queues().queue(this.name);
  }
}

export const queue = make(QueueResource) as <
  T extends Record<string, any> = Record<string, any>
>(
  name: string
) => QueueResource<T>;
