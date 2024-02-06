import * as jspb from 'google-protobuf';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as grpc from '@grpc/grpc-js';

// package: nitric.proto.topics.v1


declare class MessageRequest$1 extends jspb.Message {
  getTopicName(): string;
  setTopicName(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRequest$1.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRequest$1): MessageRequest$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageRequest$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRequest$1;
  static deserializeBinaryFromReader(message: MessageRequest$1, reader: jspb.BinaryReader): MessageRequest$1;
}

declare namespace MessageRequest$1 {
  export type AsObject = {
    topicName: string,
    message?: Message.AsObject,
  }
}

declare class MessageResponse$1 extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse$1.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse$1): MessageResponse$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageResponse$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse$1;
  static deserializeBinaryFromReader(message: MessageResponse$1, reader: jspb.BinaryReader): MessageResponse$1;
}

declare namespace MessageResponse$1 {
  export type AsObject = {
    success: boolean,
  }
}

declare class Message extends jspb.Message {
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

declare namespace Message {
  export type AsObject = {
    structPayload?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    STRUCT_PAYLOAD = 1,
  }
}

declare class TopicPublishRequest extends jspb.Message {
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

declare namespace TopicPublishRequest {
  export type AsObject = {
    topicName: string,
    message?: Message.AsObject,
    delay?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

declare class TopicPublishResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicPublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TopicPublishResponse): TopicPublishResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicPublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicPublishResponse;
  static deserializeBinaryFromReader(message: TopicPublishResponse, reader: jspb.BinaryReader): TopicPublishResponse;
}

declare namespace TopicPublishResponse {
  export type AsObject = {
  }
}

// GENERATED CODE -- DO NOT EDIT!


declare class TopicsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  publish(argument: TopicPublishRequest, callback: grpc.requestCallback<TopicPublishResponse>): grpc.ClientUnaryCall;
  publish(argument: TopicPublishRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<TopicPublishResponse>): grpc.ClientUnaryCall;
  publish(argument: TopicPublishRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<TopicPublishResponse>): grpc.ClientUnaryCall;
}

interface PublishOptions {
    /** Number of seconds to delay message publishing by */
    delay?: number;
}
declare class Topic<T extends Record<string, any> = Record<string, any>> {
    private eventing;
    private name;
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
    publish(event: T, opts?: PublishOptions): Promise<void>;
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
    private _client;
    get TopicServiceClient(): TopicsClient;
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
}
/**
 * Events API client.
 *
 * @returns an Events API client.
 * @example
 * ```typescript
 * import { topic } from "@nitric/sdk";
 *
 * const userCreatedTopic = topic('user-created').for('publishing')
 *
 * async function publishEvent() {
 *  await userCreatedTopic.publish({
 *    amazing: 'thing happened!',
 *  });
 *
 *  return 'Successfully published notification';
 * }
 * ```
 */
declare const topics: () => Eventing;

// package: nitric.proto.KeyValue.v1


declare class ValueRef extends jspb.Message {
  getStore(): string;
  setStore(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueRef.AsObject;
  static toObject(includeInstance: boolean, msg: ValueRef): ValueRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueRef;
  static deserializeBinaryFromReader(message: ValueRef, reader: jspb.BinaryReader): ValueRef;
}

declare namespace ValueRef {
  export type AsObject = {
    store: string,
    key: string,
  }
}

declare class Value extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

declare namespace Value {
  export type AsObject = {
    ref?: ValueRef.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class KeyValueGetRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueGetRequest): KeyValueGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueGetRequest;
  static deserializeBinaryFromReader(message: KeyValueGetRequest, reader: jspb.BinaryReader): KeyValueGetRequest;
}

declare namespace KeyValueGetRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
  }
}

declare class KeyValueGetResponse extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueGetResponse): KeyValueGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueGetResponse;
  static deserializeBinaryFromReader(message: KeyValueGetResponse, reader: jspb.BinaryReader): KeyValueGetResponse;
}

declare namespace KeyValueGetResponse {
  export type AsObject = {
    value?: Value.AsObject,
  }
}

declare class KeyValueSetRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueSetRequest): KeyValueSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueSetRequest;
  static deserializeBinaryFromReader(message: KeyValueSetRequest, reader: jspb.BinaryReader): KeyValueSetRequest;
}

declare namespace KeyValueSetRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class KeyValueSetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueSetResponse): KeyValueSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueSetResponse;
  static deserializeBinaryFromReader(message: KeyValueSetResponse, reader: jspb.BinaryReader): KeyValueSetResponse;
}

declare namespace KeyValueSetResponse {
  export type AsObject = {
  }
}

