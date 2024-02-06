// package: nitric.proto.deployments.v1
// file: nitric/proto/deployments/v1/deployments.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as nitric_proto_resources_v1_resources_pb from "../../../../nitric/proto/resources/v1/resources_pb";
import * as nitric_proto_storage_v1_storage_pb from "../../../../nitric/proto/storage/v1/storage_pb";

export class DeploymentUpRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): DeploymentUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentUpRequest): DeploymentUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentUpRequest;
  static deserializeBinaryFromReader(message: DeploymentUpRequest, reader: jspb.BinaryReader): DeploymentUpRequest;
}

export namespace DeploymentUpRequest {
  export type AsObject = {
    spec?: Spec.AsObject,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    interactive: boolean,
  }
}

export class DeploymentUpEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string;
  setMessage(value: string): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): ResourceUpdate | undefined;
  setUpdate(value?: ResourceUpdate): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): UpResult | undefined;
  setResult(value?: UpResult): void;

  getContentCase(): DeploymentUpEvent.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentUpEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentUpEvent): DeploymentUpEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentUpEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentUpEvent;
  static deserializeBinaryFromReader(message: DeploymentUpEvent, reader: jspb.BinaryReader): DeploymentUpEvent;
}

export namespace DeploymentUpEvent {
  export type AsObject = {
    message: string,
    update?: ResourceUpdate.AsObject,
    result?: UpResult.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    MESSAGE = 1,
    UPDATE = 2,
    RESULT = 3,
  }
}

export class ResourceUpdate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): nitric_proto_resources_v1_resources_pb.ResourceIdentifier | undefined;
  setId(value?: nitric_proto_resources_v1_resources_pb.ResourceIdentifier): void;

  getAction(): ResourceDeploymentActionMap[keyof ResourceDeploymentActionMap];
  setAction(value: ResourceDeploymentActionMap[keyof ResourceDeploymentActionMap]): void;

  getStatus(): ResourceDeploymentStatusMap[keyof ResourceDeploymentStatusMap];
  setStatus(value: ResourceDeploymentStatusMap[keyof ResourceDeploymentStatusMap]): void;

  getSubResource(): string;
  setSubResource(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceUpdate): ResourceUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceUpdate;
  static deserializeBinaryFromReader(message: ResourceUpdate, reader: jspb.BinaryReader): ResourceUpdate;
}

export namespace ResourceUpdate {
  export type AsObject = {
    id?: nitric_proto_resources_v1_resources_pb.ResourceIdentifier.AsObject,
    action: ResourceDeploymentActionMap[keyof ResourceDeploymentActionMap],
    status: ResourceDeploymentStatusMap[keyof ResourceDeploymentStatusMap],
    subResource: string,
    message: string,
  }
}

export class UpResult extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getDetails(): string;
  setDetails(value: string): void;

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
    success: boolean,
    details: string,
  }
}

export class DeploymentDownRequest extends jspb.Message {
  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  getInteractive(): boolean;
  setInteractive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentDownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentDownRequest): DeploymentDownRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentDownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentDownRequest;
  static deserializeBinaryFromReader(message: DeploymentDownRequest, reader: jspb.BinaryReader): DeploymentDownRequest;
}

export namespace DeploymentDownRequest {
  export type AsObject = {
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    interactive: boolean,
  }
}

export class DeploymentDownEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string;
  setMessage(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): DownResult | undefined;
  setResult(value?: DownResult): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): ResourceUpdate | undefined;
  setUpdate(value?: ResourceUpdate): void;

  getContentCase(): DeploymentDownEvent.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentDownEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentDownEvent): DeploymentDownEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentDownEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentDownEvent;
  static deserializeBinaryFromReader(message: DeploymentDownEvent, reader: jspb.BinaryReader): DeploymentDownEvent;
}

export namespace DeploymentDownEvent {
  export type AsObject = {
    message: string,
    result?: DownResult.AsObject,
    update?: ResourceUpdate.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    MESSAGE = 1,
    RESULT = 2,
    UPDATE = 3,
  }
}

export class DownResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownResult.AsObject;
  static toObject(includeInstance: boolean, msg: DownResult): DownResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownResult;
  static deserializeBinaryFromReader(message: DownResult, reader: jspb.BinaryReader): DownResult;
}

export namespace DownResult {
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

export class Service extends jspb.Message {
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
  getSourceCase(): Service.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
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
  clearListenersList(): void;
  getListenersList(): Array<BucketListener>;
  setListenersList(value: Array<BucketListener>): void;
  addListeners(value?: BucketListener, index?: number): BucketListener;

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
    listenersList: Array<BucketListener.AsObject>,
  }
}

