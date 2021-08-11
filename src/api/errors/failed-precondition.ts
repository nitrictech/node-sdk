
/**
 * FailedPreconditionError
 */
 export class FailedPreconditionError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, FailedPreconditionError.prototype);
	}
}