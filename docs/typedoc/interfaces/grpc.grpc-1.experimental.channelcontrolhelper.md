[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / ChannelControlHelper

# Interface: ChannelControlHelper

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).ChannelControlHelper

A collection of functions associated with a channel that a load balancer
can call as necessary.

## Table of contents

### Methods

- [createSubchannel](grpc.grpc-1.experimental.channelcontrolhelper.md#createsubchannel)
- [requestReresolution](grpc.grpc-1.experimental.channelcontrolhelper.md#requestreresolution)
- [updateState](grpc.grpc-1.experimental.channelcontrolhelper.md#updatestate)

## Methods

### createSubchannel

▸ **createSubchannel**(`subchannelAddress`: [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress), `subchannelArgs`: [*ChannelOptions*](grpc.grpc-1.channeloptions.md)): *Subchannel*

Returns a subchannel connected to the specified address.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`subchannelAddress` | [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress) | The address to connect to   |
`subchannelArgs` | [*ChannelOptions*](grpc.grpc-1.channeloptions.md) | Extra channel arguments specified by the load balancer    |

**Returns:** *Subchannel*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:15

___

### requestReresolution

▸ **requestReresolution**(): *void*

Request new data from the resolver.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:27

___

### updateState

▸ **updateState**(`connectivityState`: [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md), `picker`: [*Picker*](grpc.grpc-1.experimental.picker.md)): *void*

Passes a new subchannel picker up to the channel. This is called if either
the connectivity state changes or if a different picker is needed for any
other reason.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`connectivityState` | [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md) | New connectivity state   |
`picker` | [*Picker*](grpc.grpc-1.experimental.picker.md) | New picker    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:23
