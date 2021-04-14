[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / RequesterBuilder

# Class: RequesterBuilder

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).RequesterBuilder

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.requesterbuilder.md#constructor)

### Properties

- [cancel](grpc.grpc-1.requesterbuilder.md#cancel)
- [halfClose](grpc.grpc-1.requesterbuilder.md#halfclose)
- [message](grpc.grpc-1.requesterbuilder.md#message)
- [start](grpc.grpc-1.requesterbuilder.md#start)

### Methods

- [build](grpc.grpc-1.requesterbuilder.md#build)
- [withCancel](grpc.grpc-1.requesterbuilder.md#withcancel)
- [withHalfClose](grpc.grpc-1.requesterbuilder.md#withhalfclose)
- [withSendMessage](grpc.grpc-1.requesterbuilder.md#withsendmessage)
- [withStart](grpc.grpc-1.requesterbuilder.md#withstart)

## Constructors

### constructor

\+ **new RequesterBuilder**(): [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

**Returns:** [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

## Properties

### cancel

• `Private` **cancel**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:50

___

### halfClose

• `Private` **halfClose**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:49

___

### message

• `Private` **message**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:48

___

### start

• `Private` **start**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:47

## Methods

### build

▸ **build**(): *Partial*<FullRequester\>

**Returns:** *Partial*<FullRequester\>

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:55

___

### withCancel

▸ **withCancel**(`cancel`: CancelRequester): [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

#### Parameters:

Name | Type |
:------ | :------ |
`cancel` | CancelRequester |

**Returns:** [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:54

___

### withHalfClose

▸ **withHalfClose**(`halfClose`: CloseRequester): [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

#### Parameters:

Name | Type |
:------ | :------ |
`halfClose` | CloseRequester |

**Returns:** [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:53

___

### withSendMessage

▸ **withSendMessage**(`sendMessage`: MessageRequester): [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

#### Parameters:

Name | Type |
:------ | :------ |
`sendMessage` | MessageRequester |

**Returns:** [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:52

___

### withStart

▸ **withStart**(`start`: MetadataRequester): [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

#### Parameters:

Name | Type |
:------ | :------ |
`start` | MetadataRequester |

**Returns:** [*RequesterBuilder*](grpc.grpc-1.requesterbuilder.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:51
