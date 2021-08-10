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
import { storage } from '@nitric/sdk';
// [END import]

export async function storageRead() {
  // [START snippet]
  // Construct a new storage client with default settings
  const storageClient = storage();

  // Read a byte array from a bucket
  const bytes = await storageClient
    .bucket('my-bucket')
    .file('path/to/item')
    .read();
  // [END snippet]
}
