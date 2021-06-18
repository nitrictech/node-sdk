

/**
 * The response context of a Nitric function
 */
export abstract class ResponseContext {
	isHttp(): boolean {
		return this instanceof HttpResponseContext;
	}

	isTopic(): boolean {
		return this instanceof TopicResponseContext;
	}

	asHttp(): HttpResponseContext {
		if (this instanceof HttpResponseContext) {
			return this;
		}

		throw new Error("Context is not HTTP");
	}

	asTopic(): TopicResponseContext {
		if (this instanceof TopicResponseContext){
			return this;
		}

		throw new Error("Context is not Topic");
	}

	static http(): HttpResponseContext {
		return new HttpResponseContext();
	}

	static topic(): TopicResponseContext {
		return new TopicResponseContext();
	}

}

export class HttpResponseContext extends ResponseContext {
	public headers: Record<string, string> = {
		"Content-Type": "text/plain",
	};
	public status = 200;

	constructor() {
		super();
	}

	public addHeader(key: string, val: string): HttpResponseContext {
		this.headers = {
			...this.headers,
			[key]: val,
		}
		return this;
	}
}

export class TopicResponseContext extends ResponseContext {
	public success = true;

	constructor() {
		super();
	}
}

