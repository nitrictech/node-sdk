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

import { ResourcesClient } from '@nitric/proto/resources/v1/resources_grpc_pb';
import { UnimplementedError } from '../api/errors';
import {
  topic,
  SubscriptionWorkerOptions,
  TopicResource,
  Subscription,
} from '.';
import { ResourceDeclareResponse } from '@nitric/proto/resources/v1/resources_pb';
import { Topic } from '..';
import { Metadata, status } from '@grpc/grpc-js';

describe('Registering topic resources', () => {
  describe('Given declare returns an error from the resource server', () => {
    const MOCK_ERROR = {
      code: status.UNIMPLEMENTED,
      message: 'UNIMPLEMENTED',
    };

    const validName = 'my-topic';
    let declareSpy;

    beforeAll(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {});
      declareSpy = jest
        .spyOn(ResourcesClient.prototype, 'declare')
        .mockImplementationOnce((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('Should throw the error', async () => {
      await expect(topic(validName)['registerPromise']).rejects.toBeInstanceOf(
        UnimplementedError
      );
    });

    it('Should call the resource server', () => {
      expect(declareSpy).toBeCalledTimes(1);
    });
  });

  describe('Given declare succeeds on the resource server', () => {
    describe('When the service succeeds', () => {
      const validName = 'my-topic2';
      let otherSpy;

      beforeAll(() => {
        otherSpy = jest
          .spyOn(ResourcesClient.prototype, 'declare')
          .mockImplementationOnce((request, callback: any) => {
            const response = new ResourceDeclareResponse();
            callback(null, response);
            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Should succeed', async () => {
        await expect(
          topic(validName)['registerPromise']
        ).resolves.not.toBeNull();
      });

      it('Should call the resource server', () => {
        expect(otherSpy).toBeCalledTimes(1);
      });
    });
  });

  describe('Given a topic is already registered', () => {
    const topicName = 'already-exists';
    let topicResource;
    let existsSpy;

    beforeEach(() => {
      // ensure a success is returned and calls can be counted.
      existsSpy = jest
        .spyOn(ResourcesClient.prototype, 'declare')
        .mockImplementation((request, callback: any) => {
          const response = new ResourceDeclareResponse();
          callback(null, response);
          return null;
        });

      // register the resource for the first time
      topicResource = topic(topicName);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('When registering a topic with the same name', () => {
      let secondTopic;

      beforeEach(() => {
        // make sure the initial registration isn't counted for these tests.
        existsSpy.mockClear();
        secondTopic = topic(topicName);
      });

      it('Should not call the server again', () => {
        expect(existsSpy).not.toBeCalled();
      });

      it('Should return the same resource object', () => {
        expect(topicResource === secondTopic).toEqual(true);
      });
    });

    describe('When declaring usage', () => {
      it('Should return a topic reference', () => {
        const ref = topicResource.for('publishing');
        expect(ref).toBeInstanceOf(Topic);
      });
    });
  });
});

describe('subscription', () => {
  let startSpy;
  let mockFn;
  
  beforeAll(() => {
    startSpy = jest
      .spyOn(Subscription.prototype as any, 'start')
      .mockReturnValue(Promise.resolve());
    mockFn = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('When registering a subscription', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      await topic('test-subscribe').subscribe(mockFn);
    });

    it('should call Subscription start()', () => {
      expect(startSpy).toBeCalledTimes(1);
    });
  });
});
