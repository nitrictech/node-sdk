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
import type { NitricEvent } from '../../../types';
import { fromGrpcError, InvalidArgumentError } from '../../errors';

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

export class Topic {
  eventing: Eventing;
  name: string;

  constructor(eventing: Eventing, name: string) {
    this.eventing = eventing;
    this.name = name;
  }

  /**
   * Publishes an event to a nitric topic
   * @param event The event to publish
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
   *
   *   return await topic.publish(event);
   * }
   * ```
   */
  publish = async (event: NitricEvent): Promise<NitricEvent> => {
    const { id, payloadType = 'none', payload } = event;
    const request = new EventPublishRequest();
    const evt = new PbEvent();

    evt.setId(id);
    evt.setPayload(Struct.fromJavaScript(payload));
    evt.setPayloadType(payloadType);

    request.setTopic(this.name);
    request.setEvent(evt);

    return new Promise<NitricEvent>((resolve, reject) => {
      this.eventing.EventServiceClient.publish(request, (error, response) => {
        if (error) {
          // TODO: remove this ignore when not using link
          // @ts-ignore
          reject(fromGrpcError(error));
        } else {
          resolve({ ...event, id: response.getId() });
        }
      });
    });
  };
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
  EventServiceClient: EventServiceClient;
  TopicServiceClient: TopicServiceClient;

  constructor() {
    const clients = newEventServiceClients();
    this.EventServiceClient = clients.event;
    this.TopicServiceClient = clients.topic;
  }

  /**
   * Get a reference to a Topic.
   *
   * @param name Name of the topic, as defined in nitric.yaml.
   *
   * @example
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   * const eventing = new Eventing();
   * const topic = eventing.topic('notifications');
   * ```
   *
   */
  topic = (name: string): Topic => {
    if (!name) {
      throw new InvalidArgumentError('A topic name is needed to use a Topic.');
    }

    return new Topic(this, name);
  };

  /**
   * Retrieve all available topic references by querying for available topics.
   *
   * @retuns A promise containing the list of available nitric topics
   *
   * Example:
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   *
   * const eventing = new Eventing();
   *
   * const topics = await eventing.topics();
   * ```
   */
  topics = async (): Promise<Topic[]> => {
    return new Promise((resolve, reject) => {
      this.TopicServiceClient.list(null, (error, response) => {
        if (error) {
          // TODO: remove this ignore when not using link
          // @ts-ignore
          reject(fromGrpcError(error));
        } else {
          resolve(
            response.getTopicsList().map((topic) => this.topic(topic.getName()))
          );
        }
      });
    });
  };
}

// Events client singleton
let EVENTS = undefined;

/**
 * Events
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
