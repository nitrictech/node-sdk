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
import { faas } from '../interfaces';

export abstract class NitricTriggerContext {
  /**
   * Determine if the trigger source was HTTP
   * @returns true if the trigger source was an HTTP Request
   */
  public isHttp(): boolean {
    return this instanceof HttpTriggerContext;
  }

  /**
   * Determine if the trigger source was a Topic
   * @returns true if the trigger is an Event from a Topic
   */
  public isTopic(): boolean {
    return this instanceof TopicTriggerContext;
  }

  /**
   * Retrieve HTTP specific trigger context
   * @returns the HTTP trigger context data
   */
  public asHttp(): HttpTriggerContext {
    if (this instanceof HttpTriggerContext) {
      return this;
    }

    throw new Error('Context is not topic context');
  }

  /**
   * Retrieve the Topic/Event specific trigger context
   * @returns the Topic trigger context data
   */
  public asTopic(): TopicTriggerContext {
    if (this instanceof TopicTriggerContext) {
      return this;
    }

    throw new Error('Context is not topic context');
  }
}

/**
 * Represents data specific to triggers from HTTP Requests, such as headers, path, etc.
 */
export class HttpTriggerContext extends NitricTriggerContext {
  public readonly method: string;
  public readonly path: string;
  public readonly headers: Record<string, string>;
  public readonly query: Record<string, string>;
  public readonly params: Record<string, string>;

  public constructor(
    method: string,
    path: string,
    headers: Record<string, string>,
    query: Record<string, string>
  ) {
    super();
    this.method = method;
    this.headers = headers;
    this.query = query;
    this.path = path;
  }

  static fromGrpcHttpTriggerContext(
    ctx: faas.HttpTriggerContext
  ): HttpTriggerContext {
    return new HttpTriggerContext(
      ctx.getMethod(),
      ctx.getPath(),
      ctx
        .getHeadersMap()
        .toArray()
        .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {}),
      ctx
        .getQueryParamsMap()
        .toArray()
        .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
    );
  }
}

/**
 * Represents data specific to triggers from Events via a Topic, such as the topic name.
 */
export class TopicTriggerContext extends NitricTriggerContext {
  public readonly topic: string;

  public constructor(topic: string) {
    super();
    this.topic = topic;
  }

  static fromGrpcTopicTriggerContext(
    ctx: faas.TopicTriggerContext
  ): TopicTriggerContext {
    return new TopicTriggerContext(ctx.getTopic());
  }
}
