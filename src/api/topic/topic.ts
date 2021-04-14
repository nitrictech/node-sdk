import { SERVICE_BIND } from "../../constants";
import { event } from "../../interfaces";
import * as grpc from "@grpc/grpc-js";

/**
 * Nitric client for managing topics
 */
export class TopicClient {
  private grpcClient: event.TopicClient;

  constructor() {
    this.grpcClient = new event.TopicClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * List available nitric topics
   * 
   * Example:
   * ```typescript
   * import { TopicClient } from "@nitric/sdk";
   * 
   * const client = new TopicClient();
   * 
   * const topics = await client.list();
   * 
   * // TODO: Do something with topics
   * ```
   */
  async list(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.grpcClient.list(null, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getTopicsList().map((topic) => topic.getName()));
        }
      });
    });
  }
}
