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
  KvStoreDeleteKeyRequest,
  KvStoreGetValueRequest,
  KvStoreGetValueResponse,
  KvStoreScanKeysRequest,
  KvStoreScanKeysResponse,
  KvStoreSetValueRequest,
  Store,
  ValueRef,
} from '@nitric/proto/kvstore/v1/kvstore_pb';
import { KvStoreClient } from '@nitric/proto/kvstore/v1/kvstore_grpc_pb';
import { fromGrpcError } from '../../errors';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import { Readable, Transform } from 'stream';
import { ServiceError } from '@grpc/grpc-js';

export type ValueStructure = Record<string, any>;

/**
 * StoreRef
 *
 * Provides a KeyValue API StoreRef class.
 */
export class StoreRef<T extends ValueStructure> {
  private kvClient: KvStoreClient;
  public readonly name: string;

  constructor(kvClient: KvStoreClient, name: string) {
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
    const request = new KvStoreGetValueRequest();
    const ref = new ValueRef();
    ref.setStore(this.name);
    ref.setKey(key);
    request.setRef(ref);

    return new Promise<T>((resolve, reject) => {
      this.kvClient.getValue(request, (error, response: KvStoreGetValueResponse) => {
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
    const request = new KvStoreSetValueRequest();
    const ref = new ValueRef();
    ref.setStore(this.name);
    ref.setKey(key);
    request.setRef(ref);
    const content = Struct.fromJavaScript(value);
    request.setContent(content);

    return new Promise<void>((resolve, reject) => {
      this.kvClient.setValue(request, (error) => {
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
    const request = new KvStoreDeleteKeyRequest();
    const ref = new ValueRef();
    ref.setStore(this.name);
    ref.setKey(key);
    request.setRef(ref);

    return new Promise<void>((resolve, reject) => {
      this.kvClient.deleteKey(request, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }


  /**
   * Return an async iterable of keys in the store
   * 
   * @param prefix The prefix to filter keys by, if not provided all keys will be returned
   * @returns an async iterable of keys
   */
  public keys(prefix: string = ""): AsyncIterable<string> {
    const store = new Store();
    store.setName(this.name);
    const request = new KvStoreScanKeysRequest();
    request.setStore(store);
    request.setPrefix(prefix);

    const respStream = this.kvClient.scanKeys(request);
    
    const transform = new Transform({
      objectMode: true,
      transform(result: KvStoreScanKeysResponse, encoding, callback) {
        callback(null, result.getKey());
      },
    });

    respStream.on('error', (e) => {
      transform.destroy(fromGrpcError(e as ServiceError));
    });
    respStream.pipe(transform);

    const iterator = transform[Symbol.asyncIterator]();
    return {
      [Symbol.asyncIterator]() {
        return iterator;
      },
    } as any;
  }
}
