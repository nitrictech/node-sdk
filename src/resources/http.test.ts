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
import { HttpWorkerOptions, http } from '.';
import { HttpClient } from '../gen/nitric/proto/http/v1/http_grpc_pb';

jest.mock('portfinder', () => {
  const originalModule = jest.requireActual('portfinder');

  return {
    __esmodule: true,
    ...originalModule,
    getPort: (callback: (err, port) => void) => {
      callback('', 1234);
    },
  };
});

describe.skip('HTTP Proxy', () => {
  const httpProxySpy = jest
    .spyOn(HttpClient.prototype, 'proxy')
    .mockReturnValue({} as any);

  const mockApp = {
    listen: () => {
      return {
        on: () => {},
      } as any
    },
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe.skip('when creating a new http proxy with an app', () => {
    let error = undefined;
    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(() => {
      try {
        http(mockApp);
      } catch (err) {
        error = err;
      }
    });

    it('should not return an error', () => {
      expect(error).toBe(undefined);
    });
  });

  describe.skip(`when creating a new http proxy with an app and callback`, () => {
    const fakeCallback = () => {};

    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      http(mockApp, fakeCallback);
    });

    it('should call HttpClient::proxy()', () => {
      expect(httpProxySpy).toBeCalledTimes(1);
    });
  });

  describe.skip(`when creating a new http proxy with a bootstrap function`, () => {
    const fakeFunc = () => {
      return {
        on: () => {},
      } as any
    };
    const fakeCallback = () => {};

    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      http(fakeFunc, fakeCallback);
    });

    it('should call HttpClient::proxy()', () => {
      expect(httpProxySpy).toBeCalledTimes(1);
    });
  });
});
