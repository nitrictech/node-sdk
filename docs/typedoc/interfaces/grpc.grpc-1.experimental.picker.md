[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / Picker

# Interface: Picker

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).Picker

A proxy object representing the momentary state of a load balancer. Picks
subchannels or returns other information based on that state. Should be
replaced every time the load balancer changes state.

## Implemented by

* [*UnavailablePicker*](../classes/grpc.grpc-1.experimental.unavailablepicker.md)

## Table of contents

### Methods

- [pick](grpc.grpc-1.experimental.picker.md#pick)

## Methods

### pick

▸ **pick**(`pickArgs`: [*PickArgs*](grpc.grpc-1.experimental.pickargs.md)): [*PickResult*](grpc.grpc-1.experimental.pickresult.md)

#### Parameters:

Name | Type |
:------ | :------ |
`pickArgs` | [*PickArgs*](grpc.grpc-1.experimental.pickargs.md) |

**Returns:** [*PickResult*](grpc.grpc-1.experimental.pickresult.md)

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:70
