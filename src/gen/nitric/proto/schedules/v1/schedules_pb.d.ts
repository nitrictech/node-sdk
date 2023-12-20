// package: nitric.proto.schedules.v1
// file: nitric/proto/schedules/v1/schedules.proto

import * as jspb from "google-protobuf";

export class ClientMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationRequest(): boolean;
  clearRegistrationRequest(): void;
  getRegistrationRequest(): RegistrationRequest | undefined;
  setRegistrationRequest(value?: RegistrationRequest): void;

  hasIntervalResponse(): boolean;
  clearIntervalResponse(): void;
  getIntervalResponse(): IntervalResponse | undefined;
  setIntervalResponse(value?: IntervalResponse): void;

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
    intervalResponse?: IntervalResponse.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_REQUEST = 2,
    INTERVAL_RESPONSE = 3,
  }
}

export class IntervalRequest extends jspb.Message {
  getScheduleName(): string;
  setScheduleName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntervalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntervalRequest): IntervalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntervalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntervalRequest;
  static deserializeBinaryFromReader(message: IntervalRequest, reader: jspb.BinaryReader): IntervalRequest;
}

export namespace IntervalRequest {
  export type AsObject = {
    scheduleName: string,
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

  hasIntervalRequest(): boolean;
  clearIntervalRequest(): void;
  getIntervalRequest(): IntervalRequest | undefined;
  setIntervalRequest(value?: IntervalRequest): void;

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
    intervalRequest?: IntervalRequest.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_RESPONSE = 2,
    INTERVAL_REQUEST = 3,
  }
}

export class RegistrationRequest extends jspb.Message {
  getScheduleName(): string;
  setScheduleName(value: string): void;

  hasRate(): boolean;
  clearRate(): void;
  getRate(): ScheduleRate | undefined;
  setRate(value?: ScheduleRate): void;

  hasCron(): boolean;
  clearCron(): void;
  getCron(): ScheduleCron | undefined;
  setCron(value?: ScheduleCron): void;

  getCadenceCase(): RegistrationRequest.CadenceCase;
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
    scheduleName: string,
    rate?: ScheduleRate.AsObject,
    cron?: ScheduleCron.AsObject,
  }

  export enum CadenceCase {
    CADENCE_NOT_SET = 0,
    RATE = 10,
    CRON = 11,
  }
}

export class ScheduleRate extends jspb.Message {
  getRate(): string;
  setRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleRate.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleRate): ScheduleRate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleRate;
  static deserializeBinaryFromReader(message: ScheduleRate, reader: jspb.BinaryReader): ScheduleRate;
}

export namespace ScheduleRate {
  export type AsObject = {
    rate: string,
  }
}

export class ScheduleCron extends jspb.Message {
  getExpression(): string;
  setExpression(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleCron.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleCron): ScheduleCron.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleCron, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleCron;
  static deserializeBinaryFromReader(message: ScheduleCron, reader: jspb.BinaryReader): ScheduleCron;
}

export namespace ScheduleCron {
  export type AsObject = {
    expression: string,
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

export class IntervalResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntervalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IntervalResponse): IntervalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntervalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntervalResponse;
  static deserializeBinaryFromReader(message: IntervalResponse, reader: jspb.BinaryReader): IntervalResponse;
}

export namespace IntervalResponse {
  export type AsObject = {
  }
}

