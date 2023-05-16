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
  TraceContext,
  HeaderValue,
  HttpResponseContext,
  NotificationResponseContext,
  TopicResponseContext,
  BucketNotificationType as ProtoBucketNotificationType,
} from '@nitric/api/proto/faas/v1/faas_pb';
import * as api from '@opentelemetry/api';
import * as jspb from 'google-protobuf';
import { jsonResponse } from './json';
import { Bucket, File } from '@nitric/sdk/api';
import {
  ApiWorkerOptions,
  BucketNotificationWorkerOptions,
  FileNotificationWorkerOptions,
  SubscriptionWorkerOptions,
  bucket,
} from '@nitric/sdk';
import { FaasWorkerOptions } from './start';

export abstract class TriggerContext<
  Req extends AbstractRequest = AbstractRequest,
  Resp extends Record<string, any> = any
> {
  protected request: Req;
  protected response: Resp;

  /**
   * Noop base context http method.
   *
   * @returns undefined
   */
  public get http(): HttpContext | undefined {
    return undefined;
  }

  /**
   * Noop base context event method.
   *
   * @returns undefined
   */
  public get event(): EventContext<unknown> | undefined {
    return undefined;
  }

  /**
   * Noop base context bucketNotification method
   *
   * @returns undefined
   */
  public get bucketNotification(): BucketNotificationContext | undefined {
    return undefined;
  }

  /**
   * Return the request object from this context.
   *
   * @returns the request object.
   */
  get req(): Req {
    return this.request;
  }

  /**
   * Return the response object from this context.
   *
   * @returns the response object.
   */
  get res(): Resp {
    return this.response;
  }

  // Instantiate a concrete TriggerContext from the gRPC trigger model
  static fromGrpcTriggerRequest(
    trigger: TriggerRequest,
    options?: FaasWorkerOptions
  ): TriggerContext<any, any> {
    // create context
    if (trigger.hasHttp()) {
      return HttpContext.fromGrpcTriggerRequest(trigger);
    } else if (trigger.hasTopic()) {
      return EventContext.fromGrpcTriggerRequest(trigger);
    } else if (trigger.hasNotification()) {
      if (options instanceof FileNotificationWorkerOptions) {
        return FileNotificationContext.fromGrpcTriggerRequest(
          trigger,
          options as FileNotificationWorkerOptions
        );
      }
      return BucketNotificationContext.fromGrpcTriggerRequest(
        trigger,
        options as BucketNotificationWorkerOptions
      );
    }
    throw new Error('Unsupported trigger request type');
  }

  static toGrpcTriggerResponse(ctx: TriggerContext): TriggerResponse {
    if (ctx.http) {
      return HttpContext.toGrpcTriggerResponse(ctx);
    } else if (ctx.event) {
      return EventContext.toGrpcTriggerResponse(ctx);
    } else if (ctx.bucketNotification) {
      return BucketNotificationContext.toGrpcTriggerResponse(ctx);
    }

    throw new Error('Unsupported trigger context type');
  }
}

export type JSONTypes = Record<string, any> | Array<any> | string;

export abstract class AbstractRequest<
  JSONT extends JSONTypes = Record<string, any>
> {
  readonly data: string | Uint8Array;
  readonly traceContext: api.Context;

  protected constructor(data: string | Uint8Array, traceContext: api.Context) {
    this.data = data;
    this.traceContext = traceContext;
  }

  /**
   * Return the request payload as a string.
   * If the request was a byte array it will converted using UTF-8 text decoding.
   *
   * @returns the request payload as a string
   */
  text(): string {
    const stringPayload =
      typeof this.data === 'string'
        ? this.data
        : new TextDecoder('utf-8').decode(this.data);

    return stringPayload;
  }

  /**
   * Deserialize the request payload from JSON
   *
   * @returns JSON parsed request body
   */
  json(): JSONT {
    // attempt to deserialize as a JSON object
    const textBody = this.text();
    return textBody ? JSON.parse(textBody) : undefined;
  }
}

export interface EventResponse {
  success: boolean;
}

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD';

interface HttpRequestArgs {
  data: string | Uint8Array;
  method: Method | string;
  path: string;
  params: Record<string, string>;
  query: Record<string, string[]>;
  headers: Record<string, string[]>;
  traceContext?: api.Context;
}

export class HttpRequest extends AbstractRequest {
  public readonly method: Method | string;
  public readonly path: string;
  public readonly params: Record<string, string>;
  public readonly query: Record<string, string[]>;
  public readonly headers: Record<string, string[] | string>;

