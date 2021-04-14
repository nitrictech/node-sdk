[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / Channel

# Class: Channel

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).Channel

Client

## Implements

* [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.channel.md#constructor)

### Properties

- [callRefTimer](grpc.grpc-1.channel.md#callreftimer)
- [connectivityState](grpc.grpc-1.channel.md#connectivitystate)
- [connectivityStateWatchers](grpc.grpc-1.channel.md#connectivitystatewatchers)
- [credentials](grpc.grpc-1.channel.md#credentials)
- [currentPicker](grpc.grpc-1.channel.md#currentpicker)
- [defaultAuthority](grpc.grpc-1.channel.md#defaultauthority)
- [filterStackFactory](grpc.grpc-1.channel.md#filterstackfactory)
- [options](grpc.grpc-1.channel.md#options)
- [pickQueue](grpc.grpc-1.channel.md#pickqueue)
- [pushPick](grpc.grpc-1.channel.md#pushpick)
- [removeConnectivityStateWatcher](grpc.grpc-1.channel.md#removeconnectivitystatewatcher)
- [resolvingLoadBalancer](grpc.grpc-1.channel.md#resolvingloadbalancer)
- [subchannelPool](grpc.grpc-1.channel.md#subchannelpool)
- [target](grpc.grpc-1.channel.md#target)
- [tryPick](grpc.grpc-1.channel.md#trypick)
- [updateState](grpc.grpc-1.channel.md#updatestate)

### Methods

- [\_startCallStream](grpc.grpc-1.channel.md#_startcallstream)
- [close](grpc.grpc-1.channel.md#close)
- [createCall](grpc.grpc-1.channel.md#createcall)
- [getConnectivityState](grpc.grpc-1.channel.md#getconnectivitystate)
- [getTarget](grpc.grpc-1.channel.md#gettarget)
- [watchConnectivityState](grpc.grpc-1.channel.md#watchconnectivitystate)

## Constructors

### constructor

\+ **new Channel**(`target`: *string*, `credentials`: [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md), `options`: [*ChannelOptions*](../interfaces/grpc.grpc-1.channeloptions.md)): [*Channel*](grpc.grpc-1.channel.md)

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *string* |
`credentials` | [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md) |
`options` | [*ChannelOptions*](../interfaces/grpc.grpc-1.channeloptions.md) |

**Returns:** [*Channel*](grpc.grpc-1.channel.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:80

## Properties

### callRefTimer

• `Private` **callRefTimer**: *any*

This timer does not do anything on its own. Its purpose is to hold the
event loop open while there are any pending calls for the channel that
have not yet been assigned to specific subchannels. In other words,
the invariant is that callRefTimer is reffed if and only if pickQueue
is non-empty.

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:80

___

### connectivityState

• `Private` **connectivityState**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:66

___

### connectivityStateWatchers

• `Private` **connectivityStateWatchers**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:69

___

### credentials

• `Private` `Readonly` **credentials**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:62

___

### currentPicker

• `Private` **currentPicker**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:67

___

### defaultAuthority

• `Private` **defaultAuthority**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:70

___

### filterStackFactory

• `Private` **filterStackFactory**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:71

___

### options

• `Private` `Readonly` **options**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:63

___

### pickQueue

• `Private` **pickQueue**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:68

___

### pushPick

• `Private` **pushPick**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:82

___

### removeConnectivityStateWatcher

• `Private` **removeConnectivityStateWatcher**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:91

___

### resolvingLoadBalancer

• `Private` **resolvingLoadBalancer**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:64

___

### subchannelPool

• `Private` **subchannelPool**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:65

___

### target

• `Private` **target**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:72

___

### tryPick

• `Private` **tryPick**: *any*

Check the picker output for the given call and corresponding metadata,
and take any relevant actions. Should not be called while iterating
over pickQueue.

**`param`** 

**`param`** 

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:90

___

### updateState

• `Private` **updateState**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:92

## Methods

### \_startCallStream

▸ **_startCallStream**(`stream`: *Http2CallStream*, `metadata`: [*Metadata*](grpc.grpc-1.metadata.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`stream` | *Http2CallStream* |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:93

___

### close

▸ **close**(): *void*

Close the channel. This has the same functionality as the existing
grpc.Client.prototype.close

**Returns:** *void*

Implementation of: [ChannelInterface](../interfaces/grpc.grpc-1.channelinterface.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:94

___

### createCall

▸ **createCall**(`method`: *string*, `deadline`: [*Deadline*](../modules/grpc.grpc-1.md#deadline), `host`: *string*, `parentCall`: ServerSurfaceCall, `propagateFlags`: *number*): [*CallStream*](../interfaces/grpc.grpc-1.experimental.callstream.md)

Create a call object. Call is an opaque type that is used by the Client
class. This function is called by the gRPC library when starting a
request. Implementers should return an instance of Call that is returned
from calling createCall on an instance of the provided Channel class.

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`deadline` | [*Deadline*](../modules/grpc.grpc-1.md#deadline) |
`host` | *string* |
`parentCall` | ServerSurfaceCall |
`propagateFlags` | *number* |

**Returns:** [*CallStream*](../interfaces/grpc.grpc-1.experimental.callstream.md)

Implementation of: [ChannelInterface](../interfaces/grpc.grpc-1.channelinterface.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:98

___

### getConnectivityState

▸ **getConnectivityState**(`tryToConnect`: *boolean*): [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md)

Get the channel's current connectivity state. This method is here mainly
because it is in the existing internal Channel class, and there isn't
another good place to put it.

#### Parameters:

Name | Type |
:------ | :------ |
`tryToConnect` | *boolean* |

**Returns:** [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md)

Implementation of: [ChannelInterface](../interfaces/grpc.grpc-1.channelinterface.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:96

___

### getTarget

▸ **getTarget**(): *string*

Return the target that this channel connects to

**Returns:** *string*

Implementation of: [ChannelInterface](../interfaces/grpc.grpc-1.channelinterface.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:95

___

### watchConnectivityState

▸ **watchConnectivityState**(`currentState`: [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md), `deadline`: [*Deadline*](../modules/grpc.grpc-1.md#deadline), `callback`: (`error?`: Error) => *void*): *void*

Watch for connectivity state changes. This is also here mainly because
it is in the existing external Channel class.

#### Parameters:

Name | Type |
:------ | :------ |
`currentState` | [*connectivityState*](../enums/grpc.grpc-1.connectivitystate.md) |
`deadline` | [*Deadline*](../modules/grpc.grpc-1.md#deadline) |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Implementation of: [ChannelInterface](../interfaces/grpc.grpc-1.channelinterface.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel.d.ts:97
