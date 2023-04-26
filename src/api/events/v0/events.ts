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
import {
  EventServiceClient,
  TopicServiceClient,
} from '@nitric/api/proto/event/v1/event_grpc_pb';
import {
  NitricEvent as PbEvent,
  EventPublishRequest,
} from '@nitric/api/proto/event/v1/event_pb';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import { NitricEvent } from '../../../types';
import { fromGrpcError, InvalidArgumentError } from '../../errors';

/**
 * Construct event and topic service clients.
 *
 * @internal
 * @returns event and topic service clients.
 */
function newEventServiceClients(): {
  event: EventServiceClient;
  topic: TopicServiceClient;
} {
  const channel = grpc.ChannelCredentials.createInsecure();
  return {
    event: new EventServiceClient(SERVICE_BIND, channel),
    topic: new TopicServiceClient(SERVICE_BIND, channel),
  };
}

export interface PublishOptions {
  /** Number of seconds to delay message publishing by */
  delay?: number;
}

const DEFAULT_PUBLISH_OPTS: PublishOptions = {
  delay: 0,
};

export class Topic<T extends Record<string, any> = Record<string, any>> {
  eventing: Eventing;
  name: string;

  constructor(eventing: Eventing, name: string) {
    this.eventing = eventing;
    this.name = name;
  }

  /**
   * Publishes an event to a nitric topic.
   *
   * @param event The event to publish
   * @param opts Additional publishing options
   * @returns NitricEvent containing the unique id of the event (if not provided it will be generated)
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
   *     payloadType: "my-payload",
   *     payload: {
   *       value: "Hello World!"
   *     }
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
    event: T | NitricEvent<T>,
    opts: PublishOptions = DEFAULT_PUBLISH_OPTS
  ): Promise<NitricEvent<T>> {
    const nitricEvent = event instanceof NitricEvent
      ? event
      : new NitricEvent(event);

    const publishOpts = {
      ...DEFAULT_PUBLISH_OPTS,
      ...opts,
    };
    const request = new EventPublishRequest();
    const evt = new PbEvent();

    evt.setId(nitricEvent.id);
    evt.setPayload(Struct.fromJavaScript(nitricEvent.payload));
    evt.setPayloadType(nitricEvent.payloadType);

    request.setTopic(this.name);
    request.setEvent(evt);
    request.setDelay(publishOpts.delay);

    return new Promise<NitricEvent<T>>((resolve, reject) => {
      this.eventing.EventServiceClient.publish(request, (error, response) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(new NitricEvent(nitricEvent.payload, response.getId(), nitricEvent.payloadType));
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
  private _clients: {
    event: EventServiceClient;
    topic: TopicServiceClient;
  } = undefined;

  get EventServiceClient(): EventServiceClient {
    if (!this._clients) {
      this._clients = newEventServiceClients();
    }

    return this._clients.event;
  }

  get TopicServiceClient(): TopicServiceClient {
    if (!this._clients) {
      this._clients = newEventServiceClients();
    }

    return this._clients.topic;
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
  public topic<T extends Record<string, any> = Record<string, any>>(name: string): Topic<T> {
    if (!name) {
      throw new InvalidArgumentError('A topic name is needed to use a Topic.');
    }

    return new Topic(this, name);
  }

  /**
   * Retrieve all available topic references by querying for available topics.
   *
   * @returns A promise containing the list of available nitric topics
   * @example
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   *
   * const eventing = new Eventing();
   *
   * const topics = await eventing.topics();
   * ```
   */
  public async topics(): Promise<Topic[]> {
    return new Promise((resolve, reject) => {
      this.TopicServiceClient.list(null, (error, response) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(
            response.getTopicsList().map((topic) => this.topic(topic.getName()))
          );
        }
      });
    });
  }
}

// Events client singleton
let EVENTS = undefined;

/**
 * Events API client.
 *
 * @returns an Events API client.
 * @example
 * ```typescript
 * import { events } from "@nitric/sdk";
 *
 * async function publishEvent() {
 *  const topic = events().topic('notifications');
 *
 *  await topic.publish({
 *    payload: {
 *     amazing: 'thing happened!',
 *    },
 *  });
 *
 *  return 'Successfully published notification';
 * }
 * ```
 */
export const events = (): Eventing => {
  if (!EVENTS) {
    EVENTS = new Eventing();
  }

  return EVENTS;
};
