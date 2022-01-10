import {
  Resource as ProtoResource,
  ResourceType,
  PolicyResource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ActionMap,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';

export type ActionsList = ActionMap[keyof ActionMap][];

export abstract class Resource {
  /**
   * Unique name for the resource by type within the stack.
   *
   * This name can be used in all future references, it will be resolved automatically at runtime.
   */
  protected readonly name: string;
  /**
   * Used to resolve the given reource for policy creation
   */
  public registerPromise: Promise<ProtoResource>;

  constructor(name: string) {
    this.name = name;
  }

  public registerPolicy(...perms: string[]) {
    const actions = this.permsToActions(...perms);

    const req = new ResourceDeclareRequest();
    const policyResource = new ProtoResource();
    policyResource.setType(ResourceType.POLICY);

    const policy = new PolicyResource();
    policy.setActionsList(actions);

    req.setResource(policyResource);
    req.setPolicy(policy);

    this.registerPromise.then((resource) => {
      policy.setResourcesList([resource]);

      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            // TODO: remove this ignore when not using link
            // @ts-ignore
            throw new Error(fromGrpcError(error));
          }
        }
      );
    });
  }

  protected abstract register(): Promise<ProtoResource>;

  protected abstract permsToActions(...perms: string[]): ActionsList;
}

// This singleton helps avoid duplicate references to bucket('name')
// will return the same bucket resource
const cache: Record<string, Record<string, Resource>> = {};

type newer = <T>(name: string) => T;

/**
 * Provides a new resource instance.
 *
 * @param name the _unique_ name of the resource within the stack
 * @returns the resource
 */
export const make = <T extends Resource>(
  T: new (name: string) => T
): ((name: string) => T) => {
  const typename = typeof T;
  return (name: string) => {
    if (!cache[typename]) {
      cache[typename] = {};
    }
    if (!cache[typename][name]) {
      cache[typename][name] = new T(name);
      cache[typename][name].registerPromise = cache[typename][name][
        'register'
      ]();
    }

    return cache[typename][name] as T;
  };
};
