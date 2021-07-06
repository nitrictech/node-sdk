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
import { SERVICE_BIND } from '../../constants';
import { event as eventService } from '../../interfaces';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import type { NitricEvent } from '../../types';

function newEventClient(): eventService.EventClient {
  return new eventService.EventClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
  );
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
  async publish(
      event: NitricEvent
  ): Promise<NitricEvent> {
    const { id, payloadType = 'none', payload } = event;
    const request = new eventService.EventPublishRequest();
    const evt = new eventService.NitricEvent();

    evt.setId(id);
    evt.setPayload(Struct.fromJavaScript(payload));
    evt.setPayloadType(payloadType);

    request.setTopic(this.name);
    request.setEvent(evt);

    return new Promise<NitricEvent>((resolve, reject) => {
      this.eventing.eventClient.publish(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve({...event, id: response.getId()});
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
  eventClient: eventService.EventClient

  constructor() {
    this.eventClient = newEventClient()
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
   */
  topic(name: string): Topic {
    if (!name) {
      throw new Error('A topic name is needed to use a Topic.');
    }

    return new Topic(this, name);
  }


}
