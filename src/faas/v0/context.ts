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
  TriggerRequest,
  TriggerResponse,
  TopicResponseContext,
  HttpResponseContext,
  HeaderValue,
} from '@nitric/api/proto/faas/v1/faas_pb';
import { jsonResponse } from './json';

export abstract class TriggerContext<
  Req extends AbstractRequest = AbstractRequest,
  Resp extends Record<string, any> = any
> {
  protected request: Req;
  protected response: Resp;

  /**
   *
   */
  public get http(): HttpContext | undefined {
    return undefined;
  }

  /**
   *
   */
  public get event(): EventContext | undefined {
    return undefined;
  }

  /**
   *
   */
  get req(): Req {
    return this.request;
  }

  /**
   *
   */
  get res(): Resp {
    return this.response;
  }

  // Instantiate a concrete TriggerContext from the gRPC trigger model
  static fromGrpcTriggerRequest(
    trigger: TriggerRequest
  ): TriggerContext<any, any> {
    // create context
    if (trigger.hasHttp()) {
      return HttpContext.fromGrpcTriggerRequest(trigger);
    } else if (trigger.hasTopic()) {
      return EventContext.fromGrpcTriggerRequest(trigger);
    }
    throw new Error('Unsupported trigger request type');
  }

  static toGrpcTriggerResponse(ctx: TriggerContext): TriggerResponse {
    if (ctx.http) {
      return HttpContext.toGrpcTriggerResponse(ctx);
    } else if (ctx.event) {
      return EventContext.toGrpcTriggerResponse(ctx);
    }

    throw new Error('Unsupported trigger context type');
  }
}

export abstract class AbstractRequest {
  readonly data: string | Uint8Array;

  protected constructor(data: string | Uint8Array) {
    this.data = data;
  }
}

interface EventResponse {
  success: boolean;
}

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD';

interface HttpRequestArgs {
  data: string | Uint8Array;
  method: Method | string;
  path: string;
  query: Record<string, string>;
  headers: Record<string, string[]>;
}

export class HttpRequest extends AbstractRequest {
  public readonly method: Method | string;
  public readonly path: string;
  public readonly query: Record<string, string>;
  public readonly headers: Record<string, string[] | string>;

  constructor({ data, method, path, query, headers }: HttpRequestArgs) {
    super(data);
    this.method = method;
    this.path = path;
    this.query = query;
    this.headers = headers;
  }
}

interface HttpResponseArgs {
  body: string | Uint8Array;
  status: number;
  headers: Record<string, string[]>;
  ctx: HttpContext;
}

export class HttpResponse {
  public status: number;
  public body: string | Uint8Array;
  public headers: Record<string, string[]>;
  private ctx: HttpContext;

  constructor({ status, headers, body, ctx }: HttpResponseArgs) {
    this.status = status;
    this.headers = headers;
    this.body = body;
    this.ctx = ctx;
  }

  /**
   * Helper method to encode to JSON string for JSON http responses
   * @returns HttpContext with body property set with an encoded JSON string and json headers set.
   */
  get json() {
    return jsonResponse(this.ctx);
  }
}

export class EventRequest extends AbstractRequest {
  public readonly topic: string;

  constructor(data: string | Uint8Array, topic: string) {
    super(data);
    this.topic = topic;
  }

  get payload(): string | Uint8Array {
    return this.data;
  }
}

export class HttpContext extends TriggerContext<HttpRequest, HttpResponse> {
  public get http(): HttpContext {
    return this;
  }

  static fromGrpcTriggerRequest(trigger: TriggerRequest): HttpContext {
    const http = trigger.getHttp();
    const ctx = new HttpContext();

    const headers = ((http
      .getHeadersMap()
      // XXX: getEntryList claims to return [string, faas.HeaderValue][], but really returns [string, string[][]][]
      // we force the type to match the real return type.
      .getEntryList() as unknown) as [string, string[][]][]).reduce(
      (acc, [key, [val]]) => ({
        ...acc,
        [key.toLowerCase()]: val.length === 1 ? val[0] : val,
      }),
      {}
    );

    const oldHeaders = http
      .getHeadersOldMap()
      .toArray()
      .reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key.toLowerCase()]: val,
        }),
        {}
      );

    ctx.request = new HttpRequest({
      data: trigger.getData(),
      path: http.getPath(),
      query: http
        .getQueryParamsMap()
        .toArray()
        .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {}),
      // TODO: remove after 1.0
      // check for old headers if new headers is unpopulated. This is for backwards compatibility.
      headers: Object.keys(headers).length ? headers : oldHeaders,
      method: http.getMethod(),
    });

    ctx.response = new HttpResponse({
      status: 200,
      headers: {},
      body: '',
      ctx,
    });

    if (!ctx) {
      throw new Error('failed to create context');
    }

    return ctx;
  }

  static toGrpcTriggerResponse(ctx: TriggerContext): TriggerResponse {
    const httpCtx = ctx.http;
    const resp = new TriggerResponse();

    resp.setHttp(new HttpResponseContext());
    resp.setData(httpCtx.response.body);
    resp.getHttp().setStatus(httpCtx.response.status);

    Object.entries(httpCtx.response.headers).forEach(([k, v]) => {
      const headerVal = new HeaderValue();
      headerVal.setValueList(v);
      resp.getHttp().getHeadersMap().set(k, headerVal);
      resp.getHttp().getHeadersOldMap().set(k, v[0]);
    });

    return resp;
  }
}

export class EventContext extends TriggerContext<EventRequest, EventResponse> {
  public get event(): EventContext {
    return this;
  }

  static fromGrpcTriggerRequest(trigger: TriggerRequest): EventContext {
    const topic = trigger.getTopic();
    const ctx = new EventContext();

    ctx.request = new EventRequest(trigger.getData_asU8(), topic.getTopic());

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toGrpcTriggerResponse(ctx: TriggerContext): TriggerResponse {
    const evtCtx = ctx.event;
    const triggerResponse = new TriggerResponse();
    const topicResponse = new TopicResponseContext();
    topicResponse.setSuccess(evtCtx.res.success);
    triggerResponse.setTopic(topicResponse);
    return triggerResponse;
  }
}
