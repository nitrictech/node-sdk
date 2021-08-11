
/**
 * AbortedError
 */
 export class AbortedError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, AbortedError.prototype);
	}
}