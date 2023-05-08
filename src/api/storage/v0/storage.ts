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
import { SERVICE_BIND } from '../../../constants';
import { StorageServiceClient } from '@nitric/api/proto/storage/v1/storage_grpc_pb';
import {
  StorageWriteRequest,
  StorageReadRequest,
  StorageDeleteRequest,
  StoragePreSignUrlRequest,
  StorageListFilesRequest,
} from '@nitric/api/proto/storage/v1/storage_pb';
import * as grpc from '@grpc/grpc-js';
import { fromGrpcError, InvalidArgumentError } from '../../errors';

/**
 * Nitric storage client, facilitates writing and reading from blob storage (buckets).
 */
export class Storage {
  StorageServiceClient: StorageServiceClient;

  constructor() {
    this.StorageServiceClient = new StorageServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Create a bucket reference.
   *
   * @param name of the bucket to reference
   * @returns a bucket reference
   */
  public bucket(name: string): Bucket {
    if (!name) {
      throw new InvalidArgumentError(
        'A bucket name is required to use a Bucket.'
      );
    }
    return new Bucket(this, name);
  }
}

/**
 * A reference to a storage bucket.
 */
export class Bucket {
  private storage: Storage;
  name: string;

  constructor(storage: Storage, name: string) {
    this.storage = storage;
    this.name = name;
  }

  /**
   * Retrieve a list of files on the bucket.
   *
   * @returns An array of file references
   */
  public async files(): Promise<File[]> {
    const request = new StorageListFilesRequest();

    request.setBucketName(this.name);

    return await new Promise<File[]>((res, rej) => {
      this.storage.StorageServiceClient.listFiles(request, (err, data) => {
        if (err) {
          rej(fromGrpcError(err));
        }

        res(
          data.getFilesList().map((f) => {
            return new File(this.storage, this, f.getKey());
          })
        );
      });
    });
  }

  public file(name: string) {
    if (!name) {
      throw new InvalidArgumentError(
        'A file name/path is required to use a File.'
      );
    }
    return new File(this.storage, this, name);
  }
}

export enum FileMode {
  Read = 0,
  Write = 1,
}

export interface SignUrlOptions {
  /**
   * The number of seconds the signed URL remains valid.
   * The minimum value is 1 and the maximum value is 604800 (7 days).
   */
  expiry?: number;
}

const DEFAULT_SIGN_URL_OPTS = {
  expiry: 600,
};

/**
 * A reference to a file in a bucket.
 */
export class File {
  storage: Storage;
  bucket: Bucket;
  name: string;

  constructor(storage: Storage, bucket: Bucket, name: string) {
    this.storage = storage;
    this.bucket = bucket;
    this.name = name;
  }

  /**
   * Get a pre-signed download URL for the file.
   *
   * @param opts the option passed to the signUrl function.
   * @returns a download URL string.
   */
  public getDownloadUrl(opts?: SignUrlOptions): Promise<string> {
    return this.signUrl(FileMode.Read, opts);
  }

  /**
   * Get a pre-signed upload URL for the file.
   *
   * @param opts the option passed to the signUrl function.
   * @returns a upload URL string.
   */
  public getUploadUrl(opts?: SignUrlOptions): Promise<string> {
    return this.signUrl(FileMode.Write, opts);
  }

  /**
   * Create a presigned url for reading or writing for the given file reference.
   *
   * @param mode the mode the url will access the file with. E.g. reading or writing.
   * @param opts file URL signing options.
   * @param opts.expiry how long the URL should be valid for in seconds.
   * @deprecated for simplicity we suggest using getUploadUrl or getDownloadUrl.
   */
  public async signUrl(
    mode: FileMode,
    opts: SignUrlOptions = DEFAULT_SIGN_URL_OPTS
  ): Promise<string> {
    const { expiry } = {
      // inject default options in case where some are undefined
      ...DEFAULT_SIGN_URL_OPTS,
      ...opts,
    };
    const request = new StoragePreSignUrlRequest();
    request.setBucketName(this.bucket.name);
    request.setKey(this.name);
    request.setOperation(mode);
    request.setExpiry(expiry);

    return new Promise((resolve, reject) => {
      this.storage.StorageServiceClient.preSignUrl(
        request,
        (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(response.getUrl());
          }
        }
      );
    });
  }

  /**
   * Write an array of bytes to the file.
   *
   * @param body The file contents to write.
   * @returns A promise that resolves when the write operation completes.
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
  public async write(body: Uint8Array | string): Promise<void> {
    const request = new StorageWriteRequest();
    request.setBucketName(this.bucket.name);
    request.setKey(this.name);
    if (typeof body === 'string' || body instanceof String) {
      request.setBody(new TextEncoder().encode(body as string));
    } else {
      request.setBody(body);
    }

    return new Promise((resolve, reject) => {
      this.storage.StorageServiceClient.write(request, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Read the contents of this file as an array of bytes.
   *
   * @returns A promise that returns a byte array of the contents of the read blob.
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
  public async read(): Promise<Uint8Array> {
    const request = new StorageReadRequest();
    request.setBucketName(this.bucket.name);
    request.setKey(this.name);

    return new Promise((resolve, reject) => {
      this.storage.StorageServiceClient.read(request, (error, response) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(response.getBody_asU8());
        }
      });
    });
  }

  /**
   * Delete this file from the bucket.
   *
   * @returns A void promise.
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
  public async delete(): Promise<void> {
    const request = new StorageDeleteRequest();
    request.setBucketName(this.bucket.name);
    request.setKey(this.name);

    return new Promise((resolve, reject) => {
      this.storage.StorageServiceClient.delete(request, (error) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }
}

// Storage client singleton
let STORAGE = undefined;

/**
 * Storage API client.
 *
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
