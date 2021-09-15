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