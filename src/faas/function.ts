// Copyright 2021, Nitric Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
