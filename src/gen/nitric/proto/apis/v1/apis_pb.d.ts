// package: nitric.proto.apis.v1
// file: nitric/proto/apis/v1/apis.proto

import * as jspb from "google-protobuf";

export class ApiDetailsRequest extends jspb.Message {
  getApiName(): string;
  setApiName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApiDetailsRequest): ApiDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiDetailsRequest;
  static deserializeBinaryFromReader(message: ApiDetailsRequest, reader: jspb.BinaryReader): ApiDetailsRequest;
}

export namespace ApiDetailsRequest {
  export type AsObject = {
    apiName: string,
  }
}

export class ApiDetailsResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApiDetailsResponse): ApiDetailsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiDetailsResponse;
  static deserializeBinaryFromReader(message: ApiDetailsResponse, reader: jspb.BinaryReader): ApiDetailsResponse;
}

export namespace ApiDetailsResponse {
  export type AsObject = {
    url: string,
  }
}

export class ClientMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationRequest(): boolean;
  clearRegistrationRequest(): void;
  getRegistrationRequest(): RegistrationRequest | undefined;
  setRegistrationRequest(value?: RegistrationRequest): void;

  hasHttpResponse(): boolean;
  clearHttpResponse(): void;
  getHttpResponse(): HttpResponse | undefined;
  setHttpResponse(value?: HttpResponse): void;

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
    httpResponse?: HttpResponse.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_REQUEST = 2,
    HTTP_RESPONSE = 3,
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

export class HttpRequest extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getHeadersMap(): jspb.Map<string, HeaderValue>;
  clearHeadersMap(): void;
  getQueryParamsMap(): jspb.Map<string, QueryValue>;
  clearQueryParamsMap(): void;
  getPathParamsMap(): jspb.Map<string, string>;
  clearPathParamsMap(): void;
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HttpRequest): HttpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpRequest;
  static deserializeBinaryFromReader(message: HttpRequest, reader: jspb.BinaryReader): HttpRequest;
}

export namespace HttpRequest {
  export type AsObject = {
    method: string,
    path: string,
    headersMap: Array<[string, HeaderValue.AsObject]>,
    queryParamsMap: Array<[string, QueryValue.AsObject]>,
    pathParamsMap: Array<[string, string]>,
    body: Uint8Array | string,
  }
}

export class HttpResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getHeadersMap(): jspb.Map<string, HeaderValue>;
  clearHeadersMap(): void;
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HttpResponse): HttpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpResponse;
  static deserializeBinaryFromReader(message: HttpResponse, reader: jspb.BinaryReader): HttpResponse;
}

export namespace HttpResponse {
  export type AsObject = {
    status: number,
    headersMap: Array<[string, HeaderValue.AsObject]>,
    body: Uint8Array | string,
  }
}

export class ServerMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRegistrationResponse(): boolean;
  clearRegistrationResponse(): void;
  getRegistrationResponse(): RegistrationResponse | undefined;
  setRegistrationResponse(value?: RegistrationResponse): void;

  hasHttpRequest(): boolean;
  clearHttpRequest(): void;
  getHttpRequest(): HttpRequest | undefined;
  setHttpRequest(value?: HttpRequest): void;

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
    httpRequest?: HttpRequest.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    REGISTRATION_RESPONSE = 2,
    HTTP_REQUEST = 3,
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

export class RegistrationRequest extends jspb.Message {
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
    api: string,
    path: string,
    methodsList: Array<string>,
    options?: ApiWorkerOptions.AsObject,
  }
}

