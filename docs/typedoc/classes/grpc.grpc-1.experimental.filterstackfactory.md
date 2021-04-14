[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / FilterStackFactory

# Class: FilterStackFactory

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).FilterStackFactory

## Implements

* [*FilterFactory*](../interfaces/grpc.grpc-1.experimental.filterfactory.md)<FilterStack\>

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.experimental.filterstackfactory.md#constructor)

### Properties

- [factories](grpc.grpc-1.experimental.filterstackfactory.md#factories)

### Methods

- [createFilter](grpc.grpc-1.experimental.filterstackfactory.md#createfilter)

## Constructors

### constructor

\+ **new FilterStackFactory**(`factories`: [*FilterFactory*](../interfaces/grpc.grpc-1.experimental.filterfactory.md)<[*Filter*](../interfaces/grpc.grpc-1.experimental.filter.md)\>[]): [*FilterStackFactory*](grpc.grpc-1.experimental.filterstackfactory.md)

#### Parameters:

Name | Type |
:------ | :------ |
`factories` | [*FilterFactory*](../interfaces/grpc.grpc-1.experimental.filterfactory.md)<[*Filter*](../interfaces/grpc.grpc-1.experimental.filter.md)\>[] |

**Returns:** [*FilterStackFactory*](grpc.grpc-1.experimental.filterstackfactory.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter-stack.d.ts:15

## Properties

### factories

• `Private` `Readonly` **factories**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/filter-stack.d.ts:15

## Methods

### createFilter

▸ **createFilter**(`callStream`: [*CallStream*](../interfaces/grpc.grpc-1.experimental.callstream.md)): *FilterStack*

#### Parameters:

Name | Type |
:------ | :------ |
`callStream` | [*CallStream*](../interfaces/grpc.grpc-1.experimental.callstream.md) |

**Returns:** *FilterStack*

Implementation of: [FilterFactory](../interfaces/grpc.grpc-1.experimental.filterfactory.md)

Defined in: node_modules/@grpc/grpc-js/build/src/filter-stack.d.ts:17
