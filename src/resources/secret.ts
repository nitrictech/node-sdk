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
  Action,
  ResourceIdentifier,
  ResourceType,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
} from '@nitric/proto/resources/v1/resources_pb';
import resourceClient from './client';
import { secrets, Secret } from '../api/secrets';
import { ActionsList, make, SecureResource } from './common';
import { fromGrpcError } from '../api/errors';

type SecretPermission = 'put' | 'access';

const everything: SecretPermission[] = ['put', 'access'];

/**
 * Cloud secret resource for secret storage
 */
export class SecretResource extends SecureResource<SecretPermission> {
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();
    const resource = new ResourceIdentifier();
    resource.setName(this.name);
    resource.setType(ResourceType.SECRET);

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

  protected permsToActions(...perms: SecretPermission[]): ActionsList {
    return perms.reduce((actions, perm) => {
      switch (perm) {
        case 'put':
          return [...actions, Action.SECRETPUT];
        case 'access':
          return [...actions, Action.SECRETACCESS];
        default:
          throw new Error(
            `unknown secret permission ${perm}, supported permissions are ${everything.join(
              ', '
            )}`
          );
      }
    }, []);
  }

  protected resourceType() {
    return ResourceType.SECRET;
  }

  public for(perm: SecretPermission, ...perms: SecretPermission[]): Secret {
    this.registerPolicy(perm, ...perms);

    return secrets().secret(this.name);
  }
}

/**
 * Create a reference to a named secret in this project.
 *
 * If the secret hasn't been referenced before this is a request for a new resource. Otherwise, the existing secret with the same name will be used.
 *
 * @param name the name of the secret.
 * @returns a reference to the secret.
 */
export const secret: (name: string) => SecretResource = make(SecretResource);