declare class KeyValueDeleteRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): ValueRef | undefined;
  setRef(value?: ValueRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueDeleteRequest): KeyValueDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueDeleteRequest;
  static deserializeBinaryFromReader(message: KeyValueDeleteRequest, reader: jspb.BinaryReader): KeyValueDeleteRequest;
}

declare namespace KeyValueDeleteRequest {
  export type AsObject = {
    ref?: ValueRef.AsObject,
  }
}

declare class KeyValueDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueDeleteResponse): KeyValueDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValueDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueDeleteResponse;
  static deserializeBinaryFromReader(message: KeyValueDeleteResponse, reader: jspb.BinaryReader): KeyValueDeleteResponse;
}

declare namespace KeyValueDeleteResponse {
  export type AsObject = {
  }
}

// GENERATED CODE -- DO NOT EDIT!


declare class KeyValueClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(argument: KeyValueGetRequest, callback: grpc.requestCallback<KeyValueGetResponse>): grpc.ClientUnaryCall;
  get(argument: KeyValueGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<KeyValueGetResponse>): grpc.ClientUnaryCall;
  get(argument: KeyValueGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<KeyValueGetResponse>): grpc.ClientUnaryCall;
  set(argument: KeyValueSetRequest, callback: grpc.requestCallback<KeyValueSetResponse>): grpc.ClientUnaryCall;
  set(argument: KeyValueSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<KeyValueSetResponse>): grpc.ClientUnaryCall;
  set(argument: KeyValueSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<KeyValueSetResponse>): grpc.ClientUnaryCall;
  delete(argument: KeyValueDeleteRequest, callback: grpc.requestCallback<KeyValueDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: KeyValueDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<KeyValueDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: KeyValueDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<KeyValueDeleteResponse>): grpc.ClientUnaryCall;
}

type ValueStructure = Record<string, any>;
/**
 * StoreRef
 *
 * Provides a KeyValue API StoreRef class.
 */
declare class StoreRef<T extends ValueStructure> {
    private kvClient;
    readonly name: string;
    constructor(kvClient: KeyValueClient, name: string);
    /**
     * Return a value from the store
     *
     * @param key The key of the value to retrieve
     *
     * @returns the value or null if not found
     */
    get(key: string): Promise<T>;
    /**
     * Set a value in the store
     *
     * @param key The key to store the value against
     * @param value The value to store
     *
     * @returns void
     */
    set(key: string, value: T): Promise<void>;
    /**
     * Delete a value from the store
     *
     * @param key The key of the key/value pair to delete
     *
     * @returns void
     */
    delete(key: string): Promise<void>;
}

/**
 * KeyValue
 *
 * Provides a KeyValue API client.
 * Used to create references to key/value stores.
 */
declare class KeyValue {
    private kvClient;
    constructor();
    /**
     * Gets a store instance that refers to the store at the specified path.
     *
     * @param name The name of the store (required)
     * @returns The Store instance
     */
    store<T extends ValueStructure>(name: string): StoreRef<T>;
}
declare const keyvalue: () => KeyValue;

// package: nitric.proto.storage.v1


declare class BlobEventRequest$1 extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasBlobEvent(): boolean;
  clearBlobEvent(): void;
  getBlobEvent(): BlobEvent | undefined;
  setBlobEvent(value?: BlobEvent): void;

  getEventCase(): BlobEventRequest$1.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobEventRequest$1.AsObject;
  static toObject(includeInstance: boolean, msg: BlobEventRequest$1): BlobEventRequest$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobEventRequest$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobEventRequest$1;
  static deserializeBinaryFromReader(message: BlobEventRequest$1, reader: jspb.BinaryReader): BlobEventRequest$1;
}

declare namespace BlobEventRequest$1 {
  export type AsObject = {
    bucketName: string,
    blobEvent?: BlobEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    BLOB_EVENT = 10,
  }
}

declare class BlobEvent extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getType(): BlobEventTypeMap[keyof BlobEventTypeMap];
  setType(value: BlobEventTypeMap[keyof BlobEventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BlobEvent): BlobEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobEvent;
  static deserializeBinaryFromReader(message: BlobEvent, reader: jspb.BinaryReader): BlobEvent;
}

declare namespace BlobEvent {
  export type AsObject = {
    key: string,
    type: BlobEventTypeMap[keyof BlobEventTypeMap],
  }
}

declare class BlobEventResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlobEventResponse): BlobEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobEventResponse;
  static deserializeBinaryFromReader(message: BlobEventResponse, reader: jspb.BinaryReader): BlobEventResponse;
}

declare namespace BlobEventResponse {
  export type AsObject = {
    success: boolean,
  }
}

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

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): google_protobuf_duration_pb.Duration | undefined;
  setExpiry(value?: google_protobuf_duration_pb.Duration): void;

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
    expiry?: google_protobuf_duration_pb.Duration.AsObject,
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

