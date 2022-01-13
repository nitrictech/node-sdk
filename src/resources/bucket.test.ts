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

import { ResourceServiceClient } from '@nitric/api/proto/resource/v1/resource_grpc_pb';
import { UnimplementedError } from '../api/errors';
import { bucket } from '.';
import {
  BucketResource,
  ResourceDeclareResponse,
} from '@nitric/api/proto/resource/v1/resource_pb';
import { Resource } from './common';
import { Bucket } from '..';

// What we need to test about buckets
// 1. register with the name
// 2. cache is used if name is used twice
// 3. read policy can be declared
// 4. write policy can be declared

describe('Registering bucket resources', () => {
  describe('Given the server is unimplemented', () => {
    describe('When a bucket is registered', () => {
      const MOCK_ERROR = {
        code: 2,
        message: 'UNIMPLEMENTED',
      };

      const validName = 'my-bucket';
      let declareSpy;

      beforeAll(() => {
        declareSpy = jest
          .spyOn(ResourceServiceClient.prototype, 'declare')
          .mockImplementationOnce((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        declareSpy.mockClear();
      });

    it('Should throw the error', async () => {
      await expect(bucket(validName)['registerPromise']).rejects.toEqual(
        new UnimplementedError('UNIMPLEMENTED')
      );
    });

      it('Should call the resource server', () => {
        expect(declareSpy).toBeCalledTimes(1);
      });
    });
  });

  describe('Given the server is available', () => {
    describe('When registering a new bucket', () => {
      const validName = 'my-bucket2';
      let otherSpy;

      beforeAll(() => {
        otherSpy = jest
          .spyOn(ResourceServiceClient.prototype, 'declare')
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
          bucket(validName)['registerPromise']
        ).resolves.not.toBeNull();
      });

      it('Should call the resource server', () => {
        expect(otherSpy).toBeCalledTimes(1);
      });
    });

    describe('Given a bucket is already registered', () => {
      const bucketName = 'already-exists';
      let bucketResource;
      let existsSpy;

      beforeEach(() => {
        // ensure a success is returned and calls can be counted.
        existsSpy = jest
          .spyOn(ResourceServiceClient.prototype, 'declare')
          .mockImplementation((request, callback: any) => {
            const response = new ResourceDeclareResponse();
            callback(null, response);
            return null as any;
          });

        // register the bucket for the first time
        bucketResource = bucket(bucketName);
      });

      afterEach(() => {
        jest.resetAllMocks();
      });

      describe('When registering a bucket with the same name', () => {
        let secondBucket;

        beforeEach(() => {
          // make sure the initial registration isn't counted for these tests.
          existsSpy.mockClear();
          secondBucket = bucket(bucketName);
        });

        it('Should not call the server again', () => {
          expect(existsSpy).not.toBeCalled();
        });

        it('Should return the same resource object', () => {
          expect(bucketResource === secondBucket).toEqual(true);
        });
      });

      describe('When declaring usage', () => {
        it('Should return a bucket reference', () => {
          const ref = bucketResource.for('reading');
          expect(ref).toBeInstanceOf(Bucket);
        })
      })
    });
  });
});
