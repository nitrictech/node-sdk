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
import { PassThrough } from 'stream';
import { DocumentsClient as GrpcKeyDocumentsClient } from '@nitric/proto/documents/v1/documents_grpc_pb';
import {
  DocumentQueryResponse,
  DocumentQueryStreamResponse,
  Document,
  ExpressionValue,
  Collection,
  Key,
} from '@nitric/proto/documents/v1/documents_pb';
import { documents, Documents } from './documents';
import { DocumentSnapshot } from './document-snapshot';
import { InvalidArgumentError, UnimplementedError } from '../../errors';
import { DocumentRef } from './document-ref';

describe('Query Tests', () => {
  describe('Adding a where clause to a query', () => {
    const query = documents().collection('test').query();

    test('Should return a reference to the original query', () => {
      const w = query.where('test', '>=', 3);
      expect(w).toStrictEqual(query);
    });

    test('Should append the expression to expressions array', () => {
      expect(query['expressions']).toHaveLength(1);
      const exp = query['expressions'][0];
      expect(exp.getOperand()).toStrictEqual('test');
      expect(exp.getOperator()).toStrictEqual('>=');
      const testIntValue = new ExpressionValue();
      testIntValue.setIntValue(3);
      expect(exp.getValue()).toStrictEqual(testIntValue);
    });

    test('Should append double value to expression correctly', () => {
      query.where('test', '>=', 3.32);
      expect(query['expressions']).toHaveLength(2);
      const exp = query['expressions'][1];
      const testDoubleValue = new ExpressionValue();
      testDoubleValue.setDoubleValue(3.32);
      expect(exp.getValue()).toStrictEqual(testDoubleValue);
    });

    test('Should append boolean value to expression correctly', () => {
      query.where('test', '==', true);
      expect(query['expressions']).toHaveLength(3);
      const exp = query['expressions'][2];
      const testBoolValue = new ExpressionValue();
      testBoolValue.setBoolValue(true);
      expect(exp.getValue()).toStrictEqual(testBoolValue);
    });

    test('Should append string value to expression correctly', () => {
      query.where('test', '==', 'sydney');
      expect(query['expressions']).toHaveLength(4);
      const exp = query['expressions'][3];
      const testStrValue = new ExpressionValue();
      testStrValue.setStringValue('sydney');
      expect(exp.getValue()).toStrictEqual(testStrValue);
    });
  });

  describe('Adding a limit clause to a query', () => {
    const query = documents().collection('test').query();

    test('Should return a reference to the original query', () => {
      const w = query.limit(5);
      expect(w).toStrictEqual(query);
    });

    test('Should set the query limit', () => {
      expect(query['fetchLimit']).toStrictEqual(5);
    });
  });

  describe('Adding a paging token', () => {
    const query = documents().collection('test').query();

    const p = query.pagingFrom(new Map([['test', 'test']]));

    test('Should return a reference to the original query', () => {
      expect(p).toStrictEqual(query);
    });

    test('Should set the paging token', () => {
      expect(query['pagingToken']).toStrictEqual(new Map([['test', 'test']]));
    });
  });

  describe('Given DocumentServiceClient.Query throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let documentsClient: Documents;
    let queryMock;

    beforeAll(() => {
      queryMock = jest
        .spyOn(GrpcKeyDocumentsClient.prototype, 'query')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
      documentsClient = documents();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then DocumentRef.Query should reject', async () => {
      const query = documentsClient.collection('test').query();
      await expect(query.fetch()).rejects.toEqual(
        new UnimplementedError('UNIMPLEMENTED')
      );
    });

    test('The Grpc client for DocumentServiceClient.Query should have been called exactly once', () => {
      expect(queryMock).toBeCalledTimes(1);
    });
  });

  describe('Given DocumentServiceClient.Query succeeds', () => {
    let queryMock;
    let mockKey;

    beforeAll(() => {
      queryMock = jest
        .spyOn(GrpcKeyDocumentsClient.prototype, 'query')
        .mockImplementation((request, callback: any) => {
          const response = new DocumentQueryResponse();
          const mockDocument = new Document();
          mockDocument.setContent(
            Struct.fromJavaScript({
              id: 'test',
            })
          );
          const map = response.getPagingTokenMap();
          map.set('test-key', 'test-value');

          const collection = new Collection();
          collection.setName('test');

          mockKey = new Key();
          mockKey.setCollection(collection);
          mockKey.setId('test');

          mockDocument.setKey(mockKey);
          response.setDocumentsList([mockDocument]);
          callback(null, response);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then DocumentServiceClient.Query should resolve with the correct documents', async () => {
      const docClient = documents();
      const testCollection = docClient.collection('test');
      const q = testCollection.query();

      const results = await q.fetch();

      expect(results.documents).toStrictEqual([
        new DocumentSnapshot(testCollection.doc('test'), {
          id: 'test',
        }),
      ]);

      expect(results.pagingToken).toStrictEqual(
        new Map([['test-key', 'test-value']])
      );
    });

    test('The Grpc client for DocumentServiceClient.Query should have been called exactly once', () => {
      expect(queryMock).toBeCalledTimes(1);
    });

    test('Providing an invalid paging token should throw error', async () => {
      const q = documents().collection('test').query();

      q.pagingFrom('test' as any);

      await expect(q.fetch()).rejects.toEqual(
        new Error('Invalid paging token provided!')
      );
    });
  });

  describe('Given DocumentServiceClient.QueryStream throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let documentsClient: Documents;
    const mockStream = new PassThrough();
    let queryStreamMock;

    beforeAll(() => {
      queryStreamMock = jest
        .spyOn(GrpcKeyDocumentsClient.prototype, 'queryStream')
        .mockReturnValueOnce(mockStream as any);
      documentsClient = documents();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then DocumentRef.QueryStream should reject', async () => {
      const query = documentsClient.collection('test').query();

      const stream = query.stream();

      mockStream.emit('error', MOCK_ERROR);

      const test = new Promise((res) => {
        stream.on('error', (e) => {
          res(e);
        });
      });

      await expect(test).resolves.toEqual(
        new UnimplementedError('UNIMPLEMENTED')
      );
    });

    test('The Grpc client for DocumentServiceClient.QueryStream should have been called exactly once', () => {
      expect(queryStreamMock).toBeCalledTimes(1);
    });
  });

  describe('Given DocumentServiceClient.QueryStream succeeds', () => {
    let documentsClient: Documents;
    const mockStream = new PassThrough();
    let queryStreamMock;
    let mockKey;

    beforeAll(() => {
      queryStreamMock = jest
        .spyOn(GrpcKeyDocumentsClient.prototype, 'queryStream')
        .mockReturnValueOnce(mockStream as any);
      documentsClient = documents();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then DocumentRef.QueryStream should return correct response and support readable asyncIterator', async () => {
      const chunks = [];
      const col = documentsClient.collection('test');
      const query = col.query();

      const stream = query.stream();

      const response = new DocumentQueryStreamResponse();
      const doc = new Document();
      doc.setContent(
        Struct.fromJavaScript({
          id: 'test',
        })
      );

      mockKey = new Key();

      mockKey.setCollection(col['_collection']);

      doc.setKey(mockKey);

      response.setDocument(doc);

      mockStream.emit('data', response);

      mockStream.end();

      for await (const chunk of stream) {
        chunks.push(chunk);
      }

      expect(chunks[0] instanceof DocumentSnapshot).toBe(true);

      const snapShot = chunks[0] as DocumentSnapshot<any>;

      expect(snapShot.content).toStrictEqual({
        id: 'test',
      });
    });

    test('The Grpc client for DocumentServiceClient.QueryStream should have been called exactly once', () => {
      expect(queryStreamMock).toBeCalledTimes(1);
    });
  });
});
