[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [storage](../modules/grpc.storage.md) / IStorageServer

# Interface: IStorageServer

[grpc](../modules/grpc.md).[storage](../modules/grpc.storage.md).IStorageServer

## Hierarchy

* [*UntypedServiceImplementation*](grpc.grpc-1.untypedserviceimplementation.md)

  ↳ **IStorageServer**

## Table of contents

### Properties

- [delete](grpc.storage.istorageserver.md#delete)
- [read](grpc.storage.istorageserver.md#read)
- [write](grpc.storage.istorageserver.md#write)

## Properties

### delete

• **delete**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*StorageDeleteRequest*](../classes/grpc.storage.storagedeleterequest-1.md), [*StorageDeleteResponse*](../classes/grpc.storage.storagedeleteresponse-1.md)\>

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:20

___

### read

• **read**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*StorageReadRequest*](../classes/grpc.storage.storagereadrequest-1.md), [*StorageReadResponse*](../classes/grpc.storage.storagereadresponse-1.md)\>

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:18

___

### write

• **write**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*StorageWriteRequest*](../classes/grpc.storage.storagewriterequest-1.md), [*StorageWriteResponse*](../classes/grpc.storage.storagewriteresponse-1.md)\>

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:19
