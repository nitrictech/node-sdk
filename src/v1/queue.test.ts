import { QueueClient } from "./queue";

import { queue, common } from "../interfaces/v1";
import {
  FailedEvent,
  NitricQueueItem,
  QueuePopResponse,
  QueueBatchPushResponse,
} from "../interfaces/v1/queue";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
const { QueueClient: GrpcQueueClient } = queue;

describe("Queue Client Tests", () => {
  describe("Push", () => {
    describe("Given nitric.v1.queue.Push throws an error", () => {
      const MOCK_ERROR = {
        code: 12,
        message: "UNIMPLEMENTED",
      };
      let pushMock;

      beforeAll(() => {
        pushMock = jest
          .spyOn(GrpcQueueClient.prototype, "batchPush")
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.push should reject", async () => {
        const client = new QueueClient();
        // expect.assertions(1);
        await expect(
          client.push("test", [
            {
              requestId: "test",
              payloadType: "Test Payload",
              payload: {
                test: "test",
              },
            },
          ])
        ).rejects.toBe(MOCK_ERROR);
      });
    });

    describe("Given nitric.v1.queue.Push succeeds", () => {
      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "batchPush")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueBatchPushResponse();
            mockResponse.setFailedeventsList([]);
            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.push should resolve with no failed messages", async () => {
        const client = new QueueClient();
        await expect(
          client.push("test", [
            {
              requestId: "test",
              payloadType: "Test Payload",
              payload: {
                test: "test",
              },
            },
          ])
        ).resolves.toEqual([]);
      });
    });

    describe("Given nitric.v1.queue.Push partially succeeds", () => {
      const mockEvents = [
        {
          requestId: "test",
          payloadType: "Test Payload",
          payload: {
            test: "test",
          },
        },
      ];

      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "batchPush")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueBatchPushResponse();
            mockResponse.setFailedeventsList(
              mockEvents.map((e) => {
                const msg = new FailedEvent();
                const evt = new common.NitricEvent();
                evt.setRequestid(e.requestId);
                evt.setPayloadtype(e.payloadType);
                evt.setPayload(Struct.fromJavaScript(e.payload));
                msg.setEvent(evt);
                msg.setMessage("Failed to Push event");

                return msg;
              })
            );
            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then EventingClient.publish should resolve with no failed messages", async () => {
        const client = new QueueClient();
        await expect(
          client.push("test", [
            {
              requestId: "test",
              payloadType: "Test Payload",
              payload: {
                test: "test",
              },
            },
          ])
        ).resolves.toEqual([
          {
            event: mockEvents[0],
            message: "Failed to Push event",
          },
        ]);
      });
    });
  });

  describe("Pop", () => {
    describe("Given nitric.v1.queue.Pop throws an error", () => {
      const MOCK_ERROR = {
        code: 12,
        message: "UNIMPLEMENTED",
      };
      let popMock;

      beforeAll(() => {
        popMock = jest
          .spyOn(GrpcQueueClient.prototype, "pop")
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.pop should reject", async () => {
        const client = new QueueClient();

        await expect(client.pop("test", 1)).rejects.toBe(MOCK_ERROR);
      });
    });

    describe("Given no queue items are returned", () => {
      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "pop")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueuePopResponse();
            mockResponse.setItemsList([]);

            // const mockResponse = new PushResponse()
            // mockResponse.setFailedmessagesList([])
            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.pop should resolve with an empty array", async () => {
        const client = new QueueClient();
        await expect(client.pop("test", 1)).resolves.toEqual([]);
      });
    });

    describe("Given queue items are returned", () => {
      const mockEvents = [
        {
          requestId: "test",
          payloadType: "Test Payload",
          payload: {
            test: "test",
          },
        },
      ];

      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "pop")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueuePopResponse();
            mockResponse.setItemsList(
              mockEvents.map((e) => {
                const item = new NitricQueueItem();
                const event = new common.NitricEvent();
                event.setRequestid(e.requestId);
                event.setPayloadtype(e.payloadType);
                event.setPayload(Struct.fromJavaScript(e.payload));

                item.setLeaseid(e.requestId);
                item.setEvent(event);
                return item;
              })
            );

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.pop should resolve with an empty array", async () => {
        const client = new QueueClient();
        await expect(client.pop("test", 1)).resolves.toEqual(
          mockEvents.map((e) => {
            return {
              leaseId: e.requestId,
              event: e,
            };
          })
        );
      });
    });
  });
});
