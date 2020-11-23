/**
 * 
 */
export interface NitricContext {
  requestId: string;
  source: string;
  sourceType: "REQUEST" | "SUBSCRIPTION";
  payloadType: string;
}

/**
 * 
 */
export interface NitricRequest<T> {
  context: NitricContext;
  payload: T | Uint8Array;
}

/**
 * 
 */
export type NitricFunction<P,T> = (request: NitricRequest<P>) => T;