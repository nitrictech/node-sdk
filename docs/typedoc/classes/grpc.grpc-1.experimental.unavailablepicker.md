[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / UnavailablePicker

# Class: UnavailablePicker

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).UnavailablePicker

A standard picker representing a load balancer in the TRANSIENT_FAILURE
state. Always responds to every pick request with an UNAVAILABLE status.

## Implements

* [*Picker*](../interfaces/grpc.grpc-1.experimental.picker.md)

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.experimental.unavailablepicker.md#constructor)

### Properties

- [status](grpc.grpc-1.experimental.unavailablepicker.md#status)

### Methods

- [pick](grpc.grpc-1.experimental.unavailablepicker.md#pick)

## Constructors

### constructor

\+ **new UnavailablePicker**(`status?`: [*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md)): [*UnavailablePicker*](grpc.grpc-1.experimental.unavailablepicker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`status?` | [*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md) |

**Returns:** [*UnavailablePicker*](grpc.grpc-1.experimental.unavailablepicker.md)

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:77

## Properties

### status

• `Private` **status**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:77

## Methods

### pick

▸ **pick**(`pickArgs`: [*PickArgs*](../interfaces/grpc.grpc-1.experimental.pickargs.md)): TransientFailurePickResult

#### Parameters:

Name | Type |
:------ | :------ |
`pickArgs` | [*PickArgs*](../interfaces/grpc.grpc-1.experimental.pickargs.md) |

**Returns:** TransientFailurePickResult

Implementation of: [Picker](../interfaces/grpc.grpc-1.experimental.picker.md)

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:79
