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

import { status, ServiceError } from '@grpc/grpc-js';
import { AbortedError } from './aborted';
import { AlreadyExistsError } from './already-exists';
import { CancelledError } from './cancelled';
import { DataLossError } from './data-loss';
import { DeadlineExceededError } from './deadline-exceeded';
import { FailedPreconditionError } from './failed-precondition';
import { InternalError } from './internal';
import { InvalidArgumentError } from './invalid-argument';
import { NotFoundError } from './not-found';
import { OutOfRangeError } from './out-of-range';
import { PermissionDeniedError } from './permission-denied';
import { ResourceExhaustedError } from './resource-exhausted';
import { UnauthenticatedError } from './unauthenticated';
import { UnavailableError } from './unavailable';
import { UnimplementedError } from './unimplemented';
import { UnknownError } from './unknown';
import { parse } from '@nitric/grpc-error-status';
import { ErrorDetails } from '@nitric/api/proto/error/v1/error_pb';

// Accept all codes except Status OK
type codes = Exclude<status, status.OK>;

const STATUS_CODE_MAP: Record<
  codes,
  new (message: string, details: ErrorDetails) => Error
> = {
  [status.CANCELLED]: CancelledError,
  [status.UNKNOWN]: UnknownError,
  [status.INVALID_ARGUMENT]: InvalidArgumentError,
  [status.DEADLINE_EXCEEDED]: DeadlineExceededError,
  [status.NOT_FOUND]: NotFoundError,
  [status.ALREADY_EXISTS]: AlreadyExistsError,
  [status.PERMISSION_DENIED]: PermissionDeniedError,
  [status.RESOURCE_EXHAUSTED]: ResourceExhaustedError,
  [status.FAILED_PRECONDITION]: FailedPreconditionError,
  [status.ABORTED]: AbortedError,
  [status.OUT_OF_RANGE]: OutOfRangeError,
  [status.UNIMPLEMENTED]: UnimplementedError,
  [status.INTERNAL]: InternalError,
  [status.UNAVAILABLE]: UnavailableError,
  [status.DATA_LOSS]: DataLossError,
  [status.UNAUTHENTICATED]: UnauthenticatedError,
};

/**
 * Translates gRPC service errors to Nitric API errors.
 *
 * @param error the original gRPC service error
 * @returns Nitric API error that maps to the provided service error code
 */
export const fromGrpcError = (error: ServiceError): Error => {
  const construct = STATUS_CODE_MAP[error.code];

  const errorStatus = parse(error);

  let errorDetails: ErrorDetails | undefined = undefined;

  if (errorStatus) {
    const allDetails = errorStatus.parseDetails(ErrorDetails);

    if (allDetails.length > 0) {
      errorDetails = allDetails[0];
    }
  }

  if (construct) {
    return new construct(error.message, errorDetails);
  }

  return new UnknownError(error.message, errorDetails);
};

// Re-export errors
export {
  CancelledError,
  UnknownError,
  InvalidArgumentError,
  DeadlineExceededError,
  NotFoundError,
  AlreadyExistsError,
  PermissionDeniedError,
  ResourceExhaustedError,
  FailedPreconditionError,
  AbortedError,
  OutOfRangeError,
  UnimplementedError,
  InternalError,
  UnavailableError,
  DataLossError,
  UnauthenticatedError,
};
