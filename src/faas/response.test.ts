
import { TriggerResponse } from "src/interfaces/faas";
import { Response } from "./response";
import { HttpResponseContext, TopicResponseContext } from "./response-context";

const DECODER = new TextDecoder();

describe("Response.toGrpcTriggerResponse", () => {

	describe("When translating HttpResponseContext", () => {
		let triggerResponse: TriggerResponse;

		beforeAll(() => {
			const ctx = new HttpResponseContext();
			ctx.status = 404;
			ctx.addHeader("Content-Type", "text/plain");

			const response = new Response<Record<string,string>>(ctx);
			response.data = {
				"test": "test",
			};

			triggerResponse = response.toGrpcTriggerResponse();
		});

		it("should have a http response context", () => {
			expect(triggerResponse.hasHttp()).toBe(true);
		});

		it("should have the provided status", () => {
			expect(triggerResponse.getHttp().getStatus()).toBe(404);
		});

		it("should have the provided headers", () => {
			expect(triggerResponse.getHttp().getHeadersMap().get("Content-Type")).toBe("text/plain");
		});

		it("should have the provided data encoded as bytes", () => {
			const string = DECODER.decode(triggerResponse.getData_asU8());

			expect(string).toBe(JSON.stringify({ "test": "test" }));
		});
	});

	describe("When translating TopicResponseContext", () => {
		let triggerResponse: TriggerResponse;

		beforeAll(() => {
			const ctx = new TopicResponseContext();
			ctx.success = false;

			const response = new Response<string>(ctx);
			response.data = "My Testing String";

			triggerResponse = response.toGrpcTriggerResponse();
		});

		it("should have a topic response context", () => {
			expect(triggerResponse.hasTopic()).toBe(true);
		});

		it("should have the success flag", () => {
			expect(triggerResponse.getTopic().getSuccess()).toBe(false);
		});

		it("should have the provided data encoded as bytes", () => {
			const string = DECODER.decode(triggerResponse.getData_asU8());

			expect(string).toBe("My Testing String");
		});
	});
	
});