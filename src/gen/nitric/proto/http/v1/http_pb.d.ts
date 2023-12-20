// package: nitric.proto.http.v1
// file: nitric/proto/http/v1/http.proto

import * as jspb from "google-protobuf";

export class HttpProxyRequest extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpProxyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HttpProxyRequest): HttpProxyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpProxyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpProxyRequest;
  static deserializeBinaryFromReader(message: HttpProxyRequest, reader: jspb.BinaryReader): HttpProxyRequest;
}

export namespace HttpProxyRequest {
  export type AsObject = {
    host: string,
  }
}

export class HttpProxyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpProxyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HttpProxyResponse): HttpProxyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpProxyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpProxyResponse;
  static deserializeBinaryFromReader(message: HttpProxyResponse, reader: jspb.BinaryReader): HttpProxyResponse;
}

export namespace HttpProxyResponse {
  export type AsObject = {
  }
}

