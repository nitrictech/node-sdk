[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / CallProperties

# Interface: CallProperties<RequestType, ResponseType\>

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).CallProperties

Client

## Type parameters

Name |
:------ |
`RequestType` |
`ResponseType` |

## Table of contents

### Properties

- [argument](grpc.grpc-1.callproperties.md#argument)
- [call](grpc.grpc-1.callproperties.md#call)
- [callOptions](grpc.grpc-1.callproperties.md#calloptions)
- [callback](grpc.grpc-1.callproperties.md#callback)
- [channel](grpc.grpc-1.callproperties.md#channel)
- [metadata](grpc.grpc-1.callproperties.md#metadata)
- [methodDefinition](grpc.grpc-1.callproperties.md#methoddefinition)

## Properties

### argument

• `Optional` **argument**: RequestType

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:29

___

### call

• **call**: SurfaceCall

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:31

___

### callOptions

• **callOptions**: [*CallOptions*](grpc.grpc-1.calloptions.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:34

___

### callback

• `Optional` **callback**: [*requestCallback*](grpc.grpc-1.requestcallback.md)<ResponseType\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:35

___

### channel

• **channel**: [*ChannelInterface*](grpc.grpc-1.channelinterface.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:32

___

### metadata

• **metadata**: [*Metadata*](../classes/grpc.grpc-1.metadata.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:30

___

### methodDefinition

• **methodDefinition**: *ClientMethodDefinition*<RequestType, ResponseType\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:33
