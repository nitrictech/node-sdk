// package: nitric.proto.KeyValue.v1
// file: nitric/proto/keyvalue/v1/keyvalue.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Store extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Store.AsObject;
  static toObject(includeInstance: boolean, msg: Store): Store.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Store, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Store;
  static deserializeBinaryFromReader(message: Store, reader: jspb.BinaryReader): Store;
}

export namespace Store {
  export type AsObject = {
    name: string,
  }
}

export class ValueRef extends jspb.Message {
  getStore(): string;
  setStore(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueRef.AsObject;
  static toObject(includeInstance: boolean, msg: ValueRef): ValueRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueRef;
  static deserializeBinaryFromReader(message: ValueRef, reader: jspb.BinaryReader): ValueRef;
}

export namespace ValueRef {
  export type AsObject = {
    store: string,
    key: string,
  }
}

export class Value extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    ref?: ValueRef.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class KeyValueGetRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueGetRequest): KeyValueGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueGetRequest;
  static deserializeBinaryFromReader(message: KeyValueGetRequest, reader: jspb.BinaryReader): KeyValueGetRequest;
}

export namespace KeyValueGetRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
  }
}

export class KeyValueGetResponse extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueGetResponse): KeyValueGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueGetResponse;
  static deserializeBinaryFromReader(message: KeyValueGetResponse, reader: jspb.BinaryReader): KeyValueGetResponse;
}

export namespace KeyValueGetResponse {
  export type AsObject = {
    value?: Value.AsObject,
  }
}

export class KeyValueSetRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueSetRequest): KeyValueSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueSetRequest;
  static deserializeBinaryFromReader(message: KeyValueSetRequest, reader: jspb.BinaryReader): KeyValueSetRequest;
}

export namespace KeyValueSetRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class KeyValueSetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueSetResponse): KeyValueSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueSetResponse;
  static deserializeBinaryFromReader(message: KeyValueSetResponse, reader: jspb.BinaryReader): KeyValueSetResponse;
}

export namespace KeyValueSetResponse {
  export type AsObject = {
  }
}

export class KeyValueDeleteRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueDeleteRequest): KeyValueDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueDeleteRequest;
  static deserializeBinaryFromReader(message: KeyValueDeleteRequest, reader: jspb.BinaryReader): KeyValueDeleteRequest;
}

export namespace KeyValueDeleteRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
  }
}

export class KeyValueDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueDeleteResponse): KeyValueDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueDeleteResponse;
  static deserializeBinaryFromReader(message: KeyValueDeleteResponse, reader: jspb.BinaryReader): KeyValueDeleteResponse;
}

export namespace KeyValueDeleteResponse {
  export type AsObject = {
  }
}

