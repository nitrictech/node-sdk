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
  DocumentGetRequest,
  DocumentGetResponse,
  Key,
  DocumentSetRequest,
  DocumentDeleteRequest,
} from '@nitric/api/proto/document/v1/document_pb';
import { DocumentServiceClient } from '@nitric/api/proto/document/v1/document_grpc_pb';
import { fromGrpcError, InvalidArgumentError } from '../../errors';
import { CollectionRef } from './collection-ref';
import { MAX_COLLECTION_DEPTH } from './constants';

export type DocumentStructure = Record<string, any>;

/**
 * Document Ref.
 *
 * Provides a Document Reference class.
 * Used to create references to collections.
 */
export class DocumentRef<T extends DocumentStructure> {
  private documentClient: DocumentServiceClient;
  public readonly parent: CollectionRef<T>;
  public readonly id: string;

  constructor(
    documentClient: DocumentServiceClient,
    parent: CollectionRef<T>,
    id: string
  ) {
    this.documentClient = documentClient;
    this.parent = parent;
    this.id = id;
  }

  /**
   * Return the collection document reference value.
   *
   * @returns the collection document reference value, or null if not found
   */
  public async get(): Promise<T> {
    const request = new DocumentGetRequest();
    request.setKey(this.toWire());

    return new Promise<T>((resolve, reject) => {
      this.documentClient.get(
        request,
        (error, response: DocumentGetResponse) => {
          if (error) {
            reject(fromGrpcError(error));
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
   *
   * @param value content the document content to store (required)
   */
  public async set(value: T): Promise<void> {
    const request = new DocumentSetRequest();
    request.setKey(this.toWire());
    request.setContent(Struct.fromJavaScript(value));

    return new Promise<void>((resolve, reject) => {
      this.documentClient.set(request, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Delete this document reference from the database if it exists.
   */
  public async delete(): Promise<void> {
    const request = new DocumentDeleteRequest();
    request.setKey(this.toWire());

    return new Promise<void>((resolve, reject) => {
      this.documentClient.delete(request, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }

  private toWire(): Key {
    const key = new Key();
    key.setCollection(this.parent['toWire']());
    key.setId(this.id);
    return key;
  }

  private depth(): number {
    const parent = this.parent.parent;

    if (parent) {
      return parent.depth() + 1;
    }

    return 0;
  }

  /**
   * Gets a Collection instance that refers to the collection at the specified path.
   *
   * @param name The name of the collection (required)
   * @returns The Collection instance
   */
  public collection<T extends DocumentStructure>(
    name: string
  ): CollectionRef<T> {
    if (this.depth() >= MAX_COLLECTION_DEPTH) {
      throw new Error(
        `Maximum collection depth ${MAX_COLLECTION_DEPTH} exceeded`
      );
    }

    return new CollectionRef<T>(this.documentClient, name, this);
  }
}
