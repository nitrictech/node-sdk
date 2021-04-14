[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / Filter

# Interface: Filter

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).Filter

Filter classes represent related per-call logic and state that is primarily
used to modify incoming and outgoing data

## Implemented by

* [*BaseFilter*](../classes/grpc.grpc-1.experimental.basefilter.md)

## Table of contents

### Methods

- [receiveMessage](grpc.grpc-1.experimental.filter.md#receivemessage)
- [receiveMetadata](grpc.grpc-1.experimental.filter.md#receivemetadata)
- [receiveTrailers](grpc.grpc-1.experimental.filter.md#receivetrailers)
- [sendMessage](grpc.grpc-1.experimental.filter.md#sendmessage)
- [sendMetadata](grpc.grpc-1.experimental.filter.md#sendmetadata)

## Methods

### receiveMessage

▸ **receiveMessage**(`message`: *Promise*<Buffer\>): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Promise*<Buffer\> |

**Returns:** *Promise*<Buffer\>

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:12

___

### receiveMetadata

▸ **receiveMetadata**(`metadata`: [*Metadata*](../classes/grpc.grpc-1.metadata.md)): [*Metadata*](../classes/grpc.grpc-1.metadata.md)

#### Parameters:

Name | Type |
:------ | :------ |
`metadata` | [*Metadata*](../classes/grpc.grpc-1.metadata.md) |

**Returns:** [*Metadata*](../classes/grpc.grpc-1.metadata.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:10

___

### receiveTrailers

▸ **receiveTrailers**(`status`: [*StatusObject*](grpc.grpc-1.statusobject.md)): [*StatusObject*](grpc.grpc-1.statusobject.md)

#### Parameters:

Name | Type |
:------ | :------ |
`status` | [*StatusObject*](grpc.grpc-1.statusobject.md) |

**Returns:** [*StatusObject*](grpc.grpc-1.statusobject.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:13

___

### sendMessage

▸ **sendMessage**(`message`: *Promise*<WriteObject\>): *Promise*<WriteObject\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Promise*<WriteObject\> |

**Returns:** *Promise*<WriteObject\>

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:11

___

### sendMetadata

▸ **sendMetadata**(`metadata`: *Promise*<[*Metadata*](../classes/grpc.grpc-1.metadata.md)\>): *Promise*<[*Metadata*](../classes/grpc.grpc-1.metadata.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`metadata` | *Promise*<[*Metadata*](../classes/grpc.grpc-1.metadata.md)\> |

**Returns:** *Promise*<[*Metadata*](../classes/grpc.grpc-1.metadata.md)\>

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:9
