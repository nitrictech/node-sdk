import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import { v1, grpc } from "../src/";

// Extract the DocumentsClient
const { DocumentsClient } = v1;
const { DocumentsClient: GrpcDocumentsClient, GetDocumentReply } = grpc.v1;

describe("Documents Client Tests", () => {
  describe("Given nitric.v1.documents.CreateDocument throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let createDocumentMock;

    beforeAll(() => {
      createDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "createDocument").mockImplementation((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.createDocument should reject", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.createDocument("test", { test: "test"})).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Documents.createDocument should have been called exactly once", () => {
      expect(createDocumentMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.documents.CreateDocument succeeds", () => {
    let createDocumentMock;
    beforeAll(() => {
      createDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "createDocument").mockImplementation((request, callback: any) => {
        callback(null, new Empty());

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.createDocument should resolve with void", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.createDocument("test", { test: "test"})).resolves.toBeUndefined();
    });

    test("The Grpc client for Documents.createDocument should have been called exactly once", () => {
      expect(createDocumentMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.documents.GetDocument throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let getDocumentMock;

    beforeAll(() => {
      getDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "getDocument").mockImplementation((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.createDocument should reject", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.getDocument("test")).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Documents.createDocument should have been called exactly once", () => {
      expect(getDocumentMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.documents.GetDocument succeeds", () => {
    const MOCK_DOCUMENT = {
      test: "testing"
    };
    const MOCK_DOCUMENT_REPLY = new GetDocumentReply();
    MOCK_DOCUMENT_REPLY.setDocument(Struct.fromJavaScript(MOCK_DOCUMENT));
    let getDocumentMock;
    beforeAll(() => {
      getDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "getDocument").mockImplementation((request, callback: any) => {
        callback(null, MOCK_DOCUMENT_REPLY);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.getDocument should resolve with the requested document", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.getDocument("test")).resolves.toEqual(MOCK_DOCUMENT);
    });

    test("The Grpc client for Documents.getDocument should have been called exactly once", () => {
      expect(getDocumentMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.documents.DeleteDocument throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let deleteDocumentMock;

    beforeAll(() => {
      deleteDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "deleteDocument").mockImplementation((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.deleteDocument should reject", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.deleteDocument("test")).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Documents.deleteDocument should have been called exactly once", () => {
      expect(deleteDocumentMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.documents.DeleteDocument succeeds", () => {
    let deleteDocumentMock;
    beforeAll(() => {
      deleteDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "deleteDocument").mockImplementation((request, callback: any) => {
        callback(null, new Empty());

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.getDocument should resolve with the requested document", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.deleteDocument("test")).resolves.toBeUndefined();
    });

    test("The Grpc client for Documents.getDocument should have been called exactly once", () => {
      expect(deleteDocumentMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.documents.UpdateDocument throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let updateDocumentMock;

    beforeAll(() => {
      updateDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "updateDocument").mockImplementation((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.updateDocument should reject", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.updateDocument("test", { test: "testing" })).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Documents.updateDocument should have been called exactly once", () => {
      expect(updateDocumentMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.documents.updateDocument succeeds", () => {
    let updateDocumentMock;
    beforeAll(() => {
      updateDocumentMock = jest.spyOn(GrpcDocumentsClient.prototype, "updateDocument").mockImplementation((request, callback: any) => {
        callback(null, new Empty());

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then DocumentsClient.updateDocument should resolve with the requested document", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.updateDocument("test", { testing: "test" })).resolves.toBeUndefined();
    });

    test("The Grpc client for Documents.updateDocument should have been called exactly once", () => {
      expect(updateDocumentMock).toBeCalledTimes(1);
    });
  });
});