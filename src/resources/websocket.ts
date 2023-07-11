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
import { fromGrpcError } from '../api/errors';
import { Faas, JSONTypes, WebsocketMiddleware } from '../faas';
import {
  Websocket as WsClient,
  websocket as wsClient,
} from '../api/websocket/v0';
import { WebsocketEvent } from '../gen/proto/faas/v1/faas_pb';
import {
  Action,
  PolicyResource,
  Resource,
  ResourceDeclareRequest,
  ResourceDetailsResponse,
  ResourceType,
} from '../gen/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { make, Resource as Base } from './common';

const WebsocketEventTypeMap = {
  connect: WebsocketEvent.CONNECT,
  disconnect: WebsocketEvent.DISCONNECT,
  message: WebsocketEvent.MESSAGE,
};

type WebsocketEventType = keyof typeof WebsocketEventTypeMap;

export class WebsocketWorkerOptions {
  public readonly socket: string;
  public readonly eventType: (typeof WebsocketEventTypeMap)[WebsocketEventType];

  constructor(socket: string, eventType: WebsocketEventType) {
    this.socket = socket;
    this.eventType = WebsocketEventTypeMap[eventType];
  }
}

export class Websocket {
  private readonly faas: Faas;

  constructor(
    socket: string,
    eventType: WebsocketEventType,
    ...middleware: WebsocketMiddleware<unknown>[]
  ) {
    this.faas = new Faas(new WebsocketWorkerOptions(socket, eventType));
    this.faas.websocket(...middleware);
  }

  private async start(): Promise<void> {
    return this.faas.start();
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
          reject(fromGrpcError(error));
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
          reject(fromGrpcError(error));
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
    data: string | Uint8Array
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
