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

import { ErrorDetails } from '@nitric/sdk/gen/proto/error/v1/error_pb';
import { NitricPluginError } from './plugin-error';

/**
 * NotFoundError
 *
 * Requested resource was not found
 */
export class NotFoundError extends NitricPluginError {
  constructor(message: string, details: ErrorDetails) {
    super(message, details);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
