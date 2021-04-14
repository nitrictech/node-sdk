[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / ListenerBuilder

# Class: ListenerBuilder

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).ListenerBuilder

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.listenerbuilder.md#constructor)

### Properties

- [message](grpc.grpc-1.listenerbuilder.md#message)
- [metadata](grpc.grpc-1.listenerbuilder.md#metadata)
- [status](grpc.grpc-1.listenerbuilder.md#status)

### Methods

- [build](grpc.grpc-1.listenerbuilder.md#build)
- [withOnReceiveMessage](grpc.grpc-1.listenerbuilder.md#withonreceivemessage)
- [withOnReceiveMetadata](grpc.grpc-1.listenerbuilder.md#withonreceivemetadata)
- [withOnReceiveStatus](grpc.grpc-1.listenerbuilder.md#withonreceivestatus)

## Constructors

### constructor

\+ **new ListenerBuilder**(): [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

**Returns:** [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

## Properties

### message

• `Private` **message**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:39

___

### metadata

• `Private` **metadata**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:38

___

### status

• `Private` **status**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:40

## Methods

### build

▸ **build**(): *Partial*<FullListener\>

**Returns:** *Partial*<FullListener\>

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:44

___

### withOnReceiveMessage

▸ **withOnReceiveMessage**(`onReceiveMessage`: MessageListener): [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

#### Parameters:

Name | Type |
:------ | :------ |
`onReceiveMessage` | MessageListener |

**Returns:** [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:42

___

### withOnReceiveMetadata

▸ **withOnReceiveMetadata**(`onReceiveMetadata`: MetadataListener): [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

#### Parameters:

Name | Type |
:------ | :------ |
`onReceiveMetadata` | MetadataListener |

**Returns:** [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:41

___

### withOnReceiveStatus

▸ **withOnReceiveStatus**(`onReceiveStatus`: StatusListener): [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

#### Parameters:

Name | Type |
:------ | :------ |
`onReceiveStatus` | StatusListener |

**Returns:** [*ListenerBuilder*](grpc.grpc-1.listenerbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:43
