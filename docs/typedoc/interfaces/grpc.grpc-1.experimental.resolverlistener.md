[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / ResolverListener

# Interface: ResolverListener

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).ResolverListener

A listener object passed to the resolver's constructor that provides name
resolution updates back to the resolver's owner.

## Table of contents

### Methods

- [onError](grpc.grpc-1.experimental.resolverlistener.md#onerror)
- [onSuccessfulResolution](grpc.grpc-1.experimental.resolverlistener.md#onsuccessfulresolution)

## Methods

### onError

▸ **onError**(`error`: [*StatusObject*](grpc.grpc-1.statusobject.md)): *void*

Called whenever a name resolution attempt fails.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`error` | [*StatusObject*](grpc.grpc-1.statusobject.md) | Describes how resolution failed    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/resolver.d.ts:27

___

### onSuccessfulResolution

▸ **onSuccessfulResolution**(`addressList`: [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress)[], `serviceConfig`: [*ServiceConfig*](grpc.grpc-1.experimental.serviceconfig.md), `serviceConfigError`: [*StatusObject*](grpc.grpc-1.statusobject.md), `attributes`: { [key: string]: *unknown*;  }): *void*

Called whenever the resolver has new name resolution results to report

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`addressList` | [*SubchannelAddress*](../modules/grpc.grpc-1.experimental.md#subchanneladdress)[] | The new list of backend addresses   |
`serviceConfig` | [*ServiceConfig*](grpc.grpc-1.experimental.serviceconfig.md) | The new service configuration corresponding to the     `addressList`. Will be `null` if no service configuration was     retrieved or if the service configuration was invalid   |
`serviceConfigError` | [*StatusObject*](grpc.grpc-1.statusobject.md) | If non-`null`, indicates that the retrieved     service configuration was invalid    |
`attributes` | *object* | - |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/resolver.d.ts:20
