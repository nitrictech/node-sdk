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
// [START import]
import { events } from '@nitric/sdk';
// [END import]

export async function eventsPublishIds() {
  // [START snippet]
  const topic = events().topic('my-topic');

  const event = {
    // Note: the event id should be generated using a process
    // that's guaranteed to be unique for practical purposes.
    id: 'unique-event-id',
    payload: {
      value: 'Hello World!',
    },
  };

  await topic.publish(event);
  // [END snippet]
}
