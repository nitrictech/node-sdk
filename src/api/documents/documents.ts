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
import { SERVICE_BIND } from '../../constants';
import { DocumentServiceClient } from '@nitric/api/proto/document/v1/document_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import { CollectionRef } from './collection-ref';

/**
 * Documents
 *
 * Provides a Document API client.
 * Used to create references to collections.
 */
export class Documents {
  private documentClient: DocumentServiceClient;

  constructor() {
    this.documentClient = new DocumentServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Gets a Collection instance that refers to the collection at the specified path.
   * @param name The name of the collection (required)
   * @returns The Collection instance
   */
  public collection<T extends { [key: string]: any }>(name: string) {
    return new CollectionRef<T>(this.documentClient, name);
  }
}

// Documents client singleton
let DOCUMENTS = undefined;

/**
 * Documents
 * @returns a Documents API client.
 * @example
 * ```typescript
 * import { documents } from "@nitric/sdk";
 *
 * async function setCustomer() {
 *  const collection = documents().collection('customers');
 *
 *  collection.doc('id').set({
 *    name: 'David',
 *  });
 * }
 * ```
 */
export const documents = (): Documents => {
  if (!DOCUMENTS) {
    DOCUMENTS = new Documents();
  }

  return DOCUMENTS;
};
