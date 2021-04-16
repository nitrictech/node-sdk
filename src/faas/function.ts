import { NitricRequest } from './request';
import { NitricResponse } from './response';

/**
 * Function defintion for the Nitric FaaS framework
 * Can be either sync or async
 *
 * @param request
 * @typeParam P The type of the payload of the NitricRequest
 * @typeParam T The return type of the NitricFunction
 */
export type NitricFunction<P, T> = (
  request: NitricRequest<P>
) => Promise<NitricResponse<T>> | Promise<T> | NitricResponse<T> | T;
