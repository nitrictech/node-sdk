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
import {
  AbortedError,
  AlreadyExistsError,
  CancelledError,
  DataLossError,
  DeadlineExceededError,
  FailedPreconditionError,
  InternalError,
  InvalidArgumentError,
  NotFoundError,
  OutOfRangeError,
  PermissionDeniedError,
  ResourceExhaustedError,
  UnauthenticatedError,
  UnavailableError,
  UnimplementedError,
  UnknownError,
} from './provider-error';
import { parse } from '@nitric/grpc-error-status';

// Accept all codes except Status OK
type codes = Exclude<status, status.OK>;

const STATUS_CODE_MAP: Record<
  codes,
  new (grpcError: ServiceError) => Error
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

  if (construct) {
    return new construct(error);
  }

  return new UnknownError(error);
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
