// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { start } from './start';
import * as micro from "micro";
import { NitricResponse } from "./response";



interface MockIncomingMessage {
	body: string;
	headers: Record<string, string>;
	url?: string,
}

class MockServerResponse {
	public readonly headers: Record<string, string>;

	constructor() {
		this.headers = {};
	}

	public setHeader(key: string, val: string) {
		this.headers[key] = val;
	}
}

// Mock micro, and have it return a default handler
jest.mock("micro", () => ({
	__esModule: true,
	default: (handler: any) => {
		// Return a mock server instance...
		// we just need a listen method here to confirm that
		// the returned server is started

		return {
			// Invoke the function provided to the micro
			// server, this is just a test hook to
			// save sending real request responses
			invoke: (...args) => {
				return handler(...args);
			},
			listen: jest.fn(),
		};
	},
	send: jest.fn(),
	buffer: jest.fn(),
}));

afterAll(() => {
	jest.restoreAllMocks();
});

const mockSend = micro.send as jest.Mock;
const mockBuffer = micro.buffer as jest.Mock;

describe('faas.start return handling', () => {
	describe('when returning a plain object', () => {
		let server;
		const mockServerResponse = new MockServerResponse();
		const f = () => {
			return {
				test: "test",
			};
		};

		beforeAll(async () => {
			server = await start(f);
			server.invoke({
				body: "Testing",
				headers: {},
			} as MockIncomingMessage, mockServerResponse);
			mockBuffer.mockReturnValueOnce("Testing");
		});

		afterAll(() => {
			mockBuffer.mockClear();
			mockSend.mockClear();
		});

		it("Should start the server", () => {
			expect(server.listen).toBeCalled();
		});

		it("Should not call mock send", () => {
			expect(mockSend).not.toBeCalled();
		});
	});

	describe('when returning a Nitric Response', () => {
		let server;
		const f = () => {
			return new NitricResponse()
				.setStatus(201)
				.setBody("Testing")
				.addHeader("test-header", "test");
		};

		beforeAll(async () => {
			server = await start(f);
			server.invoke({
				body: "Testing",
				headers: {},
			} as MockIncomingMessage, new MockServerResponse());
			mockBuffer.mockReturnValueOnce("Testing");
		});

		afterAll(() => {
			mockSend.mockReset();
			mockBuffer.mockReset();
		});

		it("Should call micro send with 201 status", () => {
			expect(mockSend).toBeCalledWith(expect.anything(), 201, expect.anything());
		});

		it("Should call micro send provided response", () => {
			expect(mockSend).toBeCalledWith(expect.anything(), expect.anything(), "Testing");
		});

		it("Should call micro send with the returned headers", () => {
			const [response] = mockSend.mock.calls[0];
			expect(response.headers).toEqual({
				'test-header': 'test'
			});
		});
	});
});