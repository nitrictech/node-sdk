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
import { Secrets } from './secrets';
import { SecretServiceClient as GrpcSecretClient } from '@nitric/api/proto/secret/v1/secret_grpc_pb';
import { 
  SecretPutRequest, 
  SecretPutResponse, 
  SecretAccessRequest, 
  SecretAccessResponse, 
  SecretVersion as GrpcSecretVersion,
  Secret as GrpcSecret,
} from '@nitric/api/proto/secret/v1/secret_pb';
import { UnimplementedError } from '../../errors';

describe('Secrets Client Tests', () => {
  describe('Given nitric.api.secrets.SecretsClient.Put throws an error', () => {
    const MOCK_ERROR = {
      code: 12,
      message: 'UNIMPLEMENTED',
    };
    let sendMock;

    beforeAll(() => {
      sendMock = jest
        .spyOn(GrpcSecretClient.prototype, 'put')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('then Secret.put should reject', async () => {
      const secrets = new Secrets();

      await expect(secrets.secret('test').put('test-secret')).rejects.toEqual(
        new UnimplementedError("UNIMPLEMENTED")
      );
    });

    it('then Secret.put should be called once', () => {
      expect(sendMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.secrets.SecretsClient.Put succeeds', () => {
    let sendMock;

    beforeAll(() => {
      sendMock = jest
        .spyOn(GrpcSecretClient.prototype, 'put')
        .mockImplementation((request, callback: any) => {
          const mockResponse = new SecretPutResponse();
          const s = new GrpcSecret();
          s.setName('test');
          const sv = new GrpcSecretVersion();
          sv.setSecret(s);
          sv.setVersion('1');

          mockResponse.setSecretVersion(sv);

          callback(null, mockResponse);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('Then Secret.Put should resolve with the created secret version', async () => {
      const secrets = new Secrets();
      const secret = await secrets.secret('test').put('test-secret');

      expect(secret.version).toBe('1');
      expect(secret.secret.name).toBe('test');
    });

    it('Then Secret.Put should be called once', async () => {
      expect(sendMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.secrets.SecretsClient.Access throws an error', () => {
    const MOCK_ERROR = {
      code: 12,
      message: 'UNIMPLEMENTED',
    };
    let sendMock;

    beforeAll(() => {
      sendMock = jest
        .spyOn(GrpcSecretClient.prototype, 'access')
        .mockImplementation((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('then Secret.access should reject', async () => {
      const secrets = new Secrets();

      await expect(secrets.secret('test').latest().access()).rejects.toEqual(
        new UnimplementedError("UNIMPLEMENTED")
      );
    });

    it('then Secret.access should be called once', () => {
      expect(sendMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.secrets.SecretsClient.Access succeeds', () => {
    let sendMock;

    beforeAll(() => {
      sendMock = jest
        .spyOn(GrpcSecretClient.prototype, 'access')
        .mockImplementation((request, callback: any) => {
          const mockResponse = new SecretAccessResponse();
          const s = new GrpcSecret();
          s.setName('test');
          const sv = new GrpcSecretVersion();
          sv.setSecret(s);
          sv.setVersion('1');

          mockResponse.setSecretVersion(sv);
          const encoder = new TextEncoder();

          mockResponse.setValue(encoder.encode('test-secret'));

          callback(null, mockResponse);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('Then Secret.Access should resolve with the accessed secret version value', async () => {
      const secrets = new Secrets();
      const secretValue = await secrets.secret('test').latest().access();

      expect(secretValue.secretVersion.version).toBe('1');
      expect(secretValue.secretVersion.secret.name).toBe('test');
      expect(secretValue.asString()).toBe('test-secret');
    });

    it('Then Secret.access should be called once', async () => {
      expect(sendMock).toBeCalledTimes(1);
    });
  });
});
