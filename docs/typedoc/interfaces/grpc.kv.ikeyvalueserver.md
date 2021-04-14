[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [kv](../modules/grpc.kv.md) / IKeyValueServer

# Interface: IKeyValueServer

[grpc](../modules/grpc.md).[kv](../modules/grpc.kv.md).IKeyValueServer

## Hierarchy

* [*UntypedServiceImplementation*](grpc.grpc-1.untypedserviceimplementation.md)

  ↳ **IKeyValueServer**

## Table of contents

### Properties

- [delete](grpc.kv.ikeyvalueserver.md#delete)
- [get](grpc.kv.ikeyvalueserver.md#get)
- [put](grpc.kv.ikeyvalueserver.md#put)

## Properties

### delete

• **delete**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*KeyValueDeleteRequest*](../classes/grpc.kv.keyvaluedeleterequest-1.md), [*KeyValueDeleteResponse*](../classes/grpc.kv.keyvaluedeleteresponse-1.md)\>

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:20

___

### get

• **get**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*KeyValueGetRequest*](../classes/grpc.kv.keyvaluegetrequest-1.md), [*KeyValueGetResponse*](../classes/grpc.kv.keyvaluegetresponse-1.md)\>

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:18

___

### put

• **put**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*KeyValuePutRequest*](../classes/grpc.kv.keyvalueputrequest-1.md), [*KeyValuePutResponse*](../classes/grpc.kv.keyvalueputresponse-1.md)\>

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:19
