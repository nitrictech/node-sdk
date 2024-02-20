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
  HeaderValue,
  HttpRequest as HttpRequestPb,
  HttpResponse as HttpResponsePb,
} from '@nitric/proto/apis/v1/apis_pb';
import { AbstractRequest, BaseContext } from './base';
import { jsonResponse } from '../handlers/json';

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD';

interface HttpRequestArgs {
  data: string | Uint8Array;
  method: Method | string;
  path: string;
  params: Record<string, string>;
  query: Record<string, string[]>;
  headers: Record<string, string[]>;
  // traceContext?: api.Context;
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
  }: // traceContext,
  HttpRequestArgs) {
    super(data);
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
  get json(): (
    data: string | number | boolean | Record<string, any>
  ) => HttpContext {
    return jsonResponse(this.ctx);
  }
}

export class HttpContext extends BaseContext<HttpRequest, HttpResponse> {
  public get http(): HttpContext {
    return this;
  }

  static fromHttpRequest(http: HttpRequestPb): HttpContext {
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

    ctx.request = new HttpRequest({
      data: http.getBody(),
      path: http.getPath(),
      params,
      query,
      headers,
      method: http.getMethod(),
      //traceContext: getTraceContext(trigger.getTraceContext()),
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

  static toHttpResponse(ctx: HttpContext): HttpResponsePb {
    const httpCtx = ctx.http;
    const resp = new HttpResponsePb();

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

    resp.setBody(body);
    resp.setStatus(httpCtx.response.status);

    Object.entries(httpCtx.response.headers).forEach(([k, v]) => {
      const headerVal = new HeaderValue();
      headerVal.setValueList(v);
      resp.getHeadersMap().set(k.toLowerCase(), headerVal);
    });

    // Automatically set the content-type header if it's missing
    const contentHeader = resp.getHeadersMap().get('content-type');
    if (!contentHeader || contentHeader.getValueList().length === 0) {
      const headerVal = new HeaderValue();
      headerVal.setValueList([bodyContentType]);
      resp.getHeadersMap().set('content-type', headerVal);
    }

    return resp;
  }
}
