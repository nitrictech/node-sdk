[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / InterceptingCall

# Class: InterceptingCall

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).InterceptingCall

## Implements

* *InterceptingCallInterface*

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.interceptingcall.md#constructor)

### Properties

- [nextCall](grpc.grpc-1.interceptingcall.md#nextcall)
- [pendingHalfClose](grpc.grpc-1.interceptingcall.md#pendinghalfclose)
- [processingMessage](grpc.grpc-1.interceptingcall.md#processingmessage)
- [requester](grpc.grpc-1.interceptingcall.md#requester)

### Methods

- [cancelWithStatus](grpc.grpc-1.interceptingcall.md#cancelwithstatus)
- [getPeer](grpc.grpc-1.interceptingcall.md#getpeer)
- [halfClose](grpc.grpc-1.interceptingcall.md#halfclose)
- [sendMessage](grpc.grpc-1.interceptingcall.md#sendmessage)
- [sendMessageWithContext](grpc.grpc-1.interceptingcall.md#sendmessagewithcontext)
- [setCredentials](grpc.grpc-1.interceptingcall.md#setcredentials)
- [start](grpc.grpc-1.interceptingcall.md#start)
- [startRead](grpc.grpc-1.interceptingcall.md#startread)

## Constructors

### constructor

\+ **new InterceptingCall**(`nextCall`: InterceptingCallInterface, `requester?`: *Partial*<FullRequester\>): [*InterceptingCall*](grpc.grpc-1.interceptingcall.md)

#### Parameters:

Name | Type |
:------ | :------ |
`nextCall` | InterceptingCallInterface |
`requester?` | *Partial*<FullRequester\> |

**Returns:** [*InterceptingCall*](grpc.grpc-1.interceptingcall.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:85

## Properties

### nextCall

• `Private` **nextCall**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:71

___

### pendingHalfClose

• `Private` **pendingHalfClose**: *any*

Indicates that a status was received but could not be propagated because
a message was still being processed.

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:85

___

### processingMessage

• `Private` **processingMessage**: *any*

Indicates that a message has been passed to the listener's onReceiveMessage
method it has not been passed to the corresponding next callback

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:80

___

### requester

• `Private` **requester**: *any*

The requester that this InterceptingCall uses to modify outgoing operations

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:75

## Methods

### cancelWithStatus

▸ **cancelWithStatus**(`status`: [*status*](../enums/grpc.grpc-1.status.md), `details`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`status` | [*status*](../enums/grpc.grpc-1.status.md) |
`details` | *string* |

**Returns:** *void*

Implementation of: InterceptingCallInterface.cancelWithStatus

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:87

___

### getPeer

▸ **getPeer**(): *string*

**Returns:** *string*

Implementation of: InterceptingCallInterface.getPeer

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:88

___

### halfClose

▸ **halfClose**(): *void*

**Returns:** *void*

Implementation of: InterceptingCallInterface.halfClose

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:93

___

### sendMessage

▸ **sendMessage**(`message`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *any* |

**Returns:** *void*

Implementation of: InterceptingCallInterface.sendMessage

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:91

___

### sendMessageWithContext

▸ **sendMessageWithContext**(`context`: MessageContext, `message`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`context` | MessageContext |
`message` | *any* |

**Returns:** *void*

Implementation of: InterceptingCallInterface.sendMessageWithContext

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:90

___

### setCredentials

▸ **setCredentials**(`credentials`: [*CallCredentials*](grpc.grpc-1.callcredentials.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`credentials` | [*CallCredentials*](grpc.grpc-1.callcredentials.md) |

**Returns:** *void*

Implementation of: InterceptingCallInterface.setCredentials

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:94

___

### start

▸ **start**(`metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `interceptingListener?`: *Partial*<InterceptingListener\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`interceptingListener?` | *Partial*<InterceptingListener\> |

**Returns:** *void*

Implementation of: InterceptingCallInterface.start

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:89

___

### startRead

▸ **startRead**(): *void*

**Returns:** *void*

Implementation of: InterceptingCallInterface.startRead

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:92
