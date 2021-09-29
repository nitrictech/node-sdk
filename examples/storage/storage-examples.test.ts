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
import { StorageServiceClient } from '@nitric/api/proto/storage/v1/storage_grpc_pb';
import {
  StorageDeleteResponse,
  StoragePreSignUrlResponse,
  StorageReadResponse,
  StorageWriteResponse,
} from '@nitric/api/proto/storage/v1/storage_pb';

import { storageDelete } from './delete';
import { storageRead } from './read';
import { storagePresignedUrlRead } from './signed-url-read';
import { storagePresignedUrlWrite } from './signed-url-write';
import { storageWrite } from './write';

const proto = StorageServiceClient.prototype;

const CALLBACKFN = (response) => (_, cb: any) => cb(null, response);

describe('test storage snippets', () => {
  beforeAll(() => {
    jest
      .spyOn(proto, 'delete')
      .mockImplementation(CALLBACKFN(new StorageDeleteResponse()));
    jest
      .spyOn(proto, 'read')
      .mockImplementation(CALLBACKFN(new StorageReadResponse()));
    jest
      .spyOn(proto, 'write')
      .mockImplementation(CALLBACKFN(new StorageWriteResponse()));
    jest
      .spyOn(proto, 'preSignUrl')
      .mockImplementation(CALLBACKFN(new StoragePreSignUrlResponse()));
  });

  test('ensure all storage snippets run', async () => {
    await expect(storageDelete()).resolves.toEqual(undefined);
    await expect(storageRead()).resolves.toEqual(undefined);
    await expect(storageWrite()).resolves.toEqual(undefined);
    await expect(storagePresignedUrlRead()).resolves.toEqual('');
    await expect(storagePresignedUrlWrite()).resolves.toEqual(undefined);
  });
});
