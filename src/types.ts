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
  /**
   * Uniquely identifies the event.
   *
   * Within your app you must ensure the ID is unique.
   * Subscribers can assume events with the same ID are duplicates and avoid reprocessing them
   */
  id?: string;
  /**
   * An optional description of the event type.
   *
   * Can be useful for de-serialization, routing or observability. The format of this value is determined by the producer.
   */
  payloadType?: string;
  /**
   * The event's payload data, with details of the event.
   */
  payload: Record<string, any>;
}

export interface Task {
  /**
   * Uniquely identifies the task.
   *
   * Within your app you must ensure the ID is unique.
   */
  id?: string;
  /**
   * The ID for the current lease of this task.
   *
   * A task may be leased multiple times, resulting in new lease IDs.
   */
  leaseId?: string;
  /**
   * An optional description of the task type.
   *
   * Can be useful for de-serialization, routing or observability. The format of this value is determined by the producer.
   */
  payloadType?: string;
  /**
   * The task's payload data, with details of the task or work to be done.
   */
  payload?: Record<string, any>;
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
