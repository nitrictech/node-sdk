import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { storage, Bucket, File } from '../api/storage';
import { make, Resource as Base } from './common';

type BucketPermission = 'reading' | 'writing' | 'deleting';

const everything: BucketPermission[] = ['reading', 'writing', 'deleting'];

/**
 * Cloud storage bucket resource for large file storage.
 */
class BucketResource extends Base {

  /**
   * Register this bucket as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<void> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.BUCKET);
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
   * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const imgs = resources.bucket('image').for('writing')
   *
   * @param perms the required permission set
   * @returns a usable bucket reference
   */
  public for(...perms: BucketPermission[]): Bucket {
    // TODO: register required policy resources.
    return storage().bucket(this.name);
  }
}

export const bucket = make(BucketResource);