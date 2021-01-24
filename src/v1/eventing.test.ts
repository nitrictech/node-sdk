import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { EventingClient } from "./eventing";
import { eventing } from "../interfaces/v1";

// Extract the DocumentsClient
const { EventingClient: GrpcEventingClient } = eventing;

describe("Eventing Client Tests", () => {
  describe("Given nitric.v1.eventing.Publish throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let publishMock;

    beforeAll(() => {
      publishMock = jest.spyOn(GrpcEventingClient.prototype, "publish").mockImplementation((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventingClient.publish should reject", () => {
      const client = new EventingClient();
      expect(client.publish("test", {
        requestId: "test",
        payloadType: "Test Payload",
        payload: {
          test: "test"
        }
      })).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Eventing.publish should have been called exactly once", () => {
      expect(publishMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.eventing.Publish succeeds", () => {
    describe("And a requestId is provided", () => {
      const MOCK_ERROR = {
        code: 2,
        message: "UNIMPLEMENTED"
      };
      let publishMock;
  
      beforeAll(() => {
        publishMock = jest.spyOn(GrpcEventingClient.prototype, "publish").mockImplementation((request, callback: any) => {
          callback(null, new Empty());
  
          return null as any;
        });
      });
  
      afterAll(() => {
        jest.resetAllMocks();
      });
  
      test("Then EventingClient.publish should resolve with the provided requestId", () => {
        const client = new EventingClient();
        expect(client.publish("test", {
          requestId: "test",
          payloadType: "Test Payload",
          payload: {
            test: "test"
          }
        })).resolves.toBe("test");
      });
  
      test("The Grpc client for Eventing.publish should have been called exactly once", () => {
        expect(publishMock).toBeCalledTimes(1);
      });
    });

    describe("And a requestId is not provided", () => {
      const MOCK_ERROR = {
        code: 2,
        message: "UNIMPLEMENTED"
      };
      let publishMock;
  
      beforeAll(() => {
        publishMock = jest.spyOn(GrpcEventingClient.prototype, "publish").mockImplementation((_, callback: any) => {
          callback(null, new Empty());
  
          return null as any;
        });
      });
  
      afterAll(() => {
        jest.resetAllMocks();
      });
  
      test("Then EventingClient.publish should resolve with a generated UUID v4 requestID", () => {
        const client = new EventingClient();
        expect(client.publish("test", {
          payloadType: "Test Payload",
          payload: {
            test: "test"
          }
        })).resolves.toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      });
  
      test("The Grpc client for Eventing.publish should have been called exactly once", () => {
        expect(publishMock).toBeCalledTimes(1);
      });
    });
  });

  describe("Given nitric.v1.eventing.GetTopics throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let getTopicsMock;

    beforeAll(() => {
      getTopicsMock = jest.spyOn(GrpcEventingClient.prototype, "getTopics").mockImplementation((_, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventingClient.publish should reject", () => {
      const client = new EventingClient();
      expect(client.getTopics()).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Eventing.publish should have been called exactly once", () => {
      expect(getTopicsMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.eventing.GetTopics succeeds", () => {
    const MOCK_TOPICS = ["topic1"];
    const MOCK_TOPICS_REPLY = new eventing.GetTopicsReply();
    MOCK_TOPICS_REPLY.setTopicsList(MOCK_TOPICS);

    let getTopicsMock;

    beforeAll(() => {
      getTopicsMock = jest.spyOn(GrpcEventingClient.prototype, "getTopics").mockImplementation((_, callback: any) => {
        callback(null, MOCK_TOPICS_REPLY);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventingClient.publish should resolve with available topics", () => {
      const client = new EventingClient();
      expect(client.getTopics()).resolves.toEqual(MOCK_TOPICS);
    });

    test("The Grpc client for Eventing.publish should have been called exactly once", () => {
      expect(getTopicsMock).toBeCalledTimes(1);
    });
  });
});