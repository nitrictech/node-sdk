import * as jspb from 'google-protobuf';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as grpc from '@grpc/grpc-js';
import * as api$1 from '@opentelemetry/api';

// package: nitric.event.v1


declare class EventPublishRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): NitricEvent$1 | undefined;
  setEvent(value?: NitricEvent$1): void;

  getDelay(): number;
  setDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EventPublishRequest): EventPublishRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPublishRequest;
  static deserializeBinaryFromReader(message: EventPublishRequest, reader: jspb.BinaryReader): EventPublishRequest;
}

declare namespace EventPublishRequest {
  export type AsObject = {
    topic: string,
    event?: NitricEvent$1.AsObject,
    delay: number,
  }
}

declare class EventPublishResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EventPublishResponse): EventPublishResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventPublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPublishResponse;
  static deserializeBinaryFromReader(message: EventPublishResponse, reader: jspb.BinaryReader): EventPublishResponse;
}

declare namespace EventPublishResponse {
  export type AsObject = {
    id: string,
  }
}

declare class TopicListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopicListRequest): TopicListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicListRequest;
  static deserializeBinaryFromReader(message: TopicListRequest, reader: jspb.BinaryReader): TopicListRequest;
}

declare namespace TopicListRequest {
  export type AsObject = {
  }
}

declare class TopicListResponse extends jspb.Message {
  clearTopicsList(): void;
  getTopicsList(): Array<NitricTopic>;
  setTopicsList(value: Array<NitricTopic>): void;
  addTopics(value?: NitricTopic, index?: number): NitricTopic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TopicListResponse): TopicListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicListResponse;
  static deserializeBinaryFromReader(message: TopicListResponse, reader: jspb.BinaryReader): TopicListResponse;
}

declare namespace TopicListResponse {
  export type AsObject = {
    topicsList: Array<NitricTopic.AsObject>,
  }
}

declare class NitricTopic extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NitricTopic.AsObject;
  static toObject(includeInstance: boolean, msg: NitricTopic): NitricTopic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NitricTopic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NitricTopic;
  static deserializeBinaryFromReader(message: NitricTopic, reader: jspb.BinaryReader): NitricTopic;
}

declare namespace NitricTopic {
  export type AsObject = {
    name: string,
  }
}

declare class NitricEvent$1 extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPayloadType(): string;
  setPayloadType(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NitricEvent$1.AsObject;
  static toObject(includeInstance: boolean, msg: NitricEvent$1): NitricEvent$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NitricEvent$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NitricEvent$1;
  static deserializeBinaryFromReader(message: NitricEvent$1, reader: jspb.BinaryReader): NitricEvent$1;
}

declare namespace NitricEvent$1 {
  export type AsObject = {
    id: string,
    payloadType: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

// GENERATED CODE -- DO NOT EDIT!


declare class EventServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  publish(argument: EventPublishRequest, callback: grpc.requestCallback<EventPublishResponse>): grpc.ClientUnaryCall;
  publish(argument: EventPublishRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<EventPublishResponse>): grpc.ClientUnaryCall;
  publish(argument: EventPublishRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<EventPublishResponse>): grpc.ClientUnaryCall;
}

declare class TopicServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  list(argument: TopicListRequest, callback: grpc.requestCallback<TopicListResponse>): grpc.ClientUnaryCall;
  list(argument: TopicListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<TopicListResponse>): grpc.ClientUnaryCall;
  list(argument: TopicListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<TopicListResponse>): grpc.ClientUnaryCall;
}

declare class NitricEvent<T extends Record<string, any> = Record<string, any>> {
    readonly payload: T;
    readonly id?: string;
    readonly payloadType: string;
    constructor(payload: T, id?: string, payloadType?: string);
}
declare class NitricTask$1<T extends Record<string, any> = Record<string, any>> {
    readonly id: string | undefined;
    readonly payloadType: string;
    readonly payload: T;
    constructor({ id, payload, payloadType, }: {
        id?: string;
        payloadType?: string;
        payload: T;
    });
}
type WhereQueryOperator = '<' | '<=' | '==' | '!=' | '>=' | '>' | 'startsWith';
type WhereValueExpression = string | number | boolean;
type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';

interface PublishOptions {
    /** Number of seconds to delay message publishing by */
    delay?: number;
}
declare class Topic<T extends Record<string, any> = Record<string, any>> {
    eventing: Eventing;
    name: string;
    constructor(eventing: Eventing, name: string);
    /**
     * Publishes an event to a nitric topic.
     *
     * @param event The event to publish
     * @param opts Additional publishing options
     * @returns NitricEvent containing the unique id of the event (if not provided it will be generated)
     *
     * @example
     * ```typescript
     * import { Eventing } from "@nitric/sdk";
     *
     * const eventing = Eventing();
     *
     * async function publishEvent(): NitricEvent {
     *   const topic = eventing.topic("my-topic");
     *   const event = {
     *     payloadType: "my-payload",
     *     payload: {
     *       value: "Hello World!"
     *     }
     *   };
     *   // Publish immediately
     *   await topic.publish(event);
     *
     *   // Publish after 10 seconds delay
     *   await topic.publish(event, { delay: 10 });
     * }
     * ```
     */
    publish(event: T | NitricEvent<T>, opts?: PublishOptions): Promise<NitricEvent<T>>;
}
/**
 * Eventing object encapsulating the Nitric gRPC clients for Event and Topic services.
 *
 * Used to created references to Topics and perform Event publishing operations.
 *
 * @example
 * ```typescript
 * import { Eventing } from "@nitric/sdk";
 * const eventing = new Eventing();
 * const topic = eventing.topic('notifications');
 * ```
 */
declare class Eventing {
    private _clients;
    get EventServiceClient(): EventServiceClient;
    get TopicServiceClient(): TopicServiceClient;
    /**
     * Get a reference to a Topic.
     *
     * @param name Name of the topic, as defined in nitric.yaml.
     * @returns a topic resource.
     * @example
     * ```typescript
     * import { Eventing } from "@nitric/sdk";
     * const eventing = new Eventing();
     * const topic = eventing.topic('notifications');
     * ```
     */
    topic<T extends Record<string, any> = Record<string, any>>(name: string): Topic<T>;
    /**
     * Retrieve all available topic references by querying for available topics.
     *
     * @returns A promise containing the list of available nitric topics
     * @example
     * ```typescript
     * import { Eventing } from "@nitric/sdk";
     *
     * const eventing = new Eventing();
     *
     * const topics = await eventing.topics();
     * ```
     */
    topics(): Promise<Topic[]>;
}
/**
 * Events API client.
 *
 * @returns an Events API client.
 * @example
 * ```typescript
 * import { events } from "@nitric/sdk";
 *
 * async function publishEvent() {
 *  const topic = events().topic('notifications');
 *
 *  await topic.publish({
 *    payload: {
 *     amazing: 'thing happened!',
 *    },
 *  });
 *
 *  return 'Successfully published notification';
 * }
 * ```
 */
declare const events: () => Eventing;

// package: nitric.document.v1


declare class Collection extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): Key | undefined;
  setParent(value?: Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collection.AsObject;
  static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collection;
  static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
}

declare namespace Collection {
  export type AsObject = {
    name: string,
    parent?: Key.AsObject,
  }
}

declare class Key extends jspb.Message {
  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): Collection | undefined;
  setCollection(value?: Collection): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

declare namespace Key {
  export type AsObject = {
    collection?: Collection.AsObject,
    id: string,
  }
}

declare class Document extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): Key | undefined;
  setKey(value?: Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

declare namespace Document {
  export type AsObject = {
    content?: google_protobuf_struct_pb.Struct.AsObject,
    key?: Key.AsObject,
  }
}

declare class ExpressionValue extends jspb.Message {
  hasIntValue(): boolean;
  clearIntValue(): void;
  getIntValue(): number;
  setIntValue(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  getKindCase(): ExpressionValue.KindCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpressionValue.AsObject;
  static toObject(includeInstance: boolean, msg: ExpressionValue): ExpressionValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpressionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpressionValue;
  static deserializeBinaryFromReader(message: ExpressionValue, reader: jspb.BinaryReader): ExpressionValue;
}

declare namespace ExpressionValue {
  export type AsObject = {
    intValue: number,
    doubleValue: number,
    stringValue: string,
    boolValue: boolean,
  }

  export enum KindCase {
    KIND_NOT_SET = 0,
    INT_VALUE = 1,
    DOUBLE_VALUE = 2,
    STRING_VALUE = 3,
    BOOL_VALUE = 4,
  }
}

declare class Expression extends jspb.Message {
  getOperand(): string;
  setOperand(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ExpressionValue | undefined;
  setValue(value?: ExpressionValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expression.AsObject;
  static toObject(includeInstance: boolean, msg: Expression): Expression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Expression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expression;
  static deserializeBinaryFromReader(message: Expression, reader: jspb.BinaryReader): Expression;
}

declare namespace Expression {
  export type AsObject = {
    operand: string,
    operator: string,
    value?: ExpressionValue.AsObject,
  }
}

declare class DocumentGetRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): Key | undefined;
  setKey(value?: Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentGetRequest): DocumentGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentGetRequest;
  static deserializeBinaryFromReader(message: DocumentGetRequest, reader: jspb.BinaryReader): DocumentGetRequest;
}

declare namespace DocumentGetRequest {
  export type AsObject = {
    key?: Key.AsObject,
  }
}

declare class DocumentGetResponse extends jspb.Message {
  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Document | undefined;
  setDocument(value?: Document): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentGetResponse): DocumentGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentGetResponse;
  static deserializeBinaryFromReader(message: DocumentGetResponse, reader: jspb.BinaryReader): DocumentGetResponse;
}

declare namespace DocumentGetResponse {
  export type AsObject = {
    document?: Document.AsObject,
  }
}

declare class DocumentSetRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): Key | undefined;
  setKey(value?: Key): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSetRequest): DocumentSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSetRequest;
  static deserializeBinaryFromReader(message: DocumentSetRequest, reader: jspb.BinaryReader): DocumentSetRequest;
}

declare namespace DocumentSetRequest {
  export type AsObject = {
    key?: Key.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class DocumentSetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSetResponse): DocumentSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSetResponse;
  static deserializeBinaryFromReader(message: DocumentSetResponse, reader: jspb.BinaryReader): DocumentSetResponse;
}

declare namespace DocumentSetResponse {
  export type AsObject = {
  }
}

declare class DocumentDeleteRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): Key | undefined;
  setKey(value?: Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentDeleteRequest): DocumentDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentDeleteRequest;
  static deserializeBinaryFromReader(message: DocumentDeleteRequest, reader: jspb.BinaryReader): DocumentDeleteRequest;
}

declare namespace DocumentDeleteRequest {
  export type AsObject = {
    key?: Key.AsObject,
  }
}

declare class DocumentDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentDeleteResponse): DocumentDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentDeleteResponse;
  static deserializeBinaryFromReader(message: DocumentDeleteResponse, reader: jspb.BinaryReader): DocumentDeleteResponse;
}

declare namespace DocumentDeleteResponse {
  export type AsObject = {
  }
}

declare class DocumentQueryRequest extends jspb.Message {
  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): Collection | undefined;
  setCollection(value?: Collection): void;

  clearExpressionsList(): void;
  getExpressionsList(): Array<Expression>;
  setExpressionsList(value: Array<Expression>): void;
  addExpressions(value?: Expression, index?: number): Expression;

  getLimit(): number;
  setLimit(value: number): void;

  getPagingTokenMap(): jspb.Map<string, string>;
  clearPagingTokenMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentQueryRequest): DocumentQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentQueryRequest;
  static deserializeBinaryFromReader(message: DocumentQueryRequest, reader: jspb.BinaryReader): DocumentQueryRequest;
}