declare class StorageListBlobsRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListBlobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListBlobsRequest): StorageListBlobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListBlobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListBlobsRequest;
  static deserializeBinaryFromReader(message: StorageListBlobsRequest, reader: jspb.BinaryReader): StorageListBlobsRequest;
}

declare namespace StorageListBlobsRequest {
  export type AsObject = {
    bucketName: string,
    prefix: string,
  }
}

declare class Blob extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blob.AsObject;
  static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blob;
  static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
}

declare namespace Blob {
  export type AsObject = {
    key: string,
  }
}

declare class StorageListBlobsResponse extends jspb.Message {
  clearBlobsList(): void;
  getBlobsList(): Array<Blob>;
  setBlobsList(value: Array<Blob>): void;
  addBlobs(value?: Blob, index?: number): Blob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageListBlobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageListBlobsResponse): StorageListBlobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageListBlobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageListBlobsResponse;
  static deserializeBinaryFromReader(message: StorageListBlobsResponse, reader: jspb.BinaryReader): StorageListBlobsResponse;
}

declare namespace StorageListBlobsResponse {
  export type AsObject = {
    blobsList: Array<Blob.AsObject>,
  }
}

declare class StorageExistsRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageExistsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorageExistsRequest): StorageExistsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageExistsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageExistsRequest;
  static deserializeBinaryFromReader(message: StorageExistsRequest, reader: jspb.BinaryReader): StorageExistsRequest;
}

declare namespace StorageExistsRequest {
  export type AsObject = {
    bucketName: string,
    key: string,
  }
}

declare class StorageExistsResponse extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageExistsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorageExistsResponse): StorageExistsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageExistsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageExistsResponse;
  static deserializeBinaryFromReader(message: StorageExistsResponse, reader: jspb.BinaryReader): StorageExistsResponse;
}

declare namespace StorageExistsResponse {
  export type AsObject = {
    exists: boolean,
  }
}

interface BlobEventTypeMap {
  CREATED: 0;
  DELETED: 1;
}

// GENERATED CODE -- DO NOT EDIT!


declare class StorageClient extends grpc.Client {
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
  listBlobs(argument: StorageListBlobsRequest, callback: grpc.requestCallback<StorageListBlobsResponse>): grpc.ClientUnaryCall;
  listBlobs(argument: StorageListBlobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<StorageListBlobsResponse>): grpc.ClientUnaryCall;
  listBlobs(argument: StorageListBlobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<StorageListBlobsResponse>): grpc.ClientUnaryCall;
  exists(argument: StorageExistsRequest, callback: grpc.requestCallback<StorageExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: StorageExistsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<StorageExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: StorageExistsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<StorageExistsResponse>): grpc.ClientUnaryCall;
}

// package: nitric.proto.resources.v1


