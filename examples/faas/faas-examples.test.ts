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
import { events } from './event';
import { FaasServiceClient } from '@nitric/api/proto/faas/v1/faas_grpc_pb';

const proto = FaasServiceClient.prototype;

// We only need to handle half of the duplex stream
class MockClientStream<Req, Resp> {
  public recievedMessages: Req[] = [];

  private listeners: {
    [event: string]: ((req: Resp | string) => void)[];
  } = {};

  public write(req: Req) {
    this.recievedMessages.push(req);
  }

  public on(event: string, cback: (req: Resp) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(cback);
  }

  public emit(event: string, req: Resp | string) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((l) => l(req));
    }
  }
}

describe('test queues snippets', () => {
  let mockStream = null as any;

  beforeEach(() => {
    mockStream = new MockClientStream() as any;
    jest
      .spyOn(proto, 'triggerStream')
      .mockReturnValue(mockStream);
  });

  test('events snippet', async () => {
    // Ensure event snippet is valid typescript
    const evtPromise = events();

    // close the stream
    mockStream.emit('end', 'EOF');

    await expect(evtPromise).resolves.toEqual(undefined);
  });
});
