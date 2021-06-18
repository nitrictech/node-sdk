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

Defined in: [src/api/storage/storage.ts:22](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/storage/storage.ts#L22)

## Properties

### grpcClient

• `Private` **grpcClient**: [*StorageClient*](grpc.storage.storageclient.md)

Defined in: [src/api/storage/storage.ts:22](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/storage/storage.ts#L22)

## Methods

### read

▸ **read**(`bucket`: *string*, `key`: *string*): *Promise*<Uint8Array\>

Read an array of bytes from a bucket

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bucket` | *string* | The bucket to read from   |
`key` | *string* | The key of the blob item to read   |

**Returns:** *Promise*<Uint8Array\>

A byte array of the contents of the read blob

Example:
```typescript
import { StorageClient } from "@nitric/sdk";

const client = new StorageClient();

const bytes = await client.read("my-bucket", "my-item");
```

Defined in: [src/api/storage/storage.ts:79](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/storage/storage.ts#L79)

___

### write

▸ **write**(`bucket`: *string*, `key`: *string*, `body`: *Uint8Array*): *Promise*<void\>

Write a an array of bytes to a bucket

**`retuns`** A void promise

Example:
```typescript
import { StorageClient } from "@nitric/sdk";

const client = new StorageClient();

await client.write("my-bucket", "my-item", Buffer.from("My Test File..."));
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bucket` | *string* | The bucket to write to   |
`key` | *string* | The key/path of the item to write   |
`body` | *Uint8Array* | The contents to write   |

**Returns:** *Promise*<void\>

Defined in: [src/api/storage/storage.ts:47](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/storage/storage.ts#L47)
