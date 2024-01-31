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
import { WebsocketClient } from '@nitric/proto/websockets/v1/websockets_grpc_pb';
import {
  WebsocketSendRequest,
  WebsocketCloseRequest,
} from '@nitric/proto/websockets/v1/websockets_pb';
import * as grpc from '@grpc/grpc-js';

/**
 * Nitric websocket client, facilitates sending messages to connections on this websocket.
 */
export class Websocket {
  client: WebsocketClient;

  constructor() {
    this.client = new WebsocketClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async send(
    socket: string,
    connectionId: string,
    message: string | Uint8Array | Record<string, any>
  ): Promise<void> {
    let payload: Uint8Array;

    // handle all message types
    if (typeof message === 'string') {
      payload = new TextEncoder().encode(message);
    } else if (message instanceof Uint8Array) {
      payload = message;
    } else {
      payload = new TextEncoder().encode(JSON.stringify(message));
    }

    const sendRequest = new WebsocketSendRequest();

    sendRequest.setSocketName(socket);
    sendRequest.setConnectionId(connectionId);
    sendRequest.setData(payload);

    return new Promise((res, rej) => {
      this.client.send(sendRequest, (error, _data) => {
        if (error) {
          rej(error);
        }

        res();
      });
    });
  }

  async close(socket: string, connectionId: string): Promise<void> {
    const closeRequest = new WebsocketCloseRequest();

    closeRequest.setSocketName(socket);
    closeRequest.setConnectionId(connectionId);

    return new Promise((res, rej) => {
      this.client.close(closeRequest, (error) => {
        if (error) {
          rej(error);
        }

        res();
      });
    });
  }
}

// Websocket client singleton
let WEBSOCKET = undefined;

/**
 * Websocket API client.
 *
 * @returns a Websocket API client.
 */
export const websocket = (): Websocket => {
  if (!WEBSOCKET) {
    WEBSOCKET = new Websocket();
  }

  return WEBSOCKET;
};