declare class ResourceIdentifier extends jspb.Message {
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

declare namespace ResourceIdentifier {
  export type AsObject = {
    type: ResourceTypeMap[keyof ResourceTypeMap],
    name: string,
  }
}

interface ResourceTypeMap {
  API: 0;
  SERVICE: 1;
  BUCKET: 2;
  TOPIC: 3;
  SCHEDULE: 4;
  SUBSCRIPTION: 5;
  KEYVALUESTORE: 6;
  POLICY: 7;
  SECRET: 8;
  BUCKETLISTENER: 9;
  WEBSOCKET: 10;
  HTTP: 11;
  APISECURITYDEFINITION: 12;
  QUEUE: 13;
}

interface ActionMap {
  BUCKETFILELIST: 0;
  BUCKETFILEGET: 1;
  BUCKETFILEPUT: 2;
  BUCKETFILEDELETE: 3;
  TOPICLIST: 200;
  TOPICDETAIL: 201;
  TOPICEVENTPUBLISH: 202;
  KEYVALUESTOREREAD: 300;
  KEYVALUESTOREWRITE: 301;
  KEYVALUESTOREDELETE: 302;
  SECRETPUT: 400;
  SECRETACCESS: 401;
  WEBSOCKETMANAGE: 500;
  QUEUESEND: 600;
  QUEUERECEIVE: 601;
  QUEUELIST: 602;
  QUEUEDETAIL: 603;
}

type WhereQueryOperator = '<' | '<=' | '==' | '!=' | '>=' | '>' | 'startsWith';
type WhereValueExpression = string | number | boolean;
type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';

type ActionsList = ActionMap[keyof ActionMap][];
declare abstract class Resource {
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
    protected get registerPromise(): Promise<ResourceIdentifier>;
    protected set registerPromise(promise: Promise<ResourceIdentifier>);
    protected abstract resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
    protected abstract register(): Promise<ResourceIdentifier>;
}
declare abstract class SecureResource<P> extends Resource {
    protected abstract permsToActions(...perms: P[]): ActionsList;
    protected registerPolicy(...perms: P[]): void;
}

type JSONTypes = Record<string, any> | Array<any> | string;
declare abstract class AbstractRequest<JSONT extends JSONTypes = Record<string, any>> {
    readonly data: string | Uint8Array;
    protected constructor(data: string | Uint8Array);
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
declare abstract class BaseContext<Req extends AbstractRequest = AbstractRequest, Resp extends Record<string, any> = any> {
    protected request: Req;
    protected response: Resp;
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
}

declare class BlobEventContext extends BaseContext<BlobEventRequest, BucketNotificationResponse> {
    get bucketNotification(): BlobEventContext;
    static fromRequest(request: BlobEventRequest$1, bucket: Bucket): BlobEventContext;
    static toResponse(ctx: BlobEventContext): BlobEventResponse;
}
declare class BucketEventContext extends BaseContext<BucketEventRequest, BucketNotificationResponse> {
    get bucketNotification(): BucketEventContext;
    static fromRequest(request: BlobEventRequest$1): BucketEventContext;
    static toResponse(ctx: BucketEventContext): BlobEventResponse;
}
declare enum BlobEventType {
    Created = 0,
    Deleted = 1
}
declare class BucketEventRequest extends AbstractRequest {
    readonly key: string;
    readonly eventType: BlobEventType;
    constructor(key: string, notificationType: number);
    private eventTypeToNotificationType;
}
declare class BlobEventRequest extends BucketEventRequest {
    readonly file: File | undefined;
    constructor(key: string, notificationType: number, bucket: Bucket);
}
interface BucketNotificationResponse {
    success: boolean;
}

// package: nitric.proto.apis.v1


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

declare class QueryValue$1 extends jspb.Message {
  clearValueList(): void;
  getValueList(): Array<string>;
  setValueList(value: Array<string>): void;
  addValue(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValue$1.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValue$1): QueryValue$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValue$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValue$1;
  static deserializeBinaryFromReader(message: QueryValue$1, reader: jspb.BinaryReader): QueryValue$1;
}

declare namespace QueryValue$1 {
  export type AsObject = {
    valueList: Array<string>,
  }
}

declare class HttpRequest$1 extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getHeadersMap(): jspb.Map<string, HeaderValue>;
  clearHeadersMap(): void;
  getQueryParamsMap(): jspb.Map<string, QueryValue$1>;
  clearQueryParamsMap(): void;
  getPathParamsMap(): jspb.Map<string, string>;
  clearPathParamsMap(): void;
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpRequest$1.AsObject;
  static toObject(includeInstance: boolean, msg: HttpRequest$1): HttpRequest$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpRequest$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpRequest$1;
  static deserializeBinaryFromReader(message: HttpRequest$1, reader: jspb.BinaryReader): HttpRequest$1;
}

declare namespace HttpRequest$1 {
  export type AsObject = {
    method: string,
    path: string,
    headersMap: Array<[string, HeaderValue.AsObject]>,
    queryParamsMap: Array<[string, QueryValue$1.AsObject]>,
    pathParamsMap: Array<[string, string]>,
    body: Uint8Array | string,
  }
}

declare class HttpResponse$1 extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getHeadersMap(): jspb.Map<string, HeaderValue>;
  clearHeadersMap(): void;
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpResponse$1.AsObject;
  static toObject(includeInstance: boolean, msg: HttpResponse$1): HttpResponse$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpResponse$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpResponse$1;
  static deserializeBinaryFromReader(message: HttpResponse$1, reader: jspb.BinaryReader): HttpResponse$1;
}

declare namespace HttpResponse$1 {
  export type AsObject = {
    status: number,
    headersMap: Array<[string, HeaderValue.AsObject]>,
    body: Uint8Array | string,
  }
}

