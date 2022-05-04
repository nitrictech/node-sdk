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
import { FileMode, Storage } from './storage';
import { StorageServiceClient as GrpcStorageClient } from '@nitric/api/proto/storage/v1/storage_grpc_pb';
import { StorageWriteResponse, StorageReadResponse, StorageDeleteResponse, StoragePreSignUrlResponse, StoragePreSignUrlRequest, StorageListFilesResponse, File } from '@nitric/api/proto/storage/v1/storage_pb';
import { UnimplementedError } from '../../errors';

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

    test('Then StorageClient.write should reject', async () => {
      const storage = new Storage();
      await expect(
        storage.bucket('test_bucket').file('test/item').write(new Uint8Array())
      ).rejects.toEqual(new UnimplementedError("UNIMPLEMENTED"));
    });

    test('The Grpc client for Storage.write should have been called exactly once', () => {
      expect(writeMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.Write succeeds', () => {
    let writeMock;
    const MOCK_REPLY = new StorageWriteResponse();

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
      const storage = new Storage();
      await expect(
        storage.bucket('test_bucket').file('test/item').write(new Uint8Array())
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

    test('Then StorageClient.read should reject', async () => {
      const storage = new Storage();
      await expect(
        storage.bucket('test_bucket').file('test/item').read()
      ).rejects.toEqual(new UnimplementedError("UNIMPLEMENTED"));
    });

    test('The Grpc client for Storage.read should have been called exactly once', () => {
      expect(readMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.Read succeeds', () => {
    const MOCK_BYTES = new Uint8Array();
    const MOCK_REPLY = new StorageReadResponse();
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

    test('Then StorageClient.read should return the bytes of the retrieved item', async () => {
      const storage = new Storage();
      await expect(
        storage.bucket('test_bucket').file('test/item').read()
      ).resolves.toBe(MOCK_BYTES);
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

    test('Then StorageClient.delete should reject', async () => {
      const client = new Storage();
      await expect(client.bucket('test').file('test').delete()).rejects.toEqual(
        new UnimplementedError("UNIMPLEMENTED")
      );
    });

    test('The Grpc client for Storage.delete should have been called exactly once', () => {
      expect(deleteMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.Delete succeeds', () => {
    const MOCK_REPLY = new StorageDeleteResponse();

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

    test('Then StorageClient.delete should delete the bytes from the bucket', async () => {
      const client = new Storage().bucket('test_bucket').file('test/item');
      await expect(client.delete()).resolves;
    });

    test('The Grpc client for Storage.delete should have been called exactly once', () => {
      expect(deleteMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.PresignUrl throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let signUrlMock;

    beforeAll(() => {
      signUrlMock = jest
        .spyOn(GrpcStorageClient.prototype, 'preSignUrl')
        .mockImplementation((_, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then file.signUrl should reject', async () => {
      const client = new Storage();
      await expect(client.bucket('test').file('test').signUrl(FileMode.Read)).rejects.toEqual(
        new UnimplementedError("UNIMPLEMENTED")
      );
    });

    test('The Grpc client for file.signUrl should have been called exactly once', () => {
      expect(signUrlMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.PreSignUrl succeeds', () => {
    const MOCK_REPLY = new StoragePreSignUrlResponse();
    MOCK_REPLY.setUrl("testingUrl");

    let preSignUrlMock: jest.SpyInstance;

    beforeAll(() => {
      preSignUrlMock = jest
        .spyOn(GrpcStorageClient.prototype, 'preSignUrl')
        .mockImplementation((_, callback: any) => {
          callback(null, MOCK_REPLY);
          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });
    

    describe('When calling file.signUrl', () => {
      let signUrl;

      beforeAll(async () => {
        preSignUrlMock.mockClear();
        const client = new Storage().bucket('test_bucket').file('test/item');
        signUrl = await client.signUrl(FileMode.Read)
      })

      test('Then file.signUrl should delete the bytes from the bucket', () => {
        expect(signUrl).toEqual("testingUrl");
      });
  
      test('The Grpc client for file.signUrl should have been called exactly once', () => {
        expect(preSignUrlMock).toBeCalledTimes(1);
      });
  
      test('The Grpc client for file.signUrl should have been called with provided options', () => {
        const MOCK_REQUEST = new StoragePreSignUrlRequest();
        MOCK_REQUEST.setBucketName("test_bucket");
        MOCK_REQUEST.setKey("test/item");
        MOCK_REQUEST.setOperation(FileMode.Read);
        MOCK_REQUEST.setExpiry(600);
        expect(preSignUrlMock).toBeCalledWith(MOCK_REQUEST, expect.anything());
      });
    });

    describe('When calling file.getUploadUrl', () => {
      let signUrl;

      beforeAll(async () => {
        preSignUrlMock.mockClear();
        const client = new Storage().bucket('test_bucket').file('test/item');
        signUrl = await client.getUploadUrl()
      })

      test('Then file.signUrl should delete the bytes from the bucket', () => {
        expect(signUrl).toEqual("testingUrl");
      });
  
      test('The Grpc client for file.signUrl should have been called exactly once', () => {
        expect(preSignUrlMock).toBeCalledTimes(1);
      });
  
      test('The Grpc client for file.signUrl should have been called with provided options', () => {
        const MOCK_REQUEST = new StoragePreSignUrlRequest();
        MOCK_REQUEST.setBucketName("test_bucket");
        MOCK_REQUEST.setKey("test/item");
        MOCK_REQUEST.setOperation(FileMode.Write);
        MOCK_REQUEST.setExpiry(600);
        expect(preSignUrlMock).toBeCalledWith(MOCK_REQUEST, expect.anything());
      });
    });

    describe('When calling file.getUploadUrl', () => {
      let signUrl;

      beforeAll(async () => {
        preSignUrlMock.mockClear();
        const client = new Storage().bucket('test_bucket').file('test/item');
        signUrl = await client.getDownloadUrl()
      });

      test('Then file.signUrl should delete the bytes from the bucket', () => {
        expect(signUrl).toEqual("testingUrl");
      });
  
      test('The Grpc client for file.signUrl should have been called exactly once', () => {
        expect(preSignUrlMock).toBeCalledTimes(1);
      });
  
      test('The Grpc client for file.signUrl should have been called with provided options', () => {
        const MOCK_REQUEST = new StoragePreSignUrlRequest();
        MOCK_REQUEST.setBucketName("test_bucket");
        MOCK_REQUEST.setKey("test/item");
        MOCK_REQUEST.setOperation(FileMode.Read);
        MOCK_REQUEST.setExpiry(600);
        expect(preSignUrlMock).toBeCalledWith(MOCK_REQUEST, expect.anything());
      });
    });
  });

  describe('Given nitric.api.storage.StorageClient.ListFiles throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };

    let listFilesMock;

    beforeAll(() => {
      listFilesMock = jest
        .spyOn(GrpcStorageClient.prototype, 'listFiles')
        .mockImplementation((_, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.delete should reject', async () => {
      const client = new Storage();
      await expect(client.bucket('test').files()).rejects.toEqual(
        new UnimplementedError("UNIMPLEMENTED")
      );
    });

    test('The Grpc client for Storage.delete should have been called exactly once', () => {
      expect(listFilesMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.storage.StorageClient.ListFiles succeeds', () => {
    const MOCK_REPLY = new StorageListFilesResponse();
    MOCK_REPLY.setFilesList(["test/test.txt"].map((k) => { 
      const f = new File();
      f.setKey(k);
      return f; 
    }));

    let listFilesMock;

    beforeAll(() => {
      listFilesMock = jest
        .spyOn(GrpcStorageClient.prototype, 'listFiles')
        .mockImplementation((_, callback: any) => {
          callback(null, MOCK_REPLY);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then StorageClient.listFiles should return files', async () => {
      const client = new Storage();
      const files = await client.bucket('test').files();

      expect(files).toHaveLength(1);
      expect(files[0].name).toBe('test/test.txt')
    });

    test('The Grpc client for Storage.delete should have been called exactly once', () => {
      expect(listFilesMock).toBeCalledTimes(1);
    });
  });
});
