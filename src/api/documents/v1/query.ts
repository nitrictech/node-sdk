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
import { Transform } from 'stream';
import {
  Expression,
  ExpressionValue,
  DocumentQueryRequest,
  DocumentQueryResponse,
  DocumentQueryStreamRequest,
  DocumentQueryStreamResponse,
} from '@nitric/proto/documents/v1/documents_pb';
import { DocumentsClient } from '@nitric/proto/documents/v1/documents_grpc_pb';
import { WhereQueryOperator, WhereValueExpression } from '../../../types';
import type { Map as ProtobufMap } from 'google-protobuf';
import { DocumentRef, DocumentStructure } from './document-ref';
import { CollectionRef } from './collection-ref';
import { DocumentSnapshot } from './document-snapshot';
import { ServiceError } from '@grpc/grpc-js';

type PagingToken = Map<string, string>;

interface ReadableStream<T> extends NodeJS.ReadableStream {
  on(event: string | symbol, listener: (...args: T[]) => void): this;
}

export interface FetchResponse<T> {
  documents: DocumentSnapshot<T>[];
  pagingToken: Map<string, string>;
}

/**
 * Convenience method to convert ProtobufMap objects to standard JavaScript Maps.
 *
 * @param protoMap map to convert
 * @returns the map
 */
function protoMapToMap(
  protoMap: ProtobufMap<string, string>
): Map<string, string> {
  const jsMap = new Map<string, string>();
  protoMap.forEach((value, key) => {
    jsMap.set(key, value);
  });
  return jsMap;
}

/**
 * Documents
 *
 * Provides a Document API client.
 * Used to create references to collections.
 */
export class Query<T extends DocumentStructure> {
  private documentClient: DocumentsClient;
  public readonly collection: CollectionRef<T>;
  private expressions: Expression[];
  private pagingToken: PagingToken | ProtobufMap<string, string>;
  private fetchLimit: number;

  constructor(documentClient: DocumentsClient, collection: CollectionRef<T>) {
    this.documentClient = documentClient;
    this.collection = collection;

    this.expressions = [];
  }

  /**
   * Add a where expression to the query.
   *
   * @param field operand the left hand side expression operand
   * @param operator the query expression operator
   * @param value right hand side operand
   * @returns the Query operation
   */
  public where(
    field: string,
    operator: WhereQueryOperator,
    value: WhereValueExpression
  ): Query<T> {
    const expression = new Expression();
    const expressionValue = new ExpressionValue();

    expression.setOperand(field);
    expression.setOperator(operator);

    switch (typeof value) {
      case 'string':
        expressionValue.setStringValue(value);
        break;
      case 'number':
        if (Number.isInteger(value)) {
          expressionValue.setIntValue(value);
        } else {
          expressionValue.setDoubleValue(value);
        }
        break;
      case 'boolean':
        expressionValue.setBoolValue(value);
        break;
    }

    expression.setValue(expressionValue);
    this.expressions.push(expression);

    return this;
  }

  /**
   * Set the query paging continuation token.
   *
   * @param pagingToken used to determine where to continue paging from.
   * @returns the Query operation
   */
  public pagingFrom(pagingToken: PagingToken): Query<T> {
    this.pagingToken = pagingToken;
    return this;
  }

  /**
   * Set the query fetch limit.
   *
   * @param limit the maximum number for results to return.
   * @returns the Query operation
   */
  public limit(limit: number): Query<T> {
    if (typeof limit !== 'number' || limit < 0) {
      throw new Error('limit must be a positive integer or 0 for unlimited.');
    }

    this.fetchLimit = limit;
    return this;
  }

  public async fetch() {
    const request = new DocumentQueryRequest();

    request.setCollection(this.collection['toWire']());
    request.setLimit(this.fetchLimit);

    if (this.expressions.length) {
      request.setExpressionsList(this.expressions);
    }

    if (this.pagingToken != null) {
      if (!(this.pagingToken instanceof Map)) {
        throw new Error('Invalid paging token provided!');
      }

      const map = request.getPagingTokenMap();
      this.pagingToken.forEach((value, key) => {
        map.set(key, value);
      });
    }

    return new Promise<FetchResponse<T>>((resolve, reject) => {
      this.documentClient.query(
        request,
        (error, response: DocumentQueryResponse) => {
          if (error) {
            reject(error);
          } else {
            const pagingTokenMap = protoMapToMap(response.getPagingTokenMap());

            // clear paging token map
            request.clearPagingTokenMap();

            const documents = response
              .getDocumentsList()
              .map(
                (doc) =>
                  new DocumentSnapshot<T>(
                    new DocumentRef<T>(
                      this.documentClient,
                      this.collection,
                      doc.getKey().getId()
                    ),
                    doc.getContent().toJavaScript() as T
                  )
              );

            resolve({
              documents,
              pagingToken: pagingTokenMap.size > 0 ? pagingTokenMap : null,
            });
          }
        }
      );
    });
  }

  protected getStreamRequest() {
    const request = new DocumentQueryStreamRequest();

    request.setCollection(this.collection['toWire']());
    request.setLimit(this.fetchLimit);
    request.setExpressionsList(this.expressions);

    return request;
  }

  /**
   * Queries the collection and returns a readable stream.
   *
   * @returns all query results as a stream
   * @example
   * ```typescript
   * import { documents } from "@nitric/sdk";
   *
   * const docs = documents();
   *
   * async function getDocs() {
   *   const docs = [];
   *   const stream = docs
   *     .collection('customers')
   *     .query()
   *     .where('name', '==', 'david')
   *     .stream();
   *
   *   for await (const chunk of stream) {
   *     docs.push(chunk);
   *   }
   *
   *   return docs;
   * }
   * ```
   *
   */
  public stream(): ReadableStream<DocumentSnapshot<T>> {
    const responseStream = this.documentClient.queryStream(
      this.getStreamRequest()
    );

    const transform = new Transform({
      objectMode: true,
      transform: (result: DocumentQueryStreamResponse, encoding, callback) => {
        const doc = result.getDocument();

        callback(
          undefined,
          new DocumentSnapshot<T>(
            new DocumentRef<T>(
              this.documentClient,
              this.collection,
              doc.getKey().getId()
            ),
            doc.getContent().toJavaScript() as T
          )
        );
      },
    });

    responseStream.on('error', (e) => transform.destroy(e as ServiceError));
    responseStream.pipe(transform);

    return transform;
  }
}