  constructor({
    data,
    method,
    path,
    params,
    query,
    headers,
    traceContext,
  }: HttpRequestArgs) {
    super(data, traceContext);
    this.method = method;
    this.path = path;
    this.params = params;
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
  public body: string | Uint8Array | Record<string, any>;
  public headers: Record<string, string[]>;
  private ctx: HttpContext;

  constructor({ status, headers, body, ctx }: HttpResponseArgs) {
    this.status = status;
    this.headers = headers;
    this.body = body;
    this.ctx = ctx;
  }

  /**
   * Helper method to encode to JSON string for JSON http responses.
   *
   * @returns HttpContext with body property set with an encoded JSON string and json headers set.
   */
  get json() {
    return jsonResponse(this.ctx);
  }
}

export class EventRequest<T> extends AbstractRequest<T> {
  public readonly topic: string;

  constructor(
    data: string | Uint8Array,
    topic: string,
    traceContext: api.Context
  ) {
    super(data, traceContext);
    this.topic = topic;
  }
}

// Propagate the context to the root context
export const getTraceContext = (traceContext: TraceContext): api.Context => {
  const traceContextObject = traceContext
    ? objectFromMap(traceContext.getValuesMap())
    : {};

  return api.propagation.extract(api.context.active(), traceContextObject);
};

const objectFromMap = (map: jspb.Map<string, string>) => {
  return map
    ? map.toObject().reduce((prev, [k, v]) => {
        prev[k] = v;
        return prev;
      }, {})
    : {};
};

// HTTP CONTEXT
export class HttpContext extends TriggerContext<HttpRequest, HttpResponse> {
  public get http(): HttpContext {
    return this;
  }

  static fromGrpcTriggerRequest(
    trigger: TriggerRequest,
    options?: ApiWorkerOptions
  ): HttpContext {
    const http = trigger.getHttp();
    const ctx = new HttpContext();

    const headers = (
      http
        .getHeadersMap()
        // getEntryList claims to return [string, faas.HeaderValue][], but really returns [string, string[][]][]
        // we force the type to match the real return type.
        .getEntryList() as unknown as [string, string[][]][]
    ).reduce(
      (acc, [key, [val]]) => ({
        ...acc,
        [key.toLowerCase()]: val.length === 1 ? val[0] : val,
      }),
      {}
    );

    const query = (
      http
        .getQueryParamsMap()
        // getEntryList claims to return [string, faas.HeaderValue][], but really returns [string, string[][]][]
        // we force the type to match the real return type.
        .getEntryList() as unknown as [string, string[][]][]
    ).reduce(
      (acc, [key, [val]]) => ({
        ...acc,
        [key]:
          val.length === 1
            ? decodeURIComponent(val[0])
            : val.map((v) => decodeURIComponent(v)),
      }),
      {}
    );

    const params = http
      .getPathParamsMap()
      // getEntryList claims to return [string, faas.HeaderValue][], but really returns [string, string[][]][]
      // we force the type to match the real return type.
      .getEntryList()
      .reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key]: val.length === 1 ? val[0] : val,
        }),
        {} as Record<string, string>
      );

    const oldQuery = http
      .getQueryParamsOldMap()
      .toArray()
      .reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key]: decodeURIComponent(val),
        }),
        {}
      );

    const oldHeaders = http
      .getHeadersOldMap()
      .toArray()
      .reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key]: val,
        }),
        {}
      );

    ctx.request = new HttpRequest({
      data: trigger.getData(),
      path: http.getPath(),
      params,
      // TODO: remove after 1.0
      // check for old query if new query is unpopulated. This is for backwards compatibility.
      query: Object.keys(query).length ? query : oldQuery,
      // TODO: remove after 1.0
      // check for old headers if new headers is unpopulated. This is for backwards compatibility.
      headers: Object.keys(headers).length ? headers : oldHeaders,
      method: http.getMethod(),
      traceContext: getTraceContext(trigger.getTraceContext()),
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

    // Convert the body content to bytes
    let body: Uint8Array;
    let bodyContentType:
      | 'text/plain'
      | 'application/octet-stream'
      | 'application/json' = 'application/octet-stream';
    if (typeof httpCtx.response.body === 'string') {
      body = new TextEncoder().encode(httpCtx.response.body);
      bodyContentType = 'text/plain';
    } else if (httpCtx.response.body instanceof Uint8Array) {
      body = httpCtx.response.body;
      bodyContentType = 'application/octet-stream';
    } else {
      body = new TextEncoder().encode(JSON.stringify(httpCtx.response.body));
      bodyContentType = 'application/json';
    }

    resp.setData(body);
    resp.getHttp().setStatus(httpCtx.response.status);

    Object.entries(httpCtx.response.headers).forEach(([k, v]) => {
      const headerVal = new HeaderValue();
      headerVal.setValueList(v);
      resp.getHttp().getHeadersMap().set(k.toLowerCase(), headerVal);
      resp.getHttp().getHeadersOldMap().set(k.toLowerCase(), v[0]);
    });

    // Automatically set the content-type header if it's missing
    const contentHeader = resp.getHttp().getHeadersMap().get('content-type');
    if (!contentHeader || contentHeader.getValueList().length === 0) {
      const headerVal = new HeaderValue();
      headerVal.setValueList([bodyContentType]);
      resp.getHttp().getHeadersMap().set('content-type', headerVal);
      resp.getHttp().getHeadersOldMap().set('content-type', bodyContentType);
    }

    return resp;
  }
}

