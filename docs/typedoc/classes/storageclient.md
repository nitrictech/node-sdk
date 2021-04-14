[@nitric/sdk](../README.md) / StorageClient

# Class: StorageClient

Nitric queue client, facilitates writing and reading from blob storate (buckets).

## Table of contents

### Constructors

- [constructor](storageclient.md#constructor)

### Properties

- [grpcClient](storageclient.md#grpcclient)

### Methods

- [read](storageclient.md#read)
- [write](storageclient.md#write)

## Constructors

### constructor

\+ **new StorageClient**(): [*StorageClient*](storageclient.md)

**Returns:** [*StorageClient*](storageclient.md)

Defined in: [src/api/storage/storage.ts:9](https://github.com/nitrictech/node-sdk/blob/6836675/src/api/storage/storage.ts#L9)

## Properties

### grpcClient

• `Private` **grpcClient**: [*StorageClient*](grpc.storage.storageclient.md)

Defined in: [src/api/storage/storage.ts:9](https://github.com/nitrictech/node-sdk/blob/6836675/src/api/storage/storage.ts#L9)

## Methods

### read

▸ **read**(`bucket`: *string*, `key`: *string*): *Promise*<Uint8Array\>

Read an array of bytes from a bucket

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bucket` | *string* | The bucket to read from   |
`key` | *string* | The key of the blob item to read  Example: ```typescript import { StorageClient } from "@nitric/sdk";  const client = new StorageClient();  const bytes = await client.read("my-bucket", "my-item"); ```    |

**Returns:** *Promise*<Uint8Array\>

Defined in: [src/api/storage/storage.ts:64](https://github.com/nitrictech/node-sdk/blob/6836675/src/api/storage/storage.ts#L64)

___

### write

▸ **write**(`bucket`: *string*, `key`: *string*, `body`: *Uint8Array*): *Promise*<boolean\>

Write a an array of bytes to a bucket

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bucket` | *string* | The bucket to write to   |
`key` | *string* | The key/path of the item to write   |
`body` | *Uint8Array* | The contents to write  Example: ```typescript import { StorageClient } from "@nitric/sdk";  const client = new StorageClient();  await client.write("my-bucket", "my-item", Buffer.from("My Test File...")); ```    |

**Returns:** *Promise*<boolean\>

Defined in: [src/api/storage/storage.ts:33](https://github.com/nitrictech/node-sdk/blob/6836675/src/api/storage/storage.ts#L33)
