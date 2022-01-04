import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';

class CollectionRef {}

type CollectionPermission = 'reading' | 'writing' | 'deleting';

const everything: CollectionPermission[] = ['reading', 'writing', 'deleting'];

/**
 * A document collection resources, such as a collection/table in a document database.
 */
class CollectionResource {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * Register this collection as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  private async register(): Promise<void> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.COLLECTION);
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
   * Return a collection reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const customers = resources.collection('customers').for('reading', 'writing')
   *
   * @param perms the required permission set
   * @returns a usable collection reference
   */
  public for(...perms: CollectionPermission[]): CollectionRef {
    // TODO: call server to request permissions.
    return new CollectionRef();
  }
}

// This singleton helps avoid duplicate references to collection('name')
// will return the same collection resource
const collections: Record<string, CollectionResource> = {};

export const collection = (name: string): CollectionResource => {
  if (!collections[name]) {
    collections[name] = new CollectionResource(name);
    collections[name]['register']();
  }

  return collections[name];
};
