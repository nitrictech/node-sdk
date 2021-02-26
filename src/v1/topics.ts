import { SERVICE_BIND } from "../constants"
import { events } from '../interfaces/v1';
import * as grpc from '@grpc/grpc-js';


/**
 * 
 */
export class TopicClient {
  private grpcClient: events.TopicClient;

  constructor() {
    this.grpcClient = new events.TopicClient(
      SERVICE_BIND, 
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