// Copyright 2021, Nitric Pty Ltd.
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
import { NitricRequest } from '.';

describe('Nitric Request Tests', () => {
  describe('Given an empty HTTP request', () => {
    const headers = {
      'x-nitric-request-id': 'testID',
      'x-nitric-payload-type': 'testPayload',
      'x-nitric-source': 'testSource',
      'x-nitric-source-type': 'REQUEST',
    };

    const nitricRequest = new NitricRequest<any>(headers);

    test('NitricRequest.getObject, should throw', () => {
      expect(nitricRequest.getObject).toThrow('Unexpected end of JSON input');
    });

    test('NitricRequest.getBody, should return undefined', () => {
      expect(nitricRequest.getBody()).toBeUndefined();
    });

    test('NitricRequest.hasBody, should return false', () => {
      expect(nitricRequest.hasBody()).toBe(false);
    });

    test('NitricRequest.getString, should be empty', () => {
      expect(nitricRequest.getString()).toBe('');
    });

    describe('NitricRequest.context, should be composed from provided headers', () => {
      const context = nitricRequest.getContext();
      test(`requestId should be ${headers['x-nitric-request-id']}`, () => {
        expect(context.requestId).toEqual(headers['x-nitric-request-id']);
      });

      test(`payloadType should be ${headers['x-nitric-payload-type']}`, () => {
        expect(context.payloadType).toEqual(headers['x-nitric-payload-type']);
      });

      test(`source should be ${headers['x-nitric-source-type']}`, () => {
        expect(context.sourceType).toEqual(headers['x-nitric-source-type']);
      });

      test(`source should be ${headers['x-nitric-source']}`, () => {
        expect(context.source).toEqual(headers['x-nitric-source']);
      });
    });
  });

  describe('Given a JSON HTTP request', () => {
    const headers = {
      'x-nitric-request-id': 'testID',
      'x-nitric-payload-type': 'testPayload',
      'x-nitric-source': 'testSource',
      'x-nitric-source-type': 'REQUEST',
    };

    const testObject = {
      test: 'test',
    };

    const encoder = new TextEncoder();

    const nitricRequest = new NitricRequest<typeof testObject>(
      headers,
      encoder.encode(JSON.stringify(testObject))
    );

    test('NitricRequest.getObject, should throw', () => {
      expect(nitricRequest.getObject()).toEqual(testObject);
    });

    test('NitricRequest.hasBody, should return true', () => {
      expect(nitricRequest.hasBody()).toBe(true);
    });
  });

  describe('Given a plain text HTTP request', () => {
    const headers = {
      'x-nitric-request-id': 'testID',
      'x-nitric-payload-type': 'testPayload',
      'x-nitric-source': 'testSource',
      'x-nitric-source-type': 'REQUEST',
    };

    const testObject = 'test';
    const encoder = new TextEncoder();

    const nitricRequest = new NitricRequest<typeof testObject>(
      headers,
      encoder.encode(testObject)
    );

    test('NitricRequest.getObject, should throw', () => {
      expect(nitricRequest.getObject).toThrow('Unexpected token');
    });

    test('NitricRequest.getString, should equal the provided string', () => {
      expect(nitricRequest.getString()).toEqual(testObject);
    });

    test('NitricRequest.hasBody, should return true', () => {
      expect(nitricRequest.hasBody()).toBe(true);
    });
  });

  describe('Given a HTTP request with paramaters', () => {
    const headers = {
      'x-nitric-request-id': 'testID',
      'x-nitric-payload-type': 'testPayload',
      'x-nitric-source': 'testSource',
      'x-nitric-source-type': 'REQUEST',
    };

    const testObject = 'test';

    const nitricRequest = new NitricRequest<typeof testObject>(
      headers,
      undefined,
      '/customers/1234?firstName=John'
    );

    describe('When calling NitricRequest.getContextParams with matching path', () => {
      test('Path parameters should be captured', () => {
        expect(nitricRequest.getParams('/customers/:customerId')).toEqual({
          path: { customerId: '1234' },
          query: { firstName: 'John' },
        });
      });
    });
  });
});
