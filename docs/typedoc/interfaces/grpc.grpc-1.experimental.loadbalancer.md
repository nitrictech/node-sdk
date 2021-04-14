[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / LoadBalancer

# Interface: LoadBalancer

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).LoadBalancer

Tracks one or more connected subchannels and determines which subchannel
each request should use.

## Implemented by

* [*ChildLoadBalancerHandler*](../classes/grpc.grpc-1.experimental.childloadbalancerhandler.md)

## Table of contents

### Methods

- [destroy](grpc.grpc-1.experimental.loadbalancer.md#destroy)
- [exitIdle](grpc.grpc-1.experimental.loadbalancer.md#exitidle)
- [getTypeName](grpc.grpc-1.experimental.loadbalancer.md#gettypename)
- [resetBackoff](grpc.grpc-1.experimental.loadbalancer.md#resetbackoff)
- [updateAddressList](grpc.grpc-1.experimental.loadbalancer.md#updateaddresslist)

## Methods

### destroy

▸ **destroy**(): *void*

The load balancer unrefs all of its subchannels and stops calling methods
of its channel control helper.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:60

___

### exitIdle

▸ **exitIdle**(): *void*

If the load balancer is currently in the IDLE state, start connecting.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:49

___

### getTypeName

▸ **getTypeName**(): *string*

Get the type name for this load balancer type. Must be constant across an
entire load balancer implementation class and must match the name that the
balancer implementation class was registered with.

**Returns:** *string*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:66

___

### resetBackoff

▸ **resetBackoff**(): *void*

If the load balancer is currently in the CONNECTING or TRANSIENT_FAILURE
state, reset the current connection backoff timeout to its base value and
transition to CONNECTING if in TRANSIENT_FAILURE.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:55

___

### updateAddressList

▸ **updateAddressList**(`addressList`: [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress)[], `lbConfig`: [*LoadBalancingConfig*](grpc.grpc-1.experimental.loadbalancingconfig.md), `attributes`: { [key: string]: *unknown*;  }): *void*

Gives the load balancer a new list of addresses to start connecting to.
The load balancer will start establishing connections with the new list,
but will continue using any existing connections until the new connections
are established

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`addressList` | [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress)[] | The new list of addresses to connect to   |
`lbConfig` | [*LoadBalancingConfig*](grpc.grpc-1.experimental.loadbalancingconfig.md) | The load balancing config object from the service config,     if one was provided    |
`attributes` | *object* | - |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:43
