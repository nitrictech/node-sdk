// package: nitric.resource.v1
// file: proto/resource/v1/resource.proto

import * as jspb from "google-protobuf";

export class PolicyResource extends jspb.Message {
  clearPrincipalsList(): void;
  getPrincipalsList(): Array<Resource>;
  setPrincipalsList(value: Array<Resource>): void;
  addPrincipals(value?: Resource, index?: number): Resource;

  clearActionsList(): void;
  getActionsList(): Array<ActionMap[keyof ActionMap]>;
  setActionsList(value: Array<ActionMap[keyof ActionMap]>): void;
  addActions(value: ActionMap[keyof ActionMap], index?: number): ActionMap[keyof ActionMap];

  clearResourcesList(): void;
  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): void;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyResource.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyResource): PolicyResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyResource;
  static deserializeBinaryFromReader(message: PolicyResource, reader: jspb.BinaryReader): PolicyResource;
}

export namespace PolicyResource {
  export type AsObject = {
    principalsList: Array<Resource.AsObject>,
    actionsList: Array<ActionMap[keyof ActionMap]>,
    resourcesList: Array<Resource.AsObject>,
  }
}

export class Resource extends jspb.Message {
  getType(): ResourceTypeMap[keyof ResourceTypeMap];
  setType(value: ResourceTypeMap[keyof ResourceTypeMap]): void;

  getName(): string;
  setName(value: string): void;

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
    type: ResourceTypeMap[keyof ResourceTypeMap],
    name: string,
  }
}

export class ResourceDeclareRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  hasPolicy(): boolean;
  clearPolicy(): void;
  getPolicy(): PolicyResource | undefined;
  setPolicy(value?: PolicyResource): void;

  hasBucket(): boolean;
  clearBucket(): void;
  getBucket(): BucketResource | undefined;
  setBucket(value?: BucketResource): void;

  hasQueue(): boolean;
  clearQueue(): void;
  getQueue(): QueueResource | undefined;
  setQueue(value?: QueueResource): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): TopicResource | undefined;
  setTopic(value?: TopicResource): void;

  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): CollectionResource | undefined;
  setCollection(value?: CollectionResource): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): SecretResource | undefined;
  setSecret(value?: SecretResource): void;

  hasApi(): boolean;
  clearApi(): void;
  getApi(): ApiResource | undefined;
  setApi(value?: ApiResource): void;

  getConfigCase(): ResourceDeclareRequest.ConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceDeclareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceDeclareRequest): ResourceDeclareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceDeclareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceDeclareRequest;
  static deserializeBinaryFromReader(message: ResourceDeclareRequest, reader: jspb.BinaryReader): ResourceDeclareRequest;
}

export namespace ResourceDeclareRequest {
  export type AsObject = {
    resource?: Resource.AsObject,
    policy?: PolicyResource.AsObject,
    bucket?: BucketResource.AsObject,
    queue?: QueueResource.AsObject,
    topic?: TopicResource.AsObject,
    collection?: CollectionResource.AsObject,
    secret?: SecretResource.AsObject,
    api?: ApiResource.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    POLICY = 10,
    BUCKET = 11,
    QUEUE = 12,
    TOPIC = 13,
    COLLECTION = 14,
    SECRET = 15,
    API = 16,
  }
}

export class BucketResource extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketResource.AsObject;
  static toObject(includeInstance: boolean, msg: BucketResource): BucketResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BucketResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketResource;
  static deserializeBinaryFromReader(message: BucketResource, reader: jspb.BinaryReader): BucketResource;
}

export namespace BucketResource {
  export type AsObject = {
  }
}

export class QueueResource extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueResource.AsObject;
  static toObject(includeInstance: boolean, msg: QueueResource): QueueResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueResource;
  static deserializeBinaryFromReader(message: QueueResource, reader: jspb.BinaryReader): QueueResource;
}

export namespace QueueResource {
  export type AsObject = {
  }
}

export class TopicResource extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicResource.AsObject;
  static toObject(includeInstance: boolean, msg: TopicResource): TopicResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicResource;
  static deserializeBinaryFromReader(message: TopicResource, reader: jspb.BinaryReader): TopicResource;
}

export namespace TopicResource {
  export type AsObject = {
  }
}

export class CollectionResource extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionResource.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionResource): CollectionResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionResource;
  static deserializeBinaryFromReader(message: CollectionResource, reader: jspb.BinaryReader): CollectionResource;
}

export namespace CollectionResource {
  export type AsObject = {
  }
}

export class SecretResource extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretResource.AsObject;
  static toObject(includeInstance: boolean, msg: SecretResource): SecretResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretResource;
  static deserializeBinaryFromReader(message: SecretResource, reader: jspb.BinaryReader): SecretResource;
}

export namespace SecretResource {
  export type AsObject = {
  }
}

export class ApiSecurityDefinitionJwt extends jspb.Message {
  getIssuer(): string;
  setIssuer(value: string): void;