declare namespace DocumentQueryRequest {
  export type AsObject = {
    collection?: Collection.AsObject,
    expressionsList: Array<Expression.AsObject>,
    limit: number,
    pagingTokenMap: Array<[string, string]>,
  }
}

declare class DocumentQueryResponse extends jspb.Message {
  clearDocumentsList(): void;
  getDocumentsList(): Array<Document>;
  setDocumentsList(value: Array<Document>): void;
  addDocuments(value?: Document, index?: number): Document;

  getPagingTokenMap(): jspb.Map<string, string>;
  clearPagingTokenMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentQueryResponse): DocumentQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentQueryResponse;
  static deserializeBinaryFromReader(message: DocumentQueryResponse, reader: jspb.BinaryReader): DocumentQueryResponse;
}

declare namespace DocumentQueryResponse {
  export type AsObject = {
    documentsList: Array<Document.AsObject>,
    pagingTokenMap: Array<[string, string]>,
  }
}

declare class DocumentQueryStreamRequest extends jspb.Message {
  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): Collection | undefined;
  setCollection(value?: Collection): void;

  clearExpressionsList(): void;
  getExpressionsList(): Array<Expression>;
  setExpressionsList(value: Array<Expression>): void;
  addExpressions(value?: Expression, index?: number): Expression;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentQueryStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentQueryStreamRequest): DocumentQueryStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentQueryStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentQueryStreamRequest;
  static deserializeBinaryFromReader(message: DocumentQueryStreamRequest, reader: jspb.BinaryReader): DocumentQueryStreamRequest;
}

declare namespace DocumentQueryStreamRequest {
  export type AsObject = {
    collection?: Collection.AsObject,
    expressionsList: Array<Expression.AsObject>,
    limit: number,
  }
}

declare class DocumentQueryStreamResponse extends jspb.Message {
  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Document | undefined;
  setDocument(value?: Document): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentQueryStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentQueryStreamResponse): DocumentQueryStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentQueryStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentQueryStreamResponse;
  static deserializeBinaryFromReader(message: DocumentQueryStreamResponse, reader: jspb.BinaryReader): DocumentQueryStreamResponse;
}

declare namespace DocumentQueryStreamResponse {
  export type AsObject = {
    document?: Document.AsObject,
  }
}

// GENERATED CODE -- DO NOT EDIT!


declare class DocumentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(argument: DocumentGetRequest, callback: grpc.requestCallback<DocumentGetResponse>): grpc.ClientUnaryCall;
  get(argument: DocumentGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<DocumentGetResponse>): grpc.ClientUnaryCall;
  get(argument: DocumentGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<DocumentGetResponse>): grpc.ClientUnaryCall;
  set(argument: DocumentSetRequest, callback: grpc.requestCallback<DocumentSetResponse>): grpc.ClientUnaryCall;
  set(argument: DocumentSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<DocumentSetResponse>): grpc.ClientUnaryCall;
  set(argument: DocumentSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<DocumentSetResponse>): grpc.ClientUnaryCall;
  delete(argument: DocumentDeleteRequest, callback: grpc.requestCallback<DocumentDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: DocumentDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<DocumentDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: DocumentDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<DocumentDeleteResponse>): grpc.ClientUnaryCall;
  query(argument: DocumentQueryRequest, callback: grpc.requestCallback<DocumentQueryResponse>): grpc.ClientUnaryCall;
  query(argument: DocumentQueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<DocumentQueryResponse>): grpc.ClientUnaryCall;
  query(argument: DocumentQueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<DocumentQueryResponse>): grpc.ClientUnaryCall;
  queryStream(argument: DocumentQueryStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<DocumentQueryStreamResponse>;
  queryStream(argument: DocumentQueryStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<DocumentQueryStreamResponse>;
}

type DocumentStructure = Record<string, any>;
/**
 * Document Ref.
 *
 * Provides a Document Reference class.
 * Used to create references to collections.
 */
declare class DocumentRef<T extends DocumentStructure> {
    private documentClient;
    readonly parent: CollectionRef<T>;
    readonly id: string;
    constructor(documentClient: DocumentServiceClient, parent: CollectionRef<T>, id: string);
    /**
     * Return the collection document reference value.
     *
     * @returns the collection document reference value, or null if not found
     */
    get(): Promise<T>;
    /**
     * Set the document content for this document reference in the database. If the
     * document does not exist an new item will be created, otherwise an
     * existing document will be update with the new value.
     *
     * @param value content the document content to store (required)
     */
    set(value: T): Promise<void>;
    /**
     * Delete this document reference from the database if it exists.
     */
    delete(): Promise<void>;
    private toWire;
    private depth;
    /**
     * Gets a Collection instance that refers to the collection at the specified path.
     *
     * @param name The name of the collection (required)
     * @returns The Collection instance
     */
    collection<T extends DocumentStructure>(name: string): CollectionRef<T>;
}

declare class DocumentSnapshot<T extends DocumentStructure> {
    readonly ref: DocumentRef<T>;
    readonly content: T;
    constructor(ref: DocumentRef<T>, content: T);
    get id(): string;
}

type PagingToken = Map<string, string>;
interface ReadableStream<T> extends NodeJS.ReadableStream {
    on(event: string | symbol, listener: (...args: T[]) => void): this;
}
interface FetchResponse<T> {
    documents: DocumentSnapshot<T>[];
    pagingToken: Map<string, string>;
}
/**
 * Documents
 *
 * Provides a Document API client.
 * Used to create references to collections.
 */
declare class Query<T extends DocumentStructure> {
    private documentClient;
    readonly collection: CollectionRef<T>;
    private expressions;
    private pagingToken;
    private fetchLimit;
    constructor(documentClient: DocumentServiceClient, collection: CollectionRef<T>);
    /**
     * Add a where expression to the query.
     *
     * @param field operand the left hand side expression operand
     * @param operator the query expression operator
     * @param value right hand side operand
     * @returns the Query operation
     */
    where(field: string, operator: WhereQueryOperator, value: WhereValueExpression): Query<T>;
    /**
     * Set the query paging continuation token.
     *
     * @param pagingToken used to determine where to continue paging from.
     * @returns the Query operation
     */
    pagingFrom(pagingToken: PagingToken): Query<T>;
    /**
     * Set the query fetch limit.
     *
     * @param limit the maximum number for results to return.
     * @returns the Query operation
     */
    limit(limit: number): Query<T>;
    fetch(): Promise<FetchResponse<T>>;
    protected getStreamRequest(): DocumentQueryStreamRequest;
    /**
     * Queries the collection and returns a readable stream.
     *
     * @returns all query results as a stream
     * @example
     * ```typescript
     * import { documents } from "@nitric/sdk";
     *
     * const docs = documents();
     *
     * async function getDocs() {
     *   const docs = [];
     *   const stream = docs
     *     .collection('customers')
     *     .query()
     *     .where('name', '==', 'david')
     *     .stream();
     *
     *   for await (const chunk of stream) {
     *     docs.push(chunk);
     *   }
     *
     *   return docs;
     * }
     * ```
     *
     */
    stream(): ReadableStream<DocumentSnapshot<T>>;
}

/**
 * CollectionGroupRef
 *
 * Provides a Document API CollectionGroupRef class.
 */
declare class CollectionGroupRef<T extends DocumentStructure> {
    private documentClient;
    readonly parent: CollectionGroupRef<any>;
    readonly name: string;
    constructor(documentClient: DocumentServiceClient, name: string, parent?: CollectionGroupRef<any>);
    /**
     * Create a CollectionGroupRef referencing a sub-collection of this collection.
     *
     * @param name of the sub-collection
     * @returns a reference to the sub-collection
     */
    collection<T extends DocumentStructure>(name: string): CollectionGroupRef<T>;
    /**
     * Create a new collection query object.
     *
     * @returns a new collection query object
     */
    query(): Query<T>;
    private depth;
    private toCollectionRef;
    /**
     * Creates a collection group reference from a collection reference.
     *
     * @internal
     * @param ref a collection reference.
     * @param dc a document service client.
     * @returns a collection group reference.
     */
    static fromCollectionRef(ref: CollectionRef<any>, dc: DocumentServiceClient): CollectionGroupRef<any>;
}

/**
 * CollectionRef
 *
 * Provides a Document API CollectionRef class.
 */
declare class CollectionRef<T extends DocumentStructure> {
    private documentClient;
    readonly name: string;
    readonly parent?: DocumentRef<any>;
    constructor(documentClient: DocumentServiceClient, name: string, parent?: DocumentRef<any>);
    /**
     * Return a reference to a sub-collection within the documents of this collection.
     *
     * Useful when querying sub-collection documents across all/many parent documents. E.g. Querying landmarks from multiple cities.
     *
     * @param name the name of the collection
     * @returns a reference to all sub-collections matching the name provided.
     */
    collection(name: string): CollectionGroupRef<T>;
    /**
     * Return a reference to a document in the collection.
     *
     * @param id the unique id of the document
     * @returns new collection document reference
     */
    doc(id: string): DocumentRef<T>;
    /**
     * Create a new collection query object.
     *
     * @returns a new collection query object.
     */
    query(): Query<T>;
    private toWire;
}

/**
 * Documents
 *
 * Provides a Document API client.
 * Used to create references to collections.
 */
declare class Documents {
    private documentClient;
    constructor();
    /**
     * Gets a Collection instance that refers to the collection at the specified path.
     *
     * @param name The name of the collection (required)
     * @returns The Collection instance
     */
    collection<T extends DocumentStructure>(name: string): CollectionRef<T>;
}
/**
 * Documents API client.
 *
 * @returns a Documents API client.
 * @example
 * ```typescript
 * import { documents } from "@nitric/sdk";
 *
 * async function setCustomer() {
 *  const collection = documents().collection('customers');
 *
 *  collection.doc('id').set({
 *    name: 'David',
 *  });
 * }
 * ```
 */
declare const documents: () => Documents;

// package: nitric.queue.v1


declare class QueueSendRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): NitricTask | undefined;
  setTask(value?: NitricTask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendRequest): QueueSendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendRequest;
  static deserializeBinaryFromReader(message: QueueSendRequest, reader: jspb.BinaryReader): QueueSendRequest;
}

declare namespace QueueSendRequest {
  export type AsObject = {
    queue: string,
    task?: NitricTask.AsObject,
  }
}

declare class QueueSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendResponse): QueueSendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendResponse;
  static deserializeBinaryFromReader(message: QueueSendResponse, reader: jspb.BinaryReader): QueueSendResponse;
}

declare namespace QueueSendResponse {
  export type AsObject = {
  }
}

declare class QueueSendBatchRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

  clearTasksList(): void;
  getTasksList(): Array<NitricTask>;
  setTasksList(value: Array<NitricTask>): void;
  addTasks(value?: NitricTask, index?: number): NitricTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendBatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendBatchRequest): QueueSendBatchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendBatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendBatchRequest;
  static deserializeBinaryFromReader(message: QueueSendBatchRequest, reader: jspb.BinaryReader): QueueSendBatchRequest;
}

declare namespace QueueSendBatchRequest {
  export type AsObject = {
    queue: string,
    tasksList: Array<NitricTask.AsObject>,
  }
}

declare class QueueSendBatchResponse extends jspb.Message {
  clearFailedtasksList(): void;
  getFailedtasksList(): Array<FailedTask>;
  setFailedtasksList(value: Array<FailedTask>): void;
  addFailedtasks(value?: FailedTask, index?: number): FailedTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueSendBatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueSendBatchResponse): QueueSendBatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueSendBatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueSendBatchResponse;
  static deserializeBinaryFromReader(message: QueueSendBatchResponse, reader: jspb.BinaryReader): QueueSendBatchResponse;
}

declare namespace QueueSendBatchResponse {
  export type AsObject = {
    failedtasksList: Array<FailedTask.AsObject>,
  }
}

declare class QueueReceiveRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueReceiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueReceiveRequest): QueueReceiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueReceiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueReceiveRequest;
  static deserializeBinaryFromReader(message: QueueReceiveRequest, reader: jspb.BinaryReader): QueueReceiveRequest;
}

declare namespace QueueReceiveRequest {
  export type AsObject = {
    queue: string,
    depth: number,
  }
}

declare class QueueReceiveResponse extends jspb.Message {
  clearTasksList(): void;
  getTasksList(): Array<NitricTask>;
  setTasksList(value: Array<NitricTask>): void;
  addTasks(value?: NitricTask, index?: number): NitricTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueReceiveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueReceiveResponse): QueueReceiveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueReceiveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueReceiveResponse;
  static deserializeBinaryFromReader(message: QueueReceiveResponse, reader: jspb.BinaryReader): QueueReceiveResponse;
}

declare namespace QueueReceiveResponse {
  export type AsObject = {
    tasksList: Array<NitricTask.AsObject>,
  }
}

declare class QueueCompleteRequest extends jspb.Message {
  getQueue(): string;
  setQueue(value: string): void;

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

declare namespace QueueCompleteRequest {
  export type AsObject = {
    queue: string,
    leaseId: string,
  }
}

declare class QueueCompleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueCompleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueCompleteResponse): QueueCompleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueCompleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueCompleteResponse;
  static deserializeBinaryFromReader(message: QueueCompleteResponse, reader: jspb.BinaryReader): QueueCompleteResponse;
}

declare namespace QueueCompleteResponse {
  export type AsObject = {
  }
}

declare class FailedTask extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): NitricTask | undefined;
  setTask(value?: NitricTask): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailedTask.AsObject;
  static toObject(includeInstance: boolean, msg: FailedTask): FailedTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FailedTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailedTask;
  static deserializeBinaryFromReader(message: FailedTask, reader: jspb.BinaryReader): FailedTask;
}

declare namespace FailedTask {
  export type AsObject = {
    task?: NitricTask.AsObject,
    message: string,
  }
}

declare class NitricTask extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLeaseId(): string;
  setLeaseId(value: string): void;

  getPayloadType(): string;
  setPayloadType(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NitricTask.AsObject;
  static toObject(includeInstance: boolean, msg: NitricTask): NitricTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NitricTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NitricTask;
  static deserializeBinaryFromReader(message: NitricTask, reader: jspb.BinaryReader): NitricTask;
}

declare namespace NitricTask {
  export type AsObject = {
    id: string,
    leaseId: string,
    payloadType: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

// GENERATED CODE -- DO NOT EDIT!


declare class QueueServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  send(argument: QueueSendRequest, callback: grpc.requestCallback<QueueSendResponse>): grpc.ClientUnaryCall;
  send(argument: QueueSendRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<QueueSendResponse>): grpc.ClientUnaryCall;
  send(argument: QueueSendRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<QueueSendResponse>): grpc.ClientUnaryCall;
  sendBatch(argument: QueueSendBatchRequest, callback: grpc.requestCallback<QueueSendBatchResponse>): grpc.ClientUnaryCall;
  sendBatch(argument: QueueSendBatchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<QueueSendBatchResponse>): grpc.ClientUnaryCall;
  sendBatch(argument: QueueSendBatchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<QueueSendBatchResponse>): grpc.ClientUnaryCall;
  receive(argument: QueueReceiveRequest, callback: grpc.requestCallback<QueueReceiveResponse>): grpc.ClientUnaryCall;
  receive(argument: QueueReceiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<QueueReceiveResponse>): grpc.ClientUnaryCall;
  receive(argument: QueueReceiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<QueueReceiveResponse>): grpc.ClientUnaryCall;
  complete(argument: QueueCompleteRequest, callback: grpc.requestCallback<QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: QueueCompleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: QueueCompleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<QueueCompleteResponse>): grpc.ClientUnaryCall;
}

/**
 * A message that has failed to be enqueued
 */
interface FailedMessage<T> {
    task: NitricTask$1<T>;
    message: string;
}
/**
 * Nitric queue client, facilitates pushing and popping to distributed queues.
 */
declare class Queueing {
    QueueServiceClient: QueueServiceClient;
    constructor();
    queue: <T>(name: string) => Queue<T>;
}
declare class Queue<T extends Record<string, any> = Record<string, any>> {
    queueing: Queueing;
    name: string;
    constructor(queueing: Queueing, name: string);
    /**
     * Send an task to a queue, which can be retrieved by other services.
     *
     * If an array of tasks is provided the returns promise will resolve to an array containing
     * any tasks that failed to be sent to the queue.
     *
     * When a single task is provided a void promise will be returned, which rejects if the
     * task fails to be sent to the queue.
     *
     * @param tasks one or more tasks to push to the queue
     * @returns A void promise for a single task or a list of failed tasks when sending an array of tasks.
     *
     * Example:
     * ```typescript
     * import { Queueing } from "@nitric/sdk";
     *
     * const queueing = new Queueing();
     * const queue = queueing.queue("my-queue")
     * await queue.send({
     *   id: "1234";
     *   payloadType: "my-payload";
     *   payload: {
     *     value: "test"
     *   };
     * });
     */
    send(tasks: T[] | NitricTask$1<T>[]): Promise<FailedMessage<T>[]>;
    send(tasks: T | NitricTask$1<T>): Promise<void>;
    /**
     * Pop 1 or more queue items from the specified queue up to the depth limit.
     *
     * Nitric Tasks are leased for a limited period of time, where they may be worked on.
     * Once complete or failed they must be acknowledged using request specified leaseId.
     *
     * If the lease on a queue item expires before it is acknowledged or the lease is extended the task will be returned to the queue for reprocessing.
     *
     * @param depth the maximum number of items to return. Default 1, Min 1.
     * @returns The list of received tasks
     *
     * Example:
     * ```typescript
     * import { Queueing } from "@nitric/sdk"
     *
     * const queueing = new Queueing();
     *
     * const [task] = await queueing.queue("my-queue").receive();
     *
     * // do something with task
     * ```
     */
    receive(depth?: number): Promise<ReceivedTask<T>[]>;
}
declare class ReceivedTask<T extends Record<string, any> = Record<string, any>> extends NitricTask$1<T> {
    leaseId: string;
    queue: Queue;
    constructor({ id, leaseId, payload, payloadType, queue, }: {
        id: string;
        payload: T;
        payloadType: string;
        leaseId: string;
        queue: Queue;
    });
    /**
     * Marks a queue item as successfully completed and removes it from the queue.
     *
     * @returns A void promise
     *
     * Example:
     * ```typescript
     * import { Queueing } from "@nitric/sdk"
     *
     * const queueing = new Queueing();
     *
     * const [task] = await queueing.queue("my-queue").receive();
     *
     * // do something with task
     *
     * // complete the task
     * await task.complete();
     * ```
     */
    complete(): Promise<void>;
}
/**
 * Queues API Client.
 *
 * @returns a Queues API client.
 * @example
 * ```typescript
 * import { queues } from "@nitric/sdk";
 *
 * async function publishToQueue() {
 *  await queues()
 *  .queue('my-queue')
 *  .send({
 *    payload: {
 *      example: 'payload',
 *    },
 *  });
 * }
 * ```
 */
declare const queues: () => Queueing;

// package: nitric.storage.v1


declare class StorageWriteRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageWriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageWriteRequest): StorageWriteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageWriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageWriteRequest;
  static deserializeBinaryFromReader(message: StorageWriteRequest, reader: jspb.BinaryReader): StorageWriteRequest;
}

declare namespace StorageWriteRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
    body: Uint8Array | string,
  }
}

declare class StorageWriteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageWriteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageWriteResponse): StorageWriteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageWriteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageWriteResponse;
  static deserializeBinaryFromReader(message: StorageWriteResponse, reader: jspb.BinaryReader): StorageWriteResponse;
}

declare namespace StorageWriteResponse {
  export type AsObject = {
  }
}

declare class StorageReadRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageReadRequest): StorageReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageReadRequest;
  static deserializeBinaryFromReader(message: StorageReadRequest, reader: jspb.BinaryReader): StorageReadRequest;
}

declare namespace StorageReadRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
  }
}

declare class StorageReadResponse extends jspb.Message {
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageReadResponse): StorageReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageReadResponse;
  static deserializeBinaryFromReader(message: StorageReadResponse, reader: jspb.BinaryReader): StorageReadResponse;
}

declare namespace StorageReadResponse {
  export type AsObject = {
    body: Uint8Array | string,
  }
}

declare class StorageDeleteRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDeleteRequest): StorageDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDeleteRequest;
  static deserializeBinaryFromReader(message: StorageDeleteRequest, reader: jspb.BinaryReader): StorageDeleteRequest;
}

declare namespace StorageDeleteRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
  }
}

declare class StorageDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageDeleteResponse): StorageDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageDeleteResponse;
  static deserializeBinaryFromReader(message: StorageDeleteResponse, reader: jspb.BinaryReader): StorageDeleteResponse;
}

declare namespace StorageDeleteResponse {
  export type AsObject = {
  }
}

declare class StoragePreSignUrlRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getOperation(): StoragePreSignUrlRequest.OperationMap[keyof StoragePreSignUrlRequest.OperationMap];
  setOperation(value: StoragePreSignUrlRequest.OperationMap[keyof StoragePreSignUrlRequest.OperationMap]): void;

  getExpiry(): number;
  setExpiry(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoragePreSignUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoragePreSignUrlRequest): StoragePreSignUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoragePreSignUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoragePreSignUrlRequest;
  static deserializeBinaryFromReader(message: StoragePreSignUrlRequest, reader: jspb.BinaryReader): StoragePreSignUrlRequest;
}

declare namespace StoragePreSignUrlRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
    operation: StoragePreSignUrlRequest.OperationMap[keyof StoragePreSignUrlRequest.OperationMap],
    expiry: number,
  }

  export interface OperationMap {
    READ: 0;
    WRITE: 1;
  }

  export const Operation: OperationMap;
}

declare class StoragePreSignUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoragePreSignUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StoragePreSignUrlResponse): StoragePreSignUrlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoragePreSignUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoragePreSignUrlResponse;
  static deserializeBinaryFromReader(message: StoragePreSignUrlResponse, reader: jspb.BinaryReader): StoragePreSignUrlResponse;
}

declare namespace StoragePreSignUrlResponse {
  export type AsObject = {
    url: string,
  }
}

declare class StorageListFilesRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListFilesRequest): StorageListFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListFilesRequest;
  static deserializeBinaryFromReader(message: StorageListFilesRequest, reader: jspb.BinaryReader): StorageListFilesRequest;
}

declare namespace StorageListFilesRequest {
  export type AsObject = {
    bucketName: string,
    prefix: string,
  }
}

declare class File$1 extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File$1.AsObject;
  static toObject(includeInstance: boolean, msg: File$1): File$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File$1;
  static deserializeBinaryFromReader(message: File$1, reader: jspb.BinaryReader): File$1;
}

declare namespace File$1 {
  export type AsObject = {
    key: string,
  }
}

declare class StorageListFilesResponse extends jspb.Message {
  clearFilesList(): void;
  getFilesList(): Array<File$1>;
  setFilesList(value: Array<File$1>): void;
  addFiles(value?: File$1, index?: number): File$1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListFilesResponse): StorageListFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListFilesResponse;
  static deserializeBinaryFromReader(message: StorageListFilesResponse, reader: jspb.BinaryReader): StorageListFilesResponse;
}

declare namespace StorageListFilesResponse {
  export type AsObject = {
    filesList: Array<File$1.AsObject>,
  }
}

// GENERATED CODE -- DO NOT EDIT!


declare class StorageServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  read(argument: StorageReadRequest, callback: grpc.requestCallback<StorageReadResponse>): grpc.ClientUnaryCall;
  read(argument: StorageReadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<StorageReadResponse>): grpc.ClientUnaryCall;
  read(argument: StorageReadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<StorageReadResponse>): grpc.ClientUnaryCall;
  write(argument: StorageWriteRequest, callback: grpc.requestCallback<StorageWriteResponse>): grpc.ClientUnaryCall;
  write(argument: StorageWriteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<StorageWriteResponse>): grpc.ClientUnaryCall;
  write(argument: StorageWriteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<StorageWriteResponse>): grpc.ClientUnaryCall;
  delete(argument: StorageDeleteRequest, callback: grpc.requestCallback<StorageDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: StorageDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<StorageDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: StorageDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<StorageDeleteResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: StoragePreSignUrlRequest, callback: grpc.requestCallback<StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: StoragePreSignUrlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: StoragePreSignUrlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  listFiles(argument: StorageListFilesRequest, callback: grpc.requestCallback<StorageListFilesResponse>): grpc.ClientUnaryCall;
  listFiles(argument: StorageListFilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<StorageListFilesResponse>): grpc.ClientUnaryCall;
  listFiles(argument: StorageListFilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<StorageListFilesResponse>): grpc.ClientUnaryCall;
}

// package: nitric.faas.v1


declare class TraceContext extends jspb.Message {
  getValuesMap(): jspb.Map<string, string>;
  clearValuesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraceContext.AsObject;
  static toObject(includeInstance: boolean, msg: TraceContext): TraceContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraceContext;
  static deserializeBinaryFromReader(message: TraceContext, reader: jspb.BinaryReader): TraceContext;
}

declare namespace TraceContext {
  export type AsObject = {
    valuesMap: Array<[string, string]>,
  }
}

declare class TriggerRequest extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): TraceContext | undefined;
  setTraceContext(value?: TraceContext): void;

  hasHttp(): boolean;
  clearHttp(): void;
  getHttp(): HttpTriggerContext | undefined;
  setHttp(value?: HttpTriggerContext): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): TopicTriggerContext | undefined;
  setTopic(value?: TopicTriggerContext): void;

  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): NotificationTriggerContext | undefined;
  setNotification(value?: NotificationTriggerContext): void;

  hasWebsocket(): boolean;
  clearWebsocket(): void;
  getWebsocket(): WebsocketTriggerContext | undefined;
  setWebsocket(value?: WebsocketTriggerContext): void;

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

declare namespace TriggerRequest {
  export type AsObject = {
    data: Uint8Array | string,
    mimeType: string,
    traceContext?: TraceContext.AsObject,
    http?: HttpTriggerContext.AsObject,
    topic?: TopicTriggerContext.AsObject,
    notification?: NotificationTriggerContext.AsObject,
    websocket?: WebsocketTriggerContext.AsObject,
  }

  export enum ContextCase {
    CONTEXT_NOT_SET = 0,
    HTTP = 3,
    TOPIC = 4,
    NOTIFICATION = 5,
    WEBSOCKET = 6,
  }
}

declare class HeaderValue extends jspb.Message {
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

declare namespace HeaderValue {
  export type AsObject = {
    valueList: Array<string>,
  }
}

declare class QueryValue extends jspb.Message {
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

declare namespace QueryValue {
  export type AsObject = {
    valueList: Array<string>,
  }
}

declare class HttpTriggerContext extends jspb.Message {
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

declare namespace HttpTriggerContext {
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

declare class TopicTriggerContext extends jspb.Message {
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

declare namespace TopicTriggerContext {
  export type AsObject = {
    topic: string,
  }
}

declare class BucketNotification$1 extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getType(): BucketNotificationTypeMap[keyof BucketNotificationTypeMap];
  setType(value: BucketNotificationTypeMap[keyof BucketNotificationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketNotification$1.AsObject;
  static toObject(includeInstance: boolean, msg: BucketNotification$1): BucketNotification$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BucketNotification$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketNotification$1;
  static deserializeBinaryFromReader(message: BucketNotification$1, reader: jspb.BinaryReader): BucketNotification$1;
}

declare namespace BucketNotification$1 {
  export type AsObject = {
    key: string,
    type: BucketNotificationTypeMap[keyof BucketNotificationTypeMap],
  }
}

declare class NotificationTriggerContext extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  hasBucket(): boolean;
  clearBucket(): void;
  getBucket(): BucketNotification$1 | undefined;
  setBucket(value?: BucketNotification$1): void;

  getNotificationCase(): NotificationTriggerContext.NotificationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationTriggerContext.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationTriggerContext): NotificationTriggerContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationTriggerContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationTriggerContext;
  static deserializeBinaryFromReader(message: NotificationTriggerContext, reader: jspb.BinaryReader): NotificationTriggerContext;
}

declare namespace NotificationTriggerContext {
  export type AsObject = {
    source: string,
    bucket?: BucketNotification$1.AsObject,
  }

  export enum NotificationCase {
    NOTIFICATION_NOT_SET = 0,
    BUCKET = 10,
  }
}

declare class WebsocketTriggerContext extends jspb.Message {
  getSocket(): string;
  setSocket(value: string): void;

  getEvent(): WebsocketEventMap[keyof WebsocketEventMap];
  setEvent(value: WebsocketEventMap[keyof WebsocketEventMap]): void;

  getConnectionid(): string;
  setConnectionid(value: string): void;

  getQueryParamsMap(): jspb.Map<string, QueryValue>;
  clearQueryParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketTriggerContext.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketTriggerContext): WebsocketTriggerContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketTriggerContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketTriggerContext;
  static deserializeBinaryFromReader(message: WebsocketTriggerContext, reader: jspb.BinaryReader): WebsocketTriggerContext;
}

declare namespace WebsocketTriggerContext {
  export type AsObject = {
    socket: string,
    event: WebsocketEventMap[keyof WebsocketEventMap],
    connectionid: string,
    queryParamsMap: Array<[string, QueryValue.AsObject]>,
  }
}

declare class TriggerResponse extends jspb.Message {
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

  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): NotificationResponseContext | undefined;
  setNotification(value?: NotificationResponseContext): void;

  hasWebsocket(): boolean;
  clearWebsocket(): void;
  getWebsocket(): WebsocketResponseContext | undefined;
  setWebsocket(value?: WebsocketResponseContext): void;

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

declare namespace TriggerResponse {
  export type AsObject = {
    data: Uint8Array | string,
    http?: HttpResponseContext.AsObject,
    topic?: TopicResponseContext.AsObject,
    notification?: NotificationResponseContext.AsObject,
    websocket?: WebsocketResponseContext.AsObject,
  }

  export enum ContextCase {
    CONTEXT_NOT_SET = 0,
    HTTP = 10,
    TOPIC = 11,
    NOTIFICATION = 12,
    WEBSOCKET = 13,
  }
}

declare class HttpResponseContext extends jspb.Message {
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

declare namespace HttpResponseContext {
  export type AsObject = {
    headersOldMap: Array<[string, string]>,
    status: number,
    headersMap: Array<[string, HeaderValue.AsObject]>,
  }
}

declare class TopicResponseContext extends jspb.Message {
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

declare namespace TopicResponseContext {
  export type AsObject = {
    success: boolean,
  }
}

declare class NotificationResponseContext extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationResponseContext.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationResponseContext): NotificationResponseContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationResponseContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationResponseContext;
  static deserializeBinaryFromReader(message: NotificationResponseContext, reader: jspb.BinaryReader): NotificationResponseContext;
}

declare namespace NotificationResponseContext {
  export type AsObject = {
    success: boolean,
  }
}

declare class WebsocketResponseContext extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketResponseContext.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketResponseContext): WebsocketResponseContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketResponseContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketResponseContext;
  static deserializeBinaryFromReader(message: WebsocketResponseContext, reader: jspb.BinaryReader): WebsocketResponseContext;
}

declare namespace WebsocketResponseContext {
  export type AsObject = {
    success: boolean,
  }
}

interface BucketNotificationTypeMap {
  ALL: 0;
  CREATED: 1;
  DELETED: 2;
}

interface WebsocketEventMap {
  CONNECT: 0;
  DISCONNECT: 1;
  MESSAGE: 2;
}

// package: nitric.resource.v1


declare class Resource$1 extends jspb.Message {
  getType(): ResourceTypeMap[keyof ResourceTypeMap];
  setType(value: ResourceTypeMap[keyof ResourceTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource$1.AsObject;
  static toObject(includeInstance: boolean, msg: Resource$1): Resource$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource$1;
  static deserializeBinaryFromReader(message: Resource$1, reader: jspb.BinaryReader): Resource$1;
}

declare namespace Resource$1 {
  export type AsObject = {
    type: ResourceTypeMap[keyof ResourceTypeMap],
    name: string,
  }
}

declare class ResourceDeclareResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceDeclareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceDeclareResponse): ResourceDeclareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceDeclareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceDeclareResponse;
  static deserializeBinaryFromReader(message: ResourceDeclareResponse, reader: jspb.BinaryReader): ResourceDeclareResponse;
}

declare namespace ResourceDeclareResponse {
  export type AsObject = {
  }
}

declare class ApiResourceDetails extends jspb.Message {
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

declare namespace ApiResourceDetails {
  export type AsObject = {
    url: string,
  }
}

declare class WebsocketResourceDetails extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketResourceDetails.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketResourceDetails): WebsocketResourceDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketResourceDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketResourceDetails;
  static deserializeBinaryFromReader(message: WebsocketResourceDetails, reader: jspb.BinaryReader): WebsocketResourceDetails;
}

declare namespace WebsocketResourceDetails {
  export type AsObject = {
    url: string,
  }
}

declare class ResourceDetailsResponse extends jspb.Message {
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

  hasWebsocket(): boolean;
  clearWebsocket(): void;
  getWebsocket(): WebsocketResourceDetails | undefined;
  setWebsocket(value?: WebsocketResourceDetails): void;

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

declare namespace ResourceDetailsResponse {
  export type AsObject = {
    id: string,
    provider: string,
    service: string,
    api?: ApiResourceDetails.AsObject,
    websocket?: WebsocketResourceDetails.AsObject,
  }

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    API = 10,
    WEBSOCKET = 11,
  }
}

interface ResourceTypeMap {
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
  NOTIFICATION: 10;
  WEBSOCKET: 11;
  HTTP: 12;
}

interface ActionMap {
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
  WEBSOCKETMANAGE: 600;
}

type ActionsList = ActionMap[keyof ActionMap][];
interface ResourceDetails<T> {
    id: string;
    provider: string;
    service: string;
    details: T;
}
declare abstract class Resource<Detail = any> {
    /**
     * Unique name for the resource by type within the stack.
     *
     * This name can be used in all future references, it will be resolved automatically at runtime.
     */
    readonly name: string;
    /**
     * Used to resolve the given resource for policy creation
     */
    private _registerPromise;
    constructor(name: string);
    protected get registerPromise(): Promise<Resource$1>;
    protected set registerPromise(promise: Promise<Resource$1>);
    /**
     * Returns details of this
     */
    protected details(): Promise<ResourceDetails<Detail>>;
    protected abstract resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
    protected abstract unwrapDetails(resp: ResourceDetailsResponse): Detail;
    protected abstract register(): Promise<Resource$1>;
}
declare abstract class SecureResource<P> extends Resource {
    protected abstract permsToActions(...perms: P[]): ActionsList;
    protected registerPolicy(...perms: P[]): void;
}
type newer<T> = (name: string, ...args: any[]) => T;

