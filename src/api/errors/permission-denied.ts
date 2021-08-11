
/**
 * PermissionDeniedError
 */
 export class PermissionDeniedError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, PermissionDeniedError.prototype);
	}
}