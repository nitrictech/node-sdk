import { QueueClient } from "./queue";

import { queue } from "@/interfaces";
import {
  FailedTask,
  QueueCompleteResponse,
  QueueReceiveResponse,
  QueueSendBatchResponse,
  QueueSendResponse,
} from "@/interfaces/queue";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
const { QueueClient: GrpcQueueClient } = queue;

describe("Queue Client Tests", () => {
  describe("Send", () => {
    describe("Given nitric.api.queue.QueueClient.Send throws an error", () => {
      const MOCK_ERROR = {
        code: 12,
        message: "UNIMPLEMENTED",
      };
      let sendMock;

      beforeAll(() => {
        sendMock = jest
          .spyOn(GrpcQueueClient.prototype, "send")
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.send should reject", async () => {
        const client = new QueueClient();

        expect(
          client.send("test", {
            id: "task",
            payloadType: "test",
            payload: { test: 1 },
          })
        ).rejects.toBe(MOCK_ERROR);
      });

      it("Then Queue.send should be called once", async () => {
        expect(sendMock).toBeCalledTimes(1);
      });
    });

    describe("Given nitric.api.queue.QueueClient.Send succeeds", () => {
      let sendMock;

      beforeAll(() => {
        sendMock = jest
          .spyOn(GrpcQueueClient.prototype, "send")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueSendResponse();

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.Send should resolve with no failed messages", async () => {
        const client = new QueueClient();
        await expect(
          client.send("test", {
            id: "task",
            payloadType: "test",
            payload: { test: 1 },
          })
        ).resolves.toBeUndefined();
      });

      it("Then Queue.Send should be called once", async () => {
        expect(sendMock).toBeCalledTimes(1);
      });
    });
  });

  describe("SendBatch", () => {
    describe("Given nitric.api.queue.QueueClient.SendBatch throws an error", () => {
      const MOCK_ERROR = {
        code: 12,
        message: "UNIMPLEMENTED",
      };
      let sendBatchMock;

      beforeAll(() => {
        sendBatchMock = jest
          .spyOn(GrpcQueueClient.prototype, "sendBatch")
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.sendBatch should reject", async () => {
        const client = new QueueClient();
        // expect.assertions(1);
        await expect(
          client.sendBatch("test", [
            {
              id: "test",
              payloadType: "Test Payload",
              payload: {
                test: "test",
              },
            },
          ])
        ).rejects.toBe(MOCK_ERROR);
      });
    });

    describe("Given nitric.api.queue.QueueClient.SendBatch succeeds", () => {
      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "sendBatch")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueSendBatchResponse();
            mockResponse.setFailedtasksList([]);
            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.sendBatch should resolve with no failed messages", async () => {
        const client = new QueueClient();
        await expect(
          client.sendBatch("test", [
            {
              id: "test",
              payloadType: "Test Payload",
              payload: {
                test: "test",
              },
            },
          ])
        ).resolves.toEqual([]);
      });
    });

    describe("Given nitric.api.queue.QueueClient.SendBatch partially succeeds", () => {
      const mockEvents = [
        {
          id: "test",
          payloadType: "Test Payload",
          payload: {
            test: "test",
          },
        },
      ];

      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "sendBatch")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueSendBatchResponse();
            mockResponse.setFailedtasksList(
              mockEvents.map((e) => {
                const msg = new FailedTask();
                const evt = new queue.NitricTask();
                evt.setId(e.id);
                evt.setPayloadtype(e.payloadType);
                evt.setPayload(Struct.fromJavaScript(e.payload));
                msg.setTask(evt);
                msg.setMessage("Failed to Push task");

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
          client.sendBatch("test", [
            {
              id: "test",
              payloadType: "Test Payload",
              payload: {
                test: "test",
              },
            },
          ])
        ).resolves.toEqual([
          {
            task: mockEvents[0],
            message: "Failed to Push task",
          },
        ]);
      });
    });
  });

  describe("Receive", () => {
    describe("Given nitric.api.queue.QueueClient.Receive throws an error", () => {
      const MOCK_ERROR = {
        code: 12,
        message: "UNIMPLEMENTED",
      };
      let receiveMock;

      beforeAll(() => {
        receiveMock = jest
          .spyOn(GrpcQueueClient.prototype, "receive")
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.receive should reject", async () => {
        const client = new QueueClient();

        await expect(client.receive("test", 1)).rejects.toBe(MOCK_ERROR);
      });
    });

    describe("Given no queue items are returned", () => {
      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "receive")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueReceiveResponse();
            mockResponse.setTasksList([]);

            // const mockResponse = new PushResponse()
            // mockResponse.setFailedmessagesList([])
            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.receive should resolve with an empty array", async () => {
        const client = new QueueClient();
        await expect(client.receive("test", 1)).resolves.toEqual([]);
      });
    });

    describe("Given queue items are returned", () => {
      const queueName = "test";
      const mockEvents = [
        {
          id: "test",
          payloadType: "Test Payload",
          payload: {
            test: "test",
          },
        },
      ];

      beforeAll(() => {
        jest
          .spyOn(GrpcQueueClient.prototype, "receive")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueReceiveResponse();
            mockResponse.setTasksList(
              mockEvents.map((e) => {
                const task = new queue.NitricTask();

                task.setId(e.id);
                task.setPayloadtype(e.payloadType);
                task.setPayload(Struct.fromJavaScript(e.payload));
                task.setLeaseid(e.id);

                return task;
              })
            );

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.receive should resolve with an empty array", async () => {
        const client = new QueueClient();
        await expect(client.receive("test", 1)).resolves.toEqual(
          mockEvents.map((e) => {
            return {
              leaseId: e.id,
              task: e,
              queue: queueName,
            };
          })
        );
      });
    });
  });

  describe("Complete", () => {
    describe("Given nitric.api.queue.QueueClient.Complete throws an error", () => {
      const MOCK_ERROR = {
        code: 12,
        message: "UNIMPLEMENTED",
      };
      let completeMock;

      beforeAll(() => {
        completeMock = jest
          .spyOn(GrpcQueueClient.prototype, "complete")
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.complete should reject", async () => {
        const client = new QueueClient();

        expect(
          client.complete({ queue: "test", leaseId: "test", task: null })
        ).rejects.toBe(MOCK_ERROR);
      });

      it("Then Queue.complete should be called once", async () => {
        expect(completeMock).toBeCalledTimes(1);
      });
    });

    describe("Given nitric.api.queue.QueueClient.Complete succeeds", () => {
      let completeMock;

      beforeAll(() => {
        completeMock = jest
          .spyOn(GrpcQueueClient.prototype, "complete")
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueCompleteResponse();

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it("Then Queue.Complete should resolve with no failed messages", async () => {
        const client = new QueueClient();
        await expect(
          client.complete({
            leaseId: "test",
            queue: "test",
            task: {
              id: "task",
              payloadType: "test",
              payload: { test: 1 },
            },
          })
        ).resolves.toBeUndefined();
      });

      it("Then Queue.complete should be called once", async () => {
        expect(completeMock).toBeCalledTimes(1);
      });
    });
  });
});
