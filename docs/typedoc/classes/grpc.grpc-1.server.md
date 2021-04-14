[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / Server

# Class: Server

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).Server

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.server.md#constructor)

### Properties

- [\_setupHandlers](grpc.grpc-1.server.md#_setuphandlers)
- [handlers](grpc.grpc-1.server.md#handlers)
- [http2ServerList](grpc.grpc-1.server.md#http2serverlist)
- [options](grpc.grpc-1.server.md#options)
- [sessions](grpc.grpc-1.server.md#sessions)
- [started](grpc.grpc-1.server.md#started)

### Methods

- [addHttp2Port](grpc.grpc-1.server.md#addhttp2port)
- [addProtoService](grpc.grpc-1.server.md#addprotoservice)
- [addService](grpc.grpc-1.server.md#addservice)
- [bind](grpc.grpc-1.server.md#bind)
- [bindAsync](grpc.grpc-1.server.md#bindasync)
- [forceShutdown](grpc.grpc-1.server.md#forceshutdown)
- [register](grpc.grpc-1.server.md#register)
- [removeService](grpc.grpc-1.server.md#removeservice)
- [start](grpc.grpc-1.server.md#start)
- [tryShutdown](grpc.grpc-1.server.md#tryshutdown)
- [unregister](grpc.grpc-1.server.md#unregister)

## Constructors

### constructor

\+ **new Server**(`options?`: [*ChannelOptions*](../interfaces/grpc.grpc-1.channeloptions.md)): [*Server*](grpc.grpc-1.server.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*ChannelOptions*](../interfaces/grpc.grpc-1.channeloptions.md) |

**Returns:** [*Server*](grpc.grpc-1.server.md)

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:14

## Properties

### \_setupHandlers

• `Private` **\_setupHandlers**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:27

___

### handlers

• `Private` **handlers**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:11

___

### http2ServerList

• `Private` **http2ServerList**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:10

___

### options

• `Private` **options**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:14

___

### sessions

• `Private` **sessions**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:12

___

### started

• `Private` **started**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:13

## Methods

### addHttp2Port

▸ **addHttp2Port**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:26

___

### addProtoService

▸ **addProtoService**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:16

___

### addService

▸ **addService**(`service`: [*ServiceDefinition*](../modules/grpc.grpc-1.md#servicedefinition)<[*UntypedServiceImplementation*](../interfaces/grpc.grpc-1.untypedserviceimplementation.md)\>, `implementation`: [*UntypedServiceImplementation*](../interfaces/grpc.grpc-1.untypedserviceimplementation.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`service` | [*ServiceDefinition*](../modules/grpc.grpc-1.md#servicedefinition)<[*UntypedServiceImplementation*](../interfaces/grpc.grpc-1.untypedserviceimplementation.md)\> |
`implementation` | [*UntypedServiceImplementation*](../interfaces/grpc.grpc-1.untypedserviceimplementation.md) |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:17

___

### bind

▸ **bind**(`port`: *string*, `creds`: [*ServerCredentials*](grpc.grpc-1.servercredentials.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`port` | *string* |
`creds` | [*ServerCredentials*](grpc.grpc-1.servercredentials.md) |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:19

___

### bindAsync

▸ **bindAsync**(`port`: *string*, `creds`: [*ServerCredentials*](grpc.grpc-1.servercredentials.md), `callback`: (`error`: Error, `port`: *number*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`port` | *string* |
`creds` | [*ServerCredentials*](grpc.grpc-1.servercredentials.md) |
`callback` | (`error`: Error, `port`: *number*) => *void* |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:20

___

### forceShutdown

▸ **forceShutdown**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:21

___

### register

▸ **register**<RequestType, ResponseType\>(`name`: *string*, `handler`: *HandleCall*<RequestType, ResponseType\>, `serialize`: [*serialize*](../interfaces/grpc.grpc-1.serialize.md)<ResponseType\>, `deserialize`: [*deserialize*](../interfaces/grpc.grpc-1.deserialize.md)<RequestType\>, `type`: *string*): *boolean*

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`handler` | *HandleCall*<RequestType, ResponseType\> |
`serialize` | [*serialize*](../interfaces/grpc.grpc-1.serialize.md)<ResponseType\> |
`deserialize` | [*deserialize*](../interfaces/grpc.grpc-1.deserialize.md)<RequestType\> |
`type` | *string* |

**Returns:** *boolean*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:22

___

### removeService

▸ **removeService**(`service`: [*ServiceDefinition*](../modules/grpc.grpc-1.md#servicedefinition)<[*UntypedServiceImplementation*](../interfaces/grpc.grpc-1.untypedserviceimplementation.md)\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`service` | [*ServiceDefinition*](../modules/grpc.grpc-1.md#servicedefinition)<[*UntypedServiceImplementation*](../interfaces/grpc.grpc-1.untypedserviceimplementation.md)\> |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:18

___

### start

▸ **start**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:24

___

### tryShutdown

▸ **tryShutdown**(`callback`: (`error?`: Error) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:25

___

### unregister

▸ **unregister**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:23
