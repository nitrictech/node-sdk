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

    test('Then StorageClient.write should resolve with success status', () => {
      const client = new StorageClient();
      expect(
        client.write('test_bucket', 'test/item', new Uint8Array())
      ).resolves.toBe(true);
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
});
