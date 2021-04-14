import { NitricFunction } from './function';
import { NitricRequest } from './request';
import { NitricResponse } from './response';
import micro, { buffer, send } from "micro";

/**
 * Starts a nitric function
 * 
 * Example:
 * ```typescript
 * import { faas } from "@nitric/sdk";
 * 
 * interface Greeting {
 *   greeting?: string;
 * 	 name: string;
 * }
 * 
 * async function handler(request: faas.NitricRequest<Greeting>): Promise<faas.NitricResponse<string>> {
 * 	 const { name, greeting = "hello" } = request.getObject();
 * 
 * 	 return `${greeting} ${name}!`;
 * }
 * 
 * faas.start(handler);
 * ```
 * @param func The function handler see {@link NitricFunction}
 * @typeParam Request The contents of the provided nitric request
 * @typeParam Response The type the function handler returns
 */
export async function start<Request = any, Response = any>(func: NitricFunction<Request, Response>) {
	const [_, port] = (process.env["CHILD_ADDRESS"] || "127.0.0.1:8080").split(":");
	const server = micro(async (req, res) => {

		const payload = await buffer(req);

		let buff: Uint8Array = null;
		if (typeof payload === "string") {
			const enc = new TextEncoder();
			buff = enc.encode(payload);
		} else {
			buff = payload;
		}

		const nitricRequest = new NitricRequest<Request>(req.headers as Record<string, string>, buff, req.url)
		const nitricResponse = await func(nitricRequest);

		// Return parsed http response...
		if (nitricResponse['status'] && nitricResponse['headers'] && nitricResponse['body']) {
			const typedResponse = nitricResponse as NitricResponse<Response>;

			res.writeHead(typedResponse.status);

			Object.keys(typedResponse.headers).forEach(k => {
				res.setHeader(k, typedResponse.headers[k]);
			});
			send(res, typedResponse.status, typedResponse.body)
			return;
		} 

		return nitricResponse;
	});

	await server.listen(port);
	console.log(`Function listening on ${port}`);
}