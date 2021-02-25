import { AMBASSADOR_BIND } from "../constants"
import { events, common } from '../interfaces/v1';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import { uuid } from "uuidv4"
import { NitricEvent } from './types';


/**
 * 
 */
export class TopicClient {
  private grpcClient: events.TopicClient;

  constructor() {
    this.grpcClient = new events.TopicClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async getTopics(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.grpcClient.list(null, (error, response) => {
        if (error) {
          reject(error); 
        } else {
          resolve(response.getTopicsList().map(topic => topic.getName()));
        }
      });
    });
  }
}