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
import { PassThrough } from 'stream';
import { deleteDocument } from './delete';
import { getDocument } from './get';
import { queryDocument } from './query';
import { queryFilterDocument } from './query-filter';
import { queryLimitsDocument } from './query-limits';
import { queryPaginatedDocument } from './query-paginated';
import { queryStreamDocument } from './query-stream';
import { getDocumentRef } from './refs';
import { setDocument } from './set';

const {
  DocumentServiceClient,
  DocumentQueryResponse,
  DocumentGetResponse,
  DocumentSetResponse,
  DocumentDeleteResponse,
} = grpc.document;

const docProto = DocumentServiceClient.prototype;

const CALLBACKFN = (response) => (_, cb: any) => cb(null, response);

describe('test document snippets', () => {
  beforeAll(() => {
    jest
      .spyOn(docProto, 'get')
      .mockImplementation(CALLBACKFN(new DocumentGetResponse()));
    jest
      .spyOn(docProto, 'set')
      .mockImplementation(CALLBACKFN(new DocumentSetResponse()));
    jest
      .spyOn(docProto, 'delete')
      .mockImplementation(CALLBACKFN(new DocumentDeleteResponse()));
    jest
      .spyOn(docProto, 'query')
      .mockImplementation(CALLBACKFN(new DocumentQueryResponse()));
    jest
      .spyOn(docProto, 'queryStream')
      // @ts-ignore
      .mockReturnValueOnce(new PassThrough().end());
  });

  test('ensure all document snippets run', async () => {
    expect(getDocumentRef()).toEqual(undefined);
    await expect(getDocument()).resolves.toEqual(null);
    await expect(setDocument()).resolves.toEqual(undefined);
    await expect(deleteDocument()).resolves.toEqual(undefined);
    await expect(queryDocument()).resolves.toEqual(undefined);
    await expect(queryFilterDocument()).resolves.toEqual(undefined);
    await expect(queryLimitsDocument()).resolves.toEqual(undefined);
    await expect(queryPaginatedDocument()).resolves.toEqual(undefined);
    await expect(queryStreamDocument()).resolves.toEqual(undefined);
  });
});