type Method$1 = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD';
interface HttpRequestArgs {
    data: string | Uint8Array;
    method: Method$1 | string;
    path: string;
    params: Record<string, string>;
    query: Record<string, string[]>;
    headers: Record<string, string[]>;
}
declare class HttpRequest extends AbstractRequest {
    readonly method: Method$1 | string;
    readonly path: string;
    readonly params: Record<string, string>;
    readonly query: Record<string, string[]>;
    readonly headers: Record<string, string[] | string>;
    constructor({ data, method, path, params, query, headers, }: HttpRequestArgs);
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
declare class HttpContext extends BaseContext<HttpRequest, HttpResponse> {
    get http(): HttpContext;
    static fromHttpRequest(http: HttpRequest$1): HttpContext;
    static toHttpResponse(ctx: HttpContext): HttpResponse$1;
}

// package: nitric.proto.schedules.v1


declare class IntervalRequest$1 extends jspb.Message {
  getScheduleName(): string;
  setScheduleName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntervalRequest$1.AsObject;
  static toObject(includeInstance: boolean, msg: IntervalRequest$1): IntervalRequest$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntervalRequest$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntervalRequest$1;
  static deserializeBinaryFromReader(message: IntervalRequest$1, reader: jspb.BinaryReader): IntervalRequest$1;
}

declare namespace IntervalRequest$1 {
  export type AsObject = {
    scheduleName: string,
  }
}

declare class IntervalResponse$1 extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntervalResponse$1.AsObject;
  static toObject(includeInstance: boolean, msg: IntervalResponse$1): IntervalResponse$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntervalResponse$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntervalResponse$1;
  static deserializeBinaryFromReader(message: IntervalResponse$1, reader: jspb.BinaryReader): IntervalResponse$1;
}

declare namespace IntervalResponse$1 {
  export type AsObject = {
  }
}

interface IntervalResponse {
    success: boolean;
}
declare class IntervalRequest extends AbstractRequest {
    readonly schedule: string;
    constructor(schedule: string);
}
declare class IntervalContext extends BaseContext<IntervalRequest, IntervalResponse> {
    get event(): IntervalContext;
    static fromRequest(messageRequest: IntervalRequest$1): IntervalContext;
    static toResponse(_: IntervalContext): IntervalResponse$1;
}

interface MessageResponse {
    success: boolean;
}
declare class MessageRequest<T> extends AbstractRequest<T> {
    readonly topic: string;
    constructor(data: string | Uint8Array, topic: string);
}
declare class MessageContext<T> extends BaseContext<MessageRequest<T>, MessageResponse> {
    get event(): MessageContext<T>;
    static fromMessageRequest(messageRequest: MessageRequest$1): MessageContext<unknown>;
    static toMessageResponse(ctx: MessageContext<any>): MessageResponse$1;
}

// package: nitric.proto.websockets.v1


declare class WebsocketEventRequest extends jspb.Message {
  getSocketName(): string;
  setSocketName(value: string): void;

  getConnectionid(): string;
  setConnectionid(value: string): void;

  hasConnection(): boolean;
  clearConnection(): void;
  getConnection(): WebsocketConnectionEvent | undefined;
  setConnection(value?: WebsocketConnectionEvent): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): WebsocketDisconnectionEvent | undefined;
  setDisconnection(value?: WebsocketDisconnectionEvent): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): WebsocketMessageEvent | undefined;
  setMessage(value?: WebsocketMessageEvent): void;

  getWebsocketEventCase(): WebsocketEventRequest.WebsocketEventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketEventRequest): WebsocketEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketEventRequest;
  static deserializeBinaryFromReader(message: WebsocketEventRequest, reader: jspb.BinaryReader): WebsocketEventRequest;
}

declare namespace WebsocketEventRequest {
  export type AsObject = {
    socketName: string,
    connectionid: string,
    connection?: WebsocketConnectionEvent.AsObject,
    disconnection?: WebsocketDisconnectionEvent.AsObject,
    message?: WebsocketMessageEvent.AsObject,
  }

  export enum WebsocketEventCase {
    WEBSOCKET_EVENT_NOT_SET = 0,
    CONNECTION = 10,
    DISCONNECTION = 11,
    MESSAGE = 12,
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

declare class WebsocketEventResponse extends jspb.Message {
  hasConnectionResponse(): boolean;
  clearConnectionResponse(): void;
  getConnectionResponse(): WebsocketConnectionResponse | undefined;
  setConnectionResponse(value?: WebsocketConnectionResponse): void;

  getWebsocketResponseCase(): WebsocketEventResponse.WebsocketResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketEventResponse): WebsocketEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketEventResponse;
  static deserializeBinaryFromReader(message: WebsocketEventResponse, reader: jspb.BinaryReader): WebsocketEventResponse;
}

declare namespace WebsocketEventResponse {
  export type AsObject = {
    connectionResponse?: WebsocketConnectionResponse.AsObject,
  }

  export enum WebsocketResponseCase {
    WEBSOCKET_RESPONSE_NOT_SET = 0,
    CONNECTION_RESPONSE = 10,
  }
}

declare class WebsocketConnectionEvent extends jspb.Message {
  getQueryParamsMap(): jspb.Map<string, QueryValue>;
  clearQueryParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketConnectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketConnectionEvent): WebsocketConnectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketConnectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketConnectionEvent;
  static deserializeBinaryFromReader(message: WebsocketConnectionEvent, reader: jspb.BinaryReader): WebsocketConnectionEvent;
}

