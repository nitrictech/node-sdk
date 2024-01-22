// package: nitric.proto.websockets.v1
// file: nitric/proto/websockets/v1/websockets.proto

import * as jspb from "google-protobuf";

export class WebsocketDetailsRequest extends jspb.Message {
  getSocketName(): string;
  setSocketName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketDetailsRequest): WebsocketDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketDetailsRequest;
  static deserializeBinaryFromReader(message: WebsocketDetailsRequest, reader: jspb.BinaryReader): WebsocketDetailsRequest;
}

export namespace WebsocketDetailsRequest {
  export type AsObject = {
    socketName: string,
  }
}

export class WebsocketDetailsResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketDetailsResponse): WebsocketDetailsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketDetailsResponse;
  static deserializeBinaryFromReader(message: WebsocketDetailsResponse, reader: jspb.BinaryReader): WebsocketDetailsResponse;
}

export namespace WebsocketDetailsResponse {
  export type AsObject = {
    url: string,
  }
}

export class WebsocketSendRequest extends jspb.Message {
  getSocketName(): string;
  setSocketName(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketSendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketSendRequest): WebsocketSendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketSendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketSendRequest;
  static deserializeBinaryFromReader(message: WebsocketSendRequest, reader: jspb.BinaryReader): WebsocketSendRequest;
}

export namespace WebsocketSendRequest {
  export type AsObject = {
    socketName: string,
    connectionId: string,
    data: Uint8Array | string,
  }
}

export class WebsocketSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketSendResponse): WebsocketSendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketSendResponse;
  static deserializeBinaryFromReader(message: WebsocketSendResponse, reader: jspb.BinaryReader): WebsocketSendResponse;
}

export namespace WebsocketSendResponse {
  export type AsObject = {
  }
}

export class WebsocketCloseRequest extends jspb.Message {
  getSocketName(): string;
  setSocketName(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketCloseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketCloseRequest): WebsocketCloseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketCloseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketCloseRequest;
  static deserializeBinaryFromReader(message: WebsocketCloseRequest, reader: jspb.BinaryReader): WebsocketCloseRequest;
}

export namespace WebsocketCloseRequest {
  export type AsObject = {
    socketName: string,
    connectionId: string,
  }
}

export class WebsocketCloseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketCloseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketCloseResponse): WebsocketCloseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketCloseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketCloseResponse;
  static deserializeBinaryFromReader(message: WebsocketCloseResponse, reader: jspb.BinaryReader): WebsocketCloseResponse;
}

export namespace WebsocketCloseResponse {
  export type AsObject = {
  }
}

export class ClientMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationRequest(): boolean;
  clearRegistrationRequest(): void;
  getRegistrationRequest(): RegistrationRequest | undefined;
  setRegistrationRequest(value?: RegistrationRequest): void;

  hasWebsocketEventResponse(): boolean;
  clearWebsocketEventResponse(): void;
  getWebsocketEventResponse(): WebsocketEventResponse | undefined;
  setWebsocketEventResponse(value?: WebsocketEventResponse): void;

  getContentCase(): ClientMessage.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessage): ClientMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessage;
  static deserializeBinaryFromReader(message: ClientMessage, reader: jspb.BinaryReader): ClientMessage;
}

export namespace ClientMessage {
  export type AsObject = {
    id: string,
    registrationRequest?: RegistrationRequest.AsObject,
    websocketEventResponse?: WebsocketEventResponse.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_REQUEST = 2,
    WEBSOCKET_EVENT_RESPONSE = 3,
  }
}

export class RegistrationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationResponse): RegistrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationResponse;
  static deserializeBinaryFromReader(message: RegistrationResponse, reader: jspb.BinaryReader): RegistrationResponse;
}

export namespace RegistrationResponse {
  export type AsObject = {
  }
}

export class RegistrationRequest extends jspb.Message {
  getSocketName(): string;
  setSocketName(value: string): void;

  getEventType(): WebsocketEventTypeMap[keyof WebsocketEventTypeMap];
  setEventType(value: WebsocketEventTypeMap[keyof WebsocketEventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationRequest): RegistrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationRequest;
  static deserializeBinaryFromReader(message: RegistrationRequest, reader: jspb.BinaryReader): RegistrationRequest;
}

export namespace RegistrationRequest {
  export type AsObject = {
    socketName: string,
    eventType: WebsocketEventTypeMap[keyof WebsocketEventTypeMap],
  }
}

export class WebsocketEventRequest extends jspb.Message {
  getSocketName(): string;
  setSocketName(value: string): void;

  getConnectionid(): string;
  setConnectionid(value: string): void;

  hasConnection(): boolean;
  clearConnection(): void;
  getConnection(): WebsocketConnectionEvent | undefined;
  setConnection(value?: WebsocketConnectionEvent): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): WebsocketDisconnectionEvent | undefined;
  setDisconnection(value?: WebsocketDisconnectionEvent): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): WebsocketMessageEvent | undefined;
  setMessage(value?: WebsocketMessageEvent): void;

  getWebsocketEventCase(): WebsocketEventRequest.WebsocketEventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketEventRequest): WebsocketEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketEventRequest;
  static deserializeBinaryFromReader(message: WebsocketEventRequest, reader: jspb.BinaryReader): WebsocketEventRequest;
}

export namespace WebsocketEventRequest {
  export type AsObject = {
    socketName: string,
    connectionid: string,
    connection?: WebsocketConnectionEvent.AsObject,
    disconnection?: WebsocketDisconnectionEvent.AsObject,
    message?: WebsocketMessageEvent.AsObject,
  }

  export enum WebsocketEventCase {
    WEBSOCKET_EVENT_NOT_SET = 0,
    CONNECTION = 10,
    DISCONNECTION = 11,
    MESSAGE = 12,
  }
}

export class QueryValue extends jspb.Message {
  clearValueList(): void;
  getValueList(): Array<string>;
  setValueList(value: Array<string>): void;
  addValue(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValue.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValue): QueryValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValue;
  static deserializeBinaryFromReader(message: QueryValue, reader: jspb.BinaryReader): QueryValue;
}

export namespace QueryValue {
  export type AsObject = {
    valueList: Array<string>,
  }
}

export class ServerMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationResponse(): boolean;
  clearRegistrationResponse(): void;
  getRegistrationResponse(): RegistrationResponse | undefined;
  setRegistrationResponse(value?: RegistrationResponse): void;

  hasWebsocketEventRequest(): boolean;
  clearWebsocketEventRequest(): void;
  getWebsocketEventRequest(): WebsocketEventRequest | undefined;
  setWebsocketEventRequest(value?: WebsocketEventRequest): void;

  getContentCase(): ServerMessage.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessage): ServerMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessage;
  static deserializeBinaryFromReader(message: ServerMessage, reader: jspb.BinaryReader): ServerMessage;
}

export namespace ServerMessage {
  export type AsObject = {
    id: string,
    registrationResponse?: RegistrationResponse.AsObject,
    websocketEventRequest?: WebsocketEventRequest.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_RESPONSE = 2,
    WEBSOCKET_EVENT_REQUEST = 3,
  }
}

export class WebsocketEventResponse extends jspb.Message {
  hasConnectionResponse(): boolean;
  clearConnectionResponse(): void;
  getConnectionResponse(): WebsocketConnectionResponse | undefined;
  setConnectionResponse(value?: WebsocketConnectionResponse): void;

  getWebsocketResponseCase(): WebsocketEventResponse.WebsocketResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketEventResponse): WebsocketEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketEventResponse;
  static deserializeBinaryFromReader(message: WebsocketEventResponse, reader: jspb.BinaryReader): WebsocketEventResponse;
}

export namespace WebsocketEventResponse {
  export type AsObject = {
    connectionResponse?: WebsocketConnectionResponse.AsObject,
  }

  export enum WebsocketResponseCase {
    WEBSOCKET_RESPONSE_NOT_SET = 0,
    CONNECTION_RESPONSE = 10,
  }
}

export class WebsocketConnectionEvent extends jspb.Message {
  getQueryParamsMap(): jspb.Map<string, QueryValue>;
  clearQueryParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketConnectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketConnectionEvent): WebsocketConnectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketConnectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketConnectionEvent;
  static deserializeBinaryFromReader(message: WebsocketConnectionEvent, reader: jspb.BinaryReader): WebsocketConnectionEvent;
}

export namespace WebsocketConnectionEvent {
  export type AsObject = {
    queryParamsMap: Array<[string, QueryValue.AsObject]>,
  }
}

export class WebsocketConnectionResponse extends jspb.Message {
  getReject(): boolean;
  setReject(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketConnectionResponse): WebsocketConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketConnectionResponse;
  static deserializeBinaryFromReader(message: WebsocketConnectionResponse, reader: jspb.BinaryReader): WebsocketConnectionResponse;
}

export namespace WebsocketConnectionResponse {
  export type AsObject = {
    reject: boolean,
  }
}

export class WebsocketDisconnectionEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketDisconnectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketDisconnectionEvent): WebsocketDisconnectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketDisconnectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketDisconnectionEvent;
  static deserializeBinaryFromReader(message: WebsocketDisconnectionEvent, reader: jspb.BinaryReader): WebsocketDisconnectionEvent;
}

export namespace WebsocketDisconnectionEvent {
  export type AsObject = {
  }
}

export class WebsocketMessageEvent extends jspb.Message {
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketMessageEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketMessageEvent): WebsocketMessageEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketMessageEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketMessageEvent;
  static deserializeBinaryFromReader(message: WebsocketMessageEvent, reader: jspb.BinaryReader): WebsocketMessageEvent;
}

export namespace WebsocketMessageEvent {
  export type AsObject = {
    body: Uint8Array | string,
  }
}

export interface WebsocketEventTypeMap {
  CONNECT: 0;
  DISCONNECT: 1;
  MESSAGE: 2;
}

export const WebsocketEventType: WebsocketEventTypeMap;

