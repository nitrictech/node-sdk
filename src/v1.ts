import process from 'process';

import { v1 } from './interfaces';
import * as grpc from '@grpc/grpc-js';
import { CreateDocumentRequest, DeleteDocumentRequest, GetDocumentRequest, GetRequest, PublishRequest, PutRequest, UpdateDocumentRequest } from './interfaces/v1';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import { uuid } from "uuidv4";

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

  async createDocument(key: string, document: T): Promise<void> {
    const request = new CreateDocumentRequest();
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

  async updateDocument(key: string, document: T): Promise<void> {
    const request = new UpdateDocumentRequest();
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
    const request = new DeleteDocumentRequest();
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

interface NitricEvent {
  requestId?: string;
  payloadType?: string;
  payload: Record<string, any>;
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

  async getTopics(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.grpcClient.getTopics(null, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response.getTopicsList());
        }
      });
    });
  }

  async publish(
    topic: string, 
    { requestId = uuid(), payloadType = "none", payload }: NitricEvent
  ): Promise<string> {
    const request = new PublishRequest();
    const evt = new v1.NitricEvent();

    evt.setRequestid(requestId);
    evt.setPayload(Struct.fromJavaScript(payload));
    evt.setPayloadtype(payloadType);

    request.setTopicname(topic);
    request.setEvent(evt);
    
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.publish(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(requestId);
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

  async put(bucket: string, key: string, body: Uint8Array): Promise<boolean> {
    const request = new PutRequest();
    request.setBucketname(bucket);
    request.setKey(key);
    request.setBody(body);

    return new Promise((resolve, reject) => {
      this.grpcClient.put(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response.getSuccess());
        }
      });
    });
  }

  async get(bucket: string, key: string): Promise<Uint8Array> {
    const request = new GetRequest();
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

