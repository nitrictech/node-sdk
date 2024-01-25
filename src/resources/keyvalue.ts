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
import { keyvalue, ValueStructure } from '../api/keyvalue';
import resourceClient from './client';
import { make, SecureResource } from './common';
import { fromGrpcError } from '../api/errors';

type StorePermission = 'getting' | 'setting' | 'deleting';
const everything: StorePermission[] = ['getting', 'setting', 'deleting'];

/**
 * A key/value store resource.
 */
export class KeyValueStoreResource<
  T extends ValueStructure
> extends SecureResource<StorePermission> {
  /**
   * Register this collection as a required resource for the calling function/container
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();

    const resource = new ResourceIdentifier();
    resource.setName(this.name);
    resource.setType(ResourceType.KEYVALUESTORE);
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

  protected permsToActions(...perms: StorePermission[]) {
    let actions = perms.reduce((actions, perm) => {
      switch (perm) {
        case 'getting':
          return [...actions, Action.KEYVALUESTOREREAD];
        case 'setting':
          return [...actions, Action.KEYVALUESTOREWRITE];
        case 'deleting':
          return [...actions, Action.KEYVALUESTOREDELETE];
        default:
          throw new Error(
            `unknown collection permission ${perm}, supported permissions are ${everything.join(
              ', '
            )}`
          );
      }
    }, []);

    return actions;
  }

  protected resourceType() {
    return ResourceType.KEYVALUESTORE;
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
  public for(perm: StorePermission, ...perms: StorePermission[]) {
    this.registerPolicy(perm, ...perms);

    return keyvalue().store<T>(this.name);
  }
}

const newStore = make(KeyValueStoreResource);

/**
 * Create a reference to a named key/value store in this project.
 *
 * If the key/value store hasn't been referenced before this is a request for a new resource. Otherwise, the existing store with the same name will be used.
 *
 * @param name the name of the key/value store.
 * @returns a reference to the key/value store.
 */
export function kv<T extends ValueStructure>(
  name: string
): KeyValueStoreResource<T> {
  return newStore(name) as KeyValueStoreResource<T>;
}
