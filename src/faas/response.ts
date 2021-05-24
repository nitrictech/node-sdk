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

export class NitricResponse<P extends Record<string, any>> {
  private _status: number;
  private _body?: P;
  private _headers: Record<string, string>;

  constructor() {
    this._status = 200;
    this._headers = {};
  }

  public get status() {
    return this._status;
  }

  public get body() {
    return this._body;
  }

  public get headers() {
    return this._headers
  }

  public setStatus(status: number): NitricResponse<P> {
    this._status = status;
    return this;
  }

  public setBody(body: P): NitricResponse<P> {
    this._body = body;
    return this;
  }

  public setHeaders(headers: Record<string, string>): NitricResponse<P> {
    this._headers = headers;
    return this;
  }

  public addHeader(key: string, value: string): NitricResponse<P> {
    this._headers[key] = value;
    return this;
  }

  public static newResponse<P>(): NitricResponse<P> {
    return new NitricResponse<P>();
  }
}
