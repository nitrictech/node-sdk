
/**
 * ResourceExhaustedError
 */
 export class ResourceExhaustedError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, ResourceExhaustedError.prototype);
	}
}