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
  Resource,
  ResourceType,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceDetailsResponse,
} from '@nitric/api/proto/resource/v1/resource_pb';
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
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.SECRET);

    req.setResource(resource);

    return new Promise<Resource>((resolve, reject) => {
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

  protected unwrapDetails(resp: ResourceDetailsResponse): never {
    throw new Error('details unimplemented for secret');
  }

  public for(...perms: SecretPermission[]): Secret {
    this.registerPolicy(...perms);

    return secrets().secret(this.name);
  }
}

export const secret = make(SecretResource);
