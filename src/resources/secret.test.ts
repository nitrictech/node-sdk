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

import { ResourcesClient } from '@nitric/proto/resources/v1/resources_grpc_pb';
import { UnimplementedError } from '../api/errors';
import { secret } from '.';
import { ResourceDeclareResponse } from '@nitric/proto/resources/v1/resources_pb';
import { Secret } from '..';
import { status } from '@grpc/grpc-js';

describe('Registering secret resources', () => {
  describe('Given the server is unimplemented', () => {
    describe('When a secret is registered', () => {
      const MOCK_ERROR = {
        code: status.UNIMPLEMENTED,
        message: 'UNIMPLEMENTED',
      };

      const validName = 'my-secret';
      let declareSpy;

      beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        declareSpy = jest
          .spyOn(ResourcesClient.prototype, 'declare')
          .mockImplementationOnce((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('Should throw the error', async () => {
        await expect(
          secret(validName)['registerPromise']
        ).rejects.toBeInstanceOf(UnimplementedError);
      });

      it('Should call the resource server', () => {
        expect(declareSpy).toBeCalledTimes(1);
      });
    });
  });

  describe('Given the server is available', () => {
    describe('When registeringa  new secret', () => {
      const validName = 'my-secret2';
      let otherSpy;

      beforeAll(() => {
        otherSpy = jest
          .spyOn(ResourcesClient.prototype, 'declare')
          .mockImplementationOnce((request, callback: any) => {
            const response = new ResourceDeclareResponse();
            callback(null, response);
            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Should succeed', async () => {
        await expect(
          secret(validName)['registerPromise']
        ).resolves.not.toBeNull();
      });

      it('Should call the resource server', () => {
        expect(otherSpy).toBeCalledTimes(1);
      });
    });
  });

  describe('Given a secret is already registered', () => {
    const secretName = 'already-exists';
    let secretResource;
    let existsSpy;

    beforeEach(() => {
      // ensure a success is returned and calls can be counted
      existsSpy = jest
        .spyOn(ResourcesClient.prototype, 'declare')
        .mockImplementation((request, callback: any) => {
          const response = new ResourceDeclareResponse();
          callback(null, response);
          return null as any;
        });

      secretResource = secret(secretName);
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    describe('When registering a secret with the same name', () => {
      let secondSecret;

      beforeEach(() => {
        existsSpy.mockClear();
        secondSecret = secret(secretName);
      });

      it('Should not call the server again', () => {
        expect(existsSpy).not.toBeCalled();
      });

      it('Should return the same resource object', () => {
        expect(secretResource === secondSecret).toEqual(true);
      });
    });

    describe('When declaring usage', () => {
      it('Should return a secret reference', () => {
        const ref = secretResource.for('accessing');
        expect(ref).toBeInstanceOf(Secret);
      });
    });
  });
});
