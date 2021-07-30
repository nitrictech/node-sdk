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
import { storage as storageService } from '../../interfaces';
import * as grpc from '@grpc/grpc-js';

/**
 * Nitric storage client, facilitates writing and reading from blob storage (buckets).
 */
export class Storage {
  StorageServiceClient: storageService.StorageServiceClient;

  constructor() {
    this.StorageServiceClient = new storageService.StorageServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  bucket = (name: string): Bucket => {
    if (!name) {
      throw new Error('A bucket name is required to use a Bucket.');
    }
    return new Bucket(this, name);
  };
}

/**
 * A reference to a storage bucket.
 */
class Bucket {
  storage: Storage;
  name: string;

  constructor(storage: Storage, name: string) {
    this.storage = storage;
    this.name = name;
  }

  file = (name: string) => {
    if (!name) {
      throw new Error('A file name/path is required to use a File.');
    }
    return new File(this.storage, this, name);
  };
}

/**
 * A reference to a file in a bucket.
 */
class File {
  storage: Storage;
  bucket: Bucket;
  name: string;

  constructor(storage: Storage, bucket: Bucket, name: string) {
    this.storage = storage;
    this.bucket = bucket;
    this.name = name;
  }

  /**
   * Write a an array of bytes to this file
   * @param body The file contents to write
   * @retuns A void promise
   *
   * Example:
   * ```typescript
   * import { Storage } from "@nitric/sdk";
   *
   * const storage = new Storage();
   *
   * const buf = Buffer.from("My Test File...");
   * await storage.bucket("my-bucket").file("my-item").write(buf);
   * ```
   */
  write = async (body: Uint8Array): Promise<void> => {
    const request = new storageService.StorageWriteRequest();
    request.setBucketName(this.bucket.name);
    request.setKey(this.name);
    request.setBody(body);

    return new Promise((resolve, reject) => {
      this.storage.StorageServiceClient.write(request, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  /**
   * Read the contents of this file as an array of bytes
   * @returns A byte array of the contents of the read blob
   *
   * Example:
   * ```typescript
   * import { Storage } from "@nitric/sdk";
   *
   * const storage = new Storage();
   *
   * const bytes = await storage.bucket("my-bucket").file("my-item").read();
   * ```
   */
  read = async (): Promise<Uint8Array> => {
    const request = new storageService.StorageReadRequest();
    request.setBucketName(this.bucket.name);
    request.setKey(this.name);

    return new Promise((resolve, reject) => {
      this.storage.StorageServiceClient.read(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getBody_asU8());
        }
      });
    });
  };

  /**
   * Delete this file from the bucket
   * @returns A void promise
   *
   * Example:
   * ```typescript
   * import { Storage } from "@nitric/sdk";
   *
   * const storage = new Storage();
   *
   * const bytes = await storage.bucket("my-bucket").file("my-item").delete();
   * ```
   */
  delete = async (): Promise<void> => {
    const request = new storageService.StorageDeleteRequest();
    request.setBucketName(this.bucket.name);
    request.setKey(this.name);

    return new Promise((resolve, reject) => {
      this.storage.StorageServiceClient.delete(request, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };
}

// Storage client singleton
let STORAGE = undefined;

/**
 * Storage
 * @returns a Storage API client.
 * @example
 * ```typescript
 * import { storage } from "@nitric/sdk";
 *
 * async function writeToStorage() {
 *  const bucket = storage().bucket('bucket');
 *  const file = bucket.file('test-file');
 *  await file.write(contents)
 * }
 * ```
 */
export const storage = (): Storage => {
  if (!STORAGE) {
    STORAGE = new Storage();
  }

  return STORAGE;
};
