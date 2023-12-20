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
import { Collection } from '@nitric/proto/documents/v1/documents_pb';
import { DocumentsClient } from '@nitric/proto/documents/v1/documents_grpc_pb';
import { Query } from './query';
import { DocumentRef, DocumentStructure } from './document-ref';
import { CollectionGroupRef } from './collection-group-ref';

/**
 * CollectionRef
 *
 * Provides a Document API CollectionRef class.
 */
export class CollectionRef<T extends DocumentStructure> {
  private documentClient: DocumentsClient;
  public readonly name: string;
  public readonly parent?: DocumentRef<any>;

  constructor(
    documentClient: DocumentsClient,
    name: string,
    parent?: DocumentRef<any>
  ) {
    this.documentClient = documentClient;
    this.name = name;
    this.parent = parent;
  }

  /**
   * Return a reference to a sub-collection within the documents of this collection.
   *
   * Useful when querying sub-collection documents across all/many parent documents. E.g. Querying landmarks from multiple cities.
   *
   * @param name the name of the collection
   * @returns a reference to all sub-collections matching the name provided.
   */
  public collection(name: string): CollectionGroupRef<T> {
    return CollectionGroupRef.fromCollectionRef(
      this,
      this.documentClient
    ).collection(name);
  }

  /**
   * Return a reference to a document in the collection.
   *
   * @param id the unique id of the document
   * @returns new collection document reference
   */
  public doc(id: string): DocumentRef<T> {
    return new DocumentRef<T>(this.documentClient, this, id);
  }

  /**
   * Create a new collection query object.
   *
   * @returns a new collection query object.
   */
  public query(): Query<T> {
    return new Query<T>(this.documentClient, this);
  }

  private toWire(): Collection {
    const col = new Collection();

    col.setName(this.name);

    if (this.parent) {
      col.setParent(this.parent['toWire']());
    }

    return col;
  }
}
