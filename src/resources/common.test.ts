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
import { Resource, make } from './common';

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
  });
});