declare namespace WebsocketConnectionEvent {
  export type AsObject = {
    queryParamsMap: Array<[string, QueryValue.AsObject]>,
  }
}

declare class WebsocketConnectionResponse extends jspb.Message {
  getReject(): boolean;
  setReject(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketConnectionResponse): WebsocketConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketConnectionResponse;
  static deserializeBinaryFromReader(message: WebsocketConnectionResponse, reader: jspb.BinaryReader): WebsocketConnectionResponse;
}

declare namespace WebsocketConnectionResponse {
  export type AsObject = {
    reject: boolean,
  }
}

declare class WebsocketDisconnectionEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketDisconnectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketDisconnectionEvent): WebsocketDisconnectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketDisconnectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketDisconnectionEvent;
  static deserializeBinaryFromReader(message: WebsocketDisconnectionEvent, reader: jspb.BinaryReader): WebsocketDisconnectionEvent;
}

declare namespace WebsocketDisconnectionEvent {
  export type AsObject = {
  }
}

declare class WebsocketMessageEvent extends jspb.Message {
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketMessageEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketMessageEvent): WebsocketMessageEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsocketMessageEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketMessageEvent;
  static deserializeBinaryFromReader(message: WebsocketMessageEvent, reader: jspb.BinaryReader): WebsocketMessageEvent;
}

declare namespace WebsocketMessageEvent {
  export type AsObject = {
    body: Uint8Array | string,
  }
}

declare class WebsocketNotificationContext<T> extends BaseContext<WebsocketNotificationRequest<T>, WebsocketNotificationResponse> {
    get websocket(): WebsocketNotificationContext<T>;
    static fromRequest(request: WebsocketEventRequest): WebsocketNotificationContext<any>;
    static toResponse(ctx: WebsocketNotificationContext<any>): WebsocketEventResponse;
}
type WebsocketEventType$1 = 'connect' | 'disconnect' | 'message';
declare class WebsocketNotificationRequest<T> extends AbstractRequest<T> {
    readonly socket: string;
    readonly eventType: WebsocketEventType$1;
    readonly connectionId: string;
    readonly query: Record<string, string[]>;
    constructor(data: string | Uint8Array, socket: string, eventType: number, connectionId: string, query: Record<string, string[]>);
    private eventCaseToType;
}
interface WebsocketNotificationResponse {
    success: boolean;
}

type GenericHandler<Ctx> = (ctx: Ctx) => Promise<Ctx> | Ctx;
type GenericMiddleware<Ctx> = (ctx: Ctx, next?: GenericHandler<Ctx>) => Promise<Ctx | void> | Ctx | void;
type HttpMiddleware = GenericMiddleware<HttpContext>;
type WebsocketMiddleware<T extends JSONTypes = Record<string, any>> = GenericMiddleware<WebsocketNotificationContext<T>>;
type MessageMiddleware<T extends Record<string, any> = Record<string, any>> = GenericMiddleware<MessageContext<T>>;
type ScheduleMiddleware = GenericMiddleware<IntervalContext>;
type BucketNotificationMiddleware = GenericMiddleware<BucketEventContext>;
type FileNotificationMiddleware = GenericMiddleware<BlobEventContext>;

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
declare class Method<SecurityDefs extends string> {
    private readonly options;
    private readonly handler;
    readonly route: Route<SecurityDefs>;
    readonly methods: HttpMethod[];
    constructor(route: Route<SecurityDefs>, methods: HttpMethod[], opts: MethodOptions<SecurityDefs>, ...middleware: HttpMiddleware[]);
    private start;
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
    /**
     * Optional root level security for the API
     */
    security?: Record<Defs, string[]>;
}
/**
 * API Resource
 *
 * Represents an HTTP API, capable of routing and securing incoming HTTP requests to handlers.
 */
