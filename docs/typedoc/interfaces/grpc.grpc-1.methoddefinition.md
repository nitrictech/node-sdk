[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / MethodDefinition

# Interface: MethodDefinition<RequestType, ResponseType\>

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).MethodDefinition

## Type parameters

Name |
:------ |
`RequestType` |
`ResponseType` |

## Hierarchy

* *ClientMethodDefinition*<RequestType, ResponseType\>

* *ServerMethodDefinition*<RequestType, ResponseType\>

  ↳ **MethodDefinition**

## Table of contents

### Properties

- [originalName](grpc.grpc-1.methoddefinition.md#originalname)
- [path](grpc.grpc-1.methoddefinition.md#path)
- [requestDeserialize](grpc.grpc-1.methoddefinition.md#requestdeserialize)
- [requestSerialize](grpc.grpc-1.methoddefinition.md#requestserialize)
- [requestStream](grpc.grpc-1.methoddefinition.md#requeststream)
- [responseDeserialize](grpc.grpc-1.methoddefinition.md#responsedeserialize)
- [responseSerialize](grpc.grpc-1.methoddefinition.md#responseserialize)
- [responseStream](grpc.grpc-1.methoddefinition.md#responsestream)

## Properties

### originalName

• `Optional` **originalName**: *string*

Inherited from: ClientMethodDefinition.originalName

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:18

___

### path

• **path**: *string*

Inherited from: ClientMethodDefinition.path

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:13

___

### requestDeserialize

• **requestDeserialize**: [*deserialize*](grpc.grpc-1.deserialize.md)<RequestType\>

Inherited from: ServerMethodDefinition.requestDeserialize

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:25

___

### requestSerialize

• **requestSerialize**: [*serialize*](grpc.grpc-1.serialize.md)<RequestType\>

Inherited from: ClientMethodDefinition.requestSerialize

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:16

___

### requestStream

• **requestStream**: *boolean*

Inherited from: ClientMethodDefinition.requestStream

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:14

___

### responseDeserialize

• **responseDeserialize**: [*deserialize*](grpc.grpc-1.deserialize.md)<ResponseType\>

Inherited from: ClientMethodDefinition.responseDeserialize

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:17

___

### responseSerialize

• **responseSerialize**: [*serialize*](grpc.grpc-1.serialize.md)<ResponseType\>

Inherited from: ServerMethodDefinition.responseSerialize

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:24

___

### responseStream

• **responseStream**: *boolean*

Inherited from: ClientMethodDefinition.responseStream

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:15
