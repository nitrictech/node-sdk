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
import {
  JobRequest as JobRequestPb,
  JobResponse as JobResponsePb,
} from '../gen/nitric/proto/batch/v1/batch_pb';
import { AbstractRequest, BaseContext } from './base';

export interface JobResponse {
  success: boolean;
}

export class JobRequest extends AbstractRequest {
  public readonly jobName: string;

  constructor(data: string | Uint8Array, jobName: string) {
    super(data);
    this.jobName = jobName;
  }
}

export class JobContext extends BaseContext<JobRequest, JobResponse> {
  public get job(): JobContext {
    return this;
  }

  static fromJobRequest(jobRequest: JobRequestPb): JobContext {
    const ctx = new JobContext();
    const jobName = jobRequest.getJobName();

    const data = jobRequest.getData().getStruct().toJavaScript();

    ctx.request = new JobRequest(JSON.stringify(data), jobName);

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toJobResponse(ctx: JobContext): JobResponsePb {
    const evtCtx = ctx.job;
    const jobResponse = new JobResponsePb();
    jobResponse.setSuccess(evtCtx.res.success);

    return jobResponse;
  }
}
