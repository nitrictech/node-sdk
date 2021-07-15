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
  DocumentServiceClient,
  Collection,
} from '../../interfaces/document';
import { WhereQueryOperator, WhereValueExpression } from '../../types';
import type { Map as ProtobufMap } from 'google-protobuf';

type PagingToken = Map<string, string>;

interface ReadableStream<T> extends NodeJS.ReadableStream {
  on(event: string | symbol, listener: (...args: T[]) => void): this;
}

/**
 * Documents
 *
 * Provides a Document API client.
 * Used to create references to collections.
 */
export class Query<T extends { [key: string]: any }> {
  private documentClient: DocumentServiceClient;
  private _collection: Collection;
  private expressions: Expression[];
  private pagingToken: PagingToken | ProtobufMap<string, string>;
  private fetchLimit: number;

  constructor(documentClient: DocumentServiceClient, collection: Collection) {
    this.documentClient = documentClient;
    this._collection = collection;

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
   * @param pagingToken
   * @returns the Query operation
   */
  public pagingFrom(pagingToken: PagingToken): Query<T> {
    this.pagingToken = pagingToken;
    return this;
  }

  /**
   * Set the query fetch limit.
   *
   * @param limit
   * @returns the Query operation
   */
  public limit(limit: number): Query<T> {
    if (typeof limit !== 'number' || limit < 0) {
      throw Error('limit must be a positive integer or 0 for unlimited.');
    }

    this.fetchLimit = limit;
    return this;
  }

  public async fetch() {
    const request = new DocumentQueryRequest();

    request.setCollection(this._collection);
    request.setLimit(this.fetchLimit);

    if (this.expressions.length) {
      request.setExpressionsList(this.expressions);
    }

    if (this.pagingToken != null) {
      if (!(this.pagingToken instanceof Map)) {
        throw Error('Invalid paging token provided!');
      }

      const map = request.getPagingTokenMap();
      this.pagingToken.forEach((value, key) => {
        map.set(key, value);
      });
    }

    return new Promise<T[]>((resolve, reject) => {
      this.documentClient.query(
        request,
        (error, response: DocumentQueryResponse) => {
          if (error) {
            reject(error);
          } else {
            this.pagingToken = response.getPagingTokenMap();

            // clear paging token map
            request.clearPagingTokenMap();

            const documents = response
              .getDocumentsList()
              .map((doc) => doc.getContent().toJavaScript() as T);

            resolve(documents);
          }
        }
      );
    });
  }

  protected getStreamRequest() {
    const request = new DocumentQueryStreamRequest();

    request.setCollection(this._collection);
    request.setLimit(this.fetchLimit);
    request.setExpressionsList(this.expressions);

    return request;
  }

  /**
   * Queries the collection and returns a readable stream.
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
  public stream(): ReadableStream<T> {
    const responseStream = this.documentClient.queryStream(
      this.getStreamRequest()
    );

    const transform = new Transform({
      objectMode: true,
      transform(result: DocumentQueryStreamResponse, encoding, callback) {
        callback(undefined, result.getDocument().getContent().toJavaScript());
      },
    });

    responseStream.on('error', (e) => transform.destroy(e));
    responseStream.pipe(transform);

    return transform;
  }
}
