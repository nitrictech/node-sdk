import process from 'process';
import { EventingClient as GrpcEventingClient, StorageClient as GrpcStorageClient, grpc, PublishRequest, PublishReply, GetTopicsRequest, PutRequest, PutReply, GetRequest, GetReply } from './interfaces';

const AMBASSADOR_ADDRESS = process.env.AMBASSADOR_ADDRESS || '127.0.0.1';
const AMBASSADOR_PORT = process.env.AMBASSADOR_PORT || '50051';

const AMBASSADOR_BIND = `${AMBASSADOR_ADDRESS}:${AMBASSADOR_PORT}`;

/**
 * 
 */
export class EventingClient {
  private grpcClient: GrpcEventingClient;

  constructor() {
    this.grpcClient = new GrpcEventingClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async getTopics(request: GetTopicsRequest) {
    return new Promise((resolve, reject) => {
      this.grpcClient.getTopics(request, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response);
        }
      });
    });
  }

  async publish(request: PublishRequest): Promise<PublishReply> {
    return new Promise((resolve, reject) => {
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
  private grpcClient: GrpcStorageClient;

  constructor() {
    this.grpcClient = new GrpcStorageClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async put(request: PutRequest): Promise<PutReply> {
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

  async get(request: GetRequest): Promise<GetReply> {
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

// re-export original generated code as grpc interfaces
export * as grpc from './interfaces';