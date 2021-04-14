[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / CallStream

# Interface: CallStream

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).CallStream

## Table of contents

### Methods

- [cancelWithStatus](grpc.grpc-1.experimental.callstream.md#cancelwithstatus)
- [getCredentials](grpc.grpc-1.experimental.callstream.md#getcredentials)
- [getDeadline](grpc.grpc-1.experimental.callstream.md#getdeadline)
- [getHost](grpc.grpc-1.experimental.callstream.md#gethost)
- [getMethod](grpc.grpc-1.experimental.callstream.md#getmethod)
- [getPeer](grpc.grpc-1.experimental.callstream.md#getpeer)
- [halfClose](grpc.grpc-1.experimental.callstream.md#halfclose)
- [sendMessageWithContext](grpc.grpc-1.experimental.callstream.md#sendmessagewithcontext)
- [setCredentials](grpc.grpc-1.experimental.callstream.md#setcredentials)
- [start](grpc.grpc-1.experimental.callstream.md#start)
- [startRead](grpc.grpc-1.experimental.callstream.md#startread)

## Methods

### cancelWithStatus

▸ **cancelWithStatus**(`status`: [*status*](../enums/grpc.grpc-1.status.md), `details`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`status` | [*status*](../enums/grpc.grpc-1.status.md) |
`details` | *string* |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:75

___

### getCredentials

▸ **getCredentials**(): [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md)

**Returns:** [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:82

___

### getDeadline

▸ **getDeadline**(): [*Deadline*](../modules/grpc.grpc-1.md#deadline)

**Returns:** [*Deadline*](../modules/grpc.grpc-1.md#deadline)

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:81

___

### getHost

▸ **getHost**(): *string*

**Returns:** *string*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:85

___

### getMethod

▸ **getMethod**(): *string*

**Returns:** *string*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:84

___

### getPeer

▸ **getPeer**(): *string*

**Returns:** *string*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:76

___

### halfClose

▸ **halfClose**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:80

___

### sendMessageWithContext

▸ **sendMessageWithContext**(`context`: MessageContext, `message`: *Buffer*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`context` | MessageContext |
`message` | *Buffer* |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:78

___

### setCredentials

▸ **setCredentials**(`credentials`: [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`credentials` | [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md) |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:83

___

### start

▸ **start**(`metadata`: [*Metadata*](../classes/grpc.grpc-1.metadata.md), `listener`: InterceptingListener): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`metadata` | [*Metadata*](../classes/grpc.grpc-1.metadata.md) |
`listener` | InterceptingListener |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:77

___

### startRead

▸ **startRead**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:79
