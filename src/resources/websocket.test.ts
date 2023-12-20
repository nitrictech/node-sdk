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
import { websocket } from '.';
import { ResourceDeclareResponse } from '@nitric/proto/resources/v1/resources_pb';

jest.mock('../faas/index');

describe('Registering websocket resources', () => {
  describe('Given declare returns an error from the resource server', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };

    const validName = 'my-websocket';
    let declareSpy;

    beforeAll(() => {
      declareSpy = jest
        .spyOn(ResourcesClient.prototype, 'declare')
        .mockImplementationOnce((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      declareSpy.mockClear();
    });

    it('Should throw the error', async () => {
      await expect(websocket(validName)['registerPromise']).rejects.toEqual(
        new UnimplementedError('UNIMPLEMENTED')
      );
    });

    it('Should call the resource server', () => {
      expect(declareSpy).toBeCalledTimes(1);
    });
  });

  describe('Given declare succeeds on the resource server', () => {
    describe('When the service succeeds', () => {
      const validName = 'my-websocket2';
      let otherSpy;

      beforeAll(() => {
        otherSpy = jest
          .spyOn(ResourcesClient.prototype, 'declare')
          .mockImplementation((request, callback: any) => {
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
          websocket(validName)['registerPromise']
        ).resolves.not.toBeNull();
      });

      it('Should call the resource server twice', () => {
        expect(otherSpy).toBeCalledTimes(2);
      });
    });
  });

  describe('Given a topic is already registered', () => {
    const websocketName = 'already-exists';
    let websocketResource;
    let existsSpy;

    beforeEach(() => {
      // ensure a success is returned and calls can be counted.
      existsSpy = jest
        .spyOn(ResourcesClient.prototype, 'declare')
        .mockImplementation((request, callback: any) => {
          const response = new ResourceDeclareResponse();
          callback(null, response);
          return null as any;
        });

      // register the resource for the first time
      websocketResource = websocket(websocketName);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('When registering a topic with the same name', () => {
      let secondWebsocket;

      beforeEach(() => {
        // make sure the initial registration isn't counted for these tests.
        existsSpy.mockClear();
        secondWebsocket = websocket(websocketName);
      });

      it('Should not call the server again', () => {
        expect(existsSpy).not.toBeCalled();
      });

      it('Should return the same resource object', () => {
        expect(websocketResource === secondWebsocket).toEqual(true);
      });
    });
  });
});
