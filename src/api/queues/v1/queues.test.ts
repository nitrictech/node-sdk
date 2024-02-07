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
import { Queueing, ReceivedTask as QueueItem } from './queues';

import { QueuesClient } from '@nitric/proto/queues/v1/queues_grpc_pb';
import {
  FailedSendRequest,
  QueueCompleteResponse,
  QueueReceiveResponse,
  QueueSendResponse,
  ReceivedTask,
} from '@nitric/proto/queues/v1/queues_pb';

import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import { UnimplementedError } from '../../errors';

describe('Queue Client Tests', () => {
  describe('Send', () => {
    describe('Given nitric.api.queue.QueueServiceClient.Send throws an error', () => {
      const MOCK_ERROR = {
        code: 12,
        message: 'UNIMPLEMENTED',
      };
      let sendMock;

      beforeAll(() => {
        sendMock = jest
          .spyOn(QueuesClient.prototype, 'send')
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.send should reject', async () => {
        const queueing = new Queueing();

        await expect(
          queueing.queue('test').send({ test: 1 })
        ).rejects.toBeInstanceOf(UnimplementedError);
      });

      it('Then Queue.send should be called once', async () => {
        expect(sendMock).toBeCalledTimes(1);
      });
    });

    describe('Given nitric.api.queue.QueueServiceClient.Send succeeds when an array of tasks are sent', () => {
      let sendMock;

      beforeAll(() => {
        sendMock = jest
          .spyOn(QueuesClient.prototype, 'send')
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueSendResponse();

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.Send with an array of tasks should resolve with no failed messages', async () => {
        const queueing = new Queueing();
        await expect(
          queueing.queue('test').send([{test: 1}])
        ).resolves.toEqual([]);
      });

      it('Then Queue.Send with one task should resolve with no failed messages', async () => {
        const queueing = new Queueing();
        await expect(
          queueing.queue('test').send({test: 1})
        ).resolves.toEqual(undefined);
      });

      it('Then Queue.Send should be called once', async () => {
        expect(sendMock).toBeCalledTimes(2);
      });
    });
  });

  describe('Receive', () => {
    describe('Given nitric.api.queue.QueueServiceClient.Receive throws an error', () => {
      const MOCK_ERROR = {
        code: 12,
        message: 'UNIMPLEMENTED',
      };
      let receiveMock;

      beforeAll(() => {
        receiveMock = jest
          .spyOn(QueuesClient.prototype, 'receive')
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.receive should reject', async () => {
        const queueing = new Queueing();

        await expect(queueing.queue('test').receive(1)).rejects.toBeInstanceOf(UnimplementedError);
      });
    });

    describe('Given no queue items are returned', () => {
      beforeAll(() => {
        jest
          .spyOn(QueuesClient.prototype, 'receive')
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

      it('Then Queue.receive should resolve with an empty array', async () => {
        const queueing = new Queueing();
        await expect(queueing.queue('test').receive(1)).resolves.toEqual([]);
      });
    });

    describe('Given queue items are returned', () => {
      const queueName = 'test';
      const mockTasks = [{test: 'test'}];

      beforeAll(() => {
        jest
          .spyOn(QueuesClient.prototype, 'receive')
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueReceiveResponse();
            mockResponse.setTasksList(
              mockTasks.map((e) => {
                const task = new ReceivedTask();

                task.setPayload(Struct.fromJavaScript(e));
                task.setLeaseId("test-lease-id");

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

      it('Then Queue.receive should resolve with an array of tasks', async () => {
        const queueing = new Queueing();
        const queue = queueing.queue('test');
        await expect(queue.receive(1)).resolves.toEqual(
          mockTasks.map((e) => {
            return expect.objectContaining({
              leaseId: "test-lease-id",
              queue: queue,
              payload: e,
            });
          })
        );
      });
    });
  });

  describe('Complete', () => {
    describe('Given nitric.api.queue.QueueServiceClient.Complete throws an error', () => {
      const MOCK_ERROR = {
        code: 12,
        message: 'UNIMPLEMENTED',
      };
      let completeMock;

      beforeAll(() => {
        completeMock = jest
          .spyOn(QueuesClient.prototype, 'complete')
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.complete should reject', async () => {
        const queueing = new Queueing();
        const task = new QueueItem({
          leaseId: '1',
          task: { test: 1 },
          queue: queueing.queue('test'),
        });

        await expect(task.complete()).rejects.toBeInstanceOf(UnimplementedError);
      });

      it('Then Queue.complete should be called once', async () => {
        expect(completeMock).toBeCalledTimes(1);
      });
    });

    describe('Given nitric.api.queue.QueueServiceClient.Complete succeeds', () => {
      let completeMock;

      beforeAll(() => {
        completeMock = jest
          .spyOn(QueuesClient.prototype, 'complete')
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueCompleteResponse();

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.Complete should resolve with no failed messages', async () => {
        const queueing = new Queueing();
        const task = new QueueItem({
          leaseId: '1',
          task: { test: 1 },
          queue: queueing.queue('test'),
        });

        await expect(task.complete()).resolves.toBeUndefined();
      });

      it('Then Queue.complete should be called once', async () => {
        expect(completeMock).toBeCalledTimes(1);
      });
    });
  });
});
