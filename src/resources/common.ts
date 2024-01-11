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
  Resource as ProtoResource,
  ResourceType,
  PolicyResource,
  ResourceDeclareRequest,
  ActionMap,
  ResourceDetailsRequest,
  ResourceDetailsResponse,
  ResourceTypeMap,
} from '@nitric/proto/resources/v1/resources_pb';
import resourceClient from './client';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import type { ClientDuplexStream } from '@grpc/grpc-js';

export type ActionsList = ActionMap[keyof ActionMap][];

export interface ResourceDetails<T> {
  id: string;
  provider: string;
  service: string;
  details: T;
}

export abstract class Resource<Detail = any> {
  /**
   * Unique name for the resource by type within the stack.
   *
   * This name can be used in all future references, it will be resolved automatically at runtime.
   */
  public readonly name: string;
  /**
   * Used to resolve the given resource for policy creation
   */
  private _registerPromise: Promise<ProtoResource>;

  constructor(name: string) {
    this.name = name;
  }

  protected get registerPromise(): Promise<ProtoResource> {
    return this._registerPromise;
  }

  protected set registerPromise(promise: Promise<ProtoResource>) {
    this._registerPromise = promise;
  }

  protected async details(): Promise<ResourceDetails<Detail>> {
    const req = new ResourceDetailsRequest();
    const res = new ProtoResource();
    res.setName(this.name);
    res.setType(this.resourceType());

    req.setResource(res);
    return new Promise<ResourceDetails<Detail>>((resolve, reject) => {
      resourceClient.details(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            id: resp.getId(),
            provider: resp.getProvider(),
            service: resp.getService(),
            details: this.unwrapDetails(resp),
          });
        }
      });
    });
  }

  protected abstract resourceType(): ResourceTypeMap[keyof ResourceTypeMap];

  protected abstract unwrapDetails(resp: ResourceDetailsResponse): Detail;

  protected abstract register(): Promise<ProtoResource>;
}

export abstract class SecureResource<P> extends Resource {
  protected abstract permsToActions(...perms: P[]): ActionsList;

  protected registerPolicy(...perms: P[]): void {
    const req = new ResourceDeclareRequest();
    const policyResource = new ProtoResource();
    policyResource.setType(ResourceType.POLICY);

    // Send an unnamed function as the principle. This is interpreted to mean the currently running function, making the request.
    const policy = new PolicyResource();
    const defaultPrincipal = new ProtoResource();
    defaultPrincipal.setType(ResourceType.FUNCTION);
    policy.setPrincipalsList([defaultPrincipal]);

    // Convert the permissions to an action set.
    const actions = this.permsToActions(...perms);
    policy.setActionsList(actions);

    req.setResource(policyResource);
    req.setPolicy(policy);

    this.registerPromise.then((resource) => {
      policy.setResourcesList([resource]);

      resourceClient.declare(req, (error) => {
        if (error) {
          throw error;
        }
      });
    });
  }
}

// This singleton helps avoid duplicate references to bucket('name')
// will return the same bucket resource
const cache: Record<string, Record<string, Resource>> = {};

export type newer<T> = (name: string, ...args: any[]) => T;

/**
 * Provides a new resource instance.
 *
 * @param T the type of resource to construct
 * @returns the resource
 */
export const make = <T extends Resource>(
  T: new (name: string, ...args: any[]) => T
): newer<T> => {
  const typename = T.name;
  return (name: string, ...args: any[]) => {
    if (!cache[typename]) {
      cache[typename] = {};
    }
    if (!cache[typename][name]) {
      cache[typename][name] = new T(name, ...args);

      const prom = cache[typename][name]['register']();

      cache[typename][name]['registerPromise'] = prom;

      prom.catch((err) => {
        console.log(err);
      });
    }
    return cache[typename][name] as T;
  };
};

export const toDuration = (seconds: number) => {
  const duration = new Duration();
  duration.setSeconds(seconds);

  return duration;
};

export const startStreamHandler = async (
  handler: () => Promise<ClientDuplexStream<any, any>>
) => {
  // const provider = newTracerProvider(); TODO add back later
  const stream = await handler();

  // Block until the stream has closed...
  await new Promise<void>((res) => {
    // The server has determined this stream must close
    stream.on('end', () => {
      console.log('Membrane has terminated the trigger stream');
      res();
    });
  });

  // Shutdown the trace provider, flushing the stream and stopping listeners
  // await provider?.shutdown(); TODO add back later
};
