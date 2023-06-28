// package: nitric.storage.v1
// file: proto/storage/v1/storage.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class StorageWriteRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageWriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageWriteRequest): StorageWriteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageWriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageWriteRequest;
  static deserializeBinaryFromReader(message: StorageWriteRequest, reader: jspb.BinaryReader): StorageWriteRequest;
}

export namespace StorageWriteRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
    body: Uint8Array | string,
  }
}

export class StorageWriteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageWriteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageWriteResponse): StorageWriteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageWriteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageWriteResponse;
  static deserializeBinaryFromReader(message: StorageWriteResponse, reader: jspb.BinaryReader): StorageWriteResponse;
}

export namespace StorageWriteResponse {
  export type AsObject = {
  }
}

export class StorageReadRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageReadRequest): StorageReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageReadRequest;
  static deserializeBinaryFromReader(message: StorageReadRequest, reader: jspb.BinaryReader): StorageReadRequest;
}

export namespace StorageReadRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
  }
}

export class StorageReadResponse extends jspb.Message {
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageReadResponse): StorageReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageReadResponse;
  static deserializeBinaryFromReader(message: StorageReadResponse, reader: jspb.BinaryReader): StorageReadResponse;
}

export namespace StorageReadResponse {
  export type AsObject = {
    body: Uint8Array | string,
  }
}

export class StorageDeleteRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDeleteRequest): StorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDeleteRequest;
  static deserializeBinaryFromReader(message: StorageDeleteRequest, reader: jspb.BinaryReader): StorageDeleteRequest;
}

export namespace StorageDeleteRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
  }
}

export class StorageDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDeleteResponse): StorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDeleteResponse;
  static deserializeBinaryFromReader(message: StorageDeleteResponse, reader: jspb.BinaryReader): StorageDeleteResponse;
}

export namespace StorageDeleteResponse {
  export type AsObject = {
  }
}

export class StoragePreSignUrlRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getOperation(): StoragePreSignUrlRequest.OperationMap[keyof StoragePreSignUrlRequest.OperationMap];
  setOperation(value: StoragePreSignUrlRequest.OperationMap[keyof StoragePreSignUrlRequest.OperationMap]): void;

  getExpiry(): number;
  setExpiry(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoragePreSignUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoragePreSignUrlRequest): StoragePreSignUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoragePreSignUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoragePreSignUrlRequest;
  static deserializeBinaryFromReader(message: StoragePreSignUrlRequest, reader: jspb.BinaryReader): StoragePreSignUrlRequest;
}

export namespace StoragePreSignUrlRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
    operation: StoragePreSignUrlRequest.OperationMap[keyof StoragePreSignUrlRequest.OperationMap],
    expiry: number,
  }

  export interface OperationMap {
    READ: 0;
    WRITE: 1;
  }

  export const Operation: OperationMap;
}

export class StoragePreSignUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoragePreSignUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StoragePreSignUrlResponse): StoragePreSignUrlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoragePreSignUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoragePreSignUrlResponse;
  static deserializeBinaryFromReader(message: StoragePreSignUrlResponse, reader: jspb.BinaryReader): StoragePreSignUrlResponse;
}

export namespace StoragePreSignUrlResponse {
  export type AsObject = {
    url: string,
  }
}

export class StorageListFilesRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListFilesRequest): StorageListFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListFilesRequest;
  static deserializeBinaryFromReader(message: StorageListFilesRequest, reader: jspb.BinaryReader): StorageListFilesRequest;
}

export namespace StorageListFilesRequest {
  export type AsObject = {
    bucketName: string,
    prefix: string,
  }
}

export class File extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    key: string,
  }
}

export class StorageListFilesResponse extends jspb.Message {
  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListFilesResponse): StorageListFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListFilesResponse;
  static deserializeBinaryFromReader(message: StorageListFilesResponse, reader: jspb.BinaryReader): StorageListFilesResponse;
}

export namespace StorageListFilesResponse {
  export type AsObject = {
    filesList: Array<File.AsObject>,
  }
}

