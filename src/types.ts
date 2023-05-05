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

export class NitricEvent<T extends Record<string, any> = Record<string, any>> {
  public readonly payload: T;
  public readonly id?: string;
  public readonly payloadType: string;

  constructor(payload: T, id?: string, payloadType?: string) {
    this.payload = payload;
    this.id = id;
    this.payloadType = payloadType || 'none';
  }
}

export class NitricTask<T extends Record<string, any> = Record<string, any>> {
  public readonly id: string | undefined;
  public readonly payloadType: string;
  public readonly payload: T;

  constructor({
    id = undefined,
    payload,
    payloadType = 'none',
  }: {
    id?: string;
    payloadType?: string;
    payload: T;
  }) {
    this.id = id;
    this.payload = payload;
    this.payloadType = payloadType;
  }
}

export type WhereQueryOperator =
  | '<'
  | '<='
  | '=='
  | '!='
  | '>='
  | '>'
  | 'startsWith';

export type WhereValueExpression = string | number | boolean;

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PATCH'
  | 'PUT'
  | 'DELETE'
  | 'OPTIONS';
