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
import { SERVICE_BIND } from '../../../constants';
import { KeyValueClient } from '@nitric/proto/keyvalue/v1/keyvalue_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import { StoreRef, ValueStructure } from './store';

/**
 * KeyValue
 *
 * Provides a KeyValue API client.
 * Used to create references to key/value stores.
 */
export class KeyValue {
  private kvClient: KeyValueClient;

  constructor() {
    this.kvClient = new KeyValueClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Gets a store instance that refers to the store at the specified path.
   *
   * @param name The name of the store (required)
   * @returns The Store instance
   */
  public store<T extends ValueStructure>(name: string): StoreRef<T> {
    return new StoreRef<T>(this.kvClient, name);
  }
}

// KeyValue client singleton
let KEY_VALUE = undefined;

export const keyvalue = (): KeyValue => {
  if (!KEY_VALUE) {
    KEY_VALUE = new KeyValue();
  }

  return KEY_VALUE;
};
