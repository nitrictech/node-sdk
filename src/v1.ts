import process from 'process';

import { v1 } from './interfaces';
import * as grpc from '@grpc/grpc-js';

const AMBASSADOR_ADDRESS = process.env.AMBASSADOR_ADDRESS || '127.0.0.1';
const AMBASSADOR_PORT = process.env.AMBASSADOR_PORT || '50051';

const AMBASSADOR_BIND = `${AMBASSADOR_ADDRESS}:${AMBASSADOR_PORT}`;

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

  async publish(request: v1.PublishRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.grpcClient.publish(request, (error, response: void) => {
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

