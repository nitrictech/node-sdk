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
import { DocumentsClient as GrpcKeyDocumentsClient } from '@nitric/proto/documents/v1/documents_grpc_pb';
import {
  DocumentGetResponse,
  Document,
} from '@nitric/proto/documents/v1/documents_pb';
import { InvalidArgumentError, UnimplementedError } from '../../errors';
import { Documents, documents } from './documents';
import { status } from '@grpc/grpc-js';

describe('Document Ref Tests', () => {
  describe('Given DocumentServiceClient.Get throws an error', () => {
    const MOCK_ERROR = {
      code: status.UNIMPLEMENTED,
      message: 'test message',
    };
    let documentsClient: Documents;
    let getMock;

    beforeAll(() => {
      getMock = jest
        .spyOn(GrpcKeyDocumentsClient.prototype, 'get')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
      documentsClient = documents();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then DocumentRef.Get should reject', async () => {
      const doc = documentsClient.collection('test').doc('id');
      await expect(doc.get()).rejects.toBeInstanceOf(UnimplementedError);
    });

    test('The Grpc client for DocumentServiceClient.Put should have been called exactly once', () => {
      expect(getMock).toBeCalledTimes(1);
    });
  });

  describe('Given DocumentServiceClient.Get succeeds', () => {
    describe('And a id is provided', () => {
      let getMock;

      beforeAll(() => {
        getMock = jest
          .spyOn(GrpcKeyDocumentsClient.prototype, 'get')
          .mockImplementation((request, callback: any) => {
            const response = new DocumentGetResponse();
            const mockDocument = new Document();
            mockDocument.setContent(
              Struct.fromJavaScript({
                id: 'test',
              })
            );
            response.setDocument(mockDocument);
            callback(null, response);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      test('Then DocumentServiceClient.Get should resolve with the provided id', async () => {
        const doc = documents().collection('test').doc('id');

        await expect(doc.get()).resolves.toStrictEqual({
          id: 'test',
        });
      });

      test('The Grpc client for DocumentServiceClient.Get should have been called exactly once', () => {
        expect(getMock).toBeCalledTimes(1);
      });
    });
  });

  describe('Given DocumentServiceClient.Set throws an error', () => {
    const MOCK_ERROR = {
      code: status.UNIMPLEMENTED,
      message: 'test message',
    };
    let documentsClient: Documents;
    let setMock;

    beforeAll(() => {
      setMock = jest
        .spyOn(GrpcKeyDocumentsClient.prototype, 'set')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
      documentsClient = documents();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then DocumentRef.Get should reject', async () => {
      const doc = documentsClient.collection('test').doc('id');
      await expect(
        doc.set({
          name: 'test',
        })
      ).rejects.toBeInstanceOf(UnimplementedError);
    });

    test('The Grpc client for DocumentServiceClient.Get should have been called exactly once', () => {
      expect(setMock).toBeCalledTimes(1);
    });
  });

  describe('Given DocumentServiceClient.Delete throws an error', () => {
    const MOCK_ERROR = {
      code: status.UNIMPLEMENTED,
      message: 'test message',
    };
    let documentsClient: Documents;
    let deleteMock;

    beforeAll(() => {
      deleteMock = jest
        .spyOn(GrpcKeyDocumentsClient.prototype, 'delete')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
      documentsClient = documents();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then DocumentRef.Delete should reject', async () => {
      const doc = documentsClient.collection('test').doc('id');
      await expect(doc.delete()).rejects.toBeInstanceOf(UnimplementedError);
    });

    test('The Grpc client for DocumentServiceClient.Delete should have been called exactly once', () => {
      expect(deleteMock).toBeCalledTimes(1);
    });
  });

  describe('Given Collection Depth Limit is exceeded', () => {
    test('Then DocumentRef.Collection should throw correct error', () => {
      const docRoot = documents().collection('test').doc('id');
      const nestedCollection = docRoot.collection('nested').doc('id');

      const testNestedAgain = () => nestedCollection.collection('nested-again');

      expect(testNestedAgain).toThrow(
        new Error('Maximum collection depth 1 exceeded')
      );
    });
  });
});
