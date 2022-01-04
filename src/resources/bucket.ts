import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { storage, Bucket, File } from '../api/storage';

type BucketPermission = 'reading' | 'writing' | 'deleting';

const everything: BucketPermission[] = ['reading', 'writing', 'deleting'];

/**
 * Cloud storage bucket resource for large file storage.
 */
class BucketResource {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * Register this bucket as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  private async register(): Promise<void> {
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

// This singleton helps avoid duplicate references to bucket('name')
// will return the same bucket resource
const buckets: Record<string, BucketResource> = {};

/**
 * Provides a cloud bucket resource.
 *
 * @param name the _unique_ name of the bucket within the stack
 * @returns the bucket resource
 */
export const bucket = (name: string): BucketResource => {
  if (!buckets[name]) {
    buckets[name] = new BucketResource(name);
    buckets[name]['register']();
  }

  return buckets[name];
};
