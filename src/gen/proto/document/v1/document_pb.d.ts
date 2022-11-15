// package: nitric.document.v1
// file: proto/document/v1/document.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class Collection extends jspb.Message {
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

export namespace Collection {
  export type AsObject = {
    name: string,
    parent?: Key.AsObject,
  }
}

export class Key extends jspb.Message {
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

export namespace Key {
  export type AsObject = {
    collection?: Collection.AsObject,
    id: string,
  }
}

export class Document extends jspb.Message {
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

export namespace Document {
  export type AsObject = {
    content?: google_protobuf_struct_pb.Struct.AsObject,
    key?: Key.AsObject,
  }
}

export class ExpressionValue extends jspb.Message {
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

export namespace ExpressionValue {
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

export class Expression extends jspb.Message {
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

export namespace Expression {
  export type AsObject = {
    operand: string,
    operator: string,
    value?: ExpressionValue.AsObject,
  }
}

export class DocumentGetRequest extends jspb.Message {
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

export namespace DocumentGetRequest {
  export type AsObject = {
    key?: Key.AsObject,
  }
}

export class DocumentGetResponse extends jspb.Message {
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

export namespace DocumentGetResponse {
  export type AsObject = {
    document?: Document.AsObject,
  }
}

export class DocumentSetRequest extends jspb.Message {
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

export namespace DocumentSetRequest {
  export type AsObject = {
    key?: Key.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DocumentSetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSetResponse): DocumentSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSetResponse;
  static deserializeBinaryFromReader(message: DocumentSetResponse, reader: jspb.BinaryReader): DocumentSetResponse;
}

export namespace DocumentSetResponse {
  export type AsObject = {
  }
}

export class DocumentDeleteRequest extends jspb.Message {
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

export namespace DocumentDeleteRequest {
  export type AsObject = {
    key?: Key.AsObject,
  }
}

export class DocumentDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentDeleteResponse): DocumentDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentDeleteResponse;
  static deserializeBinaryFromReader(message: DocumentDeleteResponse, reader: jspb.BinaryReader): DocumentDeleteResponse;
}

export namespace DocumentDeleteResponse {
  export type AsObject = {
  }
}

export class DocumentQueryRequest extends jspb.Message {
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

export namespace DocumentQueryRequest {
  export type AsObject = {
    collection?: Collection.AsObject,
    expressionsList: Array<Expression.AsObject>,
    limit: number,
    pagingTokenMap: Array<[string, string]>,
  }
}

export class DocumentQueryResponse extends jspb.Message {
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

export namespace DocumentQueryResponse {
  export type AsObject = {
    documentsList: Array<Document.AsObject>,
    pagingTokenMap: Array<[string, string]>,
  }
}

export class DocumentQueryStreamRequest extends jspb.Message {
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

export namespace DocumentQueryStreamRequest {
  export type AsObject = {
    collection?: Collection.AsObject,
    expressionsList: Array<Expression.AsObject>,
    limit: number,
  }
}

export class DocumentQueryStreamResponse extends jspb.Message {
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

export namespace DocumentQueryStreamResponse {
  export type AsObject = {
    document?: Document.AsObject,
  }
}

