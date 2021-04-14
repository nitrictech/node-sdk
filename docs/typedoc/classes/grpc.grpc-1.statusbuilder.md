[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / StatusBuilder

# Class: StatusBuilder

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).StatusBuilder

A builder for gRPC status objects.

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.statusbuilder.md#constructor)

### Properties

- [code](grpc.grpc-1.statusbuilder.md#code)
- [details](grpc.grpc-1.statusbuilder.md#details)
- [metadata](grpc.grpc-1.statusbuilder.md#metadata)

### Methods

- [build](grpc.grpc-1.statusbuilder.md#build)
- [withCode](grpc.grpc-1.statusbuilder.md#withcode)
- [withDetails](grpc.grpc-1.statusbuilder.md#withdetails)
- [withMetadata](grpc.grpc-1.statusbuilder.md#withmetadata)

## Constructors

### constructor

\+ **new StatusBuilder**(): [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

**Returns:** [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:10

## Properties

### code

• `Private` **code**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:8

___

### details

• `Private` **details**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:9

___

### metadata

• `Private` **metadata**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:10

## Methods

### build

▸ **build**(): *Partial*<[*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md)\>

Builds the status object.

**Returns:** *Partial*<[*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md)\>

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:27

___

### withCode

▸ **withCode**(`code`: [*status*](../enums/grpc.grpc-1.status.md)): [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

Adds a status code to the builder.

#### Parameters:

Name | Type |
:------ | :------ |
`code` | [*status*](../enums/grpc.grpc-1.status.md) |

**Returns:** [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:15

___

### withDetails

▸ **withDetails**(`details`: *string*): [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

Adds details to the builder.

#### Parameters:

Name | Type |
:------ | :------ |
`details` | *string* |

**Returns:** [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:19

___

### withMetadata

▸ **withMetadata**(`metadata`: [*Metadata*](grpc.grpc-1.metadata.md)): [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

Adds metadata to the builder.

#### Parameters:

Name | Type |
:------ | :------ |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |

**Returns:** [*StatusBuilder*](grpc.grpc-1.statusbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/status-builder.d.ts:23
