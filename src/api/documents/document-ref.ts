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
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import {
  DocumentServiceClient,
  DocumentGetRequest,
  DocumentGetResponse,
  Key,
  Collection as DocCollection,
  DocumentSetRequest,
  DocumentDeleteRequest,
} from '../../interfaces/document';
import { CollectionRef } from './collection-ref';
import { getKey } from './key';

/**
 * Document Ref
 *
 * Provides a Document Reference class.
 * Used to create references to collections.
 */
export class DocumentRef<T extends { [key: string]: any }> {
  private documentClient: DocumentServiceClient;
  private key: Key;

  constructor(
    documentClient: DocumentServiceClient,
    collection: DocCollection,
    documentId: string
  ) {
    this.documentClient = documentClient;
    this.key = getKey(collection, documentId);
  }

  /**
   * Return the collection document reference value.
   * @returns the collection document reference value, or null if not found
   */
  public async get() {
    const request = new DocumentGetRequest();
    request.setKey(this.key);

    return new Promise<T>((resolve, reject) => {
      this.documentClient.get(
        request,
        (error, response: DocumentGetResponse) => {
          if (error) {
            reject(error);
          } else if (response.hasDocument()) {
            const document = response.getDocument();
            const content = document.getContent().toJavaScript() as T;

            resolve(content);
          } else {
            resolve(null);
          }
        }
      );
    });
  }

  /**
   * Set the document content for this document reference in the database. If the
   * document does not exist an new item will be created, otherwise an
   * existing document will be update with the new value.
   * @param value content the document content to store (required)
   */
  public async set(value: Partial<T>) {
    const request = new DocumentSetRequest();
    request.setKey(this.key);
    request.setContent(Struct.fromJavaScript(value));

    return new Promise<void>((resolve, reject) => {
      this.documentClient.set(request, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Delete this document reference from the database if it exists.
   */
  public async delete() {
    const request = new DocumentDeleteRequest();
    request.setKey(this.key);

    return new Promise<void>((resolve, reject) => {
      this.documentClient.delete(request, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Gets a Collection instance that refers to the collection at the specified path.
   * @param name The name of the collection (required)
   * @returns The Collection instance
   */
  public collection<T extends { [key: string]: any }>(name: string) {
    return new CollectionRef<T>(this.documentClient, name, this.key);
  }
}
