// package: nitric.faas.v1
// file: proto/faas/v1/faas.proto

import * as jspb from "google-protobuf";

export class ClientMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasInitRequest(): boolean;
  clearInitRequest(): void;
  getInitRequest(): InitRequest | undefined;
  setInitRequest(value?: InitRequest): void;

  hasTriggerResponse(): boolean;
  clearTriggerResponse(): void;
  getTriggerResponse(): TriggerResponse | undefined;
  setTriggerResponse(value?: TriggerResponse): void;

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
    initRequest?: InitRequest.AsObject,
    triggerResponse?: TriggerResponse.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    INIT_REQUEST = 2,
    TRIGGER_RESPONSE = 3,
  }
}

export class ServerMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasInitResponse(): boolean;
  clearInitResponse(): void;
  getInitResponse(): InitResponse | undefined;
  setInitResponse(value?: InitResponse): void;

  hasTriggerRequest(): boolean;
  clearTriggerRequest(): void;
  getTriggerRequest(): TriggerRequest | undefined;
  setTriggerRequest(value?: TriggerRequest): void;

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
    initResponse?: InitResponse.AsObject,
    triggerRequest?: TriggerRequest.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    INIT_RESPONSE = 2,
    TRIGGER_REQUEST = 3,
  }
}

export class ApiWorkerScopes extends jspb.Message {
  clearScopesList(): void;
  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  addScopes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiWorkerScopes.AsObject;
  static toObject(includeInstance: boolean, msg: ApiWorkerScopes): ApiWorkerScopes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiWorkerScopes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiWorkerScopes;
  static deserializeBinaryFromReader(message: ApiWorkerScopes, reader: jspb.BinaryReader): ApiWorkerScopes;
}

export namespace ApiWorkerScopes {
  export type AsObject = {
    scopesList: Array<string>,
  }
}

export class ApiWorkerOptions extends jspb.Message {
  getSecurityMap(): jspb.Map<string, ApiWorkerScopes>;
  clearSecurityMap(): void;
  getSecurityDisabled(): boolean;
  setSecurityDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiWorkerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ApiWorkerOptions): ApiWorkerOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiWorkerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiWorkerOptions;
  static deserializeBinaryFromReader(message: ApiWorkerOptions, reader: jspb.BinaryReader): ApiWorkerOptions;
}

export namespace ApiWorkerOptions {
  export type AsObject = {
    securityMap: Array<[string, ApiWorkerScopes.AsObject]>,
    securityDisabled: boolean,
  }
}

export class ApiWorker extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  clearMethodsList(): void;
  getMethodsList(): Array<string>;
  setMethodsList(value: Array<string>): void;
  addMethods(value: string, index?: number): string;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): ApiWorkerOptions | undefined;
  setOptions(value?: ApiWorkerOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiWorker.AsObject;
  static toObject(includeInstance: boolean, msg: ApiWorker): ApiWorker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiWorker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiWorker;
  static deserializeBinaryFromReader(message: ApiWorker, reader: jspb.BinaryReader): ApiWorker;
}

export namespace ApiWorker {
  export type AsObject = {
    api: string,
    path: string,
    methodsList: Array<string>,
    options?: ApiWorkerOptions.AsObject,
  }
}

export class SubscriptionWorker extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionWorker.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionWorker): SubscriptionWorker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionWorker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionWorker;
  static deserializeBinaryFromReader(message: SubscriptionWorker, reader: jspb.BinaryReader): SubscriptionWorker;
}

export namespace SubscriptionWorker {
  export type AsObject = {
    topic: string,
  }
}

export class ScheduleWorker extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  hasRate(): boolean;
  clearRate(): void;
  getRate(): ScheduleRate | undefined;
  setRate(value?: ScheduleRate): void;

  hasCron(): boolean;
  clearCron(): void;
  getCron(): ScheduleCron | undefined;
  setCron(value?: ScheduleCron): void;

  getCadenceCase(): ScheduleWorker.CadenceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleWorker.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleWorker): ScheduleWorker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleWorker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleWorker;
  static deserializeBinaryFromReader(message: ScheduleWorker, reader: jspb.BinaryReader): ScheduleWorker;
}

export namespace ScheduleWorker {
  export type AsObject = {
    key: string,
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
  getCron(): string;
  setCron(value: string): void;

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
    cron: string,
  }
}

export class InitRequest extends jspb.Message {
  hasApi(): boolean;
  clearApi(): void;
  getApi(): ApiWorker | undefined;
  setApi(value?: ApiWorker): void;

  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): SubscriptionWorker | undefined;
  setSubscription(value?: SubscriptionWorker): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): ScheduleWorker | undefined;
  setSchedule(value?: ScheduleWorker): void;

  getWorkerCase(): InitRequest.WorkerCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitRequest): InitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitRequest;
  static deserializeBinaryFromReader(message: InitRequest, reader: jspb.BinaryReader): InitRequest;
}

export namespace InitRequest {
  export type AsObject = {
    api?: ApiWorker.AsObject,
    subscription?: SubscriptionWorker.AsObject,
    schedule?: ScheduleWorker.AsObject,
  }

  export enum WorkerCase {
    WORKER_NOT_SET = 0,
    API = 10,
    SUBSCRIPTION = 11,
    SCHEDULE = 12,
  }
}

export class InitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitResponse): InitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitResponse;
  static deserializeBinaryFromReader(message: InitResponse, reader: jspb.BinaryReader): InitResponse;
}

