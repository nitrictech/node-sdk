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
  DocumentServiceClient,
  Collection,
  Key,
} from '../../interfaces/document';
import { Query } from './query';
import { DocumentRef } from './document-ref';

/**
 * CollectionRef
 *
 * Provides a Document API CollectionRef class.
 */
export class CollectionRef<T extends { [key: string]: any }> {
  private documentClient: DocumentServiceClient;
  private _collection: Collection;

  constructor(
    documentClient: DocumentServiceClient,
    name: string,
    parentKey?: Key
  ) {
    this.documentClient = documentClient;

    const collection = new Collection();
    collection.setName(name);

    if (parentKey) {
      collection.setParent(parentKey);
    }

    this._collection = collection;
  }

  /**
   * Return a reference to a document in the collection.
   * @param documentId id the document unique id (required)
   * @returns new collection document reference
   */
  public doc(documentId: string) {
    return new DocumentRef<T>(
      this.documentClient,
      this._collection,
      documentId
    );
  }

  /**
   * Create a new collection query object
   * @returns a new collection query object
   */
  public query() {
    return new Query<T>(this.documentClient, this._collection);
  }
}
