[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / Client

# Class: Client

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).Client

Client

## Hierarchy

* **Client**

  ↳ [*DocumentServiceClient*](grpc.document.documentserviceclient.md)

  ↳ [*EventServiceClient*](grpc.event.eventserviceclient.md)

  ↳ [*TopicServiceClient*](grpc.event.topicserviceclient.md)

  ↳ [*StorageServiceClient*](grpc.storage.storageserviceclient.md)

  ↳ [*QueueServiceClient*](grpc.queue.queueserviceclient.md)

  ↳ [*FaasServiceClient*](grpc.faas.faasserviceclient.md)

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.client.md#constructor)

### Properties

- [[CALL\_INVOCATION\_TRANSFORMER\_SYMBOL]](grpc.grpc-1.client.md#[call_invocation_transformer_symbol])
- [[CHANNEL\_SYMBOL]](grpc.grpc-1.client.md#[channel_symbol])
- [[INTERCEPTOR\_PROVIDER\_SYMBOL]](grpc.grpc-1.client.md#[interceptor_provider_symbol])
- [[INTERCEPTOR\_SYMBOL]](grpc.grpc-1.client.md#[interceptor_symbol])
- [checkMetadataAndOptions](grpc.grpc-1.client.md#checkmetadataandoptions)
- [checkOptionalUnaryResponseArguments](grpc.grpc-1.client.md#checkoptionalunaryresponsearguments)

### Methods

- [close](grpc.grpc-1.client.md#close)
- [getChannel](grpc.grpc-1.client.md#getchannel)
- [makeBidiStreamRequest](grpc.grpc-1.client.md#makebidistreamrequest)
- [makeClientStreamRequest](grpc.grpc-1.client.md#makeclientstreamrequest)
- [makeServerStreamRequest](grpc.grpc-1.client.md#makeserverstreamrequest)
- [makeUnaryRequest](grpc.grpc-1.client.md#makeunaryrequest)
- [waitForReady](grpc.grpc-1.client.md#waitforready)

## Constructors

### constructor

\+ **new Client**(`address`: *string*, `credentials`: [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md), `options?`: [*ClientOptions*](../modules/grpc.grpc-1.md#clientoptions)): [*Client*](grpc.grpc-1.client.md)

#### Parameters:

Name | Type |
:------ | :------ |
`address` | *string* |
`credentials` | [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md) |
`options?` | [*ClientOptions*](../modules/grpc.grpc-1.md#clientoptions) |

**Returns:** [*Client*](grpc.grpc-1.client.md)

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:55

## Properties

### [CALL\_INVOCATION\_TRANSFORMER\_SYMBOL]

• `Private` `Optional` `Readonly` **[CALL\_INVOCATION\_TRANSFORMER\_SYMBOL]**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:55

___

### [CHANNEL\_SYMBOL]

• `Private` `Readonly` **[CHANNEL\_SYMBOL]**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:52

___

### [INTERCEPTOR\_PROVIDER\_SYMBOL]

• `Private` `Readonly` **[INTERCEPTOR\_PROVIDER\_SYMBOL]**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:54

___

### [INTERCEPTOR\_SYMBOL]

• `Private` `Readonly` **[INTERCEPTOR\_SYMBOL]**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:53

___

### checkMetadataAndOptions

• `Private` **checkMetadataAndOptions**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:69

___

### checkOptionalUnaryResponseArguments

• `Private` **checkOptionalUnaryResponseArguments**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:60

## Methods

### close

▸ **close**(): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:57

___

### getChannel

▸ **getChannel**(): [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

**Returns:** [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

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

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:59
