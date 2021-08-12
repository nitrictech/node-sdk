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

import { status } from '@grpc/grpc-js';
import { fromGrpcError } from '.';
import { AbortedError } from './aborted';
import { AlreadyExistsError } from './already-exists';
import { CancelledError } from './cancelled';
import { DataLossError } from './data-loss';
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

const DECODER = new TextDecoder();

describe('fromGrpcError', () => {
	const defaultMessage = {
		message: "test",
		details: "some-detail",
	}

  describe('When translating a known error code', () => {
		describe("status.CANCELLED", () => {
			const newError = fromGrpcError({
				code: status.CANCELLED,
				...defaultMessage,
			} as any);
	
			it("should return a cancelled error", () => {
				expect(newError instanceof CancelledError).toBeTruthy();
			});
		});

		describe("status.UNKNOWN", () => {
			const newError = fromGrpcError({
				code: status.UNKNOWN,
				...defaultMessage,
			} as any);
	
			it("should return an unknown error", () => {
				expect(newError instanceof UnknownError).toBeTruthy();
			});
		});

		describe("status.INVALID_ARGUMENT", () => {
			const newError = fromGrpcError({
				code: status.INVALID_ARGUMENT,
				...defaultMessage,
			} as any);
	
			it("should return an InvalidArgument error", () => {
				expect(newError instanceof InvalidArgumentError).toBeTruthy();
			});
		});

		describe("status.NOT_FOUND", () => {
			const newError = fromGrpcError({
				code: status.NOT_FOUND,
				...defaultMessage,
			} as any);
	
			it("should return an NotFound error", () => {
				expect(newError instanceof NotFoundError).toBeTruthy();
			});
		});

		describe("status.ALREADY_EXISTS", () => {
			const newError = fromGrpcError({
				code: status.ALREADY_EXISTS,
				...defaultMessage,
			} as any);
	
			it("should return an AlreadyExists error", () => {
				expect(newError instanceof AlreadyExistsError).toBeTruthy();
			});
		});

		describe("status.PERMISSION_DENIED", () => {
			const newError = fromGrpcError({
				code: status.PERMISSION_DENIED,
				...defaultMessage,
			} as any);
	
			it("should return an PermissionDenied error", () => {
				expect(newError instanceof PermissionDeniedError).toBeTruthy();
			});
		});

		describe("status.RESOURCE_EXHAUSTED", () => {
			const newError = fromGrpcError({
				code: status.RESOURCE_EXHAUSTED,
				...defaultMessage,
			} as any);
	
			it("should return an ResourceExhausted error", () => {
				expect(newError instanceof ResourceExhaustedError).toBeTruthy();
			});
		});

		describe("status.FAILED_PRECONDITION", () => {
			const newError = fromGrpcError({
				code: status.FAILED_PRECONDITION,
				...defaultMessage,
			} as any);
	
			it("should return an FailedPrecondition error", () => {
				expect(newError instanceof FailedPreconditionError).toBeTruthy();
			});
		});

		describe("status.ABORTED", () => {
			const newError = fromGrpcError({
				code: status.ABORTED,
				...defaultMessage,
			} as any);
	
			it("should return an Aborted error", () => {
				expect(newError instanceof AbortedError).toBeTruthy();
			});
		});

		describe("status.OUT_OF_RANGE", () => {
			const newError = fromGrpcError({
				code: status.OUT_OF_RANGE,
				...defaultMessage,
			} as any);
	
			it("should return an OutOfRange error", () => {
				expect(newError instanceof OutOfRangeError).toBeTruthy();
			});
		});

		describe("status.UNIMPLEMENTED", () => {
			const newError = fromGrpcError({
				code: status.UNIMPLEMENTED,
				...defaultMessage,
			} as any);
	
			it("should return an Unimplemented error", () => {
				expect(newError instanceof UnimplementedError).toBeTruthy();
			});
		});

		describe("status.INTERNAL", () => {
			const newError = fromGrpcError({
				code: status.INTERNAL,
				...defaultMessage,
			} as any);
	
			it("should return an Internal error", () => {
				expect(newError instanceof InternalError).toBeTruthy();
			});
		});

		describe("status.UNAVAILABLE", () => {
			const newError = fromGrpcError({
				code: status.UNAVAILABLE,
				...defaultMessage,
			} as any);
	
			it("should return an Unavailable error", () => {
				expect(newError instanceof UnavailableError).toBeTruthy();
			});
		});

		describe("status.DATA_LOSS", () => {
			const newError = fromGrpcError({
				code: status.DATA_LOSS,
				...defaultMessage,
			} as any);
	
			it("should return an DataLoss error", () => {
				expect(newError instanceof DataLossError).toBeTruthy();
			});
		});

		describe("status.UNAUTHENTICATED", () => {
			const newError = fromGrpcError({
				code: status.UNAUTHENTICATED,
				...defaultMessage,
			} as any);
	
			it("should return an Unauthenticated error", () => {
				expect(newError instanceof UnauthenticatedError).toBeTruthy();
			});
		});

		describe("status.ABORTED", () => {
			const newError = fromGrpcError({
				code: status.ABORTED,
				message: "test",
				details: "some-detail",
			} as any);
	
			it("should return an aborted error", () => {
				expect(newError instanceof AbortedError).toBeTruthy();
			});
		});
    
  });

  describe('When translating a known error code', () => {
    describe("status.OK", () => {
			const newError = fromGrpcError({
				code: status.OK,
				message: "test",
				details: "some-detail",
			} as any);
	
			it("should return an unknown error", () => {
				expect(newError instanceof UnknownError).toBeTruthy();
			});
		});
  });
});
