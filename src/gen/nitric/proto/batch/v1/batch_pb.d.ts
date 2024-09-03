// package: nitric.proto.batch.v1
// file: nitric/proto/batch/v1/batch.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ClientMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationRequest(): boolean;
  clearRegistrationRequest(): void;
  getRegistrationRequest(): RegistrationRequest | undefined;
  setRegistrationRequest(value?: RegistrationRequest): void;

  hasJobResponse(): boolean;
  clearJobResponse(): void;
  getJobResponse(): JobResponse | undefined;
  setJobResponse(value?: JobResponse): void;

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
    jobResponse?: JobResponse.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_REQUEST = 2,
    JOB_RESPONSE = 3,
  }
}

export class JobRequest extends jspb.Message {
  getJobName(): string;
  setJobName(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): JobData | undefined;
  setData(value?: JobData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobRequest): JobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobRequest;
  static deserializeBinaryFromReader(message: JobRequest, reader: jspb.BinaryReader): JobRequest;
}

export namespace JobRequest {
  export type AsObject = {
    jobName: string,
    data?: JobData.AsObject,
  }
}

export class JobData extends jspb.Message {
  hasStruct(): boolean;
  clearStruct(): void;
  getStruct(): google_protobuf_struct_pb.Struct | undefined;
  setStruct(value?: google_protobuf_struct_pb.Struct): void;

  getDataCase(): JobData.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobData.AsObject;
  static toObject(includeInstance: boolean, msg: JobData): JobData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobData;
  static deserializeBinaryFromReader(message: JobData, reader: jspb.BinaryReader): JobData;
}

export namespace JobData {
  export type AsObject = {
    struct?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    STRUCT = 1,
  }
}

export class JobResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobResponse): JobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobResponse;
  static deserializeBinaryFromReader(message: JobResponse, reader: jspb.BinaryReader): JobResponse;
}

export namespace JobResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class RegistrationRequest extends jspb.Message {
  getJobName(): string;
  setJobName(value: string): void;

  hasRequirements(): boolean;
  clearRequirements(): void;
  getRequirements(): JobResourceRequirements | undefined;
  setRequirements(value?: JobResourceRequirements): void;

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
    jobName: string,
    requirements?: JobResourceRequirements.AsObject,
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

export class JobResourceRequirements extends jspb.Message {
  getCpus(): number;
  setCpus(value: number): void;

  getMemory(): number;
  setMemory(value: number): void;

  getGpus(): number;
  setGpus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobResourceRequirements.AsObject;
  static toObject(includeInstance: boolean, msg: JobResourceRequirements): JobResourceRequirements.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobResourceRequirements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobResourceRequirements;
  static deserializeBinaryFromReader(message: JobResourceRequirements, reader: jspb.BinaryReader): JobResourceRequirements;
}

export namespace JobResourceRequirements {
  export type AsObject = {
    cpus: number,
    memory: number,
    gpus: number,
  }
}

export class ServerMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationResponse(): boolean;
  clearRegistrationResponse(): void;
  getRegistrationResponse(): RegistrationResponse | undefined;
  setRegistrationResponse(value?: RegistrationResponse): void;

  hasJobRequest(): boolean;
  clearJobRequest(): void;
  getJobRequest(): JobRequest | undefined;
  setJobRequest(value?: JobRequest): void;

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
    jobRequest?: JobRequest.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_RESPONSE = 2,
    JOB_REQUEST = 3,
  }
}

export class JobSubmitRequest extends jspb.Message {
  getJobName(): string;
  setJobName(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): JobData | undefined;
  setData(value?: JobData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobSubmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobSubmitRequest): JobSubmitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobSubmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobSubmitRequest;
  static deserializeBinaryFromReader(message: JobSubmitRequest, reader: jspb.BinaryReader): JobSubmitRequest;
}

export namespace JobSubmitRequest {
  export type AsObject = {
    jobName: string,
    data?: JobData.AsObject,
  }
}

export class JobSubmitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobSubmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobSubmitResponse): JobSubmitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobSubmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobSubmitResponse;
  static deserializeBinaryFromReader(message: JobSubmitResponse, reader: jspb.BinaryReader): JobSubmitResponse;
}

export namespace JobSubmitResponse {
  export type AsObject = {
  }
}

