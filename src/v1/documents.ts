import { AMBASSADOR_BIND } from "../constants"
import { documents } from '../interfaces/v1';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';

export class DocumentsClient<T extends {[key:string]: any}> {
  private grpcClient: documents.DocumentsClient;
  private collection: string;

  constructor(collection: string) {
    this.collection = collection;
    this.grpcClient = new documents.DocumentsClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async createDocument(key: string, document: T): Promise<void> {
    const request = new documents.CreateDocumentRequest();
    request.setCollection(this.collection);
    request.setKey(key);
    request.setDocument(Struct.fromJavaScript(document));

    try {
      return await new Promise<void>((resolve, reject) => {
        this.grpcClient.createDocument(request, (error, _) => {
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
    const request = new documents.GetDocumentRequest();
    request.setCollection(this.collection);
    request.setKey(key);

    return new Promise<T>((resolve, reject) => {
      this.grpcClient.getDocument(request, (error, response) => {
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
    const request = new documents.UpdateDocumentRequest();
    request.setCollection(this.collection);
    request.setKey(key);
    request.setDocument(Struct.fromJavaScript(document));

    return new Promise<void>((resolve, reject) => {
      this.grpcClient.updateDocument(request, (error, _) => {
        if (error) {
          reject(error);
        }

        resolve();
      })
    });
  }

  async deleteDocument(key: string): Promise<void> {
    const request = new documents.DeleteDocumentRequest();
    request.setCollection(this.collection);
    request.setKey(key);

    return new Promise<void>((resolve, reject) => {
      this.grpcClient.deleteDocument(request, (error, _) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      })
    });
  }
}