import {
  MessageRequest as MessageRequestPb,
  MessageResponse as MessageResponsePb,
} from '@nitric/proto/topics/v1/topics_pb';

import { AbstractRequest, BaseContext } from './base';

export interface MessageResponse {
  success: boolean;
}

export class MessageRequest<T> extends AbstractRequest<T> {
  public readonly topic: string;

  constructor(
    data: string | Uint8Array,
    topic: string
    // traceContext: api.Context
  ) {
    super(data);
    this.topic = topic;
  }
}

export class MessageContext<T> extends BaseContext<
  MessageRequest<T>,
  MessageResponse
> {
  public get event(): MessageContext<T> {
    return this;
  }

  static fromMessageRequest(
    messageRequest: MessageRequestPb
  ): MessageContext<unknown> {
    const topic = messageRequest.getTopicName();
    const ctx = new MessageContext();

    const data = messageRequest.getMessage().getStructPayload().toJavaScript();

    ctx.request = new MessageRequest(JSON.stringify(data), topic);

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toMessageResponse(ctx: MessageContext<any>): MessageResponsePb {
    const evtCtx = ctx.event;
    const messageResponse = new MessageResponsePb();
    messageResponse.setSuccess(evtCtx.res.success);

    return messageResponse;
  }
}
