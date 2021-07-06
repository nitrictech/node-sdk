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
import { Eventing } from './event';
import { event } from '../../interfaces';
import { EventPublishResponse } from '../../interfaces/event';

const { EventClient: GrpcEventClient } = event;

describe('Event Client Tests', () => {
  describe('Given nitric.interfaces.event.EventClient.publish throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let publishMock;

    beforeAll(() => {
      publishMock = jest
        .spyOn(GrpcEventClient.prototype, 'publish')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);
          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then Eventing.Topic.publish should reject', () => {
      const topic = new Eventing().topic('test');
      expect(
        topic.publish({
          id: 'test',
          payloadType: 'Test Payload',
          payload: {
            test: 'test',
          },
        })
      ).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for Eventing.publish should have been called exactly once', () => {
      expect(publishMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.event.Eventing.Publish succeeds', () => {
    describe('And a id is provided', () => {
      const MOCK_ERROR = {
        code: 2,
        message: 'UNIMPLEMENTED',
      };
      let publishMock;

      beforeAll(() => {
        publishMock = jest
          .spyOn(GrpcEventClient.prototype, 'publish')
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
        await expect(
          client.topic('test').publish({
            id: 'test',
            payloadType: 'Test Payload',
            payload: {
              test: 'test',
            },
          })
        ).resolves.toStrictEqual({"id": "test", "payload": {"test": "test"}, "payloadType": "Test Payload"});
      });

      test('The Grpc client for Eventing.publish should have been called exactly once', () => {
        expect(publishMock).toBeCalledTimes(1);
      });
    });
  });
});
