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
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { storage, Bucket } from '../api/storage';
import { ActionsList, make, Resource as Base } from './common';
import { fromGrpcError } from '../api/errors';

type BucketPermission = 'reading' | 'writing' | 'deleting';

const everything: BucketPermission[] = ['reading', 'writing', 'deleting'];

/**
 * Cloud storage bucket resource for large file storage.
 */
export class BucketResource extends Base<BucketPermission> {
  /**
   * Register this bucket as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.BUCKET);

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

  protected permsToActions(...perms: BucketPermission[]): ActionsList {
    return perms.reduce((actions, perm) => {
      switch (perm) {
        case 'reading':
          return [...actions, Action.BUCKETFILEGET, Action.BUCKETFILELIST];
        case 'writing':
          return [...actions, Action.BUCKETFILEPUT];
        case 'deleting':
          return [...actions, Action.BUCKETFILEDELETE];
        default:
          throw new Error(
            `unknown bucket permission ${perm}, supported permissions are ${everything.join(
              ', '
            )}`
          );
      }
    }, []);
  }

  /**
   * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const imgs = resources.bucket('image').for('writing')
   *
   * @param perms the required permission set
   * @returns a usable bucket reference
   */
  public for(...perms: BucketPermission[]): Bucket {
    this.registerPolicy(...perms);

    return storage().bucket(this.name);
  }
}

export const bucket = make(BucketResource);
