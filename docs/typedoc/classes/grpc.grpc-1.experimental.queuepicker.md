[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / QueuePicker

# Class: QueuePicker

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).QueuePicker

A standard picker representing a load balancer in the IDLE or CONNECTING
state. Always responds to every pick request with a QUEUE pick result
indicating that the pick should be tried again with the next `Picker`. Also
reports back to the load balancer that a connection should be established
once any pick is attempted.

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.experimental.queuepicker.md#constructor)

### Properties

- [calledExitIdle](grpc.grpc-1.experimental.queuepicker.md#calledexitidle)
- [loadBalancer](grpc.grpc-1.experimental.queuepicker.md#loadbalancer)

### Methods

- [pick](grpc.grpc-1.experimental.queuepicker.md#pick)

## Constructors

### constructor

\+ **new QueuePicker**(`loadBalancer`: [*LoadBalancer*](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)): [*QueuePicker*](grpc.grpc-1.experimental.queuepicker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`loadBalancer` | [*LoadBalancer*](../interfaces/grpc.grpc-1.experimental.loadbalancer.md) |

**Returns:** [*QueuePicker*](grpc.grpc-1.experimental.queuepicker.md)

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:90

## Properties

### calledExitIdle

• `Private` **calledExitIdle**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:90

___

### loadBalancer

• `Private` **loadBalancer**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:89

## Methods

### pick

▸ **pick**(`pickArgs`: [*PickArgs*](../interfaces/grpc.grpc-1.experimental.pickargs.md)): QueuePickResult

#### Parameters:

Name | Type |
:------ | :------ |
`pickArgs` | [*PickArgs*](../interfaces/grpc.grpc-1.experimental.pickargs.md) |

**Returns:** QueuePickResult

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:92
