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
import { queues } from '@nitric/sdk';
// [END import]

export async function queueFailed(): Promise<void> {
  // [START snippet]
  const taskList = [{ id: '1' }, { id: '2' }]
  // Publish a collection of tasks
  const failedMessages = await queues()
    .queue('my-queue')
    .send(taskList)

  // Check that it returned Failed Messages
  for (const message in failedMessages) {
    console.log(message)
  }
  // [END snippet]
}