export class EventContext<T> extends TriggerContext<
  EventRequest<T>,
  EventResponse
> {
  public get event(): EventContext<T> {
    return this;
  }

  static fromGrpcTriggerRequest(
    trigger: TriggerRequest,
    options?: SubscriptionWorkerOptions
  ): EventContext<unknown> {
    const topic = trigger.getTopic();
    const ctx = new EventContext();

    ctx.request = new EventRequest(
      trigger.getData_asU8(),
      topic.getTopic(),
      getTraceContext(trigger.getTraceContext())
    );

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

// BUCKET NOTIFICATION CONTEXT
export class BucketNotificationContext extends TriggerContext<
  BucketNotificationRequest,
  BucketNotificationResponse
> {
  public get bucketNotification(): BucketNotificationContext {
    return this;
  }

  static fromGrpcTriggerRequest(
    trigger: TriggerRequest,
    options?: BucketNotificationWorkerOptions
  ): BucketNotificationContext {
    const ctx = new BucketNotificationContext();
    const bucketConfig = trigger.getNotification().getBucket();

    ctx.request = new BucketNotificationRequest(
      trigger.getData_asU8(),
      getTraceContext(trigger.getTraceContext()),
      bucketConfig.getKey(),
      bucketConfig.getType()
    );

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toGrpcTriggerResponse(
    ctx: TriggerContext<AbstractRequest, any>
  ): TriggerResponse {
    const notifyCtx = ctx.bucketNotification;
    const triggerResponse = new TriggerResponse();
    const notificationResponse = new NotificationResponseContext();
    notificationResponse.setSuccess(notifyCtx.res.success);
    triggerResponse.setNotification(notificationResponse);
    return triggerResponse;
  }
}

export enum BucketNotificationType {
  Created,
  Deleted,
}

export class BucketNotificationRequest extends AbstractRequest {
  public readonly key: string;
  public readonly notificationType: BucketNotificationType;

  constructor(
    data: string | Uint8Array,
    traceContext: api.Context,
    key: string,
    notificationType: number
  ) {
    super(data, traceContext);

    // Get reference to the bucket
    this.key = key;
    this.notificationType = this.eventTypeToNotificationType(notificationType);
  }

  private eventTypeToNotificationType = (
    eventType: number
  ): BucketNotificationType => {
    switch (eventType) {
      case ProtoBucketNotificationType.CREATED:
        return BucketNotificationType.Created;
      case ProtoBucketNotificationType.DELETED:
        return BucketNotificationType.Deleted;
      default:
        throw new Error(`event type unsupported: ${eventType}`);
    }
  };
}

export class FileNotificationContext extends TriggerContext<
  FileNotificationRequest,
  BucketNotificationResponse
> {
  public get bucketNotification(): FileNotificationContext {
    return this;
  }

  static fromGrpcTriggerRequest(
    trigger: TriggerRequest,
    options: FileNotificationWorkerOptions
  ): BucketNotificationContext {
    const ctx = new FileNotificationContext();
    const bucketConfig = trigger.getNotification().getBucket();

    ctx.request = new FileNotificationRequest(
      trigger.getData_asU8(),
      getTraceContext(trigger.getTraceContext()),
      bucketConfig.getKey(),
      bucketConfig.getType(),
      options.bucketRef
    );

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toGrpcTriggerResponse(
    ctx: TriggerContext<AbstractRequest, any>
  ): TriggerResponse {
    const notifyCtx = ctx.bucketNotification;
    const triggerResponse = new TriggerResponse();
    const notificationResponse = new NotificationResponseContext();
    notificationResponse.setSuccess(notifyCtx.res.success);
    triggerResponse.setNotification(notificationResponse);
    return triggerResponse;
  }
}
export class FileNotificationRequest extends BucketNotificationRequest {
  public readonly file: File;

  constructor(
    data: string | Uint8Array,
    traceContext: api.Context,
    key: string,
    notificationType: number,
    bucket: Bucket
  ) {
    super(data, traceContext, key, notificationType);

    this.file = bucket.file(key);
  }
}

export interface BucketNotificationResponse {
  success: boolean;
}