  clearAudiencesList(): void;
  getAudiencesList(): Array<string>;
  setAudiencesList(value: Array<string>): void;
  addAudiences(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiSecurityDefinitionJwt.AsObject;
  static toObject(includeInstance: boolean, msg: ApiSecurityDefinitionJwt): ApiSecurityDefinitionJwt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiSecurityDefinitionJwt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiSecurityDefinitionJwt;
  static deserializeBinaryFromReader(message: ApiSecurityDefinitionJwt, reader: jspb.BinaryReader): ApiSecurityDefinitionJwt;
}

export namespace ApiSecurityDefinitionJwt {
  export type AsObject = {
    issuer: string,
    audiencesList: Array<string>,
  }
}

export class ApiSecurityDefinition extends jspb.Message {
  hasJwt(): boolean;
  clearJwt(): void;
  getJwt(): ApiSecurityDefinitionJwt | undefined;
  setJwt(value?: ApiSecurityDefinitionJwt): void;

  getDefinitionCase(): ApiSecurityDefinition.DefinitionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiSecurityDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ApiSecurityDefinition): ApiSecurityDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiSecurityDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiSecurityDefinition;
  static deserializeBinaryFromReader(message: ApiSecurityDefinition, reader: jspb.BinaryReader): ApiSecurityDefinition;
}

export namespace ApiSecurityDefinition {
  export type AsObject = {
    jwt?: ApiSecurityDefinitionJwt.AsObject,
  }

  export enum DefinitionCase {
    DEFINITION_NOT_SET = 0,
    JWT = 1,
  }
}

export class ApiScopes extends jspb.Message {
  clearScopesList(): void;
  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  addScopes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiScopes.AsObject;
  static toObject(includeInstance: boolean, msg: ApiScopes): ApiScopes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiScopes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiScopes;
  static deserializeBinaryFromReader(message: ApiScopes, reader: jspb.BinaryReader): ApiScopes;
}

export namespace ApiScopes {
  export type AsObject = {
    scopesList: Array<string>,
  }
}

export class ApiResource extends jspb.Message {
  getSecurityDefinitionsMap(): jspb.Map<string, ApiSecurityDefinition>;
  clearSecurityDefinitionsMap(): void;
  getSecurityMap(): jspb.Map<string, ApiScopes>;
  clearSecurityMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiResource.AsObject;
  static toObject(includeInstance: boolean, msg: ApiResource): ApiResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiResource;
  static deserializeBinaryFromReader(message: ApiResource, reader: jspb.BinaryReader): ApiResource;
}

export namespace ApiResource {
  export type AsObject = {
    securityDefinitionsMap: Array<[string, ApiSecurityDefinition.AsObject]>,
    securityMap: Array<[string, ApiScopes.AsObject]>,
  }
}

export class ResourceDeclareResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceDeclareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceDeclareResponse): ResourceDeclareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceDeclareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceDeclareResponse;
  static deserializeBinaryFromReader(message: ResourceDeclareResponse, reader: jspb.BinaryReader): ResourceDeclareResponse;
}

export namespace ResourceDeclareResponse {
  export type AsObject = {
  }
}

export class ApiResourceDetails extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiResourceDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ApiResourceDetails): ApiResourceDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiResourceDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiResourceDetails;
  static deserializeBinaryFromReader(message: ApiResourceDetails, reader: jspb.BinaryReader): ApiResourceDetails;
}

export namespace ApiResourceDetails {
  export type AsObject = {
    url: string,
  }
}

export class ResourceDetailsRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceDetailsRequest): ResourceDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceDetailsRequest;
  static deserializeBinaryFromReader(message: ResourceDetailsRequest, reader: jspb.BinaryReader): ResourceDetailsRequest;
}

export namespace ResourceDetailsRequest {
  export type AsObject = {
    resource?: Resource.AsObject,
  }
}

export class ResourceDetailsResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  getService(): string;
  setService(value: string): void;

  hasApi(): boolean;
  clearApi(): void;
  getApi(): ApiResourceDetails | undefined;
  setApi(value?: ApiResourceDetails): void;

  getDetailsCase(): ResourceDetailsResponse.DetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceDetailsResponse): ResourceDetailsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceDetailsResponse;
  static deserializeBinaryFromReader(message: ResourceDetailsResponse, reader: jspb.BinaryReader): ResourceDetailsResponse;
}

export namespace ResourceDetailsResponse {
  export type AsObject = {
    id: string,
    provider: string,
    service: string,
    api?: ApiResourceDetails.AsObject,
  }

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    API = 10,
  }
}

export interface ResourceTypeMap {
  API: 0;
  FUNCTION: 1;
  BUCKET: 2;
  QUEUE: 3;
  TOPIC: 4;
  SCHEDULE: 5;
  SUBSCRIPTION: 6;
  COLLECTION: 7;
  POLICY: 8;
  SECRET: 9;
}

export const ResourceType: ResourceTypeMap;

export interface ActionMap {
  BUCKETFILELIST: 0;
  BUCKETFILEGET: 1;
  BUCKETFILEPUT: 2;
  BUCKETFILEDELETE: 3;
  TOPICLIST: 200;
  TOPICDETAIL: 201;
  TOPICEVENTPUBLISH: 202;
  QUEUESEND: 300;
  QUEUERECEIVE: 301;
  QUEUELIST: 302;
  QUEUEDETAIL: 303;
  COLLECTIONDOCUMENTREAD: 400;
  COLLECTIONDOCUMENTWRITE: 401;
  COLLECTIONDOCUMENTDELETE: 402;
  COLLECTIONQUERY: 403;
  COLLECTIONLIST: 404;
  SECRETPUT: 500;
  SECRETACCESS: 501;
}

export const Action: ActionMap;

