import { SERVICE_BIND } from "../constants"
import { storage } from "../interfaces/v1";
import * as grpc from '@grpc/grpc-js';

/**
 * 
 */
export class StorageClient {
  private grpcClient: storage.StorageClient;

  constructor() {
    this.grpcClient = new storage.StorageClient(
      SERVICE_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async put(bucket: string, key: string, body: Uint8Array): Promise<boolean> {
    const request = new storage.StoragePutRequest();
    request.setBucketname(bucket);
    request.setKey(key);
    request.setBody(body);

    return new Promise((resolve, reject) => {
      this.grpcClient.put(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(true);
        }
      });
    });
  }

  async get(bucket: string, key: string): Promise<Uint8Array> {
    const request = new storage.StorageGetRequest();
    request.setBucketname(bucket);
    request.setKey(key);

    return new Promise((resolve, reject) => {
      this.grpcClient.get(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response.getBody_asU8());
        }
      });
    });
  }
}