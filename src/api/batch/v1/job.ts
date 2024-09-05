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
import { BatchClient } from '@nitric/proto/batch/v1/batch_grpc_pb';
import { JobData, JobSubmitRequest } from '@nitric/proto/batch/v1/batch_pb';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import { fromGrpcError } from '../../errors';

export class Job<T extends Record<string, any> = Record<string, any>> {
  private name: string;
  private client: BatchClient;

  constructor(name: string, client: BatchClient) {
    this.name = name;
    this.client = client;
  }

  /**
   * Submit a job to the batch service
   *
   * @example
   * ```typescript
   * const analyse = job('analyse').allow('submit');
   *
   * await analyse.submit({
   *  data: 'some data',
   * });
   * ```
   *
   * @param data - Data to submit to the job
   * @returns Promise that resolves when the job has been submitted
   */
  async submit(data: T): Promise<void> {
    const request = new JobSubmitRequest();
    const jobData = new JobData();

    jobData.setStruct(Struct.fromJavaScript(data));
    request.setJobName(this.name);
    request.setData(jobData);

    return new Promise<void>((resolve, reject) => {
      this.client.submitJob(request, (error, _response) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }
}
