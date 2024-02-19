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

import { HttpContext } from '../context/http';
import type { HttpMiddleware } from './handler';

const decodeData = (data: string | Uint8Array): string => {
  if (typeof data !== 'string') {
    return new TextDecoder('utf-8').decode(data);
  }
  return data;
};

/**
 * HttpMiddleware that takes a ctx.req containing raw data (string | Uint8Array) and parses it as JSON into ctx.body
 *
 * @returns a middleware decorator
 */
export const json = (): HttpMiddleware => (ctx: HttpContext, next) => {
  (ctx.req as any).body = JSON.parse(decodeData(ctx.req.data));
  return next(ctx);
};

/**
 * Helper method to encode to JSON string for JSON http responses.
 *
 * @param ctx HttpContext
 * @returns HttpContext with body property set with an encoded JSON string and json headers set.
 */
export const jsonResponse =
  (ctx: HttpContext) =>
  (data: string | number | boolean | Record<string, any>): HttpContext => {
    ctx.res.body = new TextEncoder().encode(JSON.stringify(data));
    ctx.res.headers['Content-Type'] = ['application/json'];

    return ctx;
  };
