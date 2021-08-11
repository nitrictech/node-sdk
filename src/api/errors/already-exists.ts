
/**
 * AbortedError
 */
 export class AlreadyExistsError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, AlreadyExistsError.prototype);
	}
}