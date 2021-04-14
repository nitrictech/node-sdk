[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [storage](../modules/grpc.storage.md) / StorageClient

# Class: StorageClient

[grpc](../modules/grpc.md).[storage](../modules/grpc.storage.md).StorageClient

## Hierarchy

* [*Client*](grpc.grpc-1.client.md)

  ↳ **StorageClient**

## Table of contents

### Constructors

- [constructor](grpc.storage.storageclient.md#constructor)

### Methods

- [close](grpc.storage.storageclient.md#close)
- [delete](grpc.storage.storageclient.md#delete)
- [getChannel](grpc.storage.storageclient.md#getchannel)
- [makeBidiStreamRequest](grpc.storage.storageclient.md#makebidistreamrequest)
- [makeClientStreamRequest](grpc.storage.storageclient.md#makeclientstreamrequest)
- [makeServerStreamRequest](grpc.storage.storageclient.md#makeserverstreamrequest)
- [makeUnaryRequest](grpc.storage.storageclient.md#makeunaryrequest)
- [read](grpc.storage.storageclient.md#read)
- [waitForReady](grpc.storage.storageclient.md#waitforready)
- [write](grpc.storage.storageclient.md#write)

## Constructors

### constructor

\+ **new StorageClient**(`address`: *string*, `credentials`: [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md), `options?`: *object*): [*StorageClient*](grpc.storage.storageclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`address` | *string* |
`credentials` | [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md) |
`options?` | *object* |

**Returns:** [*StorageClient*](grpc.storage.storageclient.md)

Overrides: [Client](grpc.grpc-1.client.md)

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:23

## Methods

### close

▸ **close**(): *void*

**Returns:** *void*

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:57

___

### delete

▸ **delete**(`argument`: [*StorageDeleteRequest*](grpc.storage.storagedeleterequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageDeleteResponse*](grpc.storage.storagedeleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageDeleteRequest*](grpc.storage.storagedeleterequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageDeleteResponse*](grpc.storage.storagedeleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:31

▸ **delete**(`argument`: [*StorageDeleteRequest*](grpc.storage.storagedeleterequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageDeleteResponse*](grpc.storage.storagedeleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageDeleteRequest*](grpc.storage.storagedeleterequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageDeleteResponse*](grpc.storage.storagedeleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:32

▸ **delete**(`argument`: [*StorageDeleteRequest*](grpc.storage.storagedeleterequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageDeleteResponse*](grpc.storage.storagedeleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageDeleteRequest*](grpc.storage.storagedeleterequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageDeleteResponse*](grpc.storage.storagedeleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:33

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

### read

▸ **read**(`argument`: [*StorageReadRequest*](grpc.storage.storagereadrequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageReadResponse*](grpc.storage.storagereadresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageReadRequest*](grpc.storage.storagereadrequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageReadResponse*](grpc.storage.storagereadresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:25

▸ **read**(`argument`: [*StorageReadRequest*](grpc.storage.storagereadrequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageReadResponse*](grpc.storage.storagereadresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageReadRequest*](grpc.storage.storagereadrequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageReadResponse*](grpc.storage.storagereadresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:26

▸ **read**(`argument`: [*StorageReadRequest*](grpc.storage.storagereadrequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageReadResponse*](grpc.storage.storagereadresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageReadRequest*](grpc.storage.storagereadrequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageReadResponse*](grpc.storage.storagereadresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:27

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

___

### write

▸ **write**(`argument`: [*StorageWriteRequest*](grpc.storage.storagewriterequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageWriteResponse*](grpc.storage.storagewriteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageWriteRequest*](grpc.storage.storagewriterequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageWriteResponse*](grpc.storage.storagewriteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:28

▸ **write**(`argument`: [*StorageWriteRequest*](grpc.storage.storagewriterequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageWriteResponse*](grpc.storage.storagewriteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageWriteRequest*](grpc.storage.storagewriterequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageWriteResponse*](grpc.storage.storagewriteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:29

▸ **write**(`argument`: [*StorageWriteRequest*](grpc.storage.storagewriterequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageWriteResponse*](grpc.storage.storagewriteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*StorageWriteRequest*](grpc.storage.storagewriterequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*StorageWriteResponse*](grpc.storage.storagewriteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/storage/v1/storage_grpc_pb.d.ts:30
