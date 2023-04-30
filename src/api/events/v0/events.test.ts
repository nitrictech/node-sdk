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
import { Eventing } from './events';
import {
  NitricTopic,
  TopicListResponse,
  EventPublishResponse,
} from '@nitric/api/proto/event/v1/event_pb';
import {
  EventServiceClient as GrpcEventServiceClient,
  TopicServiceClient as GrpcTopicServiceClient,
} from '@nitric/api/proto/event/v1/event_grpc_pb';
import { UnimplementedError } from '../../errors';
import { NitricEvent } from '@nitric/sdk/types';

describe('Event Client Tests', () => {
  describe('Given nitric.interfaces.event.EventServiceClient.publish throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let publishMock;

    beforeAll(() => {
      publishMock = jest
        .spyOn(GrpcEventServiceClient.prototype, 'publish')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);
          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then Eventing.Topic.publish should reject', async () => {
      const topic = new Eventing().topic('test');
      await expect(
        topic.publish({
          id: 'test',
          payloadType: 'Test Payload',
          payload: {
            test: 'test',
          },
        })
      ).rejects.toEqual(new UnimplementedError('UNIMPLEMENTED'));
    });

    test('The Grpc client for Eventing.publish should have been called exactly once', () => {
      expect(publishMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.event.Eventing.Publish succeeds', () => {
    describe('And a id is provided', () => {
      let publishMock;

      beforeAll(() => {
        publishMock = jest
          .spyOn(GrpcEventServiceClient.prototype, 'publish')
          .mockImplementation((request, callback: any) => {
            const response = new EventPublishResponse();
            response.setId(request.getEvent().getId());
            callback(null, response);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      test('Then Eventing.publish should resolve with the provided id', async () => {
        const client = new Eventing();
        const event = new NitricEvent({ test: 'test' }, 'test', 'Test Payload');
        await expect(
          client
            .topic('test')
            .publish(new NitricEvent({ test: 'test' }, 'test', 'Test Payload'))
        ).resolves.toStrictEqual(event);
      });

      test('The Grpc client for Eventing.publish should have been called exactly once', () => {
        expect(publishMock).toBeCalledTimes(1);
      });
    });
  });

  describe('Given nitric.api.event.TopicServiceClient.List throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let listMock;

    beforeAll(() => {
      listMock = jest
        .spyOn(GrpcTopicServiceClient.prototype, 'list')
        .mockImplementation((_, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then TopicServiceClient.publish should reject', async () => {
      const eventing = new Eventing();
      await expect(eventing.topics()).rejects.toEqual(
        new UnimplementedError('UNIMPLEMENTED')
      );
    });

    test('The Grpc client for TopicServiceClient.publish should have been called exactly once', () => {
      expect(listMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.event.TopicServiceClient.List succeeds', () => {
    const MOCK_TOPIC = new NitricTopic();
    MOCK_TOPIC.setName('test-topic');
    const MOCK_TOPICS: NitricTopic[] = [MOCK_TOPIC];
    const MOCK_TOPICS_REPLY = new TopicListResponse();
    MOCK_TOPICS_REPLY.setTopicsList(MOCK_TOPICS);

    let listMock;

    beforeAll(() => {
      listMock = jest
        .spyOn(GrpcTopicServiceClient.prototype, 'list')
        .mockImplementation((_, callback: any) => {
          callback(null, MOCK_TOPICS_REPLY);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then TopicServiceClient.publish should resolve with available topics', async () => {
      const eventing = new Eventing();
      (await eventing.topics()).forEach((topic) => {
        expect(topic.eventing).toBe(eventing);
        expect(topic.name).toEqual('test-topic');
      });
    });

    test('The Grpc client for TopicServiceClient.list should have been called exactly once', () => {
      expect(listMock).toBeCalledTimes(1);
    });
  });
});
