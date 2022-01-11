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
  ResourceDeclareResponse,
  ActionMap,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { fromGrpcError } from '../api/errors';

export type ActionsList = ActionMap[keyof ActionMap][];

export abstract class Resource<P> {
  /**
   * Unique name for the resource by type within the stack.
   *
   * This name can be used in all future references, it will be resolved automatically at runtime.
   */
  protected readonly name: string;
  /**
   * Used to resolve the given resource for policy creation
   */
  public registerPromise: Promise<ProtoResource>;

  constructor(name: string) {
    this.name = name;
  }

  public registerPolicy(...perms: P[]) {
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
            throw fromGrpcError(error);
          }
        }
      );
    });
  }

  protected abstract register(): Promise<ProtoResource>;

  protected abstract permsToActions(...perms: P[]): ActionsList;
}

// This singleton helps avoid duplicate references to bucket('name')
// will return the same bucket resource
const cache: Record<string, Record<string, Resource<string>>> = {};

type newer = <T>(name: string) => T;

/**
 * Provides a new resource instance.
 *
 * @param name the _unique_ name of the resource within the stack
 * @returns the resource
 */
export const make = <T extends Resource<string>>(
  T: new (name: string) => T
): ((name: string) => T) => {
  const typename = T.name;
  return (name: string) => {
    if (!cache[typename]) {
      cache[typename] = {};
    }
    if (!cache[typename][name]) {
      cache[typename][name] = new T(name);
      cache[typename][name].registerPromise = cache[typename][name][
        'register'
      ]();
      cache[typename][name].registerPromise.catch((err) => {
        console.log(err);
      });
    }
    return cache[typename][name] as T;
  };
};
