[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / ChildLoadBalancerHandler

# Class: ChildLoadBalancerHandler

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).ChildLoadBalancerHandler

## Implements

* [*LoadBalancer*](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.experimental.childloadbalancerhandler.md#constructor)

### Properties

- [ChildPolicyHelper](grpc.grpc-1.experimental.childloadbalancerhandler.md#childpolicyhelper)
- [channelControlHelper](grpc.grpc-1.experimental.childloadbalancerhandler.md#channelcontrolhelper)
- [currentChild](grpc.grpc-1.experimental.childloadbalancerhandler.md#currentchild)
- [pendingChild](grpc.grpc-1.experimental.childloadbalancerhandler.md#pendingchild)

### Methods

- [destroy](grpc.grpc-1.experimental.childloadbalancerhandler.md#destroy)
- [exitIdle](grpc.grpc-1.experimental.childloadbalancerhandler.md#exitidle)
- [getTypeName](grpc.grpc-1.experimental.childloadbalancerhandler.md#gettypename)
- [resetBackoff](grpc.grpc-1.experimental.childloadbalancerhandler.md#resetbackoff)
- [updateAddressList](grpc.grpc-1.experimental.childloadbalancerhandler.md#updateaddresslist)

## Constructors

### constructor

\+ **new ChildLoadBalancerHandler**(`channelControlHelper`: [*ChannelControlHelper*](../interfaces/grpc.grpc-1.experimental.channelcontrolhelper.md)): [*ChildLoadBalancerHandler*](grpc.grpc-1.experimental.childloadbalancerhandler.md)

#### Parameters:

Name | Type |
:------ | :------ |
`channelControlHelper` | [*ChannelControlHelper*](../interfaces/grpc.grpc-1.experimental.channelcontrolhelper.md) |

**Returns:** [*ChildLoadBalancerHandler*](grpc.grpc-1.experimental.childloadbalancerhandler.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:7

## Properties

### ChildPolicyHelper

• `Private` **ChildPolicyHelper**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:7

___

### channelControlHelper

• `Private` `Readonly` **channelControlHelper**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:4

___

### currentChild

• `Private` **currentChild**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:5

___

### pendingChild

• `Private` **pendingChild**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:6

## Methods

### destroy

▸ **destroy**(): *void*

The load balancer unrefs all of its subchannels and stops calling methods
of its channel control helper.

**Returns:** *void*

Implementation of: [LoadBalancer](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:20

___

### exitIdle

▸ **exitIdle**(): *void*

If the load balancer is currently in the IDLE state, start connecting.

**Returns:** *void*

Implementation of: [LoadBalancer](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:18

___

### getTypeName

▸ **getTypeName**(): *string*

Get the type name for this load balancer type. Must be constant across an
entire load balancer implementation class and must match the name that the
balancer implementation class was registered with.

**Returns:** *string*

Implementation of: [LoadBalancer](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:21

___

### resetBackoff

▸ **resetBackoff**(): *void*

If the load balancer is currently in the CONNECTING or TRANSIENT_FAILURE
state, reset the current connection backoff timeout to its base value and
transition to CONNECTING if in TRANSIENT_FAILURE.

**Returns:** *void*

Implementation of: [LoadBalancer](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:19

___

### updateAddressList

▸ **updateAddressList**(`addressList`: [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress)[], `lbConfig`: [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md), `attributes`: { [key: string]: *unknown*;  }): *void*

Prerequisites: lbConfig !== null and lbConfig.name is registered

#### Parameters:

Name | Type |
:------ | :------ |
`addressList` | [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress)[] |
`lbConfig` | [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md) |
`attributes` | *object* |

**Returns:** *void*

Implementation of: [LoadBalancer](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.d.ts:15
