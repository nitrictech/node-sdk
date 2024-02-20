// package: nitric.proto.secrets.v1
// file: nitric/proto/secrets/v1/secrets.proto

import * as jspb from "google-protobuf";

export class SecretPutRequest extends jspb.Message {
  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;

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

export namespace SecretPutRequest {
  export type AsObject = {
    secret?: Secret.AsObject,
    value: Uint8Array | string,
  }
}

export class SecretPutResponse extends jspb.Message {
  hasSecretVersion(): boolean;
  clearSecretVersion(): void;
  getSecretVersion(): SecretVersion | undefined;
  setSecretVersion(value?: SecretVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretPutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SecretPutResponse): SecretPutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretPutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretPutResponse;
  static deserializeBinaryFromReader(message: SecretPutResponse, reader: jspb.BinaryReader): SecretPutResponse;
}

export namespace SecretPutResponse {
  export type AsObject = {
    secretVersion?: SecretVersion.AsObject,
  }
}

export class SecretAccessRequest extends jspb.Message {
  hasSecretVersion(): boolean;
  clearSecretVersion(): void;
  getSecretVersion(): SecretVersion | undefined;
  setSecretVersion(value?: SecretVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretAccessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SecretAccessRequest): SecretAccessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretAccessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretAccessRequest;
  static deserializeBinaryFromReader(message: SecretAccessRequest, reader: jspb.BinaryReader): SecretAccessRequest;
}

export namespace SecretAccessRequest {
  export type AsObject = {
    secretVersion?: SecretVersion.AsObject,
  }
}

export class SecretAccessResponse extends jspb.Message {
  hasSecretVersion(): boolean;
  clearSecretVersion(): void;
  getSecretVersion(): SecretVersion | undefined;
  setSecretVersion(value?: SecretVersion): void;

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

export namespace SecretAccessResponse {
  export type AsObject = {
    secretVersion?: SecretVersion.AsObject,
    value: Uint8Array | string,
  }
}

export class Secret extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
    name: string,
  }
}

export class SecretVersion extends jspb.Message {
  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretVersion.AsObject;
  static toObject(includeInstance: boolean, msg: SecretVersion): SecretVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecretVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretVersion;
  static deserializeBinaryFromReader(message: SecretVersion, reader: jspb.BinaryReader): SecretVersion;
}

export namespace SecretVersion {
  export type AsObject = {
    secret?: Secret.AsObject,
    version: string,
  }
}

