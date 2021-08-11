
/**
 * CancelledError
 */
export class CancelledError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, CancelledError.prototype);
	}
}