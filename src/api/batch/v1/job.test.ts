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
import { Job } from './job';
import { UnimplementedError } from '../../errors';
import { status } from '@grpc/grpc-js';
import { getBatchClient } from './batch';
import { JobSubmitResponse } from '@nitric/sdk/gen/nitric/proto/batch/v1/batch_pb';
import { BatchClient } from '@nitric/sdk/gen/nitric/proto/batch/v1/batch_grpc_pb';

describe('Job Client Tests', () => {
  describe('Given the grpc client returns an unimplemented error status', () => {
    const MOCK_ERROR = {
      code: status.UNIMPLEMENTED,
      message: 'UNIMPLEMENTED',
    };
    let submitMock;
    beforeAll(() => {
      submitMock = jest
        .spyOn(BatchClient.prototype, 'submitJob')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);
          return null as any;
        });
    });
    afterAll(() => {
      jest.resetAllMocks();
    });
    test('Then submit call should return an UnimplementedError', async () => {
      const job = new Job('test', getBatchClient());
      await expect(
        job.submit({
          test: 'test',
        })
      ).rejects.toBeInstanceOf(UnimplementedError);
    });
    test('The Grpc client for Job.submit should have been called exactly once', () => {
      expect(submitMock).toHaveBeenCalledTimes(1);
    });
  });
  describe('Given the grpc returns successfully', () => {
    let submitMock;
    beforeAll(() => {
      submitMock = jest
        .spyOn(BatchClient.prototype, 'submitJob')
        .mockImplementation((request, callback: any) => {
          const response = new JobSubmitResponse();
          callback(null, response);
          return null as any;
        });
    });
    afterAll(() => {
      jest.resetAllMocks();
    });
    test('Then Eventing.submit should resolve with the provided id', async () => {
      const client = new Job('test', getBatchClient());
      await expect(
        client.submit({ message: 'Test Payload' })
      ).resolves.toBeUndefined();
    });
    test('The Grpc client for Eventing.submit should have been called exactly once', () => {
      expect(submitMock).toHaveBeenCalledTimes(1);
    });
  });
});
