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
export interface NitricEvent {
  id?: string;
  payloadType?: string;
  payload: Record<string, any>;
}

export interface Task {
  id?: string;
  leaseId?: string;
  payloadType?: string;
  payload?: Record<string, any>;
}

export interface PublishOptions {
  topicName: string;
  event: NitricEvent;
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

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';