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
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { queues, Queue } from '../api/';
import { fromGrpcError } from '../api/errors';
import { ActionsList, make, Resource as Base } from './common';

type QueuePermission = 'sending' | 'receiving';

/**
 * Queue resource for async send/receive messaging
 */
class QueueResource extends Base<QueuePermission> {
  /**
   * Register this queue as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.QUEUE);
    req.setResource(resource);

    return new Promise<Resource>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error) => {
          if (error) {
            // TODO: remove this ignore when not using link
            reject(fromGrpcError(error));
          } else {
            resolve(resource);
          }
        }
      );
    });
  }

  protected permsToActions(...perms: QueuePermission[]): ActionsList {
    return perms.reduce((actions, p) => {
      switch(p) {
        case "sending":
          return [
            ...actions, 
            Action.QUEUESEND, 
          ];
        case "receiving":
          return [
            ...actions,
            Action.QUEUERECEIVE,
          ];
      }
    }, []);
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
    ...perms: QueuePermission[]
  ): Queue {
    this.registerPolicy(...perms);

    // TODO: register required policy resources.
    return queues().queue(this.name);
  }
}

export const queue = make(QueueResource);
