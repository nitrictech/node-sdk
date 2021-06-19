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

import { HttpResponseContext, TopicResponseContext, TriggerResponse } from "../interfaces/faas";
import { ResponseContext } from "./response-context";

type ResponseData = string | Record<string, any> | Uint8Array;

const ENCODER = new TextEncoder();

export class Response<T extends ResponseData = string> {
  public readonly context: ResponseContext;
  public data: T = "" as T;

  constructor(ctx: ResponseContext) {
    this.context = ctx;
  }

  public toGrpcTriggerResponse(): TriggerResponse {
    const triggerResponse = new TriggerResponse();

    if (typeof this.data === "string") {
      triggerResponse.setData(ENCODER.encode(this.data));
    } else if (this.data instanceof Uint8Array) {
      triggerResponse.setData(this.data);
    } else {
      const jsonString = JSON.stringify(this.data);
      triggerResponse.setData(ENCODER.encode(jsonString));
    }
    

    if (this.context.isHttp()) {
      const origCtx = this.context.asHttp();
      const ctx = new HttpResponseContext();

      ctx.setStatus(origCtx.status);

      Object.entries(origCtx.headers).forEach(([key, val]) => {
        ctx.getHeadersMap().set(key, val);
      });

      triggerResponse.setHttp(ctx);
    } else if (this.context.isTopic()) {
      const ctx = new TopicResponseContext();

      ctx.setSuccess(this.context.asTopic().success);

      triggerResponse.setTopic(ctx);
    }

    return triggerResponse;
  }
}
