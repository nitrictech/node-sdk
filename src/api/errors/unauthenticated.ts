
/**
 * UnauthenticatedError
 */
 export class UnauthenticatedError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, UnauthenticatedError.prototype);
	}
}