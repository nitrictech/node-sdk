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

import { ServiceError } from '@grpc/grpc-js';
import { parse } from '@nitric/grpc-error-status';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';

/**
 * Nitric Provider Error
 *
 * Generic error for Nitric Provider errors
 */
export class NitricProviderError extends Error {
  constructor(grpcError: ServiceError) {
    const errorStatus = parse(grpcError);

    let errorDetails: Struct | undefined = undefined;

    if (errorStatus) {
      const allDetails = errorStatus.parseDetails(Struct);

      if (allDetails.length > 0) {
        errorDetails = allDetails[0];
      }
    }

    let details = grpcError.details;
    try {
      details = JSON.stringify(errorDetails?.toJavaScript());
    } catch (e) {
      // Ignore
      console.debug(
        'provider returned error details in a format other than Struct. Unable to parse details'
      );
    }

    const message = `${grpcError.message}
Nitric Provider Error: ${grpcError.name}
  Code: ${grpcError.code}
  Message: ${grpcError.message}
  Details: ${details}
  Metadata: ${JSON.stringify(grpcError.metadata)}`;
    super(message);
  }
}

/**
 * NotFoundError
 *
 * Requested resource was not found
 */
export class NotFoundError extends NitricProviderError {}

/**
 * PermissionDeniedError
 *
 * The client is authenticated but does not have permission to
 * perform the requested operation
 */
export class PermissionDeniedError extends NitricProviderError {}

/**
 * AbortedError
 *
 * The operation was aborted
 */
export class AbortedError extends NitricProviderError {}

/**
 * AlreadyExistsError
 *
 * Client attempted to illegally create an entity that already exists
 */
export class AlreadyExistsError extends NitricProviderError {}

/**
 * CancelledError
 *
 * Operation was cancelled (typically occurs client side)
 */
export class CancelledError extends NitricProviderError {}

/**
 * DataLossError
 *
 * Unrecoverable data loss or corruption
 */
export class DataLossError extends NitricProviderError {}

/**
 * DeadlineExceededError
 *
 * Specified deadline was exceeded before the operation could complete
 */
export class DeadlineExceededError extends NitricProviderError {}

/**
 * FailedPreconditionError
 *
 * Operation was rejected due to the system being not being
 * in a state required for the requested operation.
 */
export class FailedPreconditionError extends NitricProviderError {}

/**
 * InternalError
 *
 * Some invariant error has incurred internally
 */
export class InternalError extends NitricProviderError {}

/**
 * InvalidArgumentError
 *
 * Invalid argument was provided by the client
 */
export class InvalidArgumentError extends NitricProviderError {}

/**
 * OutOfRangeError
 *
 * The operation was attempted outside of valid range
 * e.g. seeking past the end of a file or array, or specifying invalid offsets
 */
export class OutOfRangeError extends NitricProviderError {}

/**
 * ResourceExhaustedError
 *
 * The requested user resource has been exhausted.
 * Examples include API quotas being exceeded or disk space running out
 */
export class ResourceExhaustedError extends NitricProviderError {}

/**
 * UnauthenticatedError
 *
 * The request does not have or has invalid credentials
 */
export class UnauthenticatedError extends NitricProviderError {}

/**
 * UnavailableError
 *
 * The request operation is currently unavailable
 */
export class UnavailableError extends NitricProviderError {}

/**
 * UnimplementedError
 *
 * The requested operation was not implemented for the service provider.
 */
export class UnimplementedError extends NitricProviderError {}

/**
 * UnknownError
 *
 * Not enough information received to determine discrete error type
 */
export class UnknownError extends NitricProviderError {}
