
/**
 * OutOfRangeError
 */
 export class OutOfRangeError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, OutOfRangeError.prototype);
	}
}