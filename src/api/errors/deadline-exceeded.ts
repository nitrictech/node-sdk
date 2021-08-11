
/**
 * DeadlineExceededError
 */
 export class DeadlineExceededError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, DeadlineExceededError.prototype);
	}
}