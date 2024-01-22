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
  ResourceIdentifier,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
  Action,
} from '@nitric/proto/resources/v1/resources_pb';
import { documents } from '../api/documents';
import resourceClient from './client';
import { make, SecureResource } from './common';
import { DocumentStructure } from '../api/documents/v1/document-ref';

type CollectionPermission = 'reading' | 'writing' | 'deleting';

const everything: CollectionPermission[] = ['reading', 'writing', 'deleting'];

/**
 * A document collection resources, such as a collection/table in a document database.
 */
export class CollectionResource<
  T extends DocumentStructure
> extends SecureResource<CollectionPermission> {
  /**
   * Register this collection as a required resource for the calling function/container
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();

    const resource = new ResourceIdentifier();
    resource.setName(this.name);
    resource.setType(ResourceType.COLLECTION);
    req.setId(resource);

    return new Promise<ResourceIdentifier>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            reject(error);
          } else {
            resolve(resource);
          }
        }
      );
    });
  }

  protected permsToActions(...perms: CollectionPermission[]) {
    let actions = perms.reduce((actions, perm) => {
      switch (perm) {
        case 'reading':
          return [
            ...actions,
            Action.COLLECTIONDOCUMENTREAD,
            Action.COLLECTIONQUERY,
          ];
        case 'writing':
          return [...actions, Action.COLLECTIONDOCUMENTWRITE];
        case 'deleting':
          return [...actions, Action.COLLECTIONDOCUMENTDELETE];
        default:
          throw new Error(
            `unknown collection permission ${perm}, supported permissions are ${everything.join(
              ', '
            )}`
          );
      }
    }, []);

    if (actions.length > 0) {
      actions = [...actions, Action.COLLECTIONLIST];
    }

    return actions;
  }

  protected resourceType() {
    return ResourceType.COLLECTION;
  }

  /**
   * Return a collection reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const customers = resources.collection('customers').for('reading', 'writing')
   *
   * @param perm  the required permission set
   * @param perms additional required permissions set
   * @returns a usable collection reference
   */
  public for(perm: CollectionPermission, ...perms: CollectionPermission[]) {
    this.registerPolicy(perm, ...perms);

    return documents().collection<T>(this.name);
  }
}

const newCollection = make(CollectionResource);

/**
 * Create a reference to a named queue in this project.
 *
 * If the queue hasn't been referenced before, this is a request for a new resource. Otherwise, the existing queue with the same name will be used.
 *
 * @param name the name of the queue.
 * @returns a reference to the queue.
 */
export function collection<T extends DocumentStructure>(
  name: string
): CollectionResource<T> {
  return newCollection(name) as CollectionResource<T>;
}