declare class Api<SecurityDefs extends string> extends Resource {
    readonly path: string;
    readonly middleware?: HttpMiddleware[];
    private readonly routes;
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
    /**
     * Register this api as a required resource for the calling function/container.
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<ResourceIdentifier>;
}
/**
 * Register an API Resource. If the API has already been registered, the existing API will be returned.
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
 * Creates a subscription worker
 */
declare class Subscription<T extends Record<string, any> = Record<string, any>> {
    private readonly options;
    private readonly handler;
    constructor(name: string, ...middleware: MessageMiddleware<T>[]);
    private start;
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
    protected register(): Promise<ResourceIdentifier>;
    protected permsToActions(...perms: TopicPermission[]): ActionsList;
    /**
     * Register and start a subscription handler that will be called for all events from this topic.
     *
     * @param middleware handler middleware which will be run for every incoming event
     * @returns Promise which resolves when the handler server terminates
     */
    subscribe(...middleware: MessageMiddleware<T>[]): Promise<void>;
    protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
    /**
     * Return a topic reference and register the permissions required by the currently scoped function for this resource.
     *
     * e.g. const updates = resources.topic('updates').for('publishing')
     *
     * @param perm the required permission set
     * @param perms additional required permissions set
     * @returns a usable topic reference
     */
    for(perm: TopicPermission, ...perms: TopicPermission[]): Topic<T>;
}
/**
 * Create a reference to a named topic in this project.
 *
 * If the topic hasn't been referenced before this is a request for a new resource. Otherwise, the existing topic with the same name will be used.
 *
 * @param name the name of the topic.
 * @returns a reference to the topic.
 */
declare function topic<T extends Record<string, any> = Record<string, any>>(name: string): TopicResource<T>;

type StorePermission = 'getting' | 'setting' | 'deleting';
/**
 * A key/value store resource.
 */
declare class KeyValueStoreResource<T extends ValueStructure> extends SecureResource<StorePermission> {
    /**
     * Register this key/value store as a required resource for the calling service
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<ResourceIdentifier>;
    protected permsToActions(...perms: StorePermission[]): ActionMap[keyof ActionMap][];
    protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
    /**
     * Return a key/value store reference and register the permissions required by the currently scoped service for this resource.
     *
     * e.g. const customers = resources.kv('customers').for('getting', 'setting')
     *
     * @param perm  the required permission set
     * @param perms additional required permissions set
     * @returns a usable key/value store reference
     */
    for(perm: StorePermission, ...perms: StorePermission[]): StoreRef<T>;
}
/**
 * Create a reference to a named key/value store in this project.
 *
 * If the key/value store hasn't been referenced before this is a request for a new resource. Otherwise, the existing store with the same name will be used.
 *
 * @param name the name of the key/value store.
 * @returns a reference to the key/value store.
 */
declare function kv<T extends ValueStructure>(name: string): KeyValueStoreResource<T>;

type BucketPermission = 'reading' | 'writing' | 'deleting';
type BucketNotificationType = 'write' | 'delete';
declare class BucketNotificationWorkerOptions {
    readonly bucket: string;
    readonly notificationType: 0 | 1;
    readonly notificationPrefixFilter: string;
    constructor(bucket: string, notificationType: BucketNotificationType, notificationPrefixFilter: string);
    static toGrpcEvent(notificationType: BucketNotificationType): 0 | 1;
}
declare class FileNotificationWorkerOptions extends BucketNotificationWorkerOptions {
    readonly bucketRef: Bucket;
    constructor(bucketRef: Bucket, notificationType: BucketNotificationType, notificationPrefixFilter: string);
}
declare class BucketNotification {
    private readonly options;
    private readonly handler;
    constructor(bucketName: string, notificationType: BucketNotificationType, notificationPrefixFilter: string, ...middleware: BucketNotificationMiddleware[]);
    private start;
}
declare class FileNotification extends BucketNotification {
    private readonly bucket;
    constructor(bucket: Bucket, notificationType: BucketNotificationType, notificationPrefixFilter: string, ...middleware: FileNotificationMiddleware[]);
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
    protected register(): Promise<ResourceIdentifier>;
    /**
     * Register and start a bucket notification handler that will be called for all matching notification events on this bucket
     *
     * @param notificationType the notification type that should trigger the middleware, either 'write' or 'delete'
     * @param notificationPrefixFilter the file name prefix that files must match to trigger a notification
     * @param middleware handler middleware which will be run for every incoming event
     * @returns Promise which resolves when the handler server terminates
     */
    on(notificationType: BucketNotificationType, notificationPrefixFilter: string, ...middleware: BucketNotificationMiddleware[]): Promise<void>;
    protected permsToActions(...perms: BucketPermission[]): ActionsList;
    protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
    /**
     * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
     *
     * e.g. const imgs = resources.bucket('image').for('writing')
     *
     * @param perm  the required permission set
     * @param perms additional required permissions set
     * @returns a usable bucket reference
     */
    for(perm: BucketPermission, ...perms: BucketPermission[]): Bucket;
}
/**
 * Create a reference to a named bucket in this project.
 *
 * If the bucket hasn't been referenced before this is a request for a new resource. Otherwise, the existing bucket with the same name will be used.
 *
 * @param name the name of the bucket.
 * @returns a reference to the bucket.
 */
declare const bucket: (name: string) => BucketResource;

declare const Frequencies: readonly ["days", "hours", "minutes"];
type Frequency = (typeof Frequencies)[number];
/**
 * Provides a rate based schedule
 *
 * Rates provide a simple expressive way to define schedules
 */
declare class Rate {
    readonly scheduleName: string;
    readonly rate: string;
    readonly frequency: Frequency;
    readonly handler: ScheduleMiddleware | undefined;
    constructor(schedule: Schedule, rate: string, ...middleware: ScheduleMiddleware[]);
    private start;
}
/**
 * Provides a cron based schedule
 */
declare class Cron {
    readonly cron: string;
    readonly scheduleName: string;
    readonly handler: ScheduleMiddleware | undefined;
    constructor(schedule: Schedule, cron: string, ...middleware: ScheduleMiddleware[]);
    private start;
}
/**
 * Providers a scheduled worker.
 */
declare class Schedule {
    private readonly name;
    constructor(name: string);
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
 * The schedule name must be unique within the project.
 *
 * @param name of the schedule, e.g. "Nightly"
 * @returns a named schedule builder.
 */
declare const schedule: (name: string) => Schedule;

// package: nitric.proto.secrets.v1


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


declare class SecretManagerClient extends grpc.Client {
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
    SecretManagerClient: SecretManagerClient;
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

type SecretPermission = 'putting' | 'accessing';
/**
 * Cloud secret resource for secret storage
 */
declare class SecretResource extends SecureResource<SecretPermission> {
    protected register(): Promise<ResourceIdentifier>;
    protected permsToActions(...perms: SecretPermission[]): ActionsList;
    protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
    for(perm: SecretPermission, ...perms: SecretPermission[]): Secret;
}
/**
 * Create a reference to a named secret in this project.
 *
 * If the secret hasn't been referenced before this is a request for a new resource. Otherwise, the existing secret with the same name will be used.
 *
 * @param name the name of the secret.
 * @returns a reference to the secret.
 */
declare const secret: (name: string) => SecretResource;

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
/**
 * Register an HTTP Proxy to the provided application.
 *
 * @param app the http application to run behind the proxy
 * @param callback an optional callback to run after the proxy has started
 * @returns void
 */
declare const http: (app: NodeApplication | ListenerFunction, callback?: () => void) => void;

declare const WebsocketEventTypeMap: {
    connect: 0;
    disconnect: 1;
    message: 2;
};
type WebsocketEventType = keyof typeof WebsocketEventTypeMap;
declare class Websocket {
    private readonly handler;
    readonly socketName: string;
    readonly eventType: (typeof WebsocketEventTypeMap)[WebsocketEventType];
    constructor(socketName: string, eventType: WebsocketEventType, ...middleware: WebsocketMiddleware<unknown>[]);
    private start;
}
/**
 * Websocket resource for bi-di HTTP communication.
 */
declare class WebsocketResource extends Resource {
    private readonly wsClient;
    constructor(name: string);
    /**
     * Register this websocket as a required resource for the calling function/container.
     *
     * @returns a promise that resolves when the registration is complete
     */
    protected register(): Promise<ResourceIdentifier>;
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
    protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap];
}
/**
 * Register a Websocket Resource. If the Websocket has already been registered, the existing Websocket will be returned.
 *
 * The returned Websocket object can be used to register handlers for websocket events.
 * e.g. socket.on('connect', async (ctx) => { ... })
 *
 * @param name the name of the Websocket
 * @returns a Websocket resource
 */
declare const websocket: (name: string) => WebsocketResource;

/**
 * Nitric storage client, facilitates writing and reading from blob storage (buckets).
 */
declare class Storage {
    StorageClient: StorageClient;
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
    on(notificationType: BucketNotificationType, notificationPrefixFilter: string, ...middleware: FileNotificationMiddleware[]): Promise<void>;
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
     * @returns a presigned url string.
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
    /**
     * Determine if a file exists in a bucket.
     *
     * @returns A boolean promise.
     *
     * Example:
     * ```typescript
     * import { bucket } from "@nitric/sdk";
     *
     * const exampleBucket = bucket('exampleBucket').for('reading');
     *
     * const exists = await exampleBucket.file("my-item").exists();
     * ```
     */
    exists(): Promise<boolean>;
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

export { Api, ApiOptions, ApiWorkerOptions, BaseSecurityDefinition, Bucket, BucketNotification, BucketNotificationType, BucketNotificationWorkerOptions, BucketResource, Cron, Eventing, File, FileMode, FileNotification, FileNotificationWorkerOptions, Frequency, HttpMethod, HttpWorkerOptions, JwtSecurityDefinition, KeyValue, KeyValueStoreResource, Method, MethodOptions, PublishOptions, Rate, Route, RouteOptions, Schedule, Secret, SecretResource, Secrets, SecurityDefinition, SignUrlOptions, Storage, Subscription, SubscriptionWorkerOptions, Topic, TopicResource, ValueStructure, Websocket, WebsocketResource, WhereQueryOperator, WhereValueExpression, api, bucket, http, jwt, keyvalue, kv, schedule, secret, secrets, storage, topic, topics, websocket };
