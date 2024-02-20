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
  KeyValueDeleteRequest,
  KeyValueGetRequest,
  KeyValueGetResponse,
  KeyValueSetRequest,
  ValueRef,
} from '@nitric/proto/keyvalue/v1/keyvalue_pb';
import { KeyValueClient } from '@nitric/proto/keyvalue/v1/keyvalue_grpc_pb';
import { fromGrpcError } from '../../errors';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';

export type ValueStructure = Record<string, any>;

/**
 * StoreRef
 *
 * Provides a KeyValue API StoreRef class.
 */
export class StoreRef<T extends ValueStructure> {
  private kvClient: KeyValueClient;
  public readonly name: string;

  constructor(kvClient: KeyValueClient, name: string) {
    this.kvClient = kvClient;
    this.name = name;
  }

  /**
   * Return a value from the store
   *
   * @param key The key of the value to retrieve
   *
   * @returns the value or null if not found
   */
  public async get(key: string): Promise<T> {
    const request = new KeyValueGetRequest();
    const ref = new ValueRef();
    ref.setStore(this.name);
    ref.setKey(key);
    request.setRef(ref);

    return new Promise<T>((resolve, reject) => {
      this.kvClient.get(request, (error, response: KeyValueGetResponse) => {
        if (error) {
          reject(fromGrpcError(error));
        } else if (response.hasValue()) {
          const value = response.getValue();
          const content = value.getContent().toJavaScript() as T;

          resolve(content);
        } else {
          resolve(null);
        }
      });
    });
  }

  /**
   * Set a value in the store
   *
   * @param key The key to store the value against
   * @param value The value to store
   *
   * @returns void
   */
  public async set(key: string, value: T): Promise<void> {
    const request = new KeyValueSetRequest();
    const ref = new ValueRef();
    ref.setStore(this.name);
    ref.setKey(key);
    request.setRef(ref);
    const content = Struct.fromJavaScript(value);
    request.setContent(content);

    return new Promise<void>((resolve, reject) => {
      this.kvClient.set(request, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Delete a value from the store
   *
   * @param key The key of the key/value pair to delete
   *
   * @returns void
   */
  public async delete(key: string): Promise<void> {
    const request = new KeyValueDeleteRequest();
    const ref = new ValueRef();
    ref.setStore(this.name);
    ref.setKey(key);
    request.setRef(ref);

    return new Promise<void>((resolve, reject) => {
      this.kvClient.delete(request, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }
}
