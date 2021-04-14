[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / InterceptorOptions

# Interface: InterceptorOptions

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).InterceptorOptions

## Hierarchy

* [*CallOptions*](grpc.grpc-1.calloptions.md)

  ↳ **InterceptorOptions**

## Table of contents

### Properties

- [credentials](grpc.grpc-1.interceptoroptions.md#credentials)
- [deadline](grpc.grpc-1.interceptoroptions.md#deadline)
- [host](grpc.grpc-1.interceptoroptions.md#host)
- [interceptor\_providers](grpc.grpc-1.interceptoroptions.md#interceptor_providers)
- [interceptors](grpc.grpc-1.interceptoroptions.md#interceptors)
- [method\_definition](grpc.grpc-1.interceptoroptions.md#method_definition)
- [parent](grpc.grpc-1.interceptoroptions.md#parent)
- [propagate\_flags](grpc.grpc-1.interceptoroptions.md#propagate_flags)

## Properties

### credentials

• `Optional` **credentials**: [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md)

Inherited from: [CallOptions](grpc.grpc-1.calloptions.md).[credentials](grpc.grpc-1.calloptions.md#credentials)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:24

___

### deadline

• `Optional` **deadline**: [*Deadline*](../modules/grpc.grpc-1.md#deadline)

Inherited from: [CallOptions](grpc.grpc-1.calloptions.md).[deadline](grpc.grpc-1.calloptions.md#deadline)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:20

___

### host

• `Optional` **host**: *string*

Inherited from: [CallOptions](grpc.grpc-1.calloptions.md).[host](grpc.grpc-1.calloptions.md#host)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:21

___

### interceptor\_providers

• `Optional` **interceptor\_providers**: [*InterceptorProvider*](grpc.grpc-1.interceptorprovider.md)[]

Inherited from: [CallOptions](grpc.grpc-1.calloptions.md).[interceptor_providers](grpc.grpc-1.calloptions.md#interceptor_providers)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:26

___

### interceptors

• `Optional` **interceptors**: [*Interceptor*](grpc.grpc-1.interceptor.md)[]

Inherited from: [CallOptions](grpc.grpc-1.calloptions.md).[interceptors](grpc.grpc-1.calloptions.md#interceptors)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:25

___

### method\_definition

• **method\_definition**: *ClientMethodDefinition*<any, any\>

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:58

___

### parent

• `Optional` **parent**: [*ServerUnaryCall*](../modules/grpc.grpc-1.md#serverunarycall)<any, any\> \| [*ServerReadableStream*](../modules/grpc.grpc-1.md#serverreadablestream)<any, any\> \| [*ServerWritableStream*](../modules/grpc.grpc-1.md#serverwritablestream)<any, any\> \| [*ServerDuplexStream*](../modules/grpc.grpc-1.md#serverduplexstream)<any, any\>

Inherited from: [CallOptions](grpc.grpc-1.calloptions.md).[parent](grpc.grpc-1.calloptions.md#parent)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:22

___

### propagate\_flags

• `Optional` **propagate\_flags**: *number*

Inherited from: [CallOptions](grpc.grpc-1.calloptions.md).[propagate_flags](grpc.grpc-1.calloptions.md#propagate_flags)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:23