export namespace InitResponse {
  export type AsObject = {
  }
}

export class TriggerRequest extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  hasHttp(): boolean;
  clearHttp(): void;
  getHttp(): HttpTriggerContext | undefined;
  setHttp(value?: HttpTriggerContext): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): TopicTriggerContext | undefined;
  setTopic(value?: TopicTriggerContext): void;

  getContextCase(): TriggerRequest.ContextCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerRequest): TriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerRequest;
  static deserializeBinaryFromReader(message: TriggerRequest, reader: jspb.BinaryReader): TriggerRequest;
}

export namespace TriggerRequest {
  export type AsObject = {
    data: Uint8Array | string,
    mimeType: string,
    http?: HttpTriggerContext.AsObject,
    topic?: TopicTriggerContext.AsObject,
  }

  export enum ContextCase {
    CONTEXT_NOT_SET = 0,
    HTTP = 3,
    TOPIC = 4,
  }
}

export class HeaderValue extends jspb.Message {
  clearValueList(): void;
  getValueList(): Array<string>;
  setValueList(value: Array<string>): void;
  addValue(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderValue.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderValue): HeaderValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderValue;
  static deserializeBinaryFromReader(message: HeaderValue, reader: jspb.BinaryReader): HeaderValue;
}

export namespace HeaderValue {
  export type AsObject = {
    valueList: Array<string>,
  }
}

export class QueryValue extends jspb.Message {
  clearValueList(): void;
  getValueList(): Array<string>;
  setValueList(value: Array<string>): void;
  addValue(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValue.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValue): QueryValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValue;
  static deserializeBinaryFromReader(message: QueryValue, reader: jspb.BinaryReader): QueryValue;
}

export namespace QueryValue {
  export type AsObject = {
    valueList: Array<string>,
  }
}

export class HttpTriggerContext extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getHeadersOldMap(): jspb.Map<string, string>;
  clearHeadersOldMap(): void;
  getQueryParamsOldMap(): jspb.Map<string, string>;
  clearQueryParamsOldMap(): void;
  getHeadersMap(): jspb.Map<string, HeaderValue>;
  clearHeadersMap(): void;
  getQueryParamsMap(): jspb.Map<string, QueryValue>;
  clearQueryParamsMap(): void;
  getPathParamsMap(): jspb.Map<string, string>;
  clearPathParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpTriggerContext.AsObject;
  static toObject(includeInstance: boolean, msg: HttpTriggerContext): HttpTriggerContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpTriggerContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpTriggerContext;
  static deserializeBinaryFromReader(message: HttpTriggerContext, reader: jspb.BinaryReader): HttpTriggerContext;
}

export namespace HttpTriggerContext {
  export type AsObject = {
    method: string,
    path: string,
    headersOldMap: Array<[string, string]>,
    queryParamsOldMap: Array<[string, string]>,
    headersMap: Array<[string, HeaderValue.AsObject]>,
    queryParamsMap: Array<[string, QueryValue.AsObject]>,
    pathParamsMap: Array<[string, string]>,
  }
}

export class TopicTriggerContext extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicTriggerContext.AsObject;
  static toObject(includeInstance: boolean, msg: TopicTriggerContext): TopicTriggerContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicTriggerContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicTriggerContext;
  static deserializeBinaryFromReader(message: TopicTriggerContext, reader: jspb.BinaryReader): TopicTriggerContext;
}

export namespace TopicTriggerContext {
  export type AsObject = {
    topic: string,
  }
}

export class TriggerResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasHttp(): boolean;
  clearHttp(): void;
  getHttp(): HttpResponseContext | undefined;
  setHttp(value?: HttpResponseContext): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): TopicResponseContext | undefined;
  setTopic(value?: TopicResponseContext): void;

  getContextCase(): TriggerResponse.ContextCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerResponse): TriggerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerResponse;
  static deserializeBinaryFromReader(message: TriggerResponse, reader: jspb.BinaryReader): TriggerResponse;
}

export namespace TriggerResponse {
  export type AsObject = {
    data: Uint8Array | string,
    http?: HttpResponseContext.AsObject,
    topic?: TopicResponseContext.AsObject,
  }

  export enum ContextCase {
    CONTEXT_NOT_SET = 0,
    HTTP = 10,
    TOPIC = 11,
  }
}

export class HttpResponseContext extends jspb.Message {
  getHeadersOldMap(): jspb.Map<string, string>;
  clearHeadersOldMap(): void;
  getStatus(): number;
  setStatus(value: number): void;

  getHeadersMap(): jspb.Map<string, HeaderValue>;
  clearHeadersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpResponseContext.AsObject;
  static toObject(includeInstance: boolean, msg: HttpResponseContext): HttpResponseContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpResponseContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpResponseContext;
  static deserializeBinaryFromReader(message: HttpResponseContext, reader: jspb.BinaryReader): HttpResponseContext;
}

export namespace HttpResponseContext {
  export type AsObject = {
    headersOldMap: Array<[string, string]>,
    status: number,
    headersMap: Array<[string, HeaderValue.AsObject]>,
  }
}

export class TopicResponseContext extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicResponseContext.AsObject;
  static toObject(includeInstance: boolean, msg: TopicResponseContext): TopicResponseContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicResponseContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicResponseContext;
  static deserializeBinaryFromReader(message: TopicResponseContext, reader: jspb.BinaryReader): TopicResponseContext;
}

export namespace TopicResponseContext {
  export type AsObject = {
    success: boolean,
  }
}

