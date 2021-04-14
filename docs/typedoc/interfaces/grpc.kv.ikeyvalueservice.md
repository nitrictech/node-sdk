[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [kv](../modules/grpc.kv.md) / IKeyValueService

# Interface: IKeyValueService

[grpc](../modules/grpc.md).[kv](../modules/grpc.kv.md).IKeyValueService

## Hierarchy

* [*ServiceDefinition*](../modules/grpc.grpc-1.md#servicedefinition)<[*UntypedServiceImplementation*](grpc.grpc-1.untypedserviceimplementation.md)\>

  ↳ **IKeyValueService**

## Table of contents

### Properties

- [delete](grpc.kv.ikeyvalueservice.md#delete)
- [get](grpc.kv.ikeyvalueservice.md#get)
- [put](grpc.kv.ikeyvalueservice.md#put)

## Properties

### delete

• **delete**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*KeyValueDeleteRequest*](../classes/grpc.kv.keyvaluedeleterequest-1.md), [*KeyValueDeleteResponse*](../classes/grpc.kv.keyvaluedeleteresponse-1.md)\>

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:12

___

### get

• **get**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*KeyValueGetRequest*](../classes/grpc.kv.keyvaluegetrequest-1.md), [*KeyValueGetResponse*](../classes/grpc.kv.keyvaluegetresponse-1.md)\>

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:10

___

### put

• **put**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*KeyValuePutRequest*](../classes/grpc.kv.keyvalueputrequest-1.md), [*KeyValuePutResponse*](../classes/grpc.kv.keyvalueputresponse-1.md)\>

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:11
