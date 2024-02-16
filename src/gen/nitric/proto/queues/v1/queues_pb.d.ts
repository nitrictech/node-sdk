// package: nitric.proto.queues.v1
// file: nitric/proto/queues/v1/queues.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class QueueEnqueueRequest extends jspb.Message {
  getQueueName(): string;
  setQueueName(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<QueueMessage>;
  setMessagesList(value: Array<QueueMessage>): void;
  addMessages(value?: QueueMessage, index?: number): QueueMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueEnqueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueEnqueueRequest): QueueEnqueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueEnqueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueEnqueueRequest;
  static deserializeBinaryFromReader(message: QueueEnqueueRequest, reader: jspb.BinaryReader): QueueEnqueueRequest;
}

export namespace QueueEnqueueRequest {
  export type AsObject = {
    queueName: string,
    messagesList: Array<QueueMessage.AsObject>,
  }
}

export class QueueEnqueueResponse extends jspb.Message {
  clearFailedMessagesList(): void;
  getFailedMessagesList(): Array<FailedEnqueueMessage>;
  setFailedMessagesList(value: Array<FailedEnqueueMessage>): void;
  addFailedMessages(value?: FailedEnqueueMessage, index?: number): FailedEnqueueMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueEnqueueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueEnqueueResponse): QueueEnqueueResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueEnqueueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueEnqueueResponse;
  static deserializeBinaryFromReader(message: QueueEnqueueResponse, reader: jspb.BinaryReader): QueueEnqueueResponse;
}

export namespace QueueEnqueueResponse {
  export type AsObject = {
    failedMessagesList: Array<FailedEnqueueMessage.AsObject>,
  }
}

export class QueueDequeueRequest extends jspb.Message {
  getQueueName(): string;
  setQueueName(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueDequeueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueDequeueRequest): QueueDequeueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueDequeueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueDequeueRequest;
  static deserializeBinaryFromReader(message: QueueDequeueRequest, reader: jspb.BinaryReader): QueueDequeueRequest;
}

export namespace QueueDequeueRequest {
  export type AsObject = {
    queueName: string,
    depth: number,
  }
}

export class QueueDequeueResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<ReceivedMessage>;
  setMessagesList(value: Array<ReceivedMessage>): void;
  addMessages(value?: ReceivedMessage, index?: number): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueDequeueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueDequeueResponse): QueueDequeueResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueDequeueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueDequeueResponse;
  static deserializeBinaryFromReader(message: QueueDequeueResponse, reader: jspb.BinaryReader): QueueDequeueResponse;
}

export namespace QueueDequeueResponse {
  export type AsObject = {
    messagesList: Array<ReceivedMessage.AsObject>,
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

export class QueueMessage extends jspb.Message {
  hasStructPayload(): boolean;
  clearStructPayload(): void;
  getStructPayload(): google_protobuf_struct_pb.Struct | undefined;
  setStructPayload(value?: google_protobuf_struct_pb.Struct): void;

  getContentCase(): QueueMessage.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueMessage.AsObject;
  static toObject(includeInstance: boolean, msg: QueueMessage): QueueMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueMessage;
  static deserializeBinaryFromReader(message: QueueMessage, reader: jspb.BinaryReader): QueueMessage;
}

export namespace QueueMessage {
  export type AsObject = {
    structPayload?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    STRUCT_PAYLOAD = 1,
  }
}

export class ReceivedMessage extends jspb.Message {
  getLeaseId(): string;
  setLeaseId(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): QueueMessage | undefined;
  setMessage(value?: QueueMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedMessage): ReceivedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceivedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedMessage;
  static deserializeBinaryFromReader(message: ReceivedMessage, reader: jspb.BinaryReader): ReceivedMessage;
}

export namespace ReceivedMessage {
  export type AsObject = {
    leaseId: string,
    message?: QueueMessage.AsObject,
  }
}

export class FailedEnqueueMessage extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): QueueMessage | undefined;
  setMessage(value?: QueueMessage): void;

  getDetails(): string;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailedEnqueueMessage.AsObject;
  static toObject(includeInstance: boolean, msg: FailedEnqueueMessage): FailedEnqueueMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FailedEnqueueMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailedEnqueueMessage;
  static deserializeBinaryFromReader(message: FailedEnqueueMessage, reader: jspb.BinaryReader): FailedEnqueueMessage;
}

export namespace FailedEnqueueMessage {
  export type AsObject = {
    message?: QueueMessage.AsObject,
    details: string,
  }
}

