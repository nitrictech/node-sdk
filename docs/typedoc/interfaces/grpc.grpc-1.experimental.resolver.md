[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / Resolver

# Interface: Resolver

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).Resolver

A resolver class that handles one or more of the name syntax schemes defined
in the [gRPC Name Resolution document](https://github.com/grpc/grpc/blob/master/doc/naming.md)

## Table of contents

### Methods

- [destroy](grpc.grpc-1.experimental.resolver.md#destroy)
- [updateResolution](grpc.grpc-1.experimental.resolver.md#updateresolution)

## Methods

### destroy

▸ **destroy**(): *void*

Destroy the resolver. Should be called when the owning channel shuts down.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/resolver.d.ts:44

___

### updateResolution

▸ **updateResolution**(): *void*

Indicates that the caller wants new name resolution data. Calling this
function may eventually result in calling one of the `ResolverListener`
functions, but that is not guaranteed. Those functions will never be
called synchronously with the constructor or updateResolution.

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/resolver.d.ts:40
