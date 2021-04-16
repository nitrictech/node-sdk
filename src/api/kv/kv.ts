import { SERVICE_BIND } from '../../constants';
import { kv } from '../../interfaces';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';

/**
 * KeyValueClient
 *
 * Provides a simple KeyValue store interface
 */
export class KeyValueClient<T extends { [key: string]: any }> {
  private grpcClient: kv.KeyValueClient;
  private collection: string;

  constructor(collection: string) {
    this.collection = collection;
    this.grpcClient = new kv.KeyValueClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Puts a new keyvalue to the store
   * @param key key to store the value under
   * @param value the value to be stored
   * @returns A void promise
   *
   * Example:
   * ```typescript
   * import { KeyValueClient } from "@nitric/sdk";
   *
   * interface Product {
   *   id: string;
   *   name: string;
   *   description: string;
   * }
   *
   * const client = new KeyValueClient<Product>("products");
   *
   * await client.put("nitric", {
   *   id: "nitric",
   *   name: "nitric",
   *   description: "An development framework!",
   * });
   * ```
   */
  async put(key: string, value: T): Promise<void> {
    const request = new kv.KeyValuePutRequest();
    request.setCollection(this.collection);
    request.setKey(key);
    request.setValue(Struct.fromJavaScript(value));

    try {
      return await new Promise<void>((resolve, reject) => {
        this.grpcClient.put(request, (error, _) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Gets a key's value from the store
   * @param key key to retrieve the value from
   * @returns Promise containg the key's value
   *
   * Example:
   * ```typescript
   * import { KeyValueClient } from "@nitric/sdk";
   *
   * interface Product {
   *   id: string;
   *   name: string;
   *   description: string;
   * }
   *
   * const client = new KeyValueClient<Product>("products");
   *
   * const product = await client.get("nitric");
   * ```
   */
  async get(key: string): Promise<T> {
    const request = new kv.KeyValueGetRequest();
    request.setCollection(this.collection);
    request.setKey(key);

    return new Promise<T>((resolve, reject) => {
      this.grpcClient.get(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          const document = response.getValue();

          resolve(document.toJavaScript() as T);
        }
      });
    });
  }

  /**
   * Deletes a key from the store
   * @param key key the be deleted
   * @returns A void promise
   *
   * Example:
   * ```typescript
   * import { KeyValueClient } from "@nitric/sdk";
   *
   * const client = new KeyValueClient<any>("products");
   *
   * await client.delete("nitric");
   * ```
   */
  async delete(key: string): Promise<void> {
    const request = new kv.KeyValueDeleteRequest();
    request.setCollection(this.collection);
    request.setKey(key);

    return new Promise<void>((resolve, reject) => {
      this.grpcClient.delete(request, (error, _) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}
