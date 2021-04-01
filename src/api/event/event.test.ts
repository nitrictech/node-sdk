import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { EventClient } from "./event";
import { event } from "../../interfaces";

// Extract the EventClient
const { EventClient: GrpcEventClient } = event;

describe("Event Client Tests", () => {
  describe("Given nitric.api.event.EventClient.Publish throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED",
    };
    let publishMock;

    beforeAll(() => {
      publishMock = jest
        .spyOn(GrpcEventClient.prototype, "publish")
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventClient.publish should reject", () => {
      const client = new EventClient();
      expect(
        client.publish("test", {
          id: "test",
          payloadType: "Test Payload",
          payload: {
            test: "test",
          },
        })
      ).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for EventClient.publish should have been called exactly once", () => {
      expect(publishMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.api.event.EventClient.Publish succeeds", () => {
    describe("And a id is provided", () => {
      const MOCK_ERROR = {
        code: 2,
        message: "UNIMPLEMENTED",
      };
      let publishMock;

      beforeAll(() => {
        publishMock = jest
          .spyOn(GrpcEventClient.prototype, "publish")
          .mockImplementation((request, callback: any) => {
            callback(null, new Empty());

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      test("Then EventClient.publish should resolve with the provided id", () => {
        const client = new EventClient();
        expect(
          client.publish("test", {
            id: "test",
            payloadType: "Test Payload",
            payload: {
              test: "test",
            },
          })
        ).resolves.toBe("test");
      });

      test("The Grpc client for EventClient.publish should have been called exactly once", () => {
        expect(publishMock).toBeCalledTimes(1);
      });
    });

    describe("And a id is not provided", () => {
      const MOCK_ERROR = {
        code: 2,
        message: "UNIMPLEMENTED",
      };
      let publishMock;

      beforeAll(() => {
        publishMock = jest
          .spyOn(GrpcEventClient.prototype, "publish")
          .mockImplementation((_, callback: any) => {
            callback(null, new Empty());

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      test("Then EventClient.publish should resolve with a generated UUID v4 requestID", () => {
        const client = new EventClient();
        expect(
          client.publish("test", {
            payloadType: "Test Payload",
            payload: {
              test: "test",
            },
          })
        ).resolves.toMatch(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        );
      });

      test("The Grpc client for EventClient.publish should have been called exactly once", () => {
        expect(publishMock).toBeCalledTimes(1);
      });
    });
  });
});
