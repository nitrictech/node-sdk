import { Resource, ResourceDeclareRequest, ResourceDeclareResponse, ResourceType } from "@nitric/api/proto/resource/v1/resource_pb";
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

  public for(
    perm: CollectionPermission[] | CollectionPermission,
    ...perms: CollectionPermission[]
  ): CollectionRef {
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
