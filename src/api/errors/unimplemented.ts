
/**
 * UnimplementedError
 */
 export class UnimplementedError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, UnimplementedError.prototype);
	}
}