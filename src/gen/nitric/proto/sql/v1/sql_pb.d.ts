// package: nitric.proto.sql.v1
// file: nitric/proto/sql/v1/sql.proto

import * as jspb from "google-protobuf";

export class SqlConnectionStringRequest extends jspb.Message {
  getDatabaseName(): string;
  setDatabaseName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlConnectionStringRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SqlConnectionStringRequest): SqlConnectionStringRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SqlConnectionStringRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlConnectionStringRequest;
  static deserializeBinaryFromReader(message: SqlConnectionStringRequest, reader: jspb.BinaryReader): SqlConnectionStringRequest;
}

export namespace SqlConnectionStringRequest {
  export type AsObject = {
    databaseName: string,
  }
}

export class SqlConnectionStringResponse extends jspb.Message {
  getConnectionString(): string;
  setConnectionString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlConnectionStringResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SqlConnectionStringResponse): SqlConnectionStringResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SqlConnectionStringResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlConnectionStringResponse;
  static deserializeBinaryFromReader(message: SqlConnectionStringResponse, reader: jspb.BinaryReader): SqlConnectionStringResponse;
}

export namespace SqlConnectionStringResponse {
  export type AsObject = {
    connectionString: string,
  }
}

