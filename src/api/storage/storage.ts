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
import { SERVICE_BIND } from '../../constants';
import { storage } from '../../interfaces';
import * as grpc from '@grpc/grpc-js';

/**
 * Nitric queue client, facilitates writing and reading from blob storate (buckets).
 */
export class StorageClient {
  private grpcClient: storage.StorageClient;

  constructor() {
    this.grpcClient = new storage.StorageClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Write a an array of bytes to a bucket
   * @param bucket The bucket to write to
   * @param key The key/path of the item to write
   * @param body The contents to write
   * @retuns A void promise
   *
   * Example:
   * ```typescript
   * import { StorageClient } from "@nitric/sdk";
   *
   * const client = new StorageClient();
   *
   * await client.write("my-bucket", "my-item", Buffer.from("My Test File..."));
   * ```
   */
  async write(bucket: string, key: string, body: Uint8Array): Promise<void> {
    const request = new storage.StorageWriteRequest();
    request.setBucketname(bucket);
    request.setKey(key);
    request.setBody(body);

    return new Promise((resolve, reject) => {
      this.grpcClient.write(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Read an array of bytes from a bucket
   * @param bucket The bucket to read from
   * @param key The key of the blob item to read
   * @returns A byte array of the contents of the read blob
   *
   * Example:
   * ```typescript
   * import { StorageClient } from "@nitric/sdk";
   *
   * const client = new StorageClient();
   *
   * const bytes = await client.read("my-bucket", "my-item");
   * ```
   */
  async read(bucket: string, key: string): Promise<Uint8Array> {
    const request = new storage.StorageReadRequest();
    request.setBucketname(bucket);
    request.setKey(key);

    return new Promise((resolve, reject) => {
      this.grpcClient.read(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getBody_asU8());
        }
      });
    });
  }
}
