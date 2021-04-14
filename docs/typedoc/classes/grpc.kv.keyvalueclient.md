[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [kv](../modules/grpc.kv.md) / KeyValueClient

# Class: KeyValueClient

[grpc](../modules/grpc.md).[kv](../modules/grpc.kv.md).KeyValueClient

## Hierarchy

* [*Client*](grpc.grpc-1.client.md)

  ↳ **KeyValueClient**

## Table of contents

### Constructors

- [constructor](grpc.kv.keyvalueclient.md#constructor)

### Methods

- [close](grpc.kv.keyvalueclient.md#close)
- [delete](grpc.kv.keyvalueclient.md#delete)
- [get](grpc.kv.keyvalueclient.md#get)
- [getChannel](grpc.kv.keyvalueclient.md#getchannel)
- [makeBidiStreamRequest](grpc.kv.keyvalueclient.md#makebidistreamrequest)
- [makeClientStreamRequest](grpc.kv.keyvalueclient.md#makeclientstreamrequest)
- [makeServerStreamRequest](grpc.kv.keyvalueclient.md#makeserverstreamrequest)
- [makeUnaryRequest](grpc.kv.keyvalueclient.md#makeunaryrequest)
- [put](grpc.kv.keyvalueclient.md#put)
- [waitForReady](grpc.kv.keyvalueclient.md#waitforready)

## Constructors

### constructor

\+ **new KeyValueClient**(`address`: *string*, `credentials`: [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md), `options?`: *object*): [*KeyValueClient*](grpc.kv.keyvalueclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`address` | *string* |
`credentials` | [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md) |
`options?` | *object* |

**Returns:** [*KeyValueClient*](grpc.kv.keyvalueclient.md)

Overrides: [Client](grpc.grpc-1.client.md)

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:23

## Methods

### close

▸ **close**(): *void*

**Returns:** *void*

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:57

___

### delete

▸ **delete**(`argument`: [*KeyValueDeleteRequest*](grpc.kv.keyvaluedeleterequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueDeleteResponse*](grpc.kv.keyvaluedeleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValueDeleteRequest*](grpc.kv.keyvaluedeleterequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueDeleteResponse*](grpc.kv.keyvaluedeleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:31

▸ **delete**(`argument`: [*KeyValueDeleteRequest*](grpc.kv.keyvaluedeleterequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueDeleteResponse*](grpc.kv.keyvaluedeleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValueDeleteRequest*](grpc.kv.keyvaluedeleterequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueDeleteResponse*](grpc.kv.keyvaluedeleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:32

▸ **delete**(`argument`: [*KeyValueDeleteRequest*](grpc.kv.keyvaluedeleterequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueDeleteResponse*](grpc.kv.keyvaluedeleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValueDeleteRequest*](grpc.kv.keyvaluedeleterequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueDeleteResponse*](grpc.kv.keyvaluedeleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:33

___

### get

▸ **get**(`argument`: [*KeyValueGetRequest*](grpc.kv.keyvaluegetrequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueGetResponse*](grpc.kv.keyvaluegetresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValueGetRequest*](grpc.kv.keyvaluegetrequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueGetResponse*](grpc.kv.keyvaluegetresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:25

▸ **get**(`argument`: [*KeyValueGetRequest*](grpc.kv.keyvaluegetrequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueGetResponse*](grpc.kv.keyvaluegetresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValueGetRequest*](grpc.kv.keyvaluegetrequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueGetResponse*](grpc.kv.keyvaluegetresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:26

▸ **get**(`argument`: [*KeyValueGetRequest*](grpc.kv.keyvaluegetrequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueGetResponse*](grpc.kv.keyvaluegetresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValueGetRequest*](grpc.kv.keyvaluegetrequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValueGetResponse*](grpc.kv.keyvaluegetresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:27

___

### getChannel

▸ **getChannel**(): [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

**Returns:** [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:58

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

### put

▸ **put**(`argument`: [*KeyValuePutRequest*](grpc.kv.keyvalueputrequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValuePutResponse*](grpc.kv.keyvalueputresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValuePutRequest*](grpc.kv.keyvalueputrequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValuePutResponse*](grpc.kv.keyvalueputresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:28

▸ **put**(`argument`: [*KeyValuePutRequest*](grpc.kv.keyvalueputrequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValuePutResponse*](grpc.kv.keyvalueputresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValuePutRequest*](grpc.kv.keyvalueputrequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValuePutResponse*](grpc.kv.keyvalueputresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:29

▸ **put**(`argument`: [*KeyValuePutRequest*](grpc.kv.keyvalueputrequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValuePutResponse*](grpc.kv.keyvalueputresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*KeyValuePutRequest*](grpc.kv.keyvalueputrequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*KeyValuePutResponse*](grpc.kv.keyvalueputresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/kv/v1/kv_grpc_pb.d.ts:30

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
