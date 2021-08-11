
/**
 * UnknownError
 */
 export class UnknownError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, UnknownError.prototype);
	}
}