[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / ChannelInterface

# Interface: ChannelInterface

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).ChannelInterface

Client

## Implemented by

* [*Channel*](../classes/grpc.grpc-1.channel.md)

## Table of contents

### Methods

- [close](grpc.grpc-1.channelinterface.md#close)
- [createCall](grpc.grpc-1.channelinterface.md#createcall)
- [getConnectivityState](grpc.grpc-1.channelinterface.md#getconnectivitystate)
- [getTarget](grpc.grpc-1.channelinterface.md#gettarget)
- [watchConnectivityState](grpc.grpc-1.channelinterface.md#watchconnectivitystate)

## Methods

### close

▸ **close**(): *void*

Close the channel. This has the same functionality as the existing
grpc.Client.prototype.close

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:22

___

### createCall

▸ **createCall**(`method`: *string*, `deadline`: [*Deadline*](../modules/grpc.grpc-1.md#deadline), `host`: *string*, `parentCall`: ServerSurfaceCall, `propagateFlags`: *number*): [*CallStream*](grpc.grpc-1.experimental.callstream.md)

Create a call object. Call is an opaque type that is used by the Client
class. This function is called by the gRPC library when starting a
request. Implementers should return an instance of Call that is returned
from calling createCall on an instance of the provided Channel class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`method` | *string* | The full method string to request.   |
`deadline` | [*Deadline*](../modules/grpc.grpc-1.md#deadline) | The call deadline   |
`host` | *string* | A host string override for making the request   |
`parentCall` | ServerSurfaceCall | A server call to propagate some information from   |
`propagateFlags` | *number* | A bitwise combination of elements of grpc.propagate     that indicates what information to propagate from parentCall.    |

**Returns:** [*CallStream*](grpc.grpc-1.experimental.callstream.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:59

___

### getConnectivityState

▸ **getConnectivityState**(`tryToConnect`: *boolean*): [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md)

Get the channel's current connectivity state. This method is here mainly
because it is in the existing internal Channel class, and there isn't
another good place to put it.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tryToConnect` | *boolean* | If true, the channel will start connecting if it is     idle. Otherwise, idle channels will only start connecting when a     call starts.    |

**Returns:** [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:35

___

### getTarget

▸ **getTarget**(): *string*

Return the target that this channel connects to

**Returns:** *string*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:26

___

### watchConnectivityState

▸ **watchConnectivityState**(`currentState`: [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md), `deadline`: [*Deadline*](../modules/grpc.grpc-1.md#deadline), `callback`: (`error?`: Error) => *void*): *void*

Watch for connectivity state changes. This is also here mainly because
it is in the existing external Channel class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`currentState` | [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md) | The state to watch for transitions from. This should     always be populated by calling getConnectivityState immediately     before.   |
`deadline` | [*Deadline*](../modules/grpc.grpc-1.md#deadline) | A deadline for waiting for a state change   |
`callback` | (`error?`: Error) => *void* | Called with no error when a state change, or with an     error if the deadline passes without a state change.    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:46
