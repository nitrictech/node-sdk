import { v1, grpc } from "../src/";

// Extract the DocumentsClient
const { DocumentsClient } = v1;
const { DocumentsClient: GrpcDocumentsClient } = grpc.v1;

describe("Documents Client Tests", () => {
  
  describe("Given nitric.v1.documents.CreateDocument throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };

    beforeAll(() => {
      // 
      jest.spyOn(GrpcDocumentsClient.prototype, "createDocument").mockImplementation((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    test("Then DocumentsClient.createDocument should reject", () => {
      const client = new DocumentsClient<any>("test");
      expect(client.createDocument("test", { test: "test"})).rejects.toBe(MOCK_ERROR);
    });

    afterAll(() => {
      jest.resetAllMocks();
    });
  });
});