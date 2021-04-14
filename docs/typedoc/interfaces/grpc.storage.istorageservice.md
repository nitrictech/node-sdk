[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [storage](../modules/grpc.storage.md) / IStorageService

# Interface: IStorageService

[grpc](../modules/grpc.md).[storage](../modules/grpc.storage.md).IStorageService

## Hierarchy

* [*ServiceDefinition*](../modules/grpc.grpc-1.md#servicedefinition)<[*UntypedServiceImplementation*](grpc.grpc-1.untypedserviceimplementation.md)\>

  ↳ **IStorageService**

## Table of contents

### Properties

- [delete](grpc.storage.istorageservice.md#delete)
- [read](grpc.storage.istorageservice.md#read)
- [write](grpc.storage.istorageservice.md#write)

## Properties

### delete

• **delete**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*StorageDeleteRequest*](../classes/grpc.storage.storagedeleterequest-1.md), [*StorageDeleteResponse*](../classes/grpc.storage.storagedeleteresponse-1.md)\>

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:12

___

### read

• **read**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*StorageReadRequest*](../classes/grpc.storage.storagereadrequest-1.md), [*StorageReadResponse*](../classes/grpc.storage.storagereadresponse-1.md)\>

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:10

___

### write

• **write**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*StorageWriteRequest*](../classes/grpc.storage.storagewriterequest-1.md), [*StorageWriteResponse*](../classes/grpc.storage.storagewriteresponse-1.md)\>

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:11
