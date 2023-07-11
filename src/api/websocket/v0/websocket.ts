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
import { WebsocketServiceClient } from '@nitric/api/proto/websocket/v1/websocket_grpc_pb';
import {
  WebsocketSendRequest,
  WebsocketCloseRequest,
} from '@nitric/api/proto/websocket/v1/websocket_pb';
import * as grpc from '@grpc/grpc-js';
import { fromGrpcError } from '../../errors';

/**
 * Nitric websocket client, facilitates sending messages to connections on this websocket.
 */
export class Websocket {
  client: WebsocketServiceClient;

  constructor() {
    this.client = new WebsocketServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  async send(
    socket: string,
    connectionId: string,
    message: string | Uint8Array
  ): Promise<void> {
    const sendRequest = new WebsocketSendRequest();

    sendRequest.setSocket(socket);
    sendRequest.setConnectionId(connectionId);
    sendRequest.setData(message);

    return new Promise((res, rej) => {
      this.client.send(sendRequest, (error, data) => {
        if (error) {
          rej(fromGrpcError(error));
        }

        res();
      });
    });
  }

  async close(socket: string, connectionId: string): Promise<void> {
    const closeRequest = new WebsocketCloseRequest();

    closeRequest.setSocket(socket);
    closeRequest.setConnectionId(connectionId);

    return new Promise((res, rej) => {
      this.client.close(closeRequest, (error) => {
        if (error) {
          rej(fromGrpcError(error));
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
