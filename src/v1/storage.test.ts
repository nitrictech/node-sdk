import { StorageClient } from "./storage";
import { storage } from "../interfaces/v1";

const { StorageClient: GrpcStorageClient } = storage

describe("Stroage Client Tests", () => {
  describe("Given nitric.v1.storage.Put throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let putMock;

    beforeAll(() => {
      putMock = jest.spyOn(GrpcStorageClient.prototype, "put").mockImplementation((_, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then StorageClient.put should reject", () => {
      const client = new StorageClient();
      expect(client.put("test_bucket", "test/item", new Uint8Array())).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Storage.put should have been called exactly once", () => {
      expect(putMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.storage.Put succeeds", () => {
    let putMock;
    const MOCK_REPLY = new storage.PutReply();
    MOCK_REPLY.setSuccess(true);

    beforeAll(() => {
      putMock = jest.spyOn(GrpcStorageClient.prototype, "put").mockImplementation((_, callback: any) => {
        callback(null, MOCK_REPLY);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then StorageClient.put should resolve with success status", () => {
      const client = new StorageClient();
      expect(client.put("test_bucket", "test/item", new Uint8Array())).resolves.toBe(true);
    });

    test("The Grpc client for Storage.put should have been called exactly once", () => {
      expect(putMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.storage.Get throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let getMock;

    beforeAll(() => {
      getMock = jest.spyOn(GrpcStorageClient.prototype, "get").mockImplementation((_, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then StorageClient.get should reject", () => {
      const client = new StorageClient();
      expect(client.get("test_bucket", "test/item")).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Storage.get should have been called exactly once", () => {
      expect(getMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.storage.Get succeeds", () => {
    const MOCK_BYTES = new Uint8Array();
    const MOCK_REPLY = new storage.GetReply();
    MOCK_REPLY.setBody(MOCK_BYTES);

    let getMock;

    beforeAll(() => {
      getMock = jest.spyOn(GrpcStorageClient.prototype, "get").mockImplementation((_, callback: any) => {
        callback(null, MOCK_REPLY);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then StorageClient.get should return the bytes of the retrieved item", () => {
      const client = new StorageClient();
      expect(client.get("test_bucket", "test/item")).resolves.toBe(MOCK_BYTES);
    });

    test("The Grpc client for Storage.get should have been called exactly once", () => {
      expect(getMock).toBeCalledTimes(1);
    });
  });
});