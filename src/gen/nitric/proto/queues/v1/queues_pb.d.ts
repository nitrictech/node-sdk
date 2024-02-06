// package: nitric.proto.queues.v1
// file: nitric/proto/queues/v1/queues.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class QueueSendRequestBatch extends jspb.Message {
  getQueueName(): string;
  setQueueName(value: string): void;

  clearRequestsList(): void;
  getRequestsList(): Array<QueueSendRequest>;
  setRequestsList(value: Array<QueueSendRequest>): void;
  addRequests(value?: QueueSendRequest, index?: number): QueueSendRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendRequestBatch.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendRequestBatch): QueueSendRequestBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendRequestBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendRequestBatch;
  static deserializeBinaryFromReader(message: QueueSendRequestBatch, reader: jspb.BinaryReader): QueueSendRequestBatch;
}

export namespace QueueSendRequestBatch {
  export type AsObject = {
    queueName: string,
    requestsList: Array<QueueSendRequest.AsObject>,
  }
}

export class QueueSendResponse extends jspb.Message {
  clearFailedRequestsList(): void;
  getFailedRequestsList(): Array<FailedSendRequest>;
  setFailedRequestsList(value: Array<FailedSendRequest>): void;
  addFailedRequests(value?: FailedSendRequest, index?: number): FailedSendRequest;

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
    failedRequestsList: Array<FailedSendRequest.AsObject>,
  }
}

export class QueueReceiveRequest extends jspb.Message {
  getQueueName(): string;
  setQueueName(value: string): void;

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
    queueName: string,
    depth: number,
  }
}

export class QueueReceiveResponse extends jspb.Message {
  clearTasksList(): void;
  getTasksList(): Array<ReceivedTask>;
  setTasksList(value: Array<ReceivedTask>): void;
  addTasks(value?: ReceivedTask, index?: number): ReceivedTask;

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
    tasksList: Array<ReceivedTask.AsObject>,
  }
}

export class QueueCompleteRequest extends jspb.Message {
  getQueueName(): string;
  setQueueName(value: string): void;

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
    queueName: string,
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

export class QueueSendRequest extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

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
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ReceivedTask extends jspb.Message {
  getLeaseId(): string;
  setLeaseId(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedTask.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedTask): ReceivedTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceivedTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedTask;
  static deserializeBinaryFromReader(message: ReceivedTask, reader: jspb.BinaryReader): ReceivedTask;
}

export namespace ReceivedTask {
  export type AsObject = {
    leaseId: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class FailedSendRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): QueueSendRequest | undefined;
  setRequest(value?: QueueSendRequest): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailedSendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FailedSendRequest): FailedSendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FailedSendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailedSendRequest;
  static deserializeBinaryFromReader(message: FailedSendRequest, reader: jspb.BinaryReader): FailedSendRequest;
}

export namespace FailedSendRequest {
  export type AsObject = {
    request?: QueueSendRequest.AsObject,
    message: string,
  }
}

