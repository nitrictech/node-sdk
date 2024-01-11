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
import {
  Websocket as WsClient,
  websocket as wsClient,
} from '../api/websocket/v1';
import {
  Action,
  PolicyResource,
  Resource,
  ResourceDeclareRequest,
  ResourceDetailsResponse,
  ResourceType,
} from '@nitric/proto/resources/v1/resources_pb';
import {
  ClientMessage,
  RegistrationRequest,
  ServerMessage,
  WebsocketConnectionResponse,
  WebsocketEventResponse,
  WebsocketEventType,
} from '@nitric/proto/websockets/v1/websockets_pb';
import resourceClient from './client';
import { make, Resource as Base, startStreamHandler } from './common';
import { WebsocketHandlerClient } from '../gen/nitric/proto/websockets/v1/websockets_grpc_pb';
import { SERVICE_BIND } from '../constants';
import * as grpc from '@grpc/grpc-js';
import { WebsocketNotificationContext } from '../context/websocket';
import { WebsocketMiddleware, createHandler } from '../helpers/handler';
import { JSONTypes } from '../context/base';

const WebsocketEventTypeMap = {
  connect: WebsocketEventType.CONNECT,
  disconnect: WebsocketEventType.DISCONNECT,
  message: WebsocketEventType.MESSAGE,
};

type WebsocketEventType = keyof typeof WebsocketEventTypeMap;

export class Websocket {
  private readonly handler: WebsocketMiddleware;
  public readonly socketName: string;
  public readonly eventType: (typeof WebsocketEventTypeMap)[WebsocketEventType];

  constructor(
    socketName: string,
    eventType: WebsocketEventType,
    ...middleware: WebsocketMiddleware<unknown>[]
  ) {
    this.handler = createHandler(...middleware);
    this.socketName = socketName;
    this.eventType = WebsocketEventTypeMap[eventType];
  }

  private async start(): Promise<void> {
    return startStreamHandler(async () => {
      if (!this.handler) {
        throw new Error(
          `A handler function must be provided for websocket ${this.socketName}.`
        );
      }

      const wsHandlerClient = new WebsocketHandlerClient(
        SERVICE_BIND,
        grpc.ChannelCredentials.createInsecure()
      );

      // Begin Bi-Di streaming
      const stream = wsHandlerClient.handleEvents();

      stream.on('data', async (message: ServerMessage) => {
        // We have an init response from the membrane
        if (message.hasRegistrationResponse()) {
          console.log('Websocket function connected with membrane');
          // We got an init response from the membrane
          // The client can configure itself with any information provided by the membrane..
        } else if (message.hasWebsocketEventRequest()) {
          // We want to handle a function here...
          const eventRequest = message.getWebsocketEventRequest();
          const responseMessage = new ClientMessage();

          responseMessage.setId(message.getId());

          try {
            const ctx = WebsocketNotificationContext.fromRequest(eventRequest);

            const result = (await this.handler(ctx, async (ctx) => ctx)) || ctx;
            responseMessage.setWebsocketEventResponse(
              WebsocketNotificationContext.toResponse(result)
            );
          } catch (e) {
            // generic error handling
            console.error(e);
            const eventResponse = new WebsocketEventResponse();
            const connectionResponse = new WebsocketConnectionResponse();
            connectionResponse.setReject(true);
            eventResponse.setConnectionResponse(connectionResponse);
            responseMessage.setWebsocketEventResponse(eventResponse);
          }
          // Send the response back to the membrane
          stream.write(responseMessage);
        }
      });

      // Let the membrane know we're ready to start
      const initRequest = new RegistrationRequest();
      const initMessage = new ClientMessage();

      initRequest.setSocketName(this.socketName);
      initRequest.setEventType(this.eventType);

      //Original faas workers should return a blank InitRequest for compatibility.
      initMessage.setRegistrationRequest(initRequest);
      stream.write(initMessage);

      return stream;
    });
  }
}

/**
 * Websocket resource for bi-di HTTP communication.
 */
export class WebsocketResource extends Base<any> {
  private readonly wsClient: WsClient;

  constructor(name: string) {
    super(name);
    this.wsClient = wsClient();
  }

  /**
   * Register this websocket as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.WEBSOCKET);

    req.setResource(resource);

    const res = await new Promise<Resource>((resolve, reject) => {
      resourceClient.declare(req, (error, _: ResourceDeclareRequest) => {
        if (error) {
          reject(error);
        } else {
          resolve(resource);
        }
      });
    });

    const defaultPrincipal = new Resource();
    defaultPrincipal.setType(ResourceType.FUNCTION);

    const policyResource = new Resource();
    policyResource.setType(ResourceType.POLICY);
    const policyReq = new ResourceDeclareRequest();
    const policy = new PolicyResource();
    policy.setActionsList([Action.WEBSOCKETMANAGE]);
    policy.setPrincipalsList([defaultPrincipal]);
    policy.setResourcesList([resource]);
    policyReq.setPolicy(policy);
    policyReq.setResource(policyResource);

    await new Promise<Resource>((resolve, reject) => {
      resourceClient.declare(policyReq, (error, _: ResourceDeclareRequest) => {
        if (error) {
          reject(error);
        } else {
          resolve(resource);
        }
      });
    });

    return res;
  }

  async send(
    connectionId: string,
    // TODO: add less raw data types
    data: string | Uint8Array | Record<string, any>
  ): Promise<void> {
    await this.wsClient.send(this.name, connectionId, data);
  }

  async close(connectionId: string): Promise<void> {
    await this.wsClient.close(this.name, connectionId);
  }

  /**
   * Retrieves the Invocation URL of this Websocket at runtime.
   *
   * @returns Promise that returns the URL of this Websocket
   */
  async url(): Promise<string> {
    const {
      details: { url },
    } = await this.details();

    return url;
  }

  /**
   * Register and start a websocket event handler that will be called for all matching events on this websocket
   *
   * @param eventType the notification type that should trigger the middleware, either 'connect', 'disconnect' or 'message'
   * @param middleware handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  on<T extends JSONTypes = Record<string, any>>(
    eventType: WebsocketEventType,
    ...middleware: WebsocketMiddleware<T>[]
  ): Promise<void> {
    const notification = new Websocket(this.name, eventType, ...middleware);
    return notification['start']();
  }

  protected resourceType() {
    return ResourceType.WEBSOCKET;
  }

  protected unwrapDetails(resp: ResourceDetailsResponse) {
    if (resp.hasWebsocket()) {
      return {
        url: resp.getWebsocket().getUrl(),
      };
    }

    throw new Error('Unexpected details in response. Expected API details');
  }
}

export const websocket = make(WebsocketResource);
