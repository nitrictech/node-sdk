import process from 'process';

import { v1 } from './interfaces';
import * as grpc from '@grpc/grpc-js';
import { CreateDocumentRequest, DeleteDocumentRequest, GetDocumentRequest, UpdateDocumentRequest } from './interfaces/v1';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';

const AMBASSADOR_ADDRESS = process.env.AMBASSADOR_ADDRESS || '127.0.0.1';
const AMBASSADOR_PORT = process.env.AMBASSADOR_PORT || '50051';

const AMBASSADOR_BIND = `${AMBASSADOR_ADDRESS}:${AMBASSADOR_PORT}`;

export class DocumentsClient<T extends {[key:string]: any}> {
  private grpcClient: v1.DocumentsClient;
  private collection: string;

  constructor(collection: string) {
    this.collection = collection;
    this.grpcClient = new v1.DocumentsClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async createDocument(key: string, document: T): Promise<Empty> {
    const request = new CreateDocumentRequest();
    request.setCollection(this.collection);
    request.setKey(key);
    request.setDocument(Struct.fromJavaScript(document));

    return new Promise<Empty>((resolve, reject) => {
      this.grpcClient.createDocument(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  async getDocument(key: string): Promise<T> {
    const request = new GetDocumentRequest();
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

  async updateDocument(key: string, document: T): Promise<Empty> {
    const request = new UpdateDocumentRequest();
    request.setCollection(this.collection);
    request.setKey(key);
    request.setDocument(Struct.fromJavaScript(document));

    return new Promise<Empty>((resolve, reject) => {
      this.grpcClient.updateDocument(request, (error, response) => {
        if (error) {
          reject(error);
        }

        resolve(response);
      })
    });
  }

  async deleteDocument(key: string): Promise<Empty> {
    const request = new DeleteDocumentRequest();
    request.setCollection(this.collection);
    request.setKey(key);

    return new Promise<Empty>((resolve, reject) => {
      this.grpcClient.deleteDocument(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      })
    });
  }
}

/**
 * 
 */
export class EventingClient {
  private grpcClient: v1.EventingClient;

  constructor() {
    this.grpcClient = new v1.EventingClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async getTopics(): Promise<v1.GetTopicsReply> {
    return new Promise((resolve, reject) => {
      this.grpcClient.getTopics(null, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response);
        }
      });
    });
  }

  async publish(request: v1.PublishRequest): Promise<Empty> {
    return new Promise<Empty>((resolve, reject) => {
      this.grpcClient.publish(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response);
        }
      });
    });
  }
}

/**
 * 
 */
export class StorageClient {
  private grpcClient: v1.StorageClient;

  constructor() {
    this.grpcClient = new v1.StorageClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async put(request: v1.PutRequest): Promise<v1.PutReply> {
    return new Promise((resolve, reject) => {
      this.grpcClient.put(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response);
        }
      });
    });
  }

  async get(request: v1.GetRequest): Promise<v1.GetReply> {
    return new Promise((resolve, reject) => {
      this.grpcClient.get(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response);
        }
      });
    });
  }
}

