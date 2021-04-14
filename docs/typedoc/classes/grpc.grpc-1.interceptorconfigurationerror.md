[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / InterceptorConfigurationError

# Class: InterceptorConfigurationError

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).InterceptorConfigurationError

Error class associated with passing both interceptors and interceptor
providers to a client constructor or as call options.

## Hierarchy

* *Error*

  ↳ **InterceptorConfigurationError**

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.interceptorconfigurationerror.md#constructor)

### Properties

- [message](grpc.grpc-1.interceptorconfigurationerror.md#message)
- [name](grpc.grpc-1.interceptorconfigurationerror.md#name)
- [stack](grpc.grpc-1.interceptorconfigurationerror.md#stack)
- [prepareStackTrace](grpc.grpc-1.interceptorconfigurationerror.md#preparestacktrace)
- [stackTraceLimit](grpc.grpc-1.interceptorconfigurationerror.md#stacktracelimit)

### Methods

- [captureStackTrace](grpc.grpc-1.interceptorconfigurationerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new InterceptorConfigurationError**(`message`: *string*): [*InterceptorConfigurationError*](grpc.grpc-1.interceptorconfigurationerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*InterceptorConfigurationError*](grpc.grpc-1.interceptorconfigurationerror.md)

Overrides: Error.constructor

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:12

## Properties

### message

• **message**: *string*

Inherited from: Error.message

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: Error.name

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Inherited from: Error.stack

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |
`stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Inherited from: Error.prepareStackTrace

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Inherited from: Error.stackTraceLimit

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Inherited from: Error.captureStackTrace

Defined in: node_modules/@types/node/globals.d.ts:4
