[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / CallOptions

# Interface: CallOptions

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).CallOptions

## Hierarchy

* **CallOptions**

  ↳ [*InterceptorOptions*](grpc.grpc-1.interceptoroptions.md)

## Table of contents

### Properties

- [credentials](grpc.grpc-1.calloptions.md#credentials)
- [deadline](grpc.grpc-1.calloptions.md#deadline)
- [host](grpc.grpc-1.calloptions.md#host)
- [interceptor\_providers](grpc.grpc-1.calloptions.md#interceptor_providers)
- [interceptors](grpc.grpc-1.calloptions.md#interceptors)
- [parent](grpc.grpc-1.calloptions.md#parent)
- [propagate\_flags](grpc.grpc-1.calloptions.md#propagate_flags)

## Properties

### credentials

• `Optional` **credentials**: [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:24

___

### deadline

• `Optional` **deadline**: [*Deadline*](../modules/grpc.grpc-1.md#deadline)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:20

___

### host

• `Optional` **host**: *string*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:21

___

### interceptor\_providers

• `Optional` **interceptor\_providers**: [*InterceptorProvider*](grpc.grpc-1.interceptorprovider.md)[]

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:26

___

### interceptors

• `Optional` **interceptors**: [*Interceptor*](grpc.grpc-1.interceptor.md)[]

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:25

___

### parent

• `Optional` **parent**: [*ServerUnaryCall*](../modules/grpc.grpc-1.md#serverunarycall)<any, any\> \| [*ServerReadableStream*](../modules/grpc.grpc-1.md#serverreadablestream)<any, any\> \| [*ServerWritableStream*](../modules/grpc.grpc-1.md#serverwritablestream)<any, any\> \| [*ServerDuplexStream*](../modules/grpc.grpc-1.md#serverduplexstream)<any, any\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:22

___

### propagate\_flags

• `Optional` **propagate\_flags**: *number*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:23
