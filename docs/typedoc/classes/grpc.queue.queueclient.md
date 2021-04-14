[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [queue](../modules/grpc.queue.md) / QueueClient

# Class: QueueClient

[grpc](../modules/grpc.md).[queue](../modules/grpc.queue.md).QueueClient

## Hierarchy

* [*Client*](grpc.grpc-1.client.md)

  ↳ **QueueClient**

## Table of contents

### Constructors

- [constructor](grpc.queue.queueclient.md#constructor)

### Methods

- [close](grpc.queue.queueclient.md#close)
- [complete](grpc.queue.queueclient.md#complete)
- [getChannel](grpc.queue.queueclient.md#getchannel)
- [makeBidiStreamRequest](grpc.queue.queueclient.md#makebidistreamrequest)
- [makeClientStreamRequest](grpc.queue.queueclient.md#makeclientstreamrequest)
- [makeServerStreamRequest](grpc.queue.queueclient.md#makeserverstreamrequest)
- [makeUnaryRequest](grpc.queue.queueclient.md#makeunaryrequest)
- [receive](grpc.queue.queueclient.md#receive)
- [send](grpc.queue.queueclient.md#send)
- [sendBatch](grpc.queue.queueclient.md#sendbatch)
- [waitForReady](grpc.queue.queueclient.md#waitforready)

## Constructors

### constructor

\+ **new QueueClient**(`address`: *string*, `credentials`: [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md), `options?`: *object*): [*QueueClient*](grpc.queue.queueclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`address` | *string* |
`credentials` | [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md) |
`options?` | *object* |

**Returns:** [*QueueClient*](grpc.queue.queueclient.md)

Overrides: [Client](grpc.grpc-1.client.md)

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:25

## Methods

### close

▸ **close**(): *void*

**Returns:** *void*

Inherited from: [Client](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:57

___

### complete

▸ **complete**(`argument`: [*QueueCompleteRequest*](grpc.queue.queuecompleterequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueCompleteResponse*](grpc.queue.queuecompleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueCompleteRequest*](grpc.queue.queuecompleterequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueCompleteResponse*](grpc.queue.queuecompleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:36

▸ **complete**(`argument`: [*QueueCompleteRequest*](grpc.queue.queuecompleterequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueCompleteResponse*](grpc.queue.queuecompleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueCompleteRequest*](grpc.queue.queuecompleterequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueCompleteResponse*](grpc.queue.queuecompleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:37

▸ **complete**(`argument`: [*QueueCompleteRequest*](grpc.queue.queuecompleterequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueCompleteResponse*](grpc.queue.queuecompleteresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueCompleteRequest*](grpc.queue.queuecompleterequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueCompleteResponse*](grpc.queue.queuecompleteresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:38

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

### receive

▸ **receive**(`argument`: [*QueueReceiveRequest*](grpc.queue.queuereceiverequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueReceiveResponse*](grpc.queue.queuereceiveresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueReceiveRequest*](grpc.queue.queuereceiverequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueReceiveResponse*](grpc.queue.queuereceiveresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:33

▸ **receive**(`argument`: [*QueueReceiveRequest*](grpc.queue.queuereceiverequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueReceiveResponse*](grpc.queue.queuereceiveresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueReceiveRequest*](grpc.queue.queuereceiverequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueReceiveResponse*](grpc.queue.queuereceiveresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:34

▸ **receive**(`argument`: [*QueueReceiveRequest*](grpc.queue.queuereceiverequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueReceiveResponse*](grpc.queue.queuereceiveresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueReceiveRequest*](grpc.queue.queuereceiverequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueReceiveResponse*](grpc.queue.queuereceiveresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:35

___

### send

▸ **send**(`argument`: [*QueueSendRequest*](grpc.queue.queuesendrequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendResponse*](grpc.queue.queuesendresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueSendRequest*](grpc.queue.queuesendrequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendResponse*](grpc.queue.queuesendresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:27

▸ **send**(`argument`: [*QueueSendRequest*](grpc.queue.queuesendrequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendResponse*](grpc.queue.queuesendresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueSendRequest*](grpc.queue.queuesendrequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendResponse*](grpc.queue.queuesendresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:28

▸ **send**(`argument`: [*QueueSendRequest*](grpc.queue.queuesendrequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendResponse*](grpc.queue.queuesendresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueSendRequest*](grpc.queue.queuesendrequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendResponse*](grpc.queue.queuesendresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:29

___

### sendBatch

▸ **sendBatch**(`argument`: [*QueueSendBatchRequest*](grpc.queue.queuesendbatchrequest-1.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendBatchResponse*](grpc.queue.queuesendbatchresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueSendBatchRequest*](grpc.queue.queuesendbatchrequest-1.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendBatchResponse*](grpc.queue.queuesendbatchresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:30

▸ **sendBatch**(`argument`: [*QueueSendBatchRequest*](grpc.queue.queuesendbatchrequest-1.md), `metadataOrOptions`: [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendBatchResponse*](grpc.queue.queuesendbatchresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueSendBatchRequest*](grpc.queue.queuesendbatchrequest-1.md) |
`metadataOrOptions` | [*Metadata*](grpc.grpc-1.metadata.md) \| [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendBatchResponse*](grpc.queue.queuesendbatchresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:31

▸ **sendBatch**(`argument`: [*QueueSendBatchRequest*](grpc.queue.queuesendbatchrequest-1.md), `metadata`: [*Metadata*](grpc.grpc-1.metadata.md), `options`: [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md), `callback`: [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendBatchResponse*](grpc.queue.queuesendbatchresponse-1.md)\>): SurfaceCall

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | [*QueueSendBatchRequest*](grpc.queue.queuesendbatchrequest-1.md) |
`metadata` | [*Metadata*](grpc.grpc-1.metadata.md) |
`options` | [*CallOptions*](../interfaces/grpc.grpc-1.calloptions.md) |
`callback` | [*requestCallback*](../interfaces/grpc.grpc-1.requestcallback.md)<[*QueueSendBatchResponse*](grpc.queue.queuesendbatchresponse-1.md)\> |

**Returns:** SurfaceCall

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:32

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
