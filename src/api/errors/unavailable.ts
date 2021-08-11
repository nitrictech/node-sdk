
/**
 * UnavailableError
 */
 export class UnavailableError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, UnavailableError.prototype);
	}
}