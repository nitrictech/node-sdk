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
  IntervalRequest as IntervalRequestPb,
  IntervalResponse as IntervalResponsePb,
} from '@nitric/proto/schedules/v1/schedules_pb';
import { AbstractRequest, BaseContext } from './base';

export interface IntervalResponse {
  success: boolean;
}

export class IntervalRequest extends AbstractRequest {
  public readonly schedule: string;

  constructor(
    schedule: string
    // traceContext: api.Context
  ) {
    super('');
    this.schedule = schedule;
  }
}

export class IntervalContext extends BaseContext<
  IntervalRequest,
  IntervalResponse
> {
  public get event(): IntervalContext {
    return this;
  }

  static fromRequest(messageRequest: IntervalRequestPb): IntervalContext {
    const schedule = messageRequest.getScheduleName();
    const ctx = new IntervalContext();

    ctx.request = new IntervalRequest(schedule);

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toResponse(_: IntervalContext): IntervalResponsePb {
    const intervalResponse = new IntervalResponsePb();

    return intervalResponse;
  }
}
