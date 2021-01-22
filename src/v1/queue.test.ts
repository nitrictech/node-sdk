import { QueueClient } from "./queue";

import { queue } from "../interfaces/v1";
import { FailedMessage, NitricEvent, PushResponse } from "../interfaces/v1/queue";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
const { QueueClient: GrpcQueueClient } = queue;

describe("Queue Client Tests", () => {
  describe("Given nitric.v1.queue.Push throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let publishMock;

    beforeAll(() => {
      publishMock = jest.spyOn(GrpcQueueClient.prototype, "push").mockImplementation((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then Queue.push should reject", () => {
      const client = new QueueClient();
      expect(client.push("test", [{
        requestId: "test",
        payloadType: "Test Payload",
        payload: {
          test: "test"
        }
      }])).rejects.toBe(MOCK_ERROR);
    });
  });

  describe("Given nitric.v1.queue.Push succeeds", () => {
    beforeAll(() => {
      jest.spyOn(GrpcQueueClient.prototype, "push").mockImplementation((request, callback: any) => {
        const mockResponse = new PushResponse()
        mockResponse.setFailedmessagesList([])
        callback(null, mockResponse);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventingClient.publish should resolve with no failed messages", () => {
      const client = new QueueClient();
      expect(client.push("test", [{
        requestId: "test",
        payloadType: "Test Payload",
        payload: {
          test: "test"
        }
      }])).resolves.toEqual([]);
    });
  })

  describe("Given nitric.v1.queue.Push partially succeeds", () => {
    const mockEvents = [{
      requestId: "test",
      payloadType: "Test Payload",
      payload: {
        test: "test"
      }
    }]

    beforeAll(() => {
      jest.spyOn(GrpcQueueClient.prototype, "push").mockImplementation((request, callback: any) => {
        const mockResponse = new PushResponse()
        mockResponse.setFailedmessagesList(mockEvents.map(e => {
          const msg = new FailedMessage()
          const evt = new NitricEvent()
          evt.setRequestid(e.requestId);
          evt.setPayloadtype(e.payloadType);
          evt.setPayload(Struct.fromJavaScript(e.payload))
          msg.setEvent(evt);
          msg.setMessage("Failed to Push event");

          return msg;
        }))
        callback(null, mockResponse);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventingClient.publish should resolve with no failed messages", () => {
      const client = new QueueClient();
      expect(client.push("test", [{
        requestId: "test",
        payloadType: "Test Payload",
        payload: {
          test: "test"
        }
      }])).resolves.toEqual([{
        event: mockEvents[0],
        message: "Failed to Push event",
      }]);
    });
  })
});