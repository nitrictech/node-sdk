// package: nitric.proto.storage.v1
// file: nitric/proto/storage/v1/storage.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ClientMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationRequest(): boolean;
  clearRegistrationRequest(): void;
  getRegistrationRequest(): RegistrationRequest | undefined;
  setRegistrationRequest(value?: RegistrationRequest): void;

  hasBlobEventResponse(): boolean;
  clearBlobEventResponse(): void;
  getBlobEventResponse(): BlobEventResponse | undefined;
  setBlobEventResponse(value?: BlobEventResponse): void;

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
    blobEventResponse?: BlobEventResponse.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_REQUEST = 2,
    BLOB_EVENT_RESPONSE = 3,
  }
}

export class ServerMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationResponse(): boolean;
  clearRegistrationResponse(): void;
  getRegistrationResponse(): RegistrationResponse | undefined;
  setRegistrationResponse(value?: RegistrationResponse): void;

  hasBlobEventRequest(): boolean;
  clearBlobEventRequest(): void;
  getBlobEventRequest(): BlobEventRequest | undefined;
  setBlobEventRequest(value?: BlobEventRequest): void;

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
    blobEventRequest?: BlobEventRequest.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_RESPONSE = 2,
    BLOB_EVENT_REQUEST = 3,
  }
}

export class BlobEventRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasBlobEvent(): boolean;
  clearBlobEvent(): void;
  getBlobEvent(): BlobEvent | undefined;
  setBlobEvent(value?: BlobEvent): void;

  getEventCase(): BlobEventRequest.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlobEventRequest): BlobEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobEventRequest;
  static deserializeBinaryFromReader(message: BlobEventRequest, reader: jspb.BinaryReader): BlobEventRequest;
}

export namespace BlobEventRequest {
  export type AsObject = {
    bucketName: string,
    blobEvent?: BlobEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    BLOB_EVENT = 10,
  }
}

export class BlobEvent extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getType(): BlobEventTypeMap[keyof BlobEventTypeMap];
  setType(value: BlobEventTypeMap[keyof BlobEventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BlobEvent): BlobEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobEvent;
  static deserializeBinaryFromReader(message: BlobEvent, reader: jspb.BinaryReader): BlobEvent;
}

export namespace BlobEvent {
  export type AsObject = {
    key: string,
    type: BlobEventTypeMap[keyof BlobEventTypeMap],
  }
}

export class BlobEventResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlobEventResponse): BlobEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobEventResponse;
  static deserializeBinaryFromReader(message: BlobEventResponse, reader: jspb.BinaryReader): BlobEventResponse;
}

export namespace BlobEventResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class RegistrationRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getBlobEventType(): BlobEventTypeMap[keyof BlobEventTypeMap];
  setBlobEventType(value: BlobEventTypeMap[keyof BlobEventTypeMap]): void;

  getKeyPrefixFilter(): string;
  setKeyPrefixFilter(value: string): void;

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
    bucketName: string,
    blobEventType: BlobEventTypeMap[keyof BlobEventTypeMap],
    keyPrefixFilter: string,
  }
}

export class RegistrationResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

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
    id: string,
  }
}

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

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): google_protobuf_duration_pb.Duration | undefined;
  setExpiry(value?: google_protobuf_duration_pb.Duration): void;

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
    expiry?: google_protobuf_duration_pb.Duration.AsObject,
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

export class StorageListBlobsRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListBlobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListBlobsRequest): StorageListBlobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListBlobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListBlobsRequest;
  static deserializeBinaryFromReader(message: StorageListBlobsRequest, reader: jspb.BinaryReader): StorageListBlobsRequest;
}

export namespace StorageListBlobsRequest {
  export type AsObject = {
    bucketName: string,
    prefix: string,
  }
}

export class Blob extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blob.AsObject;
  static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blob;
  static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
}

export namespace Blob {
  export type AsObject = {
    key: string,
  }
}

export class StorageListBlobsResponse extends jspb.Message {
  clearBlobsList(): void;
  getBlobsList(): Array<Blob>;
  setBlobsList(value: Array<Blob>): void;
  addBlobs(value?: Blob, index?: number): Blob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListBlobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListBlobsResponse): StorageListBlobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListBlobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListBlobsResponse;
  static deserializeBinaryFromReader(message: StorageListBlobsResponse, reader: jspb.BinaryReader): StorageListBlobsResponse;
}

export namespace StorageListBlobsResponse {
  export type AsObject = {
    blobsList: Array<Blob.AsObject>,
  }
}

export class StorageExistsRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageExistsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageExistsRequest): StorageExistsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageExistsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageExistsRequest;
  static deserializeBinaryFromReader(message: StorageExistsRequest, reader: jspb.BinaryReader): StorageExistsRequest;
}

export namespace StorageExistsRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
  }
}

export class StorageExistsResponse extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageExistsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageExistsResponse): StorageExistsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageExistsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageExistsResponse;
  static deserializeBinaryFromReader(message: StorageExistsResponse, reader: jspb.BinaryReader): StorageExistsResponse;
}

export namespace StorageExistsResponse {
  export type AsObject = {
    exists: boolean,
  }
}

export interface BlobEventTypeMap {
  CREATED: 0;
  DELETED: 1;
}

export const BlobEventType: BlobEventTypeMap;

