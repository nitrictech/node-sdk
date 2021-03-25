import { NitricRequest } from "./request";
import { NitricResponse } from "./response";

/**
 * Function defintion for the Nitric FaaS framework
 */
export type NitricFunction<P,T> = (request: NitricRequest<P>) => Promise<NitricResponse<T>> | Promise<T> | NitricResponse<T> | T;