// Copyright 2021, Nitric Pty Ltd.
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
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import { kv } from '../../interfaces';
import { KeyValueClient } from './kv';

const { KeyValueClient: GrpcKeyValueClient, KeyValueGetResponse } = kv;

describe('KeyValue Client Tests', () => {
  describe('Given nitric.api.kv.KeyValueClient.Put throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let putMock;

    beforeAll(() => {
      putMock = jest
        .spyOn(GrpcKeyValueClient.prototype, 'put')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then KeyValueClient.put should reject', () => {
      const client = new KeyValueClient<any>('test');
      expect(client.put('test', { test: 'test' })).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for KeyValueClient.Put should have been called exactly once', () => {
      expect(putMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.kv.KeyValueClient.Put succeeds', () => {
    let putMock;
    beforeAll(() => {
      putMock = jest
        .spyOn(GrpcKeyValueClient.prototype, 'put')
        .mockImplementation((request, callback: any) => {
          callback(null, new Empty());

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then KeyValueClient.put should resolve with void', () => {
      const client = new KeyValueClient<any>('test');
      expect(client.put('test', { test: 'test' })).resolves.toBeUndefined();
    });

    test('The Grpc client for KeyValueClient.put should have been called exactly once', () => {
      expect(putMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.kv.KeyValueClient.KeyValueClient.Get throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let getMock;

    beforeAll(() => {
      getMock = jest
        .spyOn(GrpcKeyValueClient.prototype, 'get')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then KeyValueClient.put should reject', () => {
      const client = new KeyValueClient<any>('test');
      expect(client.get('test')).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for KeyValueClient.put should have been called exactly once', () => {
      expect(getMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.kv.KeyValueClient.Get succeeds', () => {
    const MOCK_DOCUMENT = {
      test: 'testing',
    };
    const MOCK_DOCUMENT_REPLY = new KeyValueGetResponse();
    MOCK_DOCUMENT_REPLY.setValue(Struct.fromJavaScript(MOCK_DOCUMENT));
    let getMock;
    beforeAll(() => {
      getMock = jest
        .spyOn(GrpcKeyValueClient.prototype, 'get')
        .mockImplementation((request, callback: any) => {
          callback(null, MOCK_DOCUMENT_REPLY);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then KeyValueClient.Get should resolve with the requested document', () => {
      const client = new KeyValueClient<any>('test');
      expect(client.get('test')).resolves.toEqual(MOCK_DOCUMENT);
    });

    test('The Grpc client for KeyValueClient.Get should have been called exactly once', () => {
      expect(getMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.kv.KeyValueClient.Delete throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let deleteMock;

    beforeAll(() => {
      deleteMock = jest
        .spyOn(GrpcKeyValueClient.prototype, 'delete')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then KeyValueClient.delete should reject', () => {
      const client = new KeyValueClient<any>('test');
      expect(client.delete('test')).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for Documents.delete should have been called exactly once', () => {
      expect(deleteMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.kv.KeyValueClient.Delete succeeds', () => {
    let deleteMock;
    beforeAll(() => {
      deleteMock = jest
        .spyOn(GrpcKeyValueClient.prototype, 'delete')
        .mockImplementation((request, callback: any) => {
          callback(null, new Empty());

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then KeyValueClient.get should resolve with the requested document', () => {
      const client = new KeyValueClient<any>('test');
      expect(client.delete('test')).resolves.toBeUndefined();
    });

    test('The Grpc client for KeyValueClient.get should have been called exactly once', () => {
      expect(deleteMock).toBeCalledTimes(1);
    });
  });
});
