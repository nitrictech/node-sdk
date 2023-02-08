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
import * as faas from "../faas/index";
import { api, ApiWorkerOptions } from '.';
import { ResourceServiceClient } from "@nitric/api/proto/resource/v1/resource_grpc_pb";
import { ApiResourceDetails, ResourceDetailsResponse } from "@nitric/api/proto/resource/v1/resource_pb";

jest.mock('../faas/index');

describe('Api', () => {
	const startSpy = jest.spyOn(faas.Faas.prototype, 'start').mockReturnValue(Promise.resolve());
	const mockFn = jest.fn();

	afterAll(() => {
		jest.clearAllMocks();
	});

	describe("when create a new route", () => {
		afterAll(() => {
			jest.resetAllMocks();
		});

		const route = api("main").route("/newroute/");

		describe("when registing a catch all handler", () => {
			beforeAll(async () => {
				await route.all({}, mockFn)
			});

			it("should create a new FaasClient", () => {
				expect(faas.Faas).toBeCalledTimes(1);
			});

			it("should provide Faas with ApiWorkerOptions", () => {
				const expectedOpts = new ApiWorkerOptions("main", "/newroute/", ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']);
				expect(faas.Faas).toBeCalledWith(expectedOpts)
			});

			it("should call FaasClient::start()", () => {
				expect(startSpy).toBeCalledTimes(1);
			});
		});
	});

	// individual method handlers
	["get", "post", "delete", "patch", "put", "options"].forEach(method => {
		describe(`when creating a new ${method} handler`, () => {
			beforeAll(async () => {
				await api("main1", {
					path: "v1",
				})[method]("/test/", mockFn, {
					security: {
						"test": [],
					},
				})
			});

			afterAll(() => {
				jest.resetAllMocks();
			});

			it("should create a new FaasClient", () => {
				expect(faas.Faas).toBeCalledTimes(1);
			});

			it("should provide Faas with ApiWorkerOptions", () => {
				const expectedOpts = new ApiWorkerOptions("main1", "/v1/test/", [method.toUpperCase() as any], {
					security: { "test": [] }
				});
				expect(faas.Faas).toBeCalledWith(expectedOpts)
			});

			it("should call FaasClient::start()", () => {
				expect(startSpy).toBeCalledTimes(1);
			});
		});
	});

	describe("when getting the url", () => {
		describe("when api details are returned", () => {
			let a;
			let detailsSpy;
	
			beforeAll(async () => {
				// mock the details api
				detailsSpy = jest
					.spyOn(ResourceServiceClient.prototype, 'details')
					.mockImplementationOnce((request, callback: any) => {
						const resp = new ResourceDetailsResponse();
						resp.setId("mock-id");
						resp.setProvider("mock-provider");
						resp.setService("mock-service");
						

						const api = new ApiResourceDetails();
						api.setUrl("http://localhost:9001/test");
						resp.setApi(api);

						callback(null, resp);
	
						return null as any;
					});
	
				a = await api("main");
			});
	
			afterAll(() => {
				jest.resetAllMocks();
			});
	
			it("should return the url", async () => {
				await expect(a.url()).resolves.toBe("http://localhost:9001/test");
			});
		});

		describe("when non api details are returned", () => {
			let a;
			let detailsSpy;
	
			beforeAll(async () => {
				// mock the details api
				detailsSpy = jest
					.spyOn(ResourceServiceClient.prototype, 'details')
					.mockImplementationOnce((request, callback: any) => {
						const resp = new ResourceDetailsResponse();
						resp.setId("mock-id");
						resp.setProvider("mock-provider");
						resp.setService("mock-service");

						callback(null, resp);
	
						return null as any;
					});
	
				a = await api("main");
			});
	
			afterAll(() => {
				jest.resetAllMocks();
			});
	
			it("should throw an error", async () => {
				await expect(a.url()).rejects.toThrowError("Unexpected details in response. Expected API details");
			});
		});
	});
});
