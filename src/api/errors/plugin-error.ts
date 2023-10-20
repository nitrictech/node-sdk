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

import { ErrorDetails } from "@nitric/sdk/gen/proto/error/v1/error_pb";

/**
 * CancelledError
 *
 * Operation was cancelled (typically occurs client side)
 */
export class NitricPluginError extends Error {
  constructor(message: string, details: ErrorDetails) {
    // Format message type
    const plugin = details.getScope().getPlugin();

    const errorMessage = `${message};
Nitric Plugin Error: ${details.getScope().getPlugin()}.${details.getScope().getService()}
  Message: ${details.getMessage()}
  Caused By: ${details.getCause()}
`;

    super(errorMessage);
  }
}
