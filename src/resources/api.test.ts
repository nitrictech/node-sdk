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
				await route.all(mockFn)
			});

			it("should create a new FaasClient", () => {
				expect(faas.Faas).toBeCalledTimes(1);
			});
	
			it("should provide Faas with ApiWorkerOptions", () => {
				const expectedOpts = new ApiWorkerOptions("main", "/newroute/", ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']);
				expect(faas.Faas).toBeCalledWith(expectedOpts)
			});
	
			it("should call FaasClient::start()", () => {
				expect(startSpy).toBeCalledTimes(1);
			});
		});
	});

	// individual method handlers
	["get", "post", "delete", "patch", "put"].forEach(method => {
		describe(`when creating a new ${method} handler`, () => {
			beforeAll(async () => {
				await api("main")[method]("/test/", mockFn)
			});
	
			afterAll(() => {
				jest.resetAllMocks();
			});
	
			it("should create a new FaasClient", () => {
				expect(faas.Faas).toBeCalledTimes(1);
			});
	
			it("should provide Faas with ApiWorkerOptions", () => {
				const expectedOpts = new ApiWorkerOptions("main", "/test/", [method.toUpperCase() as any]);
				expect(faas.Faas).toBeCalledWith(expectedOpts)
			});
	
			it("should call FaasClient::start()", () => {
				expect(startSpy).toBeCalledTimes(1);
			});
		});
	});
});
