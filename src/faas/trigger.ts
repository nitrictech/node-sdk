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
  HttpTriggerContext,
  NitricTriggerContext,
  TopicTriggerContext,
} from './trigger-context';
import { faas } from '../interfaces';
import { HttpResponseContext, TopicResponseContext } from './response-context';
import { Response } from './response';

/**
 * The representation of a NitricTrigger to be passed to a {@link NitricFunction}
 */
export class NitricTrigger<T> {
  /**
   * The data provided as part of the trigger
   */
  public readonly data: string | Uint8Array;
  /**
   * The triggers context
   */
  public readonly context: NitricTriggerContext;

  constructor(data: string | Uint8Array, context: NitricTriggerContext) {
    this.data = data;
    this.context = context;
  }

  /**
   * Return the trigger data as a string
   */
  public getString = (): string => {
    if (typeof this.data !== 'string') {
      return new TextDecoder('utf-8').decode(this.data);
    }
    return this.data;
  };

  /**
   * Return the typed object, this assumes that the body is JSON
   * Will throw in the case where the object cannot be correctly serialized...
   */
  public dataAsObject = (): T => {
    return JSON.parse(this.getString());
  };

  /**
   * Returns a default response corresponding with
   * the context of the trigger
   */
  public defaultResponse<R>(): Response<R> {
    let ctx: HttpResponseContext | TopicResponseContext;

    if (this.context.isHttp()) {
      ctx = new HttpResponseContext();
    } else if (this.context.isTopic()) {
      ctx = new TopicResponseContext();
    }

    return new Response<R>(ctx);
  }

  // Instantiate a NitricRequest from the gRPC trigger model
  static fromGrpcTriggerRequest<T>(
    trigger: faas.TriggerRequest
  ): NitricTrigger<T> {
    // create context
    let context: NitricTriggerContext;

    if (trigger.hasHttp()) {
      context = HttpTriggerContext.fromGrpcHttpTriggerContext(
        trigger.getHttp()
      );
    } else if (trigger.hasTopic()) {
      context = TopicTriggerContext.fromGrpcTopicTriggerContext(
        trigger.getTopic()
      );
    } else {
      // Throw error here as we cannot identify the context of the request
      // Alternatively define NilContext and just give the data...
    }

    return new NitricTrigger(trigger.getData(), context);
  }
}
