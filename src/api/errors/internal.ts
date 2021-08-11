
/**
 * InternalError
 */
 export class InternalError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, InternalError.prototype);
	}
}