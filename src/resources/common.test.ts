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
import { ResourceServiceClient } from '@nitric/api/proto/resource/v1/resource_grpc_pb';
import { ResourceDetailsResponse } from '@nitric/api/proto/resource/v1/resource_pb';
import { Resource, make, ResourceDetails } from './common';

const MOCK_RESOURCE = 0;
const MOCK_DETAILS = {};

class MockResource extends Resource {
  register = jest.fn().mockReturnValue(Promise.resolve());
  permsToActions = jest.fn();
  unwrapDetails = jest.fn(() => MOCK_DETAILS);
  resourceType = jest.fn(() => MOCK_RESOURCE) as any;
}

describe('common', () => {
  describe('when calling make', () => {
    const res = make(MockResource);

    it('should create a constructor for the new resource', () => {
      expect(typeof res).toBe('function');
    });

    describe('when calling the function returned by make', () => {
      const test = res('test');
      it('should return a new instance of MockResource', () => {
        expect(test instanceof MockResource).toBe(true);
      });
    });

    describe('when creating two resources with the same name', () => {
      const test1 = res('same');
      const test2 = res('same');

      it('should return the same instance of those resource', () => {
        expect(test1).toStrictEqual(test2);
      });
    });

    describe('when calling resource details', () => {
      const test = res('same');

      let detailsSpy;
      let details: ResourceDetails<{}>;

      beforeAll(async () => {
        detailsSpy = jest
          .spyOn(ResourceServiceClient.prototype, 'details')
          .mockImplementationOnce((request, callback: any) => {
            const resp = new ResourceDetailsResponse();
            resp.setId('mock-id');
            resp.setProvider('mock-provider');
            resp.setService('mock-service');
            callback(null, resp);

            return null as any;
          });

        details = await test['details']();
      });

      afterAll(() => {
        detailsSpy.mockClear();
      });

      it('should call gRPC details method', () => {
        expect(detailsSpy).toBeCalledTimes(1);
      });

      it('should return unwrapped details', () => {
        expect(details.details).toBe(MOCK_DETAILS);
      });

      it('should return the correct id', () => {
        expect(details.id).toBe('mock-id');
      });

      it('should return the correct provider', () => {
        expect(details.provider).toBe('mock-provider');
      });

      it('should return the correct service', () => {
        expect(details.service).toBe('mock-service');
      });
    });
  });
});
