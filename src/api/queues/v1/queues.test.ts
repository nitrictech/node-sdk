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
import { Queueing, DequeuedMessage as QueueItem } from './queues';

import { QueuesClient } from '@nitric/proto/queues/v1/queues_grpc_pb';
import {
  FailedEnqueueMessage,
  QueueCompleteResponse,
  QueueDequeueResponse,
  QueueEnqueueResponse,
  QueueMessage,
  DequeuedMessage,
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
      let enqueueMock;

      beforeAll(() => {
        enqueueMock = jest
          .spyOn(QueuesClient.prototype, 'enqueue')
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.enqueue should reject', async () => {
        const queueing = new Queueing();

        await expect(
          queueing.queue('test').enqueue({ test: 1 })
        ).rejects.toBeInstanceOf(UnimplementedError);
      });

      it('Then Queue.enqueue should be called once', async () => {
        expect(enqueueMock).toBeCalledTimes(1);
      });
    });

    describe('Given nitric.api.queue.QueueServiceClient.Send succeeds when an array of messages are sent', () => {
      let enqueueMock;

      beforeAll(() => {
        enqueueMock = jest
          .spyOn(QueuesClient.prototype, 'enqueue')
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueEnqueueResponse();

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.Send with an array of messages should resolve with no failed messages', async () => {
        const queueing = new Queueing();
        await expect(
          queueing.queue('test').enqueue([{ test: 1 }])
        ).resolves.toEqual([]);
      });

      it('Then Queue.Send with one message should resolve with no failed messages', async () => {
        const queueing = new Queueing();
        await expect(
          queueing.queue('test').enqueue({ test: 1 })
        ).resolves.toEqual(undefined);
      });

      it('Then Queue.Send should be called once', async () => {
        expect(enqueueMock).toBeCalledTimes(2);
      });
    });
  });

  describe('Dequeue', () => {
    describe('Given nitric.api.queue.QueueServiceClient.Dequeue throws an error', () => {
      const MOCK_ERROR = {
        code: 12,
        message: 'UNIMPLEMENTED',
      };
      let dequeueMock;

      beforeAll(() => {
        dequeueMock = jest
          .spyOn(QueuesClient.prototype, 'dequeue')
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.dequeue should reject', async () => {
        const queueing = new Queueing();

        await expect(queueing.queue('test').dequeue(1)).rejects.toBeInstanceOf(
          UnimplementedError
        );
      });
    });

    describe('Given no queue items are returned', () => {
      beforeAll(() => {
        jest
          .spyOn(QueuesClient.prototype, 'dequeue')
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueDequeueResponse();
            mockResponse.setMessagesList([]);

            // const mockResponse = new PushResponse()
            // mockResponse.setFailedmessagesList([])
            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.dequeue should resolve with an empty array', async () => {
        const queueing = new Queueing();
        await expect(queueing.queue('test').dequeue(1)).resolves.toEqual([]);
      });
    });

    describe('Given queue items are returned', () => {
      const queueName = 'test';
      const mockMessages = [{ test: 'test' }];

      beforeAll(() => {
        jest
          .spyOn(QueuesClient.prototype, 'dequeue')
          .mockImplementation((request, callback: any) => {
            const mockResponse = new QueueDequeueResponse();
            mockResponse.setMessagesList(
              mockMessages.map((e) => {
                const originalMessage = new QueueMessage();
                originalMessage.setStructPayload(Struct.fromJavaScript(e));
                const message = new DequeuedMessage();

                message.setMessage(originalMessage);
                message.setLeaseId('test-lease-id');

                return message;
              })
            );

            callback(null, mockResponse);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Then Queue.dequeue should resolve with an array of messages', async () => {
        const queueing = new Queueing();
        const queue = queueing.queue('test');
        await expect(queue.dequeue(1)).resolves.toEqual(
          mockMessages.map((e) => {
            return expect.objectContaining({
              leaseId: 'test-lease-id',
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
        const message = new QueueItem({
          leaseId: '1',
          message: { test: 1 },
          queue: queueing.queue('test'),
        });

        await expect(message.complete()).rejects.toBeInstanceOf(
          UnimplementedError
        );
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
        const message = new QueueItem({
          leaseId: '1',
          message: { test: 1 },
          queue: queueing.queue('test'),
        });

        await expect(message.complete()).resolves.toBeUndefined();
      });

      it('Then Queue.complete should be called once', async () => {
        expect(completeMock).toBeCalledTimes(1);
      });
    });
  });
});