declare class ApiWorkerOptions {
    readonly api: string;
    readonly route: string;
    readonly methods: HttpMethod[];
    readonly opts: MethodOptions<string>;
    constructor(api: string, route: string, methods: HttpMethod[], opts?: MethodOptions<string>);
}
interface MethodOptions<SecurityDefs extends string> {
    /**
     * Optional security definitions for this method
     */
    security?: Partial<Record<SecurityDefs, string[]>>;
}
interface RouteOptions {
    /**
     * Optional middleware to apply to all methods for the route. Useful for universal middleware such as CORS or Auth.
     */
    middleware?: HttpMiddleware[] | HttpMiddleware;
}
declare class Route<SecurityDefs extends string> {
    readonly api: Api<SecurityDefs>;
    readonly path: string;
    readonly middleware: HttpMiddleware[];
    constructor(api: Api<SecurityDefs>, path: string, options?: RouteOptions);
    method(methods: HttpMethod[], options: MethodOptions<SecurityDefs>, ...middleware: HttpMiddleware[]): Promise<void>;
    /**
     * Register a handler function for GET requests to this route
     *
     * @param middleware that should be run on any GET request to this route
     * @param options for this method, such as security definitions
     * @returns a Promise that resolves if the handler stops running
     */
    get(middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Register a handler function for POST requests to this route
     *
     * @param middleware that should respond to any matching requests to this route and method
     * @param options for this method, such as security definitions
     * @returns a Promise that resolves if the handler stops running
     */
    post(middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Register a handler function for PUT requests to this route
     *
     * @param middleware that should respond to any matching requests to this route and method
     * @param options for this method, such as security definitions
     * @returns a Promise that resolves if the handler stops running
     */
    put(middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Register a handler function for PATCH requests to this route
     *
     * @param middleware that should respond to any matching requests to this route and method
     * @param options for this method, such as security definitions
     * @returns a Promise that resolves if the handler stops running
     */
    patch(middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Register a handler function for DELETE requests to this route
     *
     * @param middleware that should respond to any matching requests to this route and method
     * @param options for this method, such as security definitions
     * @returns a Promise that resolves if the handler stops running
     */
    delete(middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Register a handler function for OPTIONS requests to this route
     *
     * @param middleware that should respond to any matching requests to this route and method
     * @param options for this method, such as security definitions
     * @returns a Promise that resolves if the handler stops running
     */
    options(middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Register a handler function for GET, POST, PATCH, PUT and DELETE requests to this route
     *
     * @param middleware that should respond to matching requests to this route and all HTTP methods
     * @param options for this method, such as security definitions
     * @returns a Promise that resolves if the handler stops running
     */
    all(middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
}
interface BaseSecurityDefinition<T extends string> {
    kind: T;
}
interface JwtSecurityDefinition extends BaseSecurityDefinition<'jwt'> {
    issuer: string;
    audiences: string[];
}
type SecurityDefinition = JwtSecurityDefinition;
interface ApiOptions<Defs extends string> {
    /**
     * The base path for all routes in the API.
     *
     * Acts as a prefix, e.g. path '/api/v1/', with route '/customers' would result in the full path '/api/v1/customers'.
     */
    path?: string;
    /**
     * Optional middleware to apply to all routes/methods in the API. Useful for universal middleware such as CORS or Auth.
     */
    middleware?: HttpMiddleware[] | HttpMiddleware;
    /**
     * Optional security definitions for the API
     */
    securityDefinitions?: Record<Defs, SecurityDefinition>;
    /**
     * Optional root level security for the API
     */
    security?: Record<Defs, string[]>;
}
interface ApiDetails {
    url: string;
}
/**
 * API Resource
 *
 * Represents an HTTP API, capable of routing and securing incoming HTTP requests to handlers.
 */
declare class Api<SecurityDefs extends string> extends Resource<ApiDetails> {
    readonly path: string;
    readonly middleware?: HttpMiddleware[];
    private readonly routes;
    private readonly securityDefinitions?;
    private readonly security?;
    constructor(name: string, options?: ApiOptions<SecurityDefs>);
    /**
     * Register a new route in this API.
     *
     * Used to define Method handlers. e.g.
     *
     * ```
     * // Create a route
     * const home = api.route('/home')
     *
     * // Register a handler for Http GET request to this route
     * home.get(homeHandler)
     * ```
     *
     * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
     * @param options route options such as setting middleware which applies to all methods in the route
     * @returns the route object, which can be used to register method handlers
     */
    route(match: string, options?: RouteOptions): Route<SecurityDefs>;
    /**
     * Registers a new route with a GET handler in a single method.
     *
     * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
     * @param middleware the middleware/handler to register for calls to GET
     * @param options for this method, such as security definitions
     * @returns A Promise that resolves when the handler terminates.
     */
    get(match: string, middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Registers a new route with a POST handler in a single method.
     *
     * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
     * @param middleware the middleware/handler to register for calls to POST
     * @param options for this method, such as security definitions
     * @returns A Promise that resolves when the handler terminates.
     */
    post(match: string, middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Registers a new route with a PUT handler in a single method.
     *
     * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
     * @param middleware the middleware/handler to register for calls to PUT
     * @param options for this method, such as security definitions
     * @returns A Promise that resolves when the handler terminates.
     */
    put(match: string, middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Registers a new route with a PATCH handler in a single method.
     *
     * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
     * @param middleware the middleware/handler to register for calls to PATCH
     * @param options for this method, such as security definitions
     * @returns A Promise that resolves when the handler terminates.
     */
    patch(match: string, middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Registers a new route with a DELETE handler in a single method.
     *
     * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
     * @param middleware the middleware/handler to register for calls to DELETE
     * @param options for this method, such as security definitions
     * @returns A Promise that resolves when the handler terminates.
     */
    delete(match: string, middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Registers a new route with a OPTIONS handler in a single method.
     *
     * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
     * @param middleware the middleware/handler to register for calls to DELETE
     * @param options for this method, such as security definitions
     * @returns A Promise that resolves when the handler terminates.
     */
    options(match: string, middleware: HttpMiddleware | HttpMiddleware[], options?: MethodOptions<SecurityDefs>): Promise<void>;
    /**
     * Retrieves the Invocation URL of this API at runtime.
     *
     * @returns Promise that returns the URL of this API
     */
    url(): Promise<string>;
    protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
    protected unwrapDetails(resp: ResourceDetailsResponse): ApiDetails;
    /**
     * Register this api as a required resource for the calling function/container.
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<Resource$1>;
}
/**
 * Register a new API Resource.
 *
 * The returned API object can be used to register Routes and Methods, with Handlers.
 * e.g. api.route('/customers').get(getCustomerHandler)
 *
 * @param name the name of the API
 * @param options additional options for creating the API
 * @returns an API resource
 */
declare const api: <Defs extends string>(name: string, options?: ApiOptions<Defs>) => Api<Defs>;
/**
 * Create a JWT security definition.
 *
 * @param options security definition options
 * @returns the new security definition.
 */
declare const jwt: (options: Omit<JwtSecurityDefinition, 'kind'>) => JwtSecurityDefinition;

type TopicPermission = 'publishing';
declare class SubscriptionWorkerOptions {
    readonly topic: string;
    constructor(topic: string);
}
/**
 * Topic resource for pub/sub async messaging.
 */
declare class TopicResource<T extends Record<string, any> = Record<string, any>> extends SecureResource<TopicPermission> {
    /**
     * Register this topic as a required resource for the calling function/container
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<Resource$1>;
    protected permsToActions(...perms: TopicPermission[]): ActionsList;
    /**
     * Register and start a subscription handler that will be called for all events from this topic.
     *
     * @param middleware handler middleware which will be run for every incoming event
     * @returns Promise which resolves when the handler server terminates
     */
    subscribe(...middleware: EventMiddleware<T>[]): Promise<void>;
    protected resourceType(): 4;
    /**
     * Unwraps the response details.
     *
     * Not used for topics.
     *
     * @param resp {never}
     */
    protected unwrapDetails(resp: ResourceDeclareResponse): never;
    /**
     * Return a topic reference and register the permissions required by the currently scoped function for this resource.
     *
     * e.g. const updates = resources.topic('updates').for('publishing')
     *
     * @param perms the required permission set
     * @returns a usable topic reference
     */
    for(...perms: TopicPermission[]): Topic<T>;
}
declare const topic: <T extends Record<string, any> = Record<string, any>>(name: string) => TopicResource<T>;

type QueuePermission = 'sending' | 'receiving';
/**
 * Queue resource for async send/receive messaging
 */
declare class QueueResource<T extends Record<string, any> = Record<string, any>> extends SecureResource<QueuePermission> {
    /**
     * Register this queue as a required resource for the calling function/container.
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<Resource$1>;
    protected permsToActions(...perms: QueuePermission[]): ActionsList;
    protected resourceType(): 3;
    protected unwrapDetails(resp: ResourceDeclareResponse): never;
    /**
     * Return a queue reference and registers the permissions required by the currently scoped function for this resource.
     *
     * e.g. const taskQueue = resources.queue('work').for('sending')
     *
     * @param perms the access that the currently scoped function is requesting to this resource.
     * @returns a useable queue.
     */
    for(...perms: QueuePermission[]): Queue<T>;
}
declare const queue: <T extends Record<string, any> = Record<string, any>>(name: string) => QueueResource<T>;

type CollectionPermission = 'reading' | 'writing' | 'deleting';
/**
 * A document collection resources, such as a collection/table in a document database.
 */
declare class CollectionResource<T extends DocumentStructure> extends SecureResource<CollectionPermission> {
    /**
     * Register this collection as a required resource for the calling function/container
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<Resource$1>;
    protected permsToActions(...perms: CollectionPermission[]): any[];
    protected resourceType(): 7;
    protected unwrapDetails(resp: ResourceDetailsResponse): never;
    /**
     * Return a collection reference and register the permissions required by the currently scoped function for this resource.
     *
     * e.g. const customers = resources.collection('customers').for('reading', 'writing')
     *
     * @param perms the required permission set
     * @returns a usable collection reference
     */
    for(...perms: CollectionPermission[]): CollectionRef<T>;
}
/**
 * Create a reference to a named queue in this project.
 *
 * If the queue hasn't been referenced before, this is a request for a new resource. Otherwise, the existing queue with the same name will be used.
 *
 * @param name the name of the queue.
 * @returns a reference to the queue.
 */
declare function collection<T extends DocumentStructure>(name: string): CollectionResource<T>;

type BucketPermission = 'reading' | 'writing' | 'deleting';
type BucketNotificationType$1 = 'write' | 'delete';
declare class BucketNotificationWorkerOptions {
    readonly bucket: string;
    readonly notificationType: 0 | 1 | 2;
    readonly notificationPrefixFilter: string;
    constructor(bucket: string, notificationType: BucketNotificationType$1, notificationPrefixFilter: string);
    static toGrpcEvent(notificationType: BucketNotificationType$1): 0 | 1 | 2;
}
declare class FileNotificationWorkerOptions extends BucketNotificationWorkerOptions {
    readonly bucketRef: Bucket;
    constructor(bucketRef: Bucket, notificationType: BucketNotificationType$1, notificationPrefixFilter: string);
}
declare class BucketNotification {
    private readonly faas;
    constructor(bucket: string, notificationType: BucketNotificationType$1, notificationPrefixFilter: any, ...middleware: BucketNotificationMiddleware[]);
    private start;
}
declare class FileNotification {
    private readonly faas;
    constructor(bucket: Bucket, notificationType: BucketNotificationType$1, notificationPrefixFilter: any, ...middleware: FileNotificationMiddleware[]);
    private start;
}
/**
 * Cloud storage bucket resource for large file storage.
 */
declare class BucketResource extends SecureResource<BucketPermission> {
    /**
     * Register this bucket as a required resource for the calling function/container.
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<Resource$1>;
    /**
     * Register and start a bucket notification handler that will be called for all matching notification events on this bucket
     *
     * @param notificationType the notification type that should trigger the middleware, either 'write' or 'delete'
     * @param notificationPrefixFilter the file name prefix that files must match to trigger a notification
     * @param middleware handler middleware which will be run for every incoming event
     * @returns Promise which resolves when the handler server terminates
     */
    on(notificationType: BucketNotificationType$1, notificationPrefixFilter: string, ...middleware: BucketNotificationMiddleware[]): Promise<void>;
    protected permsToActions(...perms: BucketPermission[]): ActionsList;
    protected resourceType(): 2;
    protected unwrapDetails(resp: ResourceDetailsResponse): never;
    /**
     * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
     *
     * e.g. const imgs = resources.bucket('image').for('writing')
     *
     * @param perms the required permission set
     * @returns a usable bucket reference
     */
    for(...perms: BucketPermission[]): Bucket;
}
declare const bucket: newer<BucketResource>;

declare const Frequencies: readonly ["days", "hours", "minutes"];
type Frequency = (typeof Frequencies)[number];
declare class RateWorkerOptions {
    readonly description: string;
    readonly rate: number;
    readonly frequency: Frequency;
    constructor(description: string, rate: number, freq: Frequency);
}
declare class CronWorkerOptions {
    readonly description: string;
    readonly cron: string;
    constructor(description: string, cron: string);
}
/**
 * Providers a scheduled worker.
 */
declare class Schedule {
    private readonly description;
    constructor(description: string);
    /**
     * Run this schedule on the provided frequency.
     *
     * @param rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'day/days', 'hour/hours' or 'minute/minutes'.
     * @param middleware the handler/middleware to run on a schedule
     * @returns A promise that resolves when the schedule worker stops running.
     */
    every: (rate: string, ...middleware: ScheduleMiddleware[]) => Promise<void>;
    cron: (expression: string, ...middleware: ScheduleMiddleware[]) => Promise<void>;
}
/**
 * Provides a new schedule, which can be configured with a rate/cron and a callback to run on the schedule.
 *
 * @param description of the schedule, e.g. "Nightly"
 * @returns a named schedule.
 */
declare const schedule: (description: string) => Schedule;

// package: nitric.secret.v1


declare class SecretPutRequest extends jspb.Message {
  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): Secret$1 | undefined;
  setSecret(value?: Secret$1): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretPutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SecretPutRequest): SecretPutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretPutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretPutRequest;
  static deserializeBinaryFromReader(message: SecretPutRequest, reader: jspb.BinaryReader): SecretPutRequest;
}

declare namespace SecretPutRequest {
  export type AsObject = {
    secret?: Secret$1.AsObject,
    value: Uint8Array | string,
  }
}

declare class SecretPutResponse extends jspb.Message {
  hasSecretVersion(): boolean;
  clearSecretVersion(): void;
  getSecretVersion(): SecretVersion$1 | undefined;
  setSecretVersion(value?: SecretVersion$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretPutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SecretPutResponse): SecretPutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretPutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretPutResponse;
  static deserializeBinaryFromReader(message: SecretPutResponse, reader: jspb.BinaryReader): SecretPutResponse;
}

declare namespace SecretPutResponse {
  export type AsObject = {
    secretVersion?: SecretVersion$1.AsObject,
  }
}

declare class SecretAccessRequest extends jspb.Message {
  hasSecretVersion(): boolean;
  clearSecretVersion(): void;
  getSecretVersion(): SecretVersion$1 | undefined;
  setSecretVersion(value?: SecretVersion$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretAccessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SecretAccessRequest): SecretAccessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretAccessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretAccessRequest;
  static deserializeBinaryFromReader(message: SecretAccessRequest, reader: jspb.BinaryReader): SecretAccessRequest;
}

declare namespace SecretAccessRequest {
  export type AsObject = {
    secretVersion?: SecretVersion$1.AsObject,
  }
}

declare class SecretAccessResponse extends jspb.Message {
  hasSecretVersion(): boolean;
  clearSecretVersion(): void;
  getSecretVersion(): SecretVersion$1 | undefined;
  setSecretVersion(value?: SecretVersion$1): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretAccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SecretAccessResponse): SecretAccessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretAccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretAccessResponse;
  static deserializeBinaryFromReader(message: SecretAccessResponse, reader: jspb.BinaryReader): SecretAccessResponse;
}

declare namespace SecretAccessResponse {
  export type AsObject = {
    secretVersion?: SecretVersion$1.AsObject,
    value: Uint8Array | string,
  }
}

declare class Secret$1 extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret$1.AsObject;
  static toObject(includeInstance: boolean, msg: Secret$1): Secret$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Secret$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret$1;
  static deserializeBinaryFromReader(message: Secret$1, reader: jspb.BinaryReader): Secret$1;
}

declare namespace Secret$1 {
  export type AsObject = {
    name: string,
  }
}

declare class SecretVersion$1 extends jspb.Message {
  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): Secret$1 | undefined;
  setSecret(value?: Secret$1): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretVersion$1.AsObject;
  static toObject(includeInstance: boolean, msg: SecretVersion$1): SecretVersion$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretVersion$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretVersion$1;
  static deserializeBinaryFromReader(message: SecretVersion$1, reader: jspb.BinaryReader): SecretVersion$1;
}

declare namespace SecretVersion$1 {
  export type AsObject = {
    secret?: Secret$1.AsObject,
    version: string,
  }
}

// GENERATED CODE -- DO NOT EDIT!


declare class SecretServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  put(argument: SecretPutRequest, callback: grpc.requestCallback<SecretPutResponse>): grpc.ClientUnaryCall;
  put(argument: SecretPutRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<SecretPutResponse>): grpc.ClientUnaryCall;
  put(argument: SecretPutRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<SecretPutResponse>): grpc.ClientUnaryCall;
  access(argument: SecretAccessRequest, callback: grpc.requestCallback<SecretAccessResponse>): grpc.ClientUnaryCall;
  access(argument: SecretAccessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<SecretAccessResponse>): grpc.ClientUnaryCall;
  access(argument: SecretAccessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<SecretAccessResponse>): grpc.ClientUnaryCall;
}

/**
 * Nitric secret client, facilitates writing and and accessing secrets.cd ../
 */
declare class Secrets {
    SecretServiceClient: SecretServiceClient;
    constructor();
    /**
     * Get a reference to a secret.
     *
     * @param name the name of the secret
     * @returns A Secret reference.
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * const secret = secrets().secret("my-secret");
     * ```
     */
    secret: (name: string) => Secret;
}
/**
 * A reference to a secret.
 */
declare class Secret {
    readonly secrets: Secrets;
    readonly name: string;
    constructor(secrets: Secrets, name: string);
    /**
     * Creates a new SecretVersion containing the given value.
     *
     * @param secret the value to store
     * @returns A Promise which returns a reference to the newly created version of the secret
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * async function putSecret() {
     *  const secret = secrets().secret('secret');
     *  const version = await secret.put("ssssshhhhh... it's a secret");
     * }
     * ```
     */
    put(secret: string | Uint8Array): Promise<SecretVersion>;
    /**
     * Returns a reference to the latest version of a secret.
     *
     * @returns a reference to the latest version of the secret
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * async function getSecret() {
     *  const secret = secrets().secret('secret');
     *  const latestVersion = secret.latest();
     * }
     * ```
     */
    latest(): SecretVersion;
    /**
     * Creates a reference to a specific version of a secret.
     *
     * @param version the ID of the version reference to be created.
     * @returns a secret version reference, the version may or may not exist.
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * const secret = secrets().secret('secret');
     * // NOTE: Version identifiers can differ between providers
     * // In most cases 'latest' should be used
     * const latestVersion = secret.version('1');
     * ```
     */
    version(version: string): SecretVersion;
    static toWire: (secret: Secret) => Secret$1;
}
/**
 * A reference to a secret version.
 */
declare class SecretVersion {
    readonly secrets: Secrets;
    readonly secret: Secret;
    readonly version: string;
    constructor(secrets: Secrets, secret: Secret, version: string);
    /**
     * Accesses the stored secret value from this version, it can be used to access the underlying secret data.
     *
     * @returns A Promise that return the stored value in this version of the secret.
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * async function accessSecret() {
     *  const secret = secrets().secret('secret').latest();
     *  const secretValue = await secret.access();
     *  const secretString = secretValue.asString();
     * }
     * ```
     */
    access(): Promise<SecretValue>;
    static toWire: (secretVersion: SecretVersion) => SecretVersion$1;
}
/**
 * Container for a SecretValue
 * Also provides additional metadata about the actual accessed secret version in the case that "latest" is used
 */
declare class SecretValue {
    readonly secretVersion: SecretVersion;
    private readonly val;
    constructor(secretVersion: SecretVersion, val: Uint8Array);
    /**
     * @returns A Uint8Array (byte array) containing the value of the secret
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * async function accessSecret() {
     *  const secret = secrets().secret('secret').latest();
     *  const secretValue = await secret.access();
     *
     *  const content = secretValue.asBytes();
     * }
     * ```
     */
    asBytes: () => Uint8Array;
    /**
     * Return the secret value as a string.
     *
     * @returns the secret value as a string
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * async function accessSecret() {
     *  const secret = secrets().secret('secret').latest();
     *  const secretValue = await secret.access();
     *
     *  const content = secretValue.asString();
     * }
     * ```
     */
    asString: () => string;
}
/**
 * Secrets API Client.
 *
 * @returns a Secrets API client.
 * @example
 * ```typescript
 * import { secrets } from "@nitric/sdk";
 *
 * async function getSecret() {
 *  const secret = secrets().secret('secret');
 *  const version = secret.latest();
 *  const content = await version.access();
 * }
 * ```
 */
declare const secrets: () => Secrets;

type SecretPermission = 'put' | 'access';
/**
 * Cloud secret resource for secret storage
 */
declare class SecretResource extends SecureResource<SecretPermission> {
    protected register(): Promise<Resource$1>;
    protected permsToActions(...perms: SecretPermission[]): ActionsList;
    protected resourceType(): 9;
    protected unwrapDetails(resp: ResourceDetailsResponse): never;
    for(...perms: SecretPermission[]): Secret;
}
declare const secret: newer<SecretResource>;

type ListenerFunction = ((port: number, callback?: () => void) => void) | ((port: number) => void);
interface NodeApplication {
    listen: ListenerFunction;
}
declare class HttpWorkerOptions {
    readonly app: NodeApplication;
    readonly port: number;
    readonly callback: () => void;
    constructor(app: NodeApplication, port: number, callback?: () => void);
}
declare const http$1: (app: NodeApplication | ListenerFunction, callback?: () => void) => void;

declare const WebsocketEventTypeMap: {
    connect: 0;
    disconnect: 1;
    message: 2;
};
type WebsocketEventType = keyof typeof WebsocketEventTypeMap;
declare class WebsocketWorkerOptions {
    readonly socket: string;
    readonly eventType: (typeof WebsocketEventTypeMap)[WebsocketEventType];
    constructor(socket: string, eventType: WebsocketEventType);
}
declare class Websocket {
    private readonly faas;
    constructor(socket: string, eventType: WebsocketEventType, ...middleware: WebsocketMiddleware<unknown>[]);
    private start;
}
/**
 * Websocket resource for bi-di HTTP communication.
 */
declare class WebsocketResource extends Resource<any> {
    private readonly wsClient;
    constructor(name: string);
    /**
     * Register this websocket as a required resource for the calling function/container.
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<Resource$1>;
    send(connectionId: string, data: string | Uint8Array | Record<string, any>): Promise<void>;
    close(connectionId: string): Promise<void>;
    /**
     * Retrieves the Invocation URL of this Websocket at runtime.
     *
     * @returns Promise that returns the URL of this Websocket
     */
    url(): Promise<string>;
    /**
     * Register and start a websocket event handler that will be called for all matching events on this websocket
     *
     * @param eventType the notification type that should trigger the middleware, either 'connect', 'disconnect' or 'message'
     * @param middleware handler middleware which will be run for every incoming event
     * @returns Promise which resolves when the handler server terminates
     */
    on<T extends JSONTypes = Record<string, any>>(eventType: WebsocketEventType, ...middleware: WebsocketMiddleware<T>[]): Promise<void>;
    protected resourceType(): 11;
    protected unwrapDetails(resp: ResourceDetailsResponse): {
        url: string;
    };
}
declare const websocket: newer<WebsocketResource>;

declare class FaasWorkerOptions {
}
type FaasClientOptions = ApiWorkerOptions | RateWorkerOptions | CronWorkerOptions | FaasWorkerOptions | HttpWorkerOptions | BucketNotificationWorkerOptions;
/**
 *
 */
declare class Faas {
    private httpHandler?;
    private websocketHandler?;
    private eventHandler?;
    private bucketNotificationHandler?;
    private anyHandler?;
    private readonly options;
    constructor(opts: FaasClientOptions);
    /**
     * Add an event handler to this Faas server
     *
     * @param handlers the functions to call to respond to events
     * @returns self
     */
    event(...handlers: EventMiddleware[] | ScheduleMiddleware[]): Faas;
    /**
     * Add an http handler to this Faas server
     *
     * @param handlers the functions to call to respond to http requests
     * @returns self
     */
    http(...handlers: HttpMiddleware[]): Faas;
    /**
     * Add a websocket handler to this Faas server
     *
     * @param handlers the functions to call to respond to http requests
     * @returns self
     */
    websocket(...handlers: WebsocketMiddleware[]): Faas;
    /**
     * Add a notification handler to this Faas server
     *
     * @param handlers the functions to call to respond to notification requests
     * @returns self
     */
    bucketNotification(...handlers: BucketNotificationMiddleware[] | FileNotificationMiddleware[]): Faas;
    /**
     * Get http handler for this server
     *
     * @returns the registered HTTP handler for this server
     */
    private getHttpHandler;
    /**
     * Get event handler for this server
     *
     * @returns the registered event handler for this server
     */
    private getEventHandler;
    /**
     * Get notification handler for this server
     *
     * @returns the registered notification handler for this server
     */
    private getBucketNotificationHandler;
    /**
     * Get websocket handler for this server
     *
     * @returns the registered websocket handler
     */
    private getWebsocketHandler;
    /**
     * Start the Faas server
     *
     * @param handlers to use as the default when no other handler is registered for the request type
     * @returns a promise that resolves when the server terminates
     */
    start(...handlers: TriggerMiddleware[]): Promise<void>;
}
/**
 * Register a HTTP handler
 *
 * @param handlers the functions to call to respond to http requests
 * @returns the FaaS service factory
 */
declare const http: (...handlers: HttpMiddleware[]) => Faas;
/**
 * Register an event handler
 *
 * @param handlers the functions to call to respond to events
 * @returns the FaaS service factory
 */
declare const event: (...handlers: EventMiddleware[]) => Faas;
/**
 * Register a notification handler
 *
 * @param handlers the functions to call to respond to events
 * @returns the FaaS service factory
 */
declare const notification: (...handlers: BucketNotificationMiddleware[]) => Faas;
/**
 * Start the FaaS server with a universal handler
 *
 * @param handlers default handlers
 * @returns a promise that resolves when the server terminates
 */
declare const start: (...handlers: TriggerMiddleware[]) => Promise<void>;

declare abstract class TriggerContext<Req extends AbstractRequest = AbstractRequest, Resp extends Record<string, any> = any> {
    protected request: Req;
    protected response: Resp;
    /**
     * Noop base context http method.
     *
     * @returns undefined
     */
    get http(): HttpContext | undefined;
    /**
     * Noop base context event method.
     *
     * @returns undefined
     */
    get event(): EventContext<unknown> | undefined;
    /**
     * Noop base context bucketNotification method
     *
     * @returns undefined
     */
    get bucketNotification(): BucketNotificationContext | undefined;
    /**
     * Noop base context websocket method
     *
     * @returns undefined
     */
    get websocket(): WebsocketNotificationContext<unknown> | undefined;
    /**
     * Return the request object from this context.
     *
     * @returns the request object.
     */
    get req(): Req;
    /**
     * Return the response object from this context.
     *
     * @returns the response object.
     */
    get res(): Resp;
    static fromGrpcTriggerRequest(trigger: TriggerRequest, options?: FaasWorkerOptions): TriggerContext<any, any>;
    static toGrpcTriggerResponse(ctx: TriggerContext): TriggerResponse;
}
type JSONTypes = Record<string, any> | Array<any> | string;
declare abstract class AbstractRequest<JSONT extends JSONTypes = Record<string, any>> {
    readonly data: string | Uint8Array;
    readonly traceContext: api$1.Context;
    protected constructor(data: string | Uint8Array, traceContext: api$1.Context);
    /**
     * Return the request payload as a string.
     * If the request was a byte array it will converted using UTF-8 text decoding.
     *
     * @returns the request payload as a string
     */
    text(): string;
    /**
     * Deserialize the request payload from JSON
     *
     * @returns JSON parsed request body
     */
    json(): JSONT;
}
interface EventResponse {
    success: boolean;
}
type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD';
interface HttpRequestArgs {
    data: string | Uint8Array;
    method: Method | string;
    path: string;
    params: Record<string, string>;
    query: Record<string, string[]>;
    headers: Record<string, string[]>;
    traceContext?: api$1.Context;
}
declare class HttpRequest extends AbstractRequest {
    readonly method: Method | string;
    readonly path: string;
    readonly params: Record<string, string>;
    readonly query: Record<string, string[]>;
    readonly headers: Record<string, string[] | string>;
    constructor({ data, method, path, params, query, headers, traceContext, }: HttpRequestArgs);
}
interface HttpResponseArgs {
    body: string | Uint8Array;
    status: number;
    headers: Record<string, string[]>;
    ctx: HttpContext;
}
declare class HttpResponse {
    status: number;
    body: string | Uint8Array | Record<string, any>;
    headers: Record<string, string[]>;
    private ctx;
    constructor({ status, headers, body, ctx }: HttpResponseArgs);
    /**
     * Helper method to encode to JSON string for JSON http responses.
     *
     * @returns HttpContext with body property set with an encoded JSON string and json headers set.
     */
    get json(): (data: string | number | boolean | Record<string, any>) => HttpContext;
}
declare class EventRequest<T> extends AbstractRequest<T> {
    readonly topic: string;
    constructor(data: string | Uint8Array, topic: string, traceContext: api$1.Context);
}
declare const getTraceContext: (traceContext: TraceContext) => api$1.Context;
declare class HttpContext extends TriggerContext<HttpRequest, HttpResponse> {
    get http(): HttpContext;
    static fromGrpcTriggerRequest(trigger: TriggerRequest, options?: ApiWorkerOptions): HttpContext;
    static toGrpcTriggerResponse(ctx: TriggerContext): TriggerResponse;
}
declare class EventContext<T> extends TriggerContext<EventRequest<T>, EventResponse> {
    get event(): EventContext<T>;
    static fromGrpcTriggerRequest(trigger: TriggerRequest, options?: SubscriptionWorkerOptions): EventContext<unknown>;
    static toGrpcTriggerResponse(ctx: TriggerContext): TriggerResponse;
}
declare class BucketNotificationContext extends TriggerContext<BucketNotificationRequest, BucketNotificationResponse> {
    get bucketNotification(): BucketNotificationContext;
    static fromGrpcTriggerRequest(trigger: TriggerRequest, options?: BucketNotificationWorkerOptions): BucketNotificationContext;
    static toGrpcTriggerResponse(ctx: TriggerContext<AbstractRequest, any>): TriggerResponse;
}
declare enum BucketNotificationType {
    Created = 0,
    Deleted = 1
}
declare class BucketNotificationRequest extends AbstractRequest {
    readonly key: string;
    readonly notificationType: BucketNotificationType;
    constructor(data: string | Uint8Array, traceContext: api$1.Context, key: string, notificationType: number);
    private eventTypeToNotificationType;
}
declare class FileNotificationContext extends TriggerContext<FileNotificationRequest, BucketNotificationResponse> {
    get bucketNotification(): FileNotificationContext;
    static fromGrpcTriggerRequest(trigger: TriggerRequest, options: FileNotificationWorkerOptions): BucketNotificationContext;
    static toGrpcTriggerResponse(ctx: TriggerContext<AbstractRequest, any>): TriggerResponse;
}
declare class FileNotificationRequest extends BucketNotificationRequest {
    readonly file: File;
    constructor(data: string | Uint8Array, traceContext: api$1.Context, key: string, notificationType: number, bucket: Bucket);
}
interface BucketNotificationResponse {
    success: boolean;
}
declare class WebsocketNotificationContext<T> extends TriggerContext<WebsocketNotificationRequest<T>, WebsocketNotificationResponse> {
    get websocket(): WebsocketNotificationContext<T>;
    static fromGrpcTriggerRequest(trigger: TriggerRequest): WebsocketNotificationContext<any>;
    static toGrpcTriggerResponse(ctx: TriggerContext<AbstractRequest, any>): TriggerResponse;
}
declare enum WebsocketNotificationType {
    Connected = 0,
    Disconnected = 1,
    Message = 2
}
declare class WebsocketNotificationRequest<T> extends AbstractRequest<T> {
    readonly socket: string;
    readonly notificationType: WebsocketNotificationType;
    readonly connectionId: string;
    readonly query: Record<string, string[]>;
    constructor(data: string | Uint8Array, traceContext: api$1.Context, socket: string, notificationType: WebsocketNotificationType, connectionId: string, query: Record<string, string[]>);
}
interface WebsocketNotificationResponse {
    success: boolean;
}

type GenericHandler<Ctx> = (ctx: Ctx) => Promise<Ctx> | Ctx;
type TriggerHandler = GenericHandler<TriggerContext>;
type HttpHandler = GenericHandler<HttpContext>;
type EventHandler<T extends NitricEvent = NitricEvent> = GenericHandler<EventContext<T>>;
type GenericMiddleware<Ctx> = (ctx: Ctx, next?: GenericHandler<Ctx>) => Promise<Ctx | void> | Ctx | void;
type TriggerMiddleware = GenericMiddleware<TriggerContext>;
type HttpMiddleware = GenericMiddleware<HttpContext>;
type WebsocketMiddleware<T extends JSONTypes = Record<string, any>> = GenericMiddleware<WebsocketNotificationContext<T>>;
type EventMiddleware<T extends Record<string, any> = Record<string, any>> = GenericMiddleware<EventContext<NitricEvent<T>>>;
type ScheduleMiddleware = GenericMiddleware<EventContext<undefined>>;
type BucketNotificationMiddleware = GenericMiddleware<BucketNotificationContext>;
type FileNotificationMiddleware = GenericMiddleware<FileNotificationContext>;
/**
 * createHandler
 *
 * Used to compose multiple handler functions into a single function that calls each of the provided handlers in order.
 *
 * The handlers are passed to each other via the 'next' argument.
 *
 * @param handlers one or more handler functions to be chained together into a single root function.
 * @returns - A root function composed of a chain of user provided functions
 */
declare const createHandler: <Ctx extends TriggerContext<AbstractRequest<Record<string, any>>, any> = TriggerContext<AbstractRequest<Record<string, any>>, any>>(...handlers: GenericMiddleware<Ctx>[]) => GenericMiddleware<Ctx>;

/**
 * HttpMiddleware that takes a ctx.req containing raw data (string | Uint8Array) and parses it as JSON into ctx.body
 *
 * @returns a middleware decorator
 */
declare const json: () => HttpMiddleware;
/**
 * Helper method to encode to JSON string for JSON http responses.
 *
 * @param ctx HttpContext
 * @returns HttpContext with body property set with an encoded JSON string and json headers set.
 */
declare const jsonResponse: (ctx: HttpContext) => (data: string | number | boolean | Record<string, any>) => HttpContext;

type index_AbstractRequest<JSONT extends JSONTypes = Record<string, any>> = AbstractRequest<JSONT>;
declare const index_AbstractRequest: typeof AbstractRequest;
type index_BucketNotificationContext = BucketNotificationContext;
declare const index_BucketNotificationContext: typeof BucketNotificationContext;
type index_BucketNotificationMiddleware = BucketNotificationMiddleware;
type index_BucketNotificationRequest = BucketNotificationRequest;
declare const index_BucketNotificationRequest: typeof BucketNotificationRequest;
type index_BucketNotificationResponse = BucketNotificationResponse;
type index_BucketNotificationType = BucketNotificationType;
declare const index_BucketNotificationType: typeof BucketNotificationType;
type index_EventContext<T> = EventContext<T>;
declare const index_EventContext: typeof EventContext;
type index_EventHandler<T extends NitricEvent = NitricEvent> = EventHandler<T>;
type index_EventMiddleware<T extends Record<string, any> = Record<string, any>> = EventMiddleware<T>;
type index_EventRequest<T> = EventRequest<T>;
declare const index_EventRequest: typeof EventRequest;
type index_EventResponse = EventResponse;
type index_Faas = Faas;
declare const index_Faas: typeof Faas;
type index_FaasWorkerOptions = FaasWorkerOptions;
declare const index_FaasWorkerOptions: typeof FaasWorkerOptions;
type index_FileNotificationContext = FileNotificationContext;
declare const index_FileNotificationContext: typeof FileNotificationContext;
type index_FileNotificationMiddleware = FileNotificationMiddleware;
type index_FileNotificationRequest = FileNotificationRequest;
declare const index_FileNotificationRequest: typeof FileNotificationRequest;
type index_GenericHandler<Ctx> = GenericHandler<Ctx>;
type index_GenericMiddleware<Ctx> = GenericMiddleware<Ctx>;
type index_HttpContext = HttpContext;
declare const index_HttpContext: typeof HttpContext;
type index_HttpHandler = HttpHandler;
type index_HttpMiddleware = HttpMiddleware;
type index_HttpRequest = HttpRequest;
declare const index_HttpRequest: typeof HttpRequest;
type index_HttpResponse = HttpResponse;
declare const index_HttpResponse: typeof HttpResponse;
type index_JSONTypes = JSONTypes;
type index_ScheduleMiddleware = ScheduleMiddleware;
type index_TriggerContext<Req extends AbstractRequest = AbstractRequest, Resp extends Record<string, any> = any> = TriggerContext<Req, Resp>;
declare const index_TriggerContext: typeof TriggerContext;
type index_TriggerHandler = TriggerHandler;
type index_TriggerMiddleware = TriggerMiddleware;
type index_WebsocketMiddleware<T extends JSONTypes = Record<string, any>> = WebsocketMiddleware<T>;
type index_WebsocketNotificationContext<T> = WebsocketNotificationContext<T>;
declare const index_WebsocketNotificationContext: typeof WebsocketNotificationContext;
type index_WebsocketNotificationRequest<T> = WebsocketNotificationRequest<T>;
declare const index_WebsocketNotificationRequest: typeof WebsocketNotificationRequest;
type index_WebsocketNotificationResponse = WebsocketNotificationResponse;
type index_WebsocketNotificationType = WebsocketNotificationType;
declare const index_WebsocketNotificationType: typeof WebsocketNotificationType;
declare const index_createHandler: typeof createHandler;
declare const index_event: typeof event;
declare const index_getTraceContext: typeof getTraceContext;
declare const index_http: typeof http;
declare const index_json: typeof json;
declare const index_jsonResponse: typeof jsonResponse;
declare const index_notification: typeof notification;
declare const index_start: typeof start;
declare namespace index {
  export {
    index_AbstractRequest as AbstractRequest,
    index_BucketNotificationContext as BucketNotificationContext,
    index_BucketNotificationMiddleware as BucketNotificationMiddleware,
    index_BucketNotificationRequest as BucketNotificationRequest,
    index_BucketNotificationResponse as BucketNotificationResponse,
    index_BucketNotificationType as BucketNotificationType,
    index_EventContext as EventContext,
    index_EventHandler as EventHandler,
    index_EventMiddleware as EventMiddleware,
    index_EventRequest as EventRequest,
    index_EventResponse as EventResponse,
    index_Faas as Faas,
    index_FaasWorkerOptions as FaasWorkerOptions,
    index_FileNotificationContext as FileNotificationContext,
    index_FileNotificationMiddleware as FileNotificationMiddleware,
    index_FileNotificationRequest as FileNotificationRequest,
    index_GenericHandler as GenericHandler,
    index_GenericMiddleware as GenericMiddleware,
    index_HttpContext as HttpContext,
    index_HttpHandler as HttpHandler,
    index_HttpMiddleware as HttpMiddleware,
    index_HttpRequest as HttpRequest,
    index_HttpResponse as HttpResponse,
    index_JSONTypes as JSONTypes,
    index_ScheduleMiddleware as ScheduleMiddleware,
    index_TriggerContext as TriggerContext,
    index_TriggerHandler as TriggerHandler,
    index_TriggerMiddleware as TriggerMiddleware,
    index_WebsocketMiddleware as WebsocketMiddleware,
    index_WebsocketNotificationContext as WebsocketNotificationContext,
    index_WebsocketNotificationRequest as WebsocketNotificationRequest,
    index_WebsocketNotificationResponse as WebsocketNotificationResponse,
    index_WebsocketNotificationType as WebsocketNotificationType,
    index_createHandler as createHandler,
    index_event as event,
    index_getTraceContext as getTraceContext,
    index_http as http,
    index_json as json,
    index_jsonResponse as jsonResponse,
    index_notification as notification,
    index_start as start,
  };
}

/**
 * Nitric storage client, facilitates writing and reading from blob storage (buckets).
 */
declare class Storage {
    StorageServiceClient: StorageServiceClient;
    constructor();
    /**
     * Create a bucket reference.
     *
     * @param name of the bucket to reference
     * @returns a bucket reference
     */
    bucket(name: string): Bucket;
}
/**
 * A reference to a storage bucket.
 */
declare class Bucket {
    private storage;
    name: string;
    constructor(storage: Storage, name: string);
    /**
     * Retrieve a list of files on the bucket.
     *
     * @returns An array of file references
     */
    files(): Promise<File[]>;
    file(name: string): File;
    /**
     * Register and start a bucket notification handler that will be called for all matching notification events on this bucket
     *
     * @param notificationType the notification type that should trigger the middleware, either 'write' or 'delete'
     * @param notificationPrefixFilter the file name prefix that files must match to trigger a notification
     * @param middleware handler middleware which will be run for every incoming event
     * @returns Promise which resolves when the handler server terminates
     */
    on(notificationType: BucketNotificationType$1, notificationPrefixFilter: string, ...middleware: FileNotificationMiddleware[]): Promise<void>;
}
declare enum FileMode {
    Read = 0,
    Write = 1
}
interface SignUrlOptions {
    /**
     * The number of seconds the signed URL remains valid.
     * The minimum value is 1 and the maximum value is 604800 (7 days).
     */
    expiry?: number;
}
/**
 * A reference to a file in a bucket.
 */
declare class File {
    storage: Storage;
    bucket: Bucket;
    name: string;
    constructor(storage: Storage, bucket: Bucket, name: string);
    /**
     * Get a pre-signed download URL for the file.
     *
     * @param opts the option passed to the signUrl function.
     * @returns a download URL string.
     */
    getDownloadUrl(opts?: SignUrlOptions): Promise<string>;
    /**
     * Get a pre-signed upload URL for the file.
     *
     * @param opts the option passed to the signUrl function.
     * @returns a upload URL string.
     */
    getUploadUrl(opts?: SignUrlOptions): Promise<string>;
    /**
     * Create a presigned url for reading or writing for the given file reference.
     *
     * @param mode the mode the url will access the file with. E.g. reading or writing.
     * @param opts file URL signing options.
     * @param opts.expiry how long the URL should be valid for in seconds.
     * @deprecated for simplicity we suggest using getUploadUrl or getDownloadUrl.
     */
    signUrl(mode: FileMode, opts?: SignUrlOptions): Promise<string>;
    /**
     * Write an array of bytes to the file.
     *
     * @param body The file contents to write.
     * @returns A promise that resolves when the write operation completes.
     *
     * Example:
     * ```typescript
     * import { Storage } from "@nitric/sdk";
     *
     * const storage = new Storage();
     *
     * const buf = Buffer.from("My Test File...");
     * await storage.bucket("my-bucket").file("my-item").write(buf);
     * ```
     */
    write(body: Uint8Array | string): Promise<void>;
    /**
     * Read the contents of this file as an array of bytes.
     *
     * @returns A promise that returns a byte array of the contents of the read blob.
     *
     * Example:
     * ```typescript
     * import { Storage } from "@nitric/sdk";
     *
     * const storage = new Storage();
     *
     * const bytes = await storage.bucket("my-bucket").file("my-item").read();
     * ```
     */
    read(): Promise<Uint8Array>;
    /**
     * Delete this file from the bucket.
     *
     * @returns A void promise.
     *
     * Example:
     * ```typescript
     * import { Storage } from "@nitric/sdk";
     *
     * const storage = new Storage();
     *
     * const bytes = await storage.bucket("my-bucket").file("my-item").delete();
     * ```
     */
    delete(): Promise<void>;
}
/**
 * Storage API client.
 *
 * @returns a Storage API client.
 * @example
 * ```typescript
 * import { storage } from "@nitric/sdk";
 *
 * async function writeToStorage() {
 *  const bucket = storage().bucket('bucket');
 *  const file = bucket.file('test-file');
 *  await file.write(contents)
 * }
 * ```
 */
declare const storage: () => Storage;

export { Api, ApiOptions, ApiWorkerOptions, BaseSecurityDefinition, Bucket, BucketNotification, BucketNotificationType$1 as BucketNotificationType, BucketNotificationWorkerOptions, BucketResource, CollectionResource, CronWorkerOptions, Documents, Eventing, File, FileMode, FileNotification, FileNotificationWorkerOptions, Frequency, HttpMethod, HttpWorkerOptions, JwtSecurityDefinition, MethodOptions, NitricEvent, NitricTask$1 as NitricTask, PublishOptions, Queue, QueuePermission, QueueResource, Queueing, RateWorkerOptions, ReceivedTask, Route, RouteOptions, Secret, SecretResource, Secrets, SecurityDefinition, SignUrlOptions, Storage, SubscriptionWorkerOptions, Topic, TopicResource, Websocket, WebsocketResource, WebsocketWorkerOptions, WhereQueryOperator, WhereValueExpression, api, bucket, collection, documents, events, index as faas, http$1 as http, jwt, queue, queues, schedule, secret, secrets, storage, topic, websocket };
