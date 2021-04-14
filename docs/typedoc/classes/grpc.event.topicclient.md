[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [event](../modules/grpc.event.md) / TopicClient

# Class: TopicClient

[grpc](../modules/grpc.md).[event](../modules/grpc.event.md).TopicClient

## Hierarchy

* [*Client*](grpc.grpc-1.client.md)

  ↳ **TopicClient**

## Table of contents

### Constructors

- [constructor](grpc.event.topicclient.md#constructor)

### Methods

- [close](grpc.event.topicclient.md#close)
- [getChannel](grpc.event.topicclient.md#getchannel)
- [list](grpc.event.topicclient.md#list)
- [makeBidiStreamRequest](grpc.event.topicclient.md#makebidistreamrequest)
- [makeClientStreamRequest](grpc.event.topicclient.md#makeclientstreamrequest)
- [makeServerStreamRequest](grpc.event.topicclient.md#makeserverstreamrequest)
- [makeUnaryRequest](grpc.event.topicclient.md#makeunaryrequest)
- [waitForReady](grpc.event.topicclient.md#waitforready)

## Constructors

### constructor

\+ **new TopicClient**(`address`: *string*, `credentials`: [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md), `options?`: *object*): [*TopicClient*](grpc.event.topicclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`address` | *string* |
`credentials` | [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md) |
`options?` | *object* |

**Returns:** [*TopicClient*](grpc.event.topicclient.md)

Overrides: [Client](grpc.grpc-1.client.md)

Defined in: src/interfaces/event/v1/event_grpc_pb.d.ts:36

## Methods

### close

▸ **close**(): *void*

**Returns:** *void*

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:57

___

### getChannel

▸ **getChannel**(): [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

**Returns:** [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:58

___

### list

▸ **list**(`argument`: [*TopicListRequest*](grpc.event.topiclistrequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*TopicListResponse*](grpc.event.topiclistresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*TopicListRequest*](grpc.event.topiclistrequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*TopicListResponse*](grpc.event.topiclistresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/event/v1/event_grpc_pb.d.ts:38

▸ **list**(`argument`: [*TopicListRequest*](grpc.event.topiclistrequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*TopicListResponse*](grpc.event.topiclistresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*TopicListRequest*](grpc.event.topiclistrequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*TopicListResponse*](grpc.event.topiclistresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/event/v1/event_grpc_pb.d.ts:39

▸ **list**(`argument`: [*TopicListRequest*](grpc.event.topiclistrequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*TopicListResponse*](grpc.event.topiclistresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*TopicListRequest*](grpc.event.topiclistrequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*TopicListResponse*](grpc.event.topiclistresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/event/v1/event_grpc_pb.d.ts:40

___

### makeBidiStreamRequest

▸ **makeBidiStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options?`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md)): [*ClientDuplexStream*](../modules/grpc.grpc-1.md#clientduplexstream)<RequestType, ResponseType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options?` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |

**Returns:** [*ClientDuplexStream*](../modules/grpc.grpc-1.md#clientduplexstream)<RequestType, ResponseType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:72

▸ **makeBidiStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `options?`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md)): [*ClientDuplexStream*](../modules/grpc.grpc-1.md#clientduplexstream)<RequestType, ResponseType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`options?` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |

**Returns:** [*ClientDuplexStream*](../modules/grpc.grpc-1.md#clientduplexstream)<RequestType, ResponseType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:73

___

### makeClientStreamRequest

▸ **makeClientStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:65

▸ **makeClientStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:66

▸ **makeClientStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:67

▸ **makeClientStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** [*ClientWritableStream*](../modules/grpc.grpc-1.md#clientwritablestream)<RequestType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:68

___

### makeServerStreamRequest

▸ **makeServerStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `argument`: RequestType, `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options?`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md)): [*ClientReadableStream*](../modules/grpc.grpc-1.md#clientreadablestream)<ResponseType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`argument` | RequestType |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options?` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |

**Returns:** [*ClientReadableStream*](../modules/grpc.grpc-1.md#clientreadablestream)<ResponseType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:70

▸ **makeServerStreamRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `argument`: RequestType, `options?`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md)): [*ClientReadableStream*](../modules/grpc.grpc-1.md#clientreadablestream)<ResponseType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`argument` | RequestType |
`options?` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |

**Returns:** [*ClientReadableStream*](../modules/grpc.grpc-1.md#clientreadablestream)<ResponseType\>

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:71

___

### makeUnaryRequest

▸ **makeUnaryRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `argument`: RequestType, `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): SurfaceCall

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`argument` | RequestType |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** SurfaceCall

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:61

▸ **makeUnaryRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `argument`: RequestType, `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): SurfaceCall

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`argument` | RequestType |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** SurfaceCall

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:62

▸ **makeUnaryRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `argument`: RequestType, `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): SurfaceCall

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`argument` | RequestType |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** SurfaceCall

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:63

▸ **makeUnaryRequest**<RequestType, ResponseType\>(`method`: *string*, `serialize`: (`value`: RequestType) => *Buffer*, `deserialize`: (`value`: *Buffer*) => ResponseType, `argument`: RequestType, `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\>): SurfaceCall

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |
`serialize` | (`value`: RequestType) => *Buffer* |
`deserialize` | (`value`: *Buffer*) => ResponseType |
`argument` | RequestType |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<ResponseType\> |

**Returns:** SurfaceCall

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:64

___

### waitForReady

▸ **waitForReady**(`deadline`: [*Deadline*](../modules/grpc.grpc-1.md#deadline), `callback`: (`error?`: Error) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`deadline` | [*Deadline*](../modules/grpc.grpc-1.md#deadline) |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:59
