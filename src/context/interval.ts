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

  static toResponse(ctx: IntervalContext): IntervalResponsePb {
    const intervalResponse = new IntervalResponsePb();

    return intervalResponse;
  }
}
