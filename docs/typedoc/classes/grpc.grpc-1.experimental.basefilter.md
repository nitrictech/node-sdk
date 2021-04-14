[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / BaseFilter

# Class: BaseFilter

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).BaseFilter

## Implements

* [*Filter*](../interfaces/grpc.grpc-1.experimental.filter.md)

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.experimental.basefilter.md#constructor)

### Methods

- [receiveMessage](grpc.grpc-1.experimental.basefilter.md#receivemessage)
- [receiveMetadata](grpc.grpc-1.experimental.basefilter.md#receivemetadata)
- [receiveTrailers](grpc.grpc-1.experimental.basefilter.md#receivetrailers)
- [sendMessage](grpc.grpc-1.experimental.basefilter.md#sendmessage)
- [sendMetadata](grpc.grpc-1.experimental.basefilter.md#sendmetadata)

## Constructors

### constructor

\+ **new BaseFilter**(): [*BaseFilter*](grpc.grpc-1.experimental.basefilter.md)

**Returns:** [*BaseFilter*](grpc.grpc-1.experimental.basefilter.md)

## Methods

### receiveMessage

▸ **receiveMessage**(`message`: *Promise*<Buffer\>): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Promise*<Buffer\> |

**Returns:** *Promise*<Buffer\>

Implementation of: [Filter](../interfaces/grpc.grpc-1.experimental.filter.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:19

___

### receiveMetadata

▸ **receiveMetadata**(`metadata`: [*Metadata*](grpc.grpc-1.metadata.md)): [*Metadata*](grpc.grpc-1.metadata.md)

#### Parameters:

Name | Type |
:------ | :------ |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |

**Returns:** [*Metadata*](grpc.grpc-1.metadata.md)

Implementation of: [Filter](../interfaces/grpc.grpc-1.experimental.filter.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:17

___

### receiveTrailers

▸ **receiveTrailers**(`status`: [*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md)): [*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md)

#### Parameters:

Name | Type |
:------ | :------ |
`status` | [*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md) |

**Returns:** [*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md)

Implementation of: [Filter](../interfaces/grpc.grpc-1.experimental.filter.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:20

___

### sendMessage

▸ **sendMessage**(`message`: *Promise*<WriteObject\>): *Promise*<WriteObject\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Promise*<WriteObject\> |

**Returns:** *Promise*<WriteObject\>

Implementation of: [Filter](../interfaces/grpc.grpc-1.experimental.filter.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:18

___

### sendMetadata

▸ **sendMetadata**(`metadata`: *Promise*<[*Metadata*](grpc.grpc-1.metadata.md)\>): *Promise*<[*Metadata*](grpc.grpc-1.metadata.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`metadata` | *Promise*<[*Metadata*](grpc.grpc-1.metadata.md)\> |

**Returns:** *Promise*<[*Metadata*](grpc.grpc-1.metadata.md)\>

Implementation of: [Filter](../interfaces/grpc.grpc-1.experimental.filter.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter.d.ts:16
