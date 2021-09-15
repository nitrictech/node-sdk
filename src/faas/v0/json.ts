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
import { HttpContext, HttpMiddleware } from ".";

const decodeData = (data: string | Uint8Array): string => {
  if (typeof data !== 'string') {
    return new TextDecoder('utf-8').decode(data);
  }
  return data;
};

/**
 * HttpMiddleware that takes a ctx.req containing raw data (string | Uint8Array) and parses it as JSON into ctx.body
 * @param ctx HttpContext containing the raw request data.
 * @returns HttpContext with body property added containing a decoded JSON object from the req data.
 */
export const json: HttpMiddleware = (ctx: HttpContext) => {
  (ctx.req as any).body = JSON.parse(decodeData(ctx.req.data));
  return ctx;
};