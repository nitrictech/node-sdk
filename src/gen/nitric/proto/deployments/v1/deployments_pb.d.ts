// package: nitric.proto.deployments.v1
// file: nitric/proto/deployments/v1/deployments.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as nitric_proto_resources_v1_resources_pb from "../../../../nitric/proto/resources/v1/resources_pb";
import * as nitric_proto_storage_v1_storage_pb from "../../../../nitric/proto/storage/v1/storage_pb";

export class DeployUpRequest extends jspb.Message {
  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): Spec | undefined;
  setSpec(value?: Spec): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  getInteractive(): boolean;
  setInteractive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployUpRequest): DeployUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployUpRequest;
  static deserializeBinaryFromReader(message: DeployUpRequest, reader: jspb.BinaryReader): DeployUpRequest;
}

export namespace DeployUpRequest {
  export type AsObject = {
    spec?: Spec.AsObject,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    interactive: boolean,
  }
}

export class DeployUpEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): DeployEventMessage | undefined;
  setMessage(value?: DeployEventMessage): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): DeployUpEventResult | undefined;
  setResult(value?: DeployUpEventResult): void;

  getContentCase(): DeployUpEvent.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployUpEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeployUpEvent): DeployUpEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployUpEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployUpEvent;
  static deserializeBinaryFromReader(message: DeployUpEvent, reader: jspb.BinaryReader): DeployUpEvent;
}

export namespace DeployUpEvent {
  export type AsObject = {
    message?: DeployEventMessage.AsObject,
    result?: DeployUpEventResult.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    MESSAGE = 1,
    RESULT = 2,
  }
}

export class DeployEventMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployEventMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeployEventMessage): DeployEventMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployEventMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployEventMessage;
  static deserializeBinaryFromReader(message: DeployEventMessage, reader: jspb.BinaryReader): DeployEventMessage;
}

export namespace DeployEventMessage {
  export type AsObject = {
    message: string,
  }
}

export class UpResult extends jspb.Message {
  hasStringResult(): boolean;
  clearStringResult(): void;
  getStringResult(): string;
  setStringResult(value: string): void;

  getContentCase(): UpResult.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpResult): UpResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpResult;
  static deserializeBinaryFromReader(message: UpResult, reader: jspb.BinaryReader): UpResult;
}

export namespace UpResult {
  export type AsObject = {
    stringResult: string,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    STRING_RESULT = 1,
  }
}

export class DeployUpEventResult extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): UpResult | undefined;
  setResult(value?: UpResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployUpEventResult.AsObject;
  static toObject(includeInstance: boolean, msg: DeployUpEventResult): DeployUpEventResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployUpEventResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployUpEventResult;
  static deserializeBinaryFromReader(message: DeployUpEventResult, reader: jspb.BinaryReader): DeployUpEventResult;
}

export namespace DeployUpEventResult {
  export type AsObject = {
    success: boolean,
    result?: UpResult.AsObject,
  }
}

export class DeployDownRequest extends jspb.Message {
  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  getInteractive(): boolean;
  setInteractive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployDownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployDownRequest): DeployDownRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployDownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployDownRequest;
  static deserializeBinaryFromReader(message: DeployDownRequest, reader: jspb.BinaryReader): DeployDownRequest;
}

export namespace DeployDownRequest {
  export type AsObject = {
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    interactive: boolean,
  }
}

export class DeployDownEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): DeployEventMessage | undefined;
  setMessage(value?: DeployEventMessage): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): DeployDownEventResult | undefined;
  setResult(value?: DeployDownEventResult): void;

  getContentCase(): DeployDownEvent.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployDownEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeployDownEvent): DeployDownEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployDownEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployDownEvent;
  static deserializeBinaryFromReader(message: DeployDownEvent, reader: jspb.BinaryReader): DeployDownEvent;
}

export namespace DeployDownEvent {
  export type AsObject = {
    message?: DeployEventMessage.AsObject,
    result?: DeployDownEventResult.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    MESSAGE = 1,
    RESULT = 2,
  }
}

export class DeployDownEventResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployDownEventResult.AsObject;
  static toObject(includeInstance: boolean, msg: DeployDownEventResult): DeployDownEventResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployDownEventResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployDownEventResult;
  static deserializeBinaryFromReader(message: DeployDownEventResult, reader: jspb.BinaryReader): DeployDownEventResult;
}

export namespace DeployDownEventResult {
  export type AsObject = {
  }
}

export class ImageSource extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageSource.AsObject;
  static toObject(includeInstance: boolean, msg: ImageSource): ImageSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageSource;
  static deserializeBinaryFromReader(message: ImageSource, reader: jspb.BinaryReader): ImageSource;
}

export namespace ImageSource {
  export type AsObject = {
    uri: string,
  }
}

export class ExecutionUnit extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): ImageSource | undefined;
  setImage(value?: ImageSource): void;

  getWorkers(): number;
  setWorkers(value: number): void;

  getTimeout(): number;
  setTimeout(value: number): void;

  getMemory(): number;
  setMemory(value: number): void;

  getType(): string;
  setType(value: string): void;

  getEnvMap(): jspb.Map<string, string>;
  clearEnvMap(): void;
  getSourceCase(): ExecutionUnit.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionUnit.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionUnit): ExecutionUnit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionUnit;
  static deserializeBinaryFromReader(message: ExecutionUnit, reader: jspb.BinaryReader): ExecutionUnit;
}

export namespace ExecutionUnit {
  export type AsObject = {
    image?: ImageSource.AsObject,
    workers: number,
    timeout: number,
    memory: number,
    type: string,
    envMap: Array<[string, string]>,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    IMAGE = 1,
  }
}

export class Bucket extends jspb.Message {
  clearNotificationsList(): void;
  getNotificationsList(): Array<BucketNotificationTarget>;
  setNotificationsList(value: Array<BucketNotificationTarget>): void;
  addNotifications(value?: BucketNotificationTarget, index?: number): BucketNotificationTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bucket.AsObject;
  static toObject(includeInstance: boolean, msg: Bucket): Bucket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bucket;
  static deserializeBinaryFromReader(message: Bucket, reader: jspb.BinaryReader): Bucket;
}

export namespace Bucket {
  export type AsObject = {
    notificationsList: Array<BucketNotificationTarget.AsObject>,
  }
}

export class BucketNotificationTarget extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): nitric_proto_storage_v1_storage_pb.RegistrationRequest | undefined;
  setConfig(value?: nitric_proto_storage_v1_storage_pb.RegistrationRequest): void;

  hasExecutionUnit(): boolean;
  clearExecutionUnit(): void;
  getExecutionUnit(): string;
  setExecutionUnit(value: string): void;

  getTargetCase(): BucketNotificationTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketNotificationTarget.AsObject;
  static toObject(includeInstance: boolean, msg: BucketNotificationTarget): BucketNotificationTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BucketNotificationTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketNotificationTarget;
  static deserializeBinaryFromReader(message: BucketNotificationTarget, reader: jspb.BinaryReader): BucketNotificationTarget;
}

export namespace BucketNotificationTarget {
  export type AsObject = {
    config?: nitric_proto_storage_v1_storage_pb.RegistrationRequest.AsObject,
    executionUnit: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    EXECUTION_UNIT = 2,
  }
}

export class Topic extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<SubscriptionTarget>;
  setSubscriptionsList(value: Array<SubscriptionTarget>): void;
  addSubscriptions(value?: SubscriptionTarget, index?: number): SubscriptionTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    subscriptionsList: Array<SubscriptionTarget.AsObject>,
  }
}

export class Collection extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collection.AsObject;
  static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collection;
  static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
}

export namespace Collection {
  export type AsObject = {
  }
}

export class Secret extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
  }
}

export class SubscriptionTarget extends jspb.Message {
  hasExecutionUnit(): boolean;
  clearExecutionUnit(): void;
  getExecutionUnit(): string;
  setExecutionUnit(value: string): void;

  getTargetCase(): SubscriptionTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionTarget.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionTarget): SubscriptionTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionTarget;
  static deserializeBinaryFromReader(message: SubscriptionTarget, reader: jspb.BinaryReader): SubscriptionTarget;
}

export namespace SubscriptionTarget {
  export type AsObject = {
    executionUnit: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    EXECUTION_UNIT = 1,
  }
}

export class TopicSubscription extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): SubscriptionTarget | undefined;
  setTarget(value?: SubscriptionTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: TopicSubscription): TopicSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicSubscription;
  static deserializeBinaryFromReader(message: TopicSubscription, reader: jspb.BinaryReader): TopicSubscription;
}

export namespace TopicSubscription {
  export type AsObject = {
    target?: SubscriptionTarget.AsObject,
  }
}

export class HttpTarget extends jspb.Message {
  hasExecutionUnit(): boolean;
  clearExecutionUnit(): void;
  getExecutionUnit(): string;
  setExecutionUnit(value: string): void;

  getTargetCase(): HttpTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpTarget.AsObject;
  static toObject(includeInstance: boolean, msg: HttpTarget): HttpTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpTarget;
  static deserializeBinaryFromReader(message: HttpTarget, reader: jspb.BinaryReader): HttpTarget;
}

export namespace HttpTarget {
  export type AsObject = {
    executionUnit: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    EXECUTION_UNIT = 1,
  }
}

export class Http extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): HttpTarget | undefined;
  setTarget(value?: HttpTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Http.AsObject;
  static toObject(includeInstance: boolean, msg: Http): Http.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Http, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Http;
  static deserializeBinaryFromReader(message: Http, reader: jspb.BinaryReader): Http;
}

export namespace Http {
  export type AsObject = {
    target?: HttpTarget.AsObject,
  }
}

export class Api extends jspb.Message {
  hasOpenapi(): boolean;
  clearOpenapi(): void;
  getOpenapi(): string;
  setOpenapi(value: string): void;

  getDocumentCase(): Api.DocumentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Api.AsObject;
  static toObject(includeInstance: boolean, msg: Api): Api.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Api, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Api;
  static deserializeBinaryFromReader(message: Api, reader: jspb.BinaryReader): Api;
}

export namespace Api {
  export type AsObject = {
    openapi: string,
  }

  export enum DocumentCase {
    DOCUMENT_NOT_SET = 0,
    OPENAPI = 1,
  }
}

export class Websocket extends jspb.Message {
  hasConnectTarget(): boolean;
  clearConnectTarget(): void;
  getConnectTarget(): WebsocketTarget | undefined;
  setConnectTarget(value?: WebsocketTarget): void;

  hasDisconnectTarget(): boolean;
  clearDisconnectTarget(): void;
  getDisconnectTarget(): WebsocketTarget | undefined;
  setDisconnectTarget(value?: WebsocketTarget): void;

  hasMessageTarget(): boolean;
  clearMessageTarget(): void;
  getMessageTarget(): WebsocketTarget | undefined;
  setMessageTarget(value?: WebsocketTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Websocket.AsObject;
  static toObject(includeInstance: boolean, msg: Websocket): Websocket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Websocket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Websocket;
  static deserializeBinaryFromReader(message: Websocket, reader: jspb.BinaryReader): Websocket;
}

export namespace Websocket {
  export type AsObject = {
    connectTarget?: WebsocketTarget.AsObject,
    disconnectTarget?: WebsocketTarget.AsObject,
    messageTarget?: WebsocketTarget.AsObject,
  }
}

export class WebsocketTarget extends jspb.Message {
  hasExecutionUnit(): boolean;
  clearExecutionUnit(): void;
  getExecutionUnit(): string;
  setExecutionUnit(value: string): void;

  getTargetCase(): WebsocketTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketTarget.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketTarget): WebsocketTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketTarget;
  static deserializeBinaryFromReader(message: WebsocketTarget, reader: jspb.BinaryReader): WebsocketTarget;
}

export namespace WebsocketTarget {
  export type AsObject = {
    executionUnit: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    EXECUTION_UNIT = 1,
  }
}

export class ScheduleTarget extends jspb.Message {
  hasExecutionUnit(): boolean;
  clearExecutionUnit(): void;
  getExecutionUnit(): string;
  setExecutionUnit(value: string): void;

  getTargetCase(): ScheduleTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleTarget): ScheduleTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleTarget;
  static deserializeBinaryFromReader(message: ScheduleTarget, reader: jspb.BinaryReader): ScheduleTarget;
}

export namespace ScheduleTarget {
  export type AsObject = {
    executionUnit: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    EXECUTION_UNIT = 1,
  }
}

export class Schedule extends jspb.Message {
  getCron(): string;
  setCron(value: string): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): ScheduleTarget | undefined;
  setTarget(value?: ScheduleTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    cron: string,
    target?: ScheduleTarget.AsObject,
  }
}

export class Resource extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): nitric_proto_resources_v1_resources_pb.ResourceTypeMap[keyof nitric_proto_resources_v1_resources_pb.ResourceTypeMap];
  setType(value: nitric_proto_resources_v1_resources_pb.ResourceTypeMap[keyof nitric_proto_resources_v1_resources_pb.ResourceTypeMap]): void;

  hasExecutionUnit(): boolean;
  clearExecutionUnit(): void;
  getExecutionUnit(): ExecutionUnit | undefined;
  setExecutionUnit(value?: ExecutionUnit): void;

  hasBucket(): boolean;
  clearBucket(): void;
  getBucket(): Bucket | undefined;
  setBucket(value?: Bucket): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): Topic | undefined;
  setTopic(value?: Topic): void;

  hasApi(): boolean;
  clearApi(): void;
  getApi(): Api | undefined;
  setApi(value?: Api): void;

  hasPolicy(): boolean;
  clearPolicy(): void;
  getPolicy(): Policy | undefined;
  setPolicy(value?: Policy): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): Schedule | undefined;
  setSchedule(value?: Schedule): void;

  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): Collection | undefined;
  setCollection(value?: Collection): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;

  hasWebsocket(): boolean;
  clearWebsocket(): void;
  getWebsocket(): Websocket | undefined;
  setWebsocket(value?: Websocket): void;

  hasHttp(): boolean;
  clearHttp(): void;
  getHttp(): Http | undefined;
  setHttp(value?: Http): void;

  getConfigCase(): Resource.ConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    name: string,
    type: nitric_proto_resources_v1_resources_pb.ResourceTypeMap[keyof nitric_proto_resources_v1_resources_pb.ResourceTypeMap],
    executionUnit?: ExecutionUnit.AsObject,
    bucket?: Bucket.AsObject,
    topic?: Topic.AsObject,
    api?: Api.AsObject,
    policy?: Policy.AsObject,
    schedule?: Schedule.AsObject,
    collection?: Collection.AsObject,
    secret?: Secret.AsObject,
    websocket?: Websocket.AsObject,
    http?: Http.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    EXECUTION_UNIT = 10,
    BUCKET = 11,
    TOPIC = 12,
    API = 13,
    POLICY = 14,
    SCHEDULE = 15,
    COLLECTION = 16,
    SECRET = 17,
    WEBSOCKET = 18,
    HTTP = 19,
  }
}

export class Policy extends jspb.Message {
  clearPrincipalsList(): void;
  getPrincipalsList(): Array<Resource>;
  setPrincipalsList(value: Array<Resource>): void;
  addPrincipals(value?: Resource, index?: number): Resource;

  clearActionsList(): void;
  getActionsList(): Array<nitric_proto_resources_v1_resources_pb.ActionMap[keyof nitric_proto_resources_v1_resources_pb.ActionMap]>;
  setActionsList(value: Array<nitric_proto_resources_v1_resources_pb.ActionMap[keyof nitric_proto_resources_v1_resources_pb.ActionMap]>): void;
  addActions(value: nitric_proto_resources_v1_resources_pb.ActionMap[keyof nitric_proto_resources_v1_resources_pb.ActionMap], index?: number): nitric_proto_resources_v1_resources_pb.ActionMap[keyof nitric_proto_resources_v1_resources_pb.ActionMap];

  clearResourcesList(): void;
  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): void;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    principalsList: Array<Resource.AsObject>,
    actionsList: Array<nitric_proto_resources_v1_resources_pb.ActionMap[keyof nitric_proto_resources_v1_resources_pb.ActionMap]>,
    resourcesList: Array<Resource.AsObject>,
  }
}

export class Spec extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): void;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spec;
  static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
}

export namespace Spec {
  export type AsObject = {
    resourcesList: Array<Resource.AsObject>,
  }
}

