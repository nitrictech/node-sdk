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
import { api, Method } from '.';
import { ResourcesClient } from '@nitric/proto/resources/v1/resources_grpc_pb';
import { ApiDetailsResponse } from '../gen/nitric/proto/apis/v1/apis_pb';
import { ApiClient } from '../gen/nitric/proto/apis/v1/apis_grpc_pb';
import { status } from '@grpc/grpc-js';

describe('Api', () => {
  const MOCK_ERROR = {
    code: status.UNIMPLEMENTED,
    message: 'UNIMPLEMENTED',
  };

  let declareSpy;
  let startSpy;
  let mockFn;
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    declareSpy = jest
      .spyOn(ResourcesClient.prototype, 'declare')
      .mockImplementationOnce((request, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    startSpy = jest
      .spyOn(Method.prototype as any, 'start')
      .mockReturnValue(Promise.resolve());
    mockFn = jest.fn();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('when create a new route', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    const route = api('main').route('/newroute/');

    describe('when registering a catch all handler', () => {
      beforeAll(async () => {
        await route.all(mockFn);
      });

      it('should call Method::start()', () => {
        expect(startSpy).toBeCalledTimes(1);
      });
    });
  });

  // individual method handlers
  ['get', 'post', 'delete', 'patch', 'put', 'options'].forEach((method) => {
    describe(`when creating a new ${method} handler`, () => {
      beforeAll(async () => {
        await api('main1', {
          path: 'v1',
        })[method]('/test/', mockFn, {
          security: {
            test: [],
          },
        });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('should call FaasClient::start()', () => {
        expect(startSpy).toBeCalledTimes(1);
      });
    });
  });

  describe('when getting the url', () => {
    describe('when api details are returned', () => {
      let a;
      let detailsSpy;

      beforeAll(async () => {
        // mock the details api
        detailsSpy = jest
          .spyOn(ApiClient.prototype, 'details')
          .mockImplementationOnce((request, callback: any) => {
            const resp = new ApiDetailsResponse();
            resp.setUrl('http://localhost:9001/test');

            callback(null, resp);

            return null as any;
          });

        a = await api('main');
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('should return the url', async () => {
        await expect(a.url()).resolves.toBe('http://localhost:9001/test');
      });
    });
  });
});
