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
import { Eventing, Topic } from './topics';
import { TopicPublishResponse } from '@nitric/proto/topics/v1/topics_pb';
import { TopicsClient as GrpcTopicServiceClient } from '@nitric/proto/topics/v1/topics_grpc_pb';
import { UnimplementedError } from '../../errors';
import { TopicsClient } from '@nitric/sdk/gen/nitric/proto/topics/v1/topics_grpc_pb';
import { status } from '@grpc/grpc-js';

describe('Event Client Tests', () => {
  describe('Given the grpc client returns an unimplemented error status', () => {
    const MOCK_ERROR = {
      code: status.UNIMPLEMENTED,
      message: 'UNIMPLEMENTED',
    };
    let publishMock;
    beforeAll(() => {
      publishMock = jest
        .spyOn(TopicsClient.prototype, 'publish')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);
          return null as any;
        });
    });
    afterAll(() => {
      jest.resetAllMocks();
    });
    test('Then publish call should return an UnimplementedError', async () => {
      const topic = new Eventing().topic('test');
      await expect(
        topic.publish({
          id: 'test',
          payloadType: 'Test Payload',
          payload: {
            test: 'test',
          },
        })
      ).rejects.toBeInstanceOf(UnimplementedError);
    });
    test('The Grpc client for Eventing.publish should have been called exactly once', () => {
      expect(publishMock).toBeCalledTimes(1);
    });
  });
  describe('Given the grpc returns successfully', () => {
    let publishMock;
    beforeAll(() => {
      publishMock = jest
        .spyOn(TopicsClient.prototype, 'publish')
        .mockImplementation((request, callback: any) => {
          const response = new TopicPublishResponse();
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
        client.topic('test').publish({ message: 'Test Payload' })
      ).resolves.toBeUndefined();
    });
    test('The Grpc client for Eventing.publish should have been called exactly once', () => {
      expect(publishMock).toBeCalledTimes(1);
    });
  });
});
