[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / BackoffTimeout

# Class: BackoffTimeout

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).BackoffTimeout

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.experimental.backofftimeout.md#constructor)

### Properties

- [callback](grpc.grpc-1.experimental.backofftimeout.md#callback)
- [hasRef](grpc.grpc-1.experimental.backofftimeout.md#hasref)
- [initialDelay](grpc.grpc-1.experimental.backofftimeout.md#initialdelay)
- [jitter](grpc.grpc-1.experimental.backofftimeout.md#jitter)
- [maxDelay](grpc.grpc-1.experimental.backofftimeout.md#maxdelay)
- [multiplier](grpc.grpc-1.experimental.backofftimeout.md#multiplier)
- [nextDelay](grpc.grpc-1.experimental.backofftimeout.md#nextdelay)
- [running](grpc.grpc-1.experimental.backofftimeout.md#running)
- [timerId](grpc.grpc-1.experimental.backofftimeout.md#timerid)

### Methods

- [isRunning](grpc.grpc-1.experimental.backofftimeout.md#isrunning)
- [ref](grpc.grpc-1.experimental.backofftimeout.md#ref)
- [reset](grpc.grpc-1.experimental.backofftimeout.md#reset)
- [runOnce](grpc.grpc-1.experimental.backofftimeout.md#runonce)
- [stop](grpc.grpc-1.experimental.backofftimeout.md#stop)
- [unref](grpc.grpc-1.experimental.backofftimeout.md#unref)

## Constructors

### constructor

\+ **new BackoffTimeout**(`callback`: () => *void*, `options?`: BackoffOptions): [*BackoffTimeout*](grpc.grpc-1.experimental.backofftimeout.md)

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | () => *void* |
`options?` | BackoffOptions |

**Returns:** [*BackoffTimeout*](grpc.grpc-1.experimental.backofftimeout.md)

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:16

## Properties

### callback

• `Private` **callback**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:8

___

### hasRef

• `Private` **hasRef**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:16

___

### initialDelay

• `Private` **initialDelay**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:9

___

### jitter

• `Private` **jitter**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:12

___

### maxDelay

• `Private` **maxDelay**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:11

___

### multiplier

• `Private` **multiplier**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:10

___

### nextDelay

• `Private` **nextDelay**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:13

___

### running

• `Private` **running**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:15

___

### timerId

• `Private` **timerId**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:14

## Methods

### isRunning

▸ **isRunning**(): *boolean*

**Returns:** *boolean*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:31

___

### ref

▸ **ref**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:32

___

### reset

▸ **reset**(): *void*

Reset the delay time to its initial value.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:30

___

### runOnce

▸ **runOnce**(): *void*

Call the callback after the current amount of delay time

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:21

___

### stop

▸ **stop**(): *void*

Stop the timer. The callback will not be called until `runOnce` is called
again.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:26

___

### unref

▸ **unref**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/backoff-timeout.d.ts:33
