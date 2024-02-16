// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { SERVICE_BIND } from '../../../constants';
import { TopicsClient } from '@nitric/proto/topics/v1/topics_grpc_pb';
import {
  TopicPublishRequest,
  TopicMessage,
} from '@nitric/proto/topics/v1/topics_pb';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import { toDuration } from '@nitric/sdk/resources/common';
import { fromGrpcError } from '../../errors';

export interface PublishOptions {
  /** Number of seconds to delay message publishing by */
  delay?: number;
}

const DEFAULT_PUBLISH_OPTS: PublishOptions = {
  delay: 0,
};

export class Topic<T extends Record<string, any> = Record<string, any>> {
  private eventing: Eventing;
  private name: string;

  constructor(eventing: Eventing, name: string) {
    this.eventing = eventing;
    this.name = name;
  }

  /**
   * Publishes a message to a topic.
   *
   * @param message The message to publish
   * @param opts Additional publishing options
   * @returns a promise that resolves when the message is published
   *
   * @example
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   *
   * const eventing = Eventing();
   *
   * async function publishEvent(): NitricEvent {
   *   const topic = eventing.topic("my-topic");
   *   const event = {
   *     value: "Hello World!"
   *   };
   *   // Publish immediately
   *   await topic.publish(event);
   *
   *   // Publish after 10 seconds delay
   *   await topic.publish(event, { delay: 10 });
   * }
   * ```
   */
  async publish(
    message: T,
    opts: PublishOptions = DEFAULT_PUBLISH_OPTS
  ): Promise<void> {
    const publishOpts = {
      ...DEFAULT_PUBLISH_OPTS,
      ...opts,
    };
    const request = new TopicPublishRequest();
    const msg = new TopicMessage();

    msg.setStructPayload(Struct.fromJavaScript(message));

    request.setTopicName(this.name);
    request.setMessage(msg);
    request.setDelay(toDuration(publishOpts.delay));

    return new Promise<void>((resolve, reject) => {
      this.eventing.TopicServiceClient.publish(request, (error, _response) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve();
        }
      });
    });
  }
}

/**
 * Eventing object encapsulating the Nitric gRPC clients for Event and Topic services.
 *
 * Used to created references to Topics and perform Event publishing operations.
 *
 * @example
 * ```typescript
 * import { Eventing } from "@nitric/sdk";
 * const eventing = new Eventing();
 * const topic = eventing.topic('notifications');
 * ```
 */
export class Eventing {
  private _client: TopicsClient = undefined;

  get TopicServiceClient(): TopicsClient {
    if (!this._client) {
      this._client = new TopicsClient(
        SERVICE_BIND,
        grpc.ChannelCredentials.createInsecure()
      );
    }

    return this._client;
  }

  /**
   * Get a reference to a Topic.
   *
   * @param name Name of the topic, as defined in nitric.yaml.
   * @returns a topic resource.
   * @example
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   * const eventing = new Eventing();
   * const topic = eventing.topic('notifications');
   * ```
   */
  public topic<T extends Record<string, any> = Record<string, any>>(
    name: string
  ): Topic<T> {
    if (!name) {
      throw new Error('A topic name is needed to use a Topic.');
    }

    return new Topic(this, name);
  }
}

// Events client singleton
let TOPIC = undefined;

/**
 * Events API client.
 *
 * @returns an Events API client.
 * @example
 * ```typescript
 * import { topic } from "@nitric/sdk";
 *
 * const userCreatedTopic = topic('user-created').for('publishing')
 *
 * async function publishEvent() {
 *  await userCreatedTopic.publish({
 *    amazing: 'thing happened!',
 *  });
 *
 *  return 'Successfully published notification';
 * }
 * ```
 */
export const topics = (): Eventing => {
  if (!TOPIC) {
    TOPIC = new Eventing();
  }

  return TOPIC;
};
