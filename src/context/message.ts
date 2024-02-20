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
  public get message(): MessageContext<T> {
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
    const evtCtx = ctx.message;
    const messageResponse = new MessageResponsePb();
    messageResponse.setSuccess(evtCtx.res.success);

    return messageResponse;
  }
}
