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
import { job, JobHandler, JobResource } from '.';
import { ResourceDeclareResponse } from '@nitric/proto/resources/v1/resources_pb';
import { status } from '@grpc/grpc-js';
import { Job } from '../api/batch/v1';

describe('Registering batch resources', () => {
  describe('Given declare returns an error from the resource server', () => {
    const MOCK_ERROR = {
      code: status.UNIMPLEMENTED,
      message: 'UNIMPLEMENTED',
    };

    const validName = 'my-job';
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
      await expect(job(validName)['registerPromise']).rejects.toBeInstanceOf(
        UnimplementedError
      );
    });

    it('Should call the resource server', () => {
      expect(declareSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Given declare succeeds on the resource server', () => {
    describe('When the service succeeds', () => {
      const validName = 'my-job2';
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
        await expect(job(validName)['registerPromise']).resolves.not.toBeNull();
      });

      it('Should call the resource server', () => {
        expect(otherSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given a batch is already registered', () => {
    const jobName = 'already-exists';
    let jobResource;
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
      jobResource = job(jobName);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('When registering a batch with the same name', () => {
      let secondJob;

      beforeEach(() => {
        // make sure the initial registration isn't counted for these tests.
        existsSpy.mockClear();
        secondJob = job(jobName);
      });

      it('Should not call the server again', () => {
        expect(existsSpy).not.toHaveBeenCalled();
      });

      it('Should return the same resource object', () => {
        expect(jobResource === secondJob).toEqual(true);
      });
    });

    describe('When declaring usage', () => {
      it('Should return a job reference', () => {
        const ref = jobResource;
        expect(ref).toBeInstanceOf(JobResource);
      });

      it('Should return a job api reference', () => {
        const ref = jobResource.allow('submit');
        expect(ref).toBeInstanceOf(Job);
      });
    });
  });
});

describe('subscription', () => {
  let startSpy;
  let mockFn;

  beforeAll(() => {
    startSpy = jest
      .spyOn(JobHandler.prototype as any, 'start')
      .mockReturnValue(Promise.resolve());
    mockFn = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('When registering a handler', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      await job('test-handler').handler(mockFn);
    });

    it('should call Handler start()', () => {
      expect(startSpy).toHaveBeenCalledTimes(1);
    });
  });
});
