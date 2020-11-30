import { NitricRequest } from "./request";
import { NitricResponse } from "./response";

/**
 * 
 */
export type NitricFunction<P,T> = (request: NitricRequest<P>) => Promise<NitricResponse<T>> | Promise<T>;