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
import { TriggerContext, HttpContext, EventContext } from '.';
//import { Response } from './response';

//type ResponseData = Uint8Array | Record<string, any> | string;

/**
 * Function definition for the Nitric FaaS framework
 * Can be either sync or async
 *
 * @param request
 * @typeParam P The type of the payload of the NitricRequest
 * @typeParam T The return type of the NitricFunction
 */
//export type NitricFunction<P, T extends ResponseData> = (
//  trigger: NitricTrigger<P>
//) => Promise<T> | T | Promise<Response<T>> | Response<T>;

export type NextHandle<Ctx> = (ctx: Ctx) => Promise<Ctx>;

export type GenericHandler<Ctx> = (ctx: Ctx, next: NextHandle<Ctx>) => Promise<Ctx>;

export type TriggerHandler = GenericHandler<TriggerContext>;
export type HttpHandler =  GenericHandler<HttpContext>;
export type EventHandler = GenericHandler<EventContext>;

export const createHandler = <
  Ctx extends TriggerContext = TriggerContext
>(...handlers: GenericHandler<Ctx>[]): GenericHandler<Ctx> => async (ctx: Ctx, finalNext: NextHandle<Ctx>) => {
  const composedHandler = handlers.reverse().reduce((next: NextHandle<Ctx>, h: GenericHandler<Ctx>) => {

    const nextNext: NextHandle<Ctx> = async (ctx) => {
      // Actual function written by user that calls next and returns context
      return await h(ctx, next);
    };
    return nextNext
  }, finalNext);

  return await composedHandler(ctx);
}


