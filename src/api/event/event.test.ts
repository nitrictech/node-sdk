// Copyright 2021, Nitric Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { EventClient } from './event';
import { event } from '../../interfaces';
import { EventPublishResponse } from '../../interfaces/event';

// Extract the EventClient
const { EventClient: GrpcEventClient } = event;

describe('Event Client Tests', () => {
  describe('Given nitric.api.event.EventClient.Publish throws an error', () => {
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

    test('Then EventClient.publish should reject', () => {
      const client = new EventClient();
      expect(
        client.publish('test', {
          id: 'test',
          payloadType: 'Test Payload',
          payload: {
            test: 'test',
          },
        })
      ).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for EventClient.publish should have been called exactly once', () => {
      expect(publishMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.event.EventClient.Publish succeeds', () => {
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

      test('Then EventClient.publish should resolve with the provided id', () => {
        const client = new EventClient();
        expect(
          client.publish('test', {
            id: 'test',
            payloadType: 'Test Payload',
            payload: {
              test: 'test',
            },
          })
        ).resolves.toBe('test');
      });

      test('The Grpc client for EventClient.publish should have been called exactly once', () => {
        expect(publishMock).toBeCalledTimes(1);
      });
    });
  });
});
