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
  WebsocketConnectionResponse,
  WebsocketEventRequest as WebsocketEventRequestPb,
  WebsocketEventResponse as WebsocketEventResponsePb,
  WebsocketEventType,
} from '@nitric/proto/websockets/v1/websockets_pb';
import { AbstractRequest, BaseContext } from './base';

export class WebsocketNotificationContext<T> extends BaseContext<
  WebsocketNotificationRequest<T>,
  WebsocketNotificationResponse
> {
  public get websocket(): WebsocketNotificationContext<T> {
    return this;
  }

  static fromRequest(
    request: WebsocketEventRequestPb
  ): WebsocketNotificationContext<any> {
    const ctx = new WebsocketNotificationContext();
    const connection = request.getConnection();
    const query = connection
      ? (
          connection
            .getQueryParamsMap()
            // getEntryList claims to return [string, faas.HeaderValue][], but really returns [string, string[][]][]
            // we force the type to match the real return type.
            .getEntryList() as unknown as [string, string[][]][]
        ).reduce(
          (acc, [key, [val]]) => ({
            ...acc,
            [key]: val.map((v) => decodeURIComponent(v)),
          }),
          {} as Record<string, string[]>
        )
      : {};

    const message = request.getMessage();

    ctx.request = new WebsocketNotificationRequest(
      message ? message.getBody() : '',
      request.getSocketName(),
      request.getWebsocketEventCase(),
      request.getConnectionid(),
      query
    );

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toResponse(
    ctx: WebsocketNotificationContext<any>
  ): WebsocketEventResponsePb {
    const notifyCtx = ctx.websocket;
    const eventResponse = new WebsocketEventResponsePb();
    const connectionResponse = new WebsocketConnectionResponse();
    connectionResponse.setReject(!notifyCtx.res.success);

    eventResponse.setConnectionResponse(connectionResponse);
    return eventResponse;
  }
}

export enum WebsocketNotificationType {
  Connected,
  Disconnected,
  Message,
}

export type WebsocketEventType = 'connect' | 'disconnect' | 'message';

export class WebsocketNotificationRequest<T> extends AbstractRequest<T> {
  public readonly socket: string;
  public readonly eventType: WebsocketEventType;
  public readonly connectionId: string;
  public readonly query: Record<string, string[]>;

  constructor(
    data: string | Uint8Array,
    socket: string,
    eventType: number,
    connectionId: string,
    query: Record<string, string[]>
  ) {
    super(data);

    this.socket = socket;
    this.eventType = this.eventCaseToType(eventType);
    this.connectionId = connectionId;
    this.query = query;
  }

  private eventCaseToType = (eventType: number) => {
    switch (eventType) {
      case WebsocketEventRequestPb.WebsocketEventCase.CONNECTION:
        return 'connect';
      case WebsocketEventRequestPb.WebsocketEventCase.DISCONNECTION:
        return 'disconnect';
      case WebsocketEventRequestPb.WebsocketEventCase.MESSAGE:
        return 'message';
      default:
        throw new Error(`event type unsupported: ${eventType}`);
    }
  };
}

export interface WebsocketNotificationResponse {
  success: boolean;
}
