import { AMBASSADOR_BIND } from "../constants"
import { documents } from '../interfaces/v1';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';

export class DocumentsClient<T extends {[key:string]: any}> {
  private grpcClient: documents.DocumentClient;
  private collection: string;

  constructor(collection: string) {
    this.collection = collection;
    this.grpcClient = new documents.DocumentClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async createDocument(key: string, document: T): Promise<void> {
    const request = new documents.DocumentCreateRequest();
    request.setCollection(this.collection);
    request.setKey(key);
    request.setDocument(Struct.fromJavaScript(document));

    try {
      return await new Promise<void>((resolve, reject) => {
        this.grpcClient.create(request, (error, _) => {
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

  async getDocument(key: string): Promise<T> {
    const request = new documents.DocumentGetRequest();
    request.setCollection(this.collection);
    request.setKey(key);

    return new Promise<T>((resolve, reject) => {
      this.grpcClient.get(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          const document = response.getDocument();

          resolve(document.toJavaScript() as T);
        }
      });
    });
  }

  async updateDocument(key: string, document: T): Promise<void> {
    const request = new documents.DocumentUpdateRequest();
    request.setCollection(this.collection);
    request.setKey(key);
    request.setDocument(Struct.fromJavaScript(document));

    return new Promise<void>((resolve, reject) => {
      this.grpcClient.update(request, (error, _) => {
        if (error) {
          reject(error);
        }

        resolve();
      })
    });
  }

  async deleteDocument(key: string): Promise<void> {
    const request = new documents.DocumentDeleteRequest();
    request.setCollection(this.collection);
    request.setKey(key);

    return new Promise<void>((resolve, reject) => {
      this.grpcClient.delete(request, (error, _) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      })
    });
  }
}