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
import { DocumentServiceClient } from '@nitric/api/proto/document/v1/document_grpc_pb';
import { InvalidArgumentError } from '../../errors';
import { CollectionRef } from './collection-ref';
import { MAX_COLLECTION_DEPTH } from './constants';
import { DocumentRef, DocumentStructure } from './document-ref';
import { Query } from './query';

const NIL_DOC_ID = '';

/**
 * CollectionGroupRef
 *
 * Provides a Document API CollectionGroupRef class.
 */
export class CollectionGroupRef<T extends DocumentStructure> {
  private documentClient: DocumentServiceClient;
  public readonly parent: CollectionGroupRef<any>;
  public readonly name: string;

  constructor(
    documentClient: DocumentServiceClient,
    name: string,
    parent?: CollectionGroupRef<any>
  ) {
    this.documentClient = documentClient;
    this.name = name;
    this.parent = parent;
  }

  /**
   * Create a CollectionGroupRef referencing a sub-collection of this collection.
   *
   * @param name of the sub-collection
   * @returns a reference to the sub-collection
   */
  public collection<T extends DocumentStructure>(
    name: string
  ): CollectionGroupRef<T> {
    if (this.depth() >= MAX_COLLECTION_DEPTH) {
      throw new InvalidArgumentError(
        `Maximum collection depth ${MAX_COLLECTION_DEPTH} exceeded`
      );
    }
    return new CollectionGroupRef(this.documentClient, name, this);
  }

  /**
   * Create a new collection query object.
   *
   * @returns a new collection query object
   */
  public query(): Query<T> {
    return new Query<T>(this.documentClient, this.toCollectionRef());
  }

  private depth(): number {
    if (this.parent) {
      return this.parent.depth() + 1;
    }

    return 0;
  }

  private toCollectionRef(): CollectionRef<T> {
    if (this.parent) {
      return new CollectionRef(
        this.documentClient,
        this.name,
        new DocumentRef(
          this.documentClient,
          this.parent.toCollectionRef(),
          NIL_DOC_ID
        )
      );
    }

    return new CollectionRef(this.documentClient, this.name);
  }

  /**
   * Creates a collection group reference from a collection reference.
   *
   * @internal
   * @param ref a collection reference.
   * @param dc a document service client.
   * @returns a collection group reference.
   */
  public static fromCollectionRef(
    ref: CollectionRef<any>,
    dc: DocumentServiceClient
  ): CollectionGroupRef<any> {
    if (ref.parent) {
      return new CollectionGroupRef(
        dc,
        ref.name,
        CollectionGroupRef.fromCollectionRef(ref.parent.parent, dc)
      );
    }

    return new CollectionGroupRef(dc, ref.name);
  }
}
