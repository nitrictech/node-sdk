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
import { eventsPublish } from './publish';
import { eventsPublishIds } from './publish-ids';

const { EventServiceClient, EventPublishResponse } = grpc.event;

const proto = EventServiceClient.prototype;

const CALLBACKFN = (response) => (_, cb: any) => cb(null, response);

describe('test events snippets', () => {
  beforeAll(() => {
    jest
      .spyOn(proto, 'publish')
      .mockImplementation(CALLBACKFN(new EventPublishResponse()));
  });

  test('ensure all events snippets run', async () => {
    await expect(eventsPublish()).resolves.toEqual(undefined);
    await expect(eventsPublishIds()).resolves.toEqual(undefined);
  });
});
