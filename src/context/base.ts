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
export type JSONTypes = Record<string, any> | Array<any> | string;

export abstract class AbstractRequest<
  JSONT extends JSONTypes = Record<string, any>
> {
  readonly data: string | Uint8Array;
  //   readonly traceContext: api.Context;

  protected constructor(data: string | Uint8Array) {
    this.data = data;
    //this.traceContext = traceContext;
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

export abstract class BaseContext<
  Req extends AbstractRequest = AbstractRequest,
  Resp extends Record<string, any> = any
> {
  protected request: Req;
  protected response: Resp;

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
}
