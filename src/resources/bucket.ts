import { Resource, ResourceDeclareRequest, ResourceDeclareResponse, ResourceType } from "@nitric/api/proto/resource/v1/resource_pb";
import resourceClient from './client';
import { storage, Bucket, File } from "../api/storage";

type BucketPermission = "Read" | "Write" | "Delete";

class BucketRef {
	private readonly bucket: Bucket
	private readonly permissions: BucketPermission[];

	constructor(name: string, permissions: BucketPermission[]) {
		this.bucket = storage().bucket(name);
		this.permissions = permissions;
	}

	private async register() {
		// TODO: register this resource's details
	}

	public file(name: string): File {
		return this.bucket.file(name);
	}
}



class BucketResource {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

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
	 * Retrieve a BucketReference with all permissions
	 */
	public all(): BucketRef {
		return this.permissions("Read", "Write", "Delete");
	}

	public permissions(...perms: BucketPermission[]): BucketRef {
		const bucketRef = new BucketRef(this.name, perms);

		// XXX: Will need to await this...
		bucketRef['register']();

		return bucketRef;
	}
}


// This singleton helps avoid duplicate references to bucket('name')
// will return the same bucket resource
const buckets: Record<string, BucketResource> = {};

/**
 * Provides a cloud bucket resource.
 * 
 * @param name the _unique_ name of the bucket within the stack
 * @returns 
 */
export const bucket = (name: string): BucketResource => {
  if (!buckets[name]) {
    buckets[name] = new BucketResource(name);
    buckets[name]['register']();
  }

  return buckets[name];
};