// package: nitric.websocket.v1
// file: proto/websocket/v1/websocket.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class WebsocketSendRequest extends jspb.Message {
  getSocket(): string;
  setSocket(value: string): void;

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
    socket: string,
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
  getSocket(): string;
  setSocket(value: string): void;

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
    socket: string,
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

