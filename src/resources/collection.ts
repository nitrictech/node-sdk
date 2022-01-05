import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { make, Resource as Base } from './common';

class CollectionRef {}

type CollectionPermission = 'reading' | 'writing' | 'deleting';

const everything: CollectionPermission[] = ['reading', 'writing', 'deleting'];

/**
 * A document collection resources, such as a collection/table in a document database.
 */
class CollectionResource extends Base {
  /**
   * Register this collection as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<void> {
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

export const collection = make(CollectionResource);
