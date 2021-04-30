// Copyright 2021, Nitric Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { SERVICE_BIND } from '../../constants';
import { event } from '../../interfaces';
import * as grpc from '@grpc/grpc-js';

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
   * @retuns A promise containing the list of available nitric topics
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
