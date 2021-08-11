
/**
 * AbortedError
 */
 export class DataLossError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, DataLossError.prototype);
	}
}