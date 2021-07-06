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
import { StorageClient } from './storage';
import { storage } from '../../interfaces';

const { StorageClient: GrpcStorageClient } = storage;

describe('Storage Client Tests', () => {
  describe('Given nitric.api.storage.StorageClient.Write throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let writeMock;

    beforeAll(() => {
      writeMock = jest
        .spyOn(GrpcStorageClient.prototype, 'write')
        .mockImplementation((_, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.write should reject', () => {
      const client = new StorageClient();
      expect(
        client.write('test_bucket', 'test/item', new Uint8Array())
      ).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for Storage.write should have been called exactly once', () => {
      expect(writeMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.Write succeeds', () => {
    let writeMock;
    const MOCK_REPLY = new storage.StorageWriteResponse();

    beforeAll(() => {
      writeMock = jest
        .spyOn(GrpcStorageClient.prototype, 'write')
        .mockImplementation((_, callback: any) => {
          callback(null, MOCK_REPLY);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.write should resolve with success status', async () => {
      const client = new StorageClient();
      await expect(
        client.write('test_bucket', 'test/item', new Uint8Array())
      ).resolves.toBe(undefined);
    });

    test('The Grpc client for Storage.write should have been called exactly once', () => {
      expect(writeMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.Read throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let readMock;

    beforeAll(() => {
      readMock = jest
        .spyOn(GrpcStorageClient.prototype, 'read')
        .mockImplementation((_, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.read should reject', () => {
      const client = new StorageClient();
      expect(client.read('test_bucket', 'test/item')).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for Storage.read should have been called exactly once', () => {
      expect(readMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.Read succeeds', () => {
    const MOCK_BYTES = new Uint8Array();
    const MOCK_REPLY = new storage.StorageReadResponse();
    MOCK_REPLY.setBody(MOCK_BYTES);

    let readMock;

    beforeAll(() => {
      readMock = jest
        .spyOn(GrpcStorageClient.prototype, 'read')
        .mockImplementation((_, callback: any) => {
          callback(null, MOCK_REPLY);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.read should return the bytes of the retrieved item', () => {
      const client = new StorageClient();
      expect(client.read('test_bucket', 'test/item')).resolves.toBe(MOCK_BYTES);
    });

    test('The Grpc client for Storage.read should have been called exactly once', () => {
      expect(readMock).toBeCalledTimes(1);
    });
  });
  describe('Given nitric.api.storage.StorageClient.Delete throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let deleteMock;

    beforeAll(() => {
      deleteMock = jest
        .spyOn(GrpcStorageClient.prototype, 'delete')
        .mockImplementation((_, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.delete should reject', () => {
      const client = new StorageClient();
      expect(client.delete('test_bucket', 'test/item')).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for Storage.delete should have been called exactly once', () => {
      expect(deleteMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.Delete succeeds', () => {
    const MOCK_BYTES = new Uint8Array();
    const MOCK_REPLY = new storage.StorageReadResponse();
    MOCK_REPLY.setBody(MOCK_BYTES);

    let deleteMock;

    beforeAll(() => {
      deleteMock = jest
        .spyOn(GrpcStorageClient.prototype, 'delete')
        .mockImplementation((_, callback: any) => {
          callback(null, MOCK_REPLY);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.delete should delete the bytes from the bucket', () => {
      const client = new StorageClient();
      client.write('test_bucket', 'test/item', MOCK_BYTES);
      expect(client.delete('test_bucket', 'test/item')).resolves;
    });

    test('The Grpc client for Storage.read should have been called exactly once', () => {
      expect(deleteMock).toBeCalledTimes(1);
    });
  });
});