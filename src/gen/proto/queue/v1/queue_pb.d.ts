// package: nitric.queue.v1
// file: proto/queue/v1/queue.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class QueueSendRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): NitricTask | undefined;
  setTask(value?: NitricTask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendRequest): QueueSendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendRequest;
  static deserializeBinaryFromReader(message: QueueSendRequest, reader: jspb.BinaryReader): QueueSendRequest;
}

export namespace QueueSendRequest {
  export type AsObject = {
    queue: string,
    task?: NitricTask.AsObject,
  }
}

export class QueueSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendResponse): QueueSendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendResponse;
  static deserializeBinaryFromReader(message: QueueSendResponse, reader: jspb.BinaryReader): QueueSendResponse;
}

export namespace QueueSendResponse {
  export type AsObject = {
  }
}

export class QueueSendBatchRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

  clearTasksList(): void;
  getTasksList(): Array<NitricTask>;
  setTasksList(value: Array<NitricTask>): void;
  addTasks(value?: NitricTask, index?: number): NitricTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendBatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendBatchRequest): QueueSendBatchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendBatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendBatchRequest;
  static deserializeBinaryFromReader(message: QueueSendBatchRequest, reader: jspb.BinaryReader): QueueSendBatchRequest;
}

export namespace QueueSendBatchRequest {
  export type AsObject = {
    queue: string,
    tasksList: Array<NitricTask.AsObject>,
  }
}

export class QueueSendBatchResponse extends jspb.Message {
  clearFailedtasksList(): void;
  getFailedTasksList(): Array<FailedTask>;
  setFailedtasksList(value: Array<FailedTask>): void;
  addFailedtasks(value?: FailedTask, index?: number): FailedTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendBatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendBatchResponse): QueueSendBatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendBatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendBatchResponse;
  static deserializeBinaryFromReader(message: QueueSendBatchResponse, reader: jspb.BinaryReader): QueueSendBatchResponse;
}

export namespace QueueSendBatchResponse {
  export type AsObject = {
    failedtasksList: Array<FailedTask.AsObject>,
  }
}

export class QueueReceiveRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueReceiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueReceiveRequest): QueueReceiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueReceiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueReceiveRequest;
  static deserializeBinaryFromReader(message: QueueReceiveRequest, reader: jspb.BinaryReader): QueueReceiveRequest;
}

export namespace QueueReceiveRequest {
  export type AsObject = {
    queue: string,
    depth: number,
  }
}

export class QueueReceiveResponse extends jspb.Message {
  clearTasksList(): void;
  getTasksList(): Array<NitricTask>;
  setTasksList(value: Array<NitricTask>): void;
  addTasks(value?: NitricTask, index?: number): NitricTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueReceiveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueReceiveResponse): QueueReceiveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueReceiveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueReceiveResponse;
  static deserializeBinaryFromReader(message: QueueReceiveResponse, reader: jspb.BinaryReader): QueueReceiveResponse;
}

export namespace QueueReceiveResponse {
  export type AsObject = {
    tasksList: Array<NitricTask.AsObject>,
  }
}

export class QueueCompleteRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

  getLeaseId(): string;
  setLeaseId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueCompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueCompleteRequest): QueueCompleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueCompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueCompleteRequest;
  static deserializeBinaryFromReader(message: QueueCompleteRequest, reader: jspb.BinaryReader): QueueCompleteRequest;
}

export namespace QueueCompleteRequest {
  export type AsObject = {
    queue: string,
    leaseId: string,
  }
}

export class QueueCompleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueCompleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueCompleteResponse): QueueCompleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueCompleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueCompleteResponse;
  static deserializeBinaryFromReader(message: QueueCompleteResponse, reader: jspb.BinaryReader): QueueCompleteResponse;
}

export namespace QueueCompleteResponse {
  export type AsObject = {
  }
}

export class FailedTask extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): NitricTask | undefined;
  setTask(value?: NitricTask): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailedTask.AsObject;
  static toObject(includeInstance: boolean, msg: FailedTask): FailedTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FailedTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailedTask;
  static deserializeBinaryFromReader(message: FailedTask, reader: jspb.BinaryReader): FailedTask;
}

export namespace FailedTask {
  export type AsObject = {
    task?: NitricTask.AsObject,
    message: string,
  }
}

export class NitricTask extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLeaseId(): string;
  setLeaseId(value: string): void;

  getPayloadType(): string;
  setPayloadType(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NitricTask.AsObject;
  static toObject(includeInstance: boolean, msg: NitricTask): NitricTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NitricTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NitricTask;
  static deserializeBinaryFromReader(message: NitricTask, reader: jspb.BinaryReader): NitricTask;
}

export namespace NitricTask {
  export type AsObject = {
    id: string,
    leaseId: string,
    payloadType: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