export class BucketListener extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): nitric_proto_storage_v1_storage_pb.RegistrationRequest | undefined;
  setConfig(value?: nitric_proto_storage_v1_storage_pb.RegistrationRequest): void;

  hasService(): boolean;
  clearService(): void;
  getService(): string;
  setService(value: string): void;

  getTargetCase(): BucketListener.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketListener.AsObject;
  static toObject(includeInstance: boolean, msg: BucketListener): BucketListener.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BucketListener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketListener;
  static deserializeBinaryFromReader(message: BucketListener, reader: jspb.BinaryReader): BucketListener;
}

export namespace BucketListener {
  export type AsObject = {
    config?: nitric_proto_storage_v1_storage_pb.RegistrationRequest.AsObject,
    service: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    SERVICE = 2,
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

export class Queue extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Queue.AsObject;
  static toObject(includeInstance: boolean, msg: Queue): Queue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Queue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Queue;
  static deserializeBinaryFromReader(message: Queue, reader: jspb.BinaryReader): Queue;
}

export namespace Queue {
  export type AsObject = {
  }
}

export class KeyValueStore extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueStore.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueStore): KeyValueStore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueStore;
  static deserializeBinaryFromReader(message: KeyValueStore, reader: jspb.BinaryReader): KeyValueStore;
}

export namespace KeyValueStore {
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
  hasService(): boolean;
  clearService(): void;
  getService(): string;
  setService(value: string): void;

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
    service: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    SERVICE = 1,
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
  hasService(): boolean;
  clearService(): void;
  getService(): string;
  setService(value: string): void;

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
    service: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    SERVICE = 1,
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
  hasService(): boolean;
  clearService(): void;
  getService(): string;
  setService(value: string): void;

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
    service: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    SERVICE = 1,
  }
}

export class ScheduleTarget extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): string;
  setService(value: string): void;

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
    service: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    SERVICE = 1,
  }
}

export class Schedule extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): ScheduleTarget | undefined;
  setTarget(value?: ScheduleTarget): void;

  hasEvery(): boolean;
  clearEvery(): void;
  getEvery(): ScheduleEvery | undefined;
  setEvery(value?: ScheduleEvery): void;

  hasCron(): boolean;
  clearCron(): void;
  getCron(): ScheduleCron | undefined;
  setCron(value?: ScheduleCron): void;

  getCadenceCase(): Schedule.CadenceCase;
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
    target?: ScheduleTarget.AsObject,
    every?: ScheduleEvery.AsObject,
    cron?: ScheduleCron.AsObject,
  }

  export enum CadenceCase {
    CADENCE_NOT_SET = 0,
    EVERY = 10,
    CRON = 11,
  }
}

export class ScheduleEvery extends jspb.Message {
  getRate(): string;
  setRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleEvery.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleEvery): ScheduleEvery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleEvery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleEvery;
  static deserializeBinaryFromReader(message: ScheduleEvery, reader: jspb.BinaryReader): ScheduleEvery;
}

export namespace ScheduleEvery {
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

export class Resource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): nitric_proto_resources_v1_resources_pb.ResourceIdentifier | undefined;
  setId(value?: nitric_proto_resources_v1_resources_pb.ResourceIdentifier): void;

  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

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

  hasKeyValueStore(): boolean;
  clearKeyValueStore(): void;
  getKeyValueStore(): KeyValueStore | undefined;
  setKeyValueStore(value?: KeyValueStore): void;

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

  hasQueue(): boolean;
  clearQueue(): void;
  getQueue(): Queue | undefined;
  setQueue(value?: Queue): void;

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
    id?: nitric_proto_resources_v1_resources_pb.ResourceIdentifier.AsObject,
    service?: Service.AsObject,
    bucket?: Bucket.AsObject,
    topic?: Topic.AsObject,
    api?: Api.AsObject,
    policy?: Policy.AsObject,
    schedule?: Schedule.AsObject,
    keyValueStore?: KeyValueStore.AsObject,
    secret?: Secret.AsObject,
    websocket?: Websocket.AsObject,
    http?: Http.AsObject,
    queue?: Queue.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    SERVICE = 10,
    BUCKET = 11,
    TOPIC = 12,
    API = 13,
    POLICY = 14,
    SCHEDULE = 15,
    KEY_VALUE_STORE = 16,
    SECRET = 17,
    WEBSOCKET = 18,
    HTTP = 19,
    QUEUE = 20,
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

export interface ResourceDeploymentActionMap {
  CREATE: 0;
  UPDATE: 1;
  REPLACE: 2;
  SAME: 3;
  DELETE: 4;
}

export const ResourceDeploymentAction: ResourceDeploymentActionMap;

export interface ResourceDeploymentStatusMap {
  PENDING: 0;
  IN_PROGRESS: 1;
  SUCCESS: 2;
  FAILED: 3;
}

export const ResourceDeploymentStatus: ResourceDeploymentStatusMap;

