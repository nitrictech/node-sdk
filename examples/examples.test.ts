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
import { grpc } from '@nitric/sdk';
import { getDocument, setDocument } from './documents';

const { DocumentServiceClient } = grpc.document;

describe('test snippets', () => {
  describe('test document snippets', () => {
    const MOCKED_GET_RESPONSE = {
      hasDocument: () => true,
      getDocument: () => ({
        getContent: () => ({
          toJavaScript: () => true,
        }),
      }),
    };

    beforeAll(() => {
      jest
        .spyOn(DocumentServiceClient.prototype, 'get')
        .mockImplementation((_, cb: any) => cb(null, MOCKED_GET_RESPONSE));

      jest
        .spyOn(DocumentServiceClient.prototype, 'set')
        .mockImplementation((_, cb: any) => cb(null, true));
    });

    test('ensure all document snippets run', async () => {
      await expect(getDocument()).resolves.toEqual(true);
      await expect(setDocument()).resolves.toEqual(true);
    });
  });
});
