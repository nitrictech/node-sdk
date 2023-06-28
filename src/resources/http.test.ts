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
import * as faas from '../faas/index';
import { HttpWorkerOptions, http } from '.';
jest.mock('../faas/index');

describe('HTTP Proxy', () => {
  const startSpy = jest
    .spyOn(faas.Faas.prototype, 'start')
    .mockReturnValue(Promise.resolve());

  const mockApp = {
    listen: () => {},
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('when creating a new http proxy with an app', () => {
    let error = undefined;
    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(() => {
      try {
        http(mockApp, 1234);
      } catch (err) {
        error = err;
      }
    });

    it('should not return an error', () => {
      expect(error).toBe(undefined);
    });
  });

  describe(`when creating a new http proxy with an app and callback`, () => {
    const fakeCallback = () => {};

    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      http(mockApp, 1234, fakeCallback);
    });

    it('should create a new FaasClient', () => {
      expect(faas.Faas).toBeCalledTimes(1);
    });

    it('should provide Faas with HttpWorkerOptions', () => {
      const expectedOpts = new HttpWorkerOptions(mockApp, 1234, fakeCallback);
      expect(faas.Faas).toBeCalledWith(expectedOpts);
    });

    it('should call FaasClient::start()', () => {
      expect(startSpy).toBeCalledTimes(1);
    });
  });

  describe(`when creating a new http proxy with a bootstrap function`, () => {
    const fakeFunc = () => {};
    const fakeCallback = () => {};

    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      http(fakeFunc, 1234, fakeCallback);
    });

    it('should create a new FaasClient', () => {
      expect(faas.Faas).toBeCalledTimes(1);
    });

    it('should provide Faas with HttpWorkerOptions', () => {
      const expectedOpts = new HttpWorkerOptions(
        { listen: fakeFunc },
        1234,
        fakeCallback
      );
      expect(faas.Faas).toBeCalledWith(expectedOpts);
    });

    it('should call FaasClient::start()', () => {
      expect(startSpy).toBeCalledTimes(1);
    });
  });
});
