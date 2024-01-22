// package: nitric.proto.resources.v1
// file: nitric/proto/resources/v1/resources.proto

import * as jspb from "google-protobuf";

export class PolicyResource extends jspb.Message {
  clearPrincipalsList(): void;
  getPrincipalsList(): Array<ResourceIdentifier>;
  setPrincipalsList(value: Array<ResourceIdentifier>): void;
  addPrincipals(value?: ResourceIdentifier, index?: number): ResourceIdentifier;

  clearActionsList(): void;
  getActionsList(): Array<ActionMap[keyof ActionMap]>;
  setActionsList(value: Array<ActionMap[keyof ActionMap]>): void;
  addActions(value: ActionMap[keyof ActionMap], index?: number): ActionMap[keyof ActionMap];

  clearResourcesList(): void;
  getResourcesList(): Array<ResourceIdentifier>;
  setResourcesList(value: Array<ResourceIdentifier>): void;
  addResources(value?: ResourceIdentifier, index?: number): ResourceIdentifier;

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
    principalsList: Array<ResourceIdentifier.AsObject>,
    actionsList: Array<ActionMap[keyof ActionMap]>,
    resourcesList: Array<ResourceIdentifier.AsObject>,
  }
}

export class ResourceIdentifier extends jspb.Message {
  getType(): ResourceTypeMap[keyof ResourceTypeMap];
  setType(value: ResourceTypeMap[keyof ResourceTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceIdentifier): ResourceIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceIdentifier;
  static deserializeBinaryFromReader(message: ResourceIdentifier, reader: jspb.BinaryReader): ResourceIdentifier;
}

export namespace ResourceIdentifier {
  export type AsObject = {
    type: ResourceTypeMap[keyof ResourceTypeMap],
    name: string,
  }
}

export class ResourceDeclareRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ResourceIdentifier | undefined;
  setId(value?: ResourceIdentifier): void;

  hasPolicy(): boolean;
  clearPolicy(): void;
  getPolicy(): PolicyResource | undefined;
  setPolicy(value?: PolicyResource): void;

  hasBucket(): boolean;
  clearBucket(): void;
  getBucket(): BucketResource | undefined;
  setBucket(value?: BucketResource): void;

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

  hasApiSecurityDefinition(): boolean;
  clearApiSecurityDefinition(): void;
  getApiSecurityDefinition(): ApiSecurityDefinitionResource | undefined;
  setApiSecurityDefinition(value?: ApiSecurityDefinitionResource): void;

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
    id?: ResourceIdentifier.AsObject,
    policy?: PolicyResource.AsObject,
    bucket?: BucketResource.AsObject,
    topic?: TopicResource.AsObject,
    collection?: CollectionResource.AsObject,
    secret?: SecretResource.AsObject,
    api?: ApiResource.AsObject,
    apiSecurityDefinition?: ApiSecurityDefinitionResource.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    POLICY = 10,
    BUCKET = 11,
    TOPIC = 12,
    COLLECTION = 13,
    SECRET = 14,
    API = 15,
    API_SECURITY_DEFINITION = 16,
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

export class ApiOpenIdConnectionDefinition extends jspb.Message {
  getIssuer(): string;
  setIssuer(value: string): void;

  clearAudiencesList(): void;
  getAudiencesList(): Array<string>;
  setAudiencesList(value: Array<string>): void;
  addAudiences(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiOpenIdConnectionDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ApiOpenIdConnectionDefinition): ApiOpenIdConnectionDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiOpenIdConnectionDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiOpenIdConnectionDefinition;
  static deserializeBinaryFromReader(message: ApiOpenIdConnectionDefinition, reader: jspb.BinaryReader): ApiOpenIdConnectionDefinition;
}

export namespace ApiOpenIdConnectionDefinition {
  export type AsObject = {
    issuer: string,
    audiencesList: Array<string>,
  }
}

export class ApiSecurityDefinitionResource extends jspb.Message {
  getApiName(): string;
  setApiName(value: string): void;

  hasOidc(): boolean;
  clearOidc(): void;
  getOidc(): ApiOpenIdConnectionDefinition | undefined;
  setOidc(value?: ApiOpenIdConnectionDefinition): void;

  getDefinitionCase(): ApiSecurityDefinitionResource.DefinitionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiSecurityDefinitionResource.AsObject;
  static toObject(includeInstance: boolean, msg: ApiSecurityDefinitionResource): ApiSecurityDefinitionResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiSecurityDefinitionResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiSecurityDefinitionResource;
  static deserializeBinaryFromReader(message: ApiSecurityDefinitionResource, reader: jspb.BinaryReader): ApiSecurityDefinitionResource;
}

export namespace ApiSecurityDefinitionResource {
  export type AsObject = {
    apiName: string,
    oidc?: ApiOpenIdConnectionDefinition.AsObject,
  }

  export enum DefinitionCase {
    DEFINITION_NOT_SET = 0,
    OIDC = 2,
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

export interface ResourceTypeMap {
  API: 0;
  SERVICE: 1;
  BUCKET: 2;
  TOPIC: 3;
  SCHEDULE: 4;
  SUBSCRIPTION: 5;
  COLLECTION: 6;
  POLICY: 7;
  SECRET: 8;
  BUCKETLISTENER: 9;
  WEBSOCKET: 10;
  HTTP: 11;
  APISECURITYDEFINITION: 12;
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
  COLLECTIONDOCUMENTREAD: 300;
  COLLECTIONDOCUMENTWRITE: 301;
  COLLECTIONDOCUMENTDELETE: 302;
  COLLECTIONQUERY: 303;
  COLLECTIONLIST: 304;
  SECRETPUT: 400;
  SECRETACCESS: 401;
  WEBSOCKETMANAGE: 500;
}

export const Action: ActionMap;

