// package: nitric.proto.topics.v1
// file: nitric/proto/topics/v1/topics.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ClientMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationRequest(): boolean;
  clearRegistrationRequest(): void;
  getRegistrationRequest(): RegistrationRequest | undefined;
  setRegistrationRequest(value?: RegistrationRequest): void;

  hasMessageResponse(): boolean;
  clearMessageResponse(): void;
  getMessageResponse(): MessageResponse | undefined;
  setMessageResponse(value?: MessageResponse): void;

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
    messageResponse?: MessageResponse.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_REQUEST = 2,
    MESSAGE_RESPONSE = 3,
  }
}

export class MessageRequest extends jspb.Message {
  getTopicName(): string;
  setTopicName(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRequest): MessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRequest;
  static deserializeBinaryFromReader(message: MessageRequest, reader: jspb.BinaryReader): MessageRequest;
}

export namespace MessageRequest {
  export type AsObject = {
    topicName: string,
    message?: Message.AsObject,
  }
}

export class MessageResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class ServerMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationResponse(): boolean;
  clearRegistrationResponse(): void;
  getRegistrationResponse(): RegistrationResponse | undefined;
  setRegistrationResponse(value?: RegistrationResponse): void;

  hasMessageRequest(): boolean;
  clearMessageRequest(): void;
  getMessageRequest(): MessageRequest | undefined;
  setMessageRequest(value?: MessageRequest): void;

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
    messageRequest?: MessageRequest.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_RESPONSE = 2,
    MESSAGE_REQUEST = 3,
  }
}

export class RegistrationRequest extends jspb.Message {
  getTopicName(): string;
  setTopicName(value: string): void;

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
    topicName: string,
  }
}

export class RegistrationResponse extends jspb.Message {
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
  }
}

export class Message extends jspb.Message {
  hasStructPayload(): boolean;
  clearStructPayload(): void;
  getStructPayload(): google_protobuf_struct_pb.Struct | undefined;
  setStructPayload(value?: google_protobuf_struct_pb.Struct): void;

  getContentCase(): Message.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    structPayload?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    STRUCT_PAYLOAD = 1,
  }
}

export class TopicPublishRequest extends jspb.Message {
  getTopicName(): string;
  setTopicName(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  hasDelay(): boolean;
  clearDelay(): void;
  getDelay(): google_protobuf_duration_pb.Duration | undefined;
  setDelay(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopicPublishRequest): TopicPublishRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicPublishRequest;
  static deserializeBinaryFromReader(message: TopicPublishRequest, reader: jspb.BinaryReader): TopicPublishRequest;
}

export namespace TopicPublishRequest {
  export type AsObject = {
    topicName: string,
    message?: Message.AsObject,
    delay?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class TopicPublishResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicPublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TopicPublishResponse): TopicPublishResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicPublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicPublishResponse;
  static deserializeBinaryFromReader(message: TopicPublishResponse, reader: jspb.BinaryReader): TopicPublishResponse;
}

export namespace TopicPublishResponse {
  export type AsObject = {
  }
}

