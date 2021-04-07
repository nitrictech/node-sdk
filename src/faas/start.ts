import { NitricFunction } from './function';
import { NitricRequest } from './request';
import { NitricResponse } from './response';
import micro, { buffer, send } from "micro";

/**
 * Start a nitric function
 * @param func 
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