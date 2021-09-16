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
import { secretsAccess } from './access';
import { secretsLatest } from './latest';
import { secretsPut } from './put';
import { SecretServiceClient } from '@nitric/api/proto/secret/v1/secret_grpc_pb';
import { 
  SecretAccessResponse,
  SecretPutResponse,
  SecretVersion,
  Secret
} from '@nitric/api/proto/secret/v1/secret_pb';

const proto = SecretServiceClient.prototype;

describe('test secrets snippets', () => {
  beforeAll(() => {
    jest.spyOn(proto, 'access').mockImplementation((request, callback: any) => {
      const mockResponse = new SecretAccessResponse();
      const s = new Secret();
      s.setName('database.password');
      const sv = new SecretVersion();
      sv.setSecret(s);
      sv.setVersion('1');

      mockResponse.setSecretVersion(sv);
      const encoder = new TextEncoder();

      mockResponse.setValue(encoder.encode('test'));

      callback(null, mockResponse);

      return null as any;
    });

    jest.spyOn(proto, 'put').mockImplementation((request, callback: any) => {
      const mockResponse = new SecretPutResponse();
      const s = new Secret();
      s.setName('test');
      const sv = new SecretVersion();
      sv.setSecret(s);
      sv.setVersion('1');

      mockResponse.setSecretVersion(sv);

      callback(null, mockResponse);

      return null as any;
    });
  });

  test('ensure all secrets snippets run', async () => {
    await expect(secretsPut()).resolves.toEqual(undefined);
    await expect(secretsLatest()).resolves.toEqual(undefined);
    await expect(secretsAccess()).resolves.toEqual(undefined);
  });
});
