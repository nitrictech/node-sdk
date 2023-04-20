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
import { TriggerContext, HttpContext, EventContext, JSONTypes } from '.';

export type GenericHandler<Ctx> = (ctx: Ctx) => Promise<Ctx> | Ctx;

export type TriggerHandler = GenericHandler<TriggerContext>;
export type HttpHandler = GenericHandler<HttpContext>;
export type EventHandler<T> = GenericHandler<EventContext<T>>;

export type GenericMiddleware<Ctx> = (
  ctx: Ctx,
  next?: GenericHandler<Ctx>
) => Promise<Ctx | void> | Ctx | void;

export type TriggerMiddleware = GenericMiddleware<TriggerContext>;
export type HttpMiddleware<T extends JSONTypes = JSONTypes> = GenericMiddleware<HttpContext<T>>;
export type EventMiddleware<T> = GenericMiddleware<EventContext<T>>;

/**
 * createHandler
 *
 * Used to compose multiple handler functions into a single function that calls each of the provided handlers in order.
 *
 * The handlers are passed to each other via the 'next' argument.
 *
 * @param handlers one or more handler functions to be chained together into a single root function.
 * @returns - A root function composed of a chain of user provided functions
 */
export const createHandler = <Ctx extends TriggerContext = TriggerContext>(
  ...handlers: GenericMiddleware<Ctx>[]
): GenericMiddleware<Ctx> => {
  const reversedHandlers = handlers.slice().reverse();

  return async (ctx: Ctx, finalNext: GenericHandler<Ctx> = (ctx) => ctx) => {
    if (handlers.length < 1) {
      throw new Error(
        'at least one handler or middleware function must be provided'
      );
    }
    if (handlers.some((handler) => typeof handler !== 'function')) {
      throw new Error('all handlers and middleware must be functions');
    }

    // Chain the provided handlers together, passing each as 'next' to the following handler in the chain.

    const composedHandler = reversedHandlers.reduce(
      (next: GenericHandler<Ctx>, h: GenericMiddleware<Ctx>) => {
        const nextNext: GenericHandler<Ctx> = async (ctx) => {
          // Actual function written by user that calls next and returns context
          return (await h(ctx, next)) || ctx;
        };
        return nextNext;
      },
      finalNext
    );

    // Call the root user function from this function
    return await composedHandler(ctx);
  };
};
