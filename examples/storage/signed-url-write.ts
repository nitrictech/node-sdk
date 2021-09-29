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
import { storage, FileMode } from '@nitric/sdk';
// [END import]

export async function storagePresignedUrlWrite() {
  // [START snippet]
  // Construct a new storage client with default settings
  const storageClient = storage();

  // Get a signed url for for uploading file
  const url = await storageClient
    .bucket('my-bucket')
    .file('path/to/item')
    .signUrl(FileMode.Write, {
      // expiry in seconds
      expiry: 3600,
    });

  console.log('Generated PUT signed URL:');
  console.log(url);
  console.log('You can use this URL with any user agent, for example:');
  console.log(
    "curl -X PUT -H 'Content-Type: application/octet-stream' " +
      `--upload-file my-file '${url}'`
  );
  // [END snippet]
}
