// package: nitric.error.v1
// file: proto/error/v1/error.proto

import * as jspb from "google-protobuf";

export class ErrorScope extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  getPlugin(): string;
  setPlugin(value: string): void;

  getArgsMap(): jspb.Map<string, string>;
  clearArgsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorScope.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorScope): ErrorScope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorScope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorScope;
  static deserializeBinaryFromReader(message: ErrorScope, reader: jspb.BinaryReader): ErrorScope;
}

export namespace ErrorScope {
  export type AsObject = {
    service: string,
    plugin: string,
    argsMap: Array<[string, string]>,
  }
}

export class ErrorDetails extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getCause(): string;
  setCause(value: string): void;

  hasScope(): boolean;
  clearScope(): void;
  getScope(): ErrorScope | undefined;
  setScope(value?: ErrorScope): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDetails): ErrorDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDetails;
  static deserializeBinaryFromReader(message: ErrorDetails, reader: jspb.BinaryReader): ErrorDetails;
}

export namespace ErrorDetails {
  export type AsObject = {
    message: string,
    cause: string,
    scope?: ErrorScope.AsObject,
  }
}

