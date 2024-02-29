// package: nitric.proto.kvstore.v1
// file: nitric/proto/kvstore/v1/kvstore.proto

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

export class KvStoreGetValueRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreGetValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreGetValueRequest): KvStoreGetValueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreGetValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreGetValueRequest;
  static deserializeBinaryFromReader(message: KvStoreGetValueRequest, reader: jspb.BinaryReader): KvStoreGetValueRequest;
}

export namespace KvStoreGetValueRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
  }
}

export class KvStoreGetValueResponse extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreGetValueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreGetValueResponse): KvStoreGetValueResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreGetValueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreGetValueResponse;
  static deserializeBinaryFromReader(message: KvStoreGetValueResponse, reader: jspb.BinaryReader): KvStoreGetValueResponse;
}

export namespace KvStoreGetValueResponse {
  export type AsObject = {
    value?: Value.AsObject,
  }
}

export class KvStoreSetValueRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreSetValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreSetValueRequest): KvStoreSetValueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreSetValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreSetValueRequest;
  static deserializeBinaryFromReader(message: KvStoreSetValueRequest, reader: jspb.BinaryReader): KvStoreSetValueRequest;
}

export namespace KvStoreSetValueRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class KvStoreSetValueResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreSetValueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreSetValueResponse): KvStoreSetValueResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreSetValueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreSetValueResponse;
  static deserializeBinaryFromReader(message: KvStoreSetValueResponse, reader: jspb.BinaryReader): KvStoreSetValueResponse;
}

export namespace KvStoreSetValueResponse {
  export type AsObject = {
  }
}

export class KvStoreDeleteKeyRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreDeleteKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreDeleteKeyRequest): KvStoreDeleteKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreDeleteKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreDeleteKeyRequest;
  static deserializeBinaryFromReader(message: KvStoreDeleteKeyRequest, reader: jspb.BinaryReader): KvStoreDeleteKeyRequest;
}

export namespace KvStoreDeleteKeyRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
  }
}

export class KvStoreDeleteKeyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreDeleteKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreDeleteKeyResponse): KvStoreDeleteKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreDeleteKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreDeleteKeyResponse;
  static deserializeBinaryFromReader(message: KvStoreDeleteKeyResponse, reader: jspb.BinaryReader): KvStoreDeleteKeyResponse;
}

export namespace KvStoreDeleteKeyResponse {
  export type AsObject = {
  }
}

export class KvStoreScanKeysRequest extends jspb.Message {
  hasStore(): boolean;
  clearStore(): void;
  getStore(): Store | undefined;
  setStore(value?: Store): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreScanKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreScanKeysRequest): KvStoreScanKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreScanKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreScanKeysRequest;
  static deserializeBinaryFromReader(message: KvStoreScanKeysRequest, reader: jspb.BinaryReader): KvStoreScanKeysRequest;
}

export namespace KvStoreScanKeysRequest {
  export type AsObject = {
    store?: Store.AsObject,
    prefix: string,
  }
}

export class KvStoreScanKeysResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KvStoreScanKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KvStoreScanKeysResponse): KvStoreScanKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KvStoreScanKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KvStoreScanKeysResponse;
  static deserializeBinaryFromReader(message: KvStoreScanKeysResponse, reader: jspb.BinaryReader): KvStoreScanKeysResponse;
}

export namespace KvStoreScanKeysResponse {
  export type AsObject = {
    key: string,
  }
}

