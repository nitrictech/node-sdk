[@nitric/sdk](../README.md) / [grpc](grpc.md) / grpc

# Namespace: grpc

[grpc](grpc.md).grpc

## Table of contents

### References

- [makeGenericClientConstructor](grpc.grpc-1.md#makegenericclientconstructor)

### Namespaces

- [experimental](grpc.grpc-1.experimental.md)

### Enumerations

- [connectivityState](../enums/grpc.grpc-1.connectivitystate.md)
- [logVerbosity](../enums/grpc.grpc-1.logverbosity.md)
- [propagate](../enums/grpc.grpc-1.propagate.md)
- [status](../enums/grpc.grpc-1.status.md)

### Classes

- [CallCredentials](../classes/grpc.grpc-1.callcredentials.md)
- [Channel](../classes/grpc.grpc-1.channel.md)
- [ChannelCredentials](../classes/grpc.grpc-1.channelcredentials.md)
- [Client](../classes/grpc.grpc-1.client.md)
- [InterceptingCall](../classes/grpc.grpc-1.interceptingcall.md)
- [InterceptorConfigurationError](../classes/grpc.grpc-1.interceptorconfigurationerror.md)
- [ListenerBuilder](../classes/grpc.grpc-1.listenerbuilder.md)
- [Metadata](../classes/grpc.grpc-1.metadata.md)
- [RequesterBuilder](../classes/grpc.grpc-1.requesterbuilder.md)
- [Server](../classes/grpc.grpc-1.server.md)
- [ServerCredentials](../classes/grpc.grpc-1.servercredentials.md)
- [StatusBuilder](../classes/grpc.grpc-1.statusbuilder.md)

### Interfaces

- [CallInvocationTransformer](../interfaces/grpc.grpc-1.callinvocationtransformer.md)
- [CallOptions](../interfaces/grpc.grpc-1.calloptions.md)
- [CallProperties](../interfaces/grpc.grpc-1.callproperties.md)
- [ChannelInterface](../interfaces/grpc.grpc-1.channelinterface.md)
- [ChannelOptions](../interfaces/grpc.grpc-1.channeloptions.md)
- [GrpcObject](../interfaces/grpc.grpc-1.grpcobject.md)
- [Interceptor](../interfaces/grpc.grpc-1.interceptor.md)
- [InterceptorOptions](../interfaces/grpc.grpc-1.interceptoroptions.md)
- [InterceptorProvider](../interfaces/grpc.grpc-1.interceptorprovider.md)
- [KeyCertPair](../interfaces/grpc.grpc-1.keycertpair.md)
- [MethodDefinition](../interfaces/grpc.grpc-1.methoddefinition.md)
- [StatusObject](../interfaces/grpc.grpc-1.statusobject.md)
- [UntypedServiceImplementation](../interfaces/grpc.grpc-1.untypedserviceimplementation.md)
- [deserialize](../interfaces/grpc.grpc-1.deserialize.md)
- [requestCallback](../interfaces/grpc.grpc-1.requestcallback.md)
- [serialize](../interfaces/grpc.grpc-1.serialize.md)

### Type aliases

- [Call](grpc.grpc-1.md#call)
- [ClientDuplexStream](grpc.grpc-1.md#clientduplexstream)
- [ClientOptions](grpc.grpc-1.md#clientoptions)
- [ClientReadableStream](grpc.grpc-1.md#clientreadablestream)
- [ClientUnaryCall](grpc.grpc-1.md#clientunarycall)
- [ClientWritableStream](grpc.grpc-1.md#clientwritablestream)
- [Deadline](grpc.grpc-1.md#deadline)
- [Listener](grpc.grpc-1.md#listener)
- [MetadataValue](grpc.grpc-1.md#metadatavalue)
- [OAuth2Client](grpc.grpc-1.md#oauth2client)
- [Requester](grpc.grpc-1.md#requester)
- [ServerDuplexStream](grpc.grpc-1.md#serverduplexstream)
- [ServerReadableStream](grpc.grpc-1.md#serverreadablestream)
- [ServerUnaryCall](grpc.grpc-1.md#serverunarycall)
- [ServerWritableStream](grpc.grpc-1.md#serverwritablestream)
- [ServiceDefinition](grpc.grpc-1.md#servicedefinition)
- [ServiceError](grpc.grpc-1.md#serviceerror)
- [UntypedHandleCall](grpc.grpc-1.md#untypedhandlecall)
- [handleBidiStreamingCall](grpc.grpc-1.md#handlebidistreamingcall)
- [handleClientStreamingCall](grpc.grpc-1.md#handleclientstreamingcall)
- [handleServerStreamingCall](grpc.grpc-1.md#handleserverstreamingcall)
- [handleUnaryCall](grpc.grpc-1.md#handleunarycall)
- [sendUnaryData](grpc.grpc-1.md#sendunarydata)

### Variables

- [credentials](grpc.grpc-1.md#credentials)

### Functions

- [closeClient](grpc.grpc-1.md#closeclient)
- [getClientChannel](grpc.grpc-1.md#getclientchannel)
- [load](grpc.grpc-1.md#load)
- [loadObject](grpc.grpc-1.md#loadobject)
- [loadPackageDefinition](grpc.grpc-1.md#loadpackagedefinition)
- [makeClientConstructor](grpc.grpc-1.md#makeclientconstructor)
- [setLogVerbosity](grpc.grpc-1.md#setlogverbosity)
- [setLogger](grpc.grpc-1.md#setlogger)
- [waitForClientReady](grpc.grpc-1.md#waitforclientready)

## References

### makeGenericClientConstructor

Renames and exports: [makeClientConstructor](grpc.grpc-1.md#makeclientconstructor)

## Type aliases

### Call

Ƭ **Call**: [*ClientUnaryCall*](grpc.grpc-1.md#clientunarycall) \| [*ClientReadableStream*](grpc.grpc-1.md#clientreadablestream)<any\> \| [*ClientWritableStream*](grpc.grpc-1.md#clientwritablestream)<any\> \| [*ClientDuplexStream*](grpc.grpc-1.md#clientduplexstream)<any, any\>

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:55

___

### ClientDuplexStream

Ƭ **ClientDuplexStream**<RequestType, ResponseType\>: [*ClientWritableStream*](grpc.grpc-1.md#clientwritablestream)<RequestType\> & [*ClientReadableStream*](grpc.grpc-1.md#clientreadablestream)<ResponseType\>

A type representing the return value of a bidirectional stream method call.

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

Defined in: node_modules/@grpc/grpc-js/build/src/call.d.ts:40

___

### ClientOptions

Ƭ **ClientOptions**: *Partial*<[*ChannelOptions*](../interfaces/grpc.grpc-1.channeloptions.md)\> & { `callInvocationTransformer?`: [*CallInvocationTransformer*](../interfaces/grpc.grpc-1.callinvocationtransformer.md) ; `channelFactoryOverride?`: (`address`: *string*, `credentials`: [*ChannelCredentials*](../classes/grpc.grpc-1.channelcredentials.md), `options`: [*ClientOptions*](grpc.grpc-1.md#clientoptions)) => [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md) ; `channelOverride?`: [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md) ; `interceptor_providers?`: [*InterceptorProvider*](../interfaces/grpc.grpc-1.interceptorprovider.md)[] ; `interceptors?`: [*Interceptor*](../interfaces/grpc.grpc-1.interceptor.md)[]  }

Client

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:40

___

### ClientReadableStream

Ƭ **ClientReadableStream**<ResponseType\>: { `deserialize`: (`chunk`: Buffer) => ResponseType  } & SurfaceCall & *ObjectReadable*<ResponseType\>

A type representing the return value of a server stream method call.

#### Type parameters:

Name |
:------ |
`ResponseType` |

Defined in: node_modules/@grpc/grpc-js/build/src/call.d.ts:28

___

### ClientUnaryCall

Ƭ **ClientUnaryCall**: SurfaceCall

A type representing the return value of a unary method call.

Defined in: node_modules/@grpc/grpc-js/build/src/call.d.ts:24

___

### ClientWritableStream

Ƭ **ClientWritableStream**<RequestType\>: { `serialize`: (`value`: RequestType) => Buffer  } & SurfaceCall & *ObjectWritable*<RequestType\>

A type representing the return value of a client stream method call.

#### Type parameters:

Name |
:------ |
`RequestType` |

Defined in: node_modules/@grpc/grpc-js/build/src/call.d.ts:34

___

### Deadline

Ƭ **Deadline**: Date \| *number*

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:11

___

### Listener

Ƭ **Listener**: *Partial*<FullListener\>

Defined in: node_modules/@grpc/grpc-js/build/src/call-stream.d.ts:47

___

### MetadataValue

Ƭ **MetadataValue**: *string* \| Buffer

Metadata

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:3

___

### OAuth2Client

Ƭ **OAuth2Client**: OldOAuth2Client \| CurrentOAuth2Client

Defined in: node_modules/@grpc/grpc-js/build/src/call-credentials.d.ts:16

___

### Requester

Ƭ **Requester**: *Partial*<FullRequester\>

Defined in: node_modules/@grpc/grpc-js/build/src/client-interceptors.d.ts:36

___

### ServerDuplexStream

Ƭ **ServerDuplexStream**<RequestType, ResponseType\>: ServerSurfaceCall & *ObjectReadable*<RequestType\> & *ObjectWritable*<ResponseType\> & { `end`: (`metadata?`: [*Metadata*](../classes/grpc.grpc-1.metadata.md)) => *void*  }

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:27

___

### ServerReadableStream

Ƭ **ServerReadableStream**<RequestType, ResponseType\>: ServerSurfaceCall & *ObjectReadable*<RequestType\>

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:22

___

### ServerUnaryCall

Ƭ **ServerUnaryCall**<RequestType, ResponseType\>: ServerSurfaceCall & { `request`: RequestType  }

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:19

___

### ServerWritableStream

Ƭ **ServerWritableStream**<RequestType, ResponseType\>: ServerSurfaceCall & *ObjectWritable*<ResponseType\> & { `end`: (`metadata?`: [*Metadata*](../classes/grpc.grpc-1.metadata.md)) => *void* ; `request`: RequestType  }

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:23

___

### ServiceDefinition

Ƭ **ServiceDefinition**<ImplementationType\>: { readonly[index in keyof ImplementationType]: MethodDefinition<any, any\>}

#### Type parameters:

Name | Default |
:------ | :------ |
`ImplementationType` | [*UntypedServiceImplementation*](../interfaces/grpc.grpc-1.untypedserviceimplementation.md) |

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:30

___

### ServiceError

Ƭ **ServiceError**: [*StatusObject*](../interfaces/grpc.grpc-1.statusobject.md) & Error

A type extending the built-in Error object with additional fields.

Defined in: node_modules/@grpc/grpc-js/build/src/call.d.ts:12

___

### UntypedHandleCall

Ƭ **UntypedHandleCall**: *HandleCall*<any, any\>

Defined in: node_modules/@grpc/grpc-js/build/src/server.d.ts:5

___

### handleBidiStreamingCall

Ƭ **handleBidiStreamingCall**<RequestType, ResponseType\>: (`call`: [*ServerDuplexStream*](grpc.grpc-1.md#serverduplexstream)<RequestType, ResponseType\>) => *void*

Server

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Type declaration:

▸ (`call`: [*ServerDuplexStream*](grpc.grpc-1.md#serverduplexstream)<RequestType, ResponseType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`call` | [*ServerDuplexStream*](grpc.grpc-1.md#serverduplexstream)<RequestType, ResponseType\> |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:83

___

### handleClientStreamingCall

Ƭ **handleClientStreamingCall**<RequestType, ResponseType\>: (`call`: [*ServerReadableStream*](grpc.grpc-1.md#serverreadablestream)<RequestType, ResponseType\>, `callback`: [*sendUnaryData*](grpc.grpc-1.md#sendunarydata)<ResponseType\>) => *void*

Server

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Type declaration:

▸ (`call`: [*ServerReadableStream*](grpc.grpc-1.md#serverreadablestream)<RequestType, ResponseType\>, `callback`: [*sendUnaryData*](grpc.grpc-1.md#sendunarydata)<ResponseType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`call` | [*ServerReadableStream*](grpc.grpc-1.md#serverreadablestream)<RequestType, ResponseType\> |
`callback` | [*sendUnaryData*](grpc.grpc-1.md#sendunarydata)<ResponseType\> |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:81

___

### handleServerStreamingCall

Ƭ **handleServerStreamingCall**<RequestType, ResponseType\>: (`call`: [*ServerWritableStream*](grpc.grpc-1.md#serverwritablestream)<RequestType, ResponseType\>) => *void*

Server

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Type declaration:

▸ (`call`: [*ServerWritableStream*](grpc.grpc-1.md#serverwritablestream)<RequestType, ResponseType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`call` | [*ServerWritableStream*](grpc.grpc-1.md#serverwritablestream)<RequestType, ResponseType\> |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:82

___

### handleUnaryCall

Ƭ **handleUnaryCall**<RequestType, ResponseType\>: (`call`: [*ServerUnaryCall*](grpc.grpc-1.md#serverunarycall)<RequestType, ResponseType\>, `callback`: [*sendUnaryData*](grpc.grpc-1.md#sendunarydata)<ResponseType\>) => *void*

Server

#### Type parameters:

Name |
:------ |
`RequestType` |
`ResponseType` |

#### Type declaration:

▸ (`call`: [*ServerUnaryCall*](grpc.grpc-1.md#serverunarycall)<RequestType, ResponseType\>, `callback`: [*sendUnaryData*](grpc.grpc-1.md#sendunarydata)<ResponseType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`call` | [*ServerUnaryCall*](grpc.grpc-1.md#serverunarycall)<RequestType, ResponseType\> |
`callback` | [*sendUnaryData*](grpc.grpc-1.md#sendunarydata)<ResponseType\> |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:80

___

### sendUnaryData

Ƭ **sendUnaryData**<ResponseType\>: (`error`: ServerErrorResponse \| ServerStatusResponse \| *null*, `value?`: ResponseType \| *null*, `trailer?`: [*Metadata*](../classes/grpc.grpc-1.metadata.md), `flags?`: *number*) => *void*

#### Type parameters:

Name |
:------ |
`ResponseType` |

#### Type declaration:

▸ (`error`: ServerErrorResponse \| ServerStatusResponse \| *null*, `value?`: ResponseType \| *null*, `trailer?`: [*Metadata*](../classes/grpc.grpc-1.metadata.md), `flags?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`error` | ServerErrorResponse \| ServerStatusResponse \| *null* |
`value?` | ResponseType \| *null* |
`trailer?` | [*Metadata*](../classes/grpc.grpc-1.metadata.md) |
`flags?` | *number* |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/server-call.d.ts:79

## Variables

### credentials

• `Const` **credentials**: *object*

Client Credentials

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`combineCallCredentials` | (`first`: [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md), ...`additional`: [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md)[]) => [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md) | Combine any number of CallCredentials into a single CallCredentials object.  **`param`** The first CallCredentials object.  **`param`** Any number of additional CallCredentials objects.  **`returns`** The resulting CallCredentials object.  |
`combineChannelCredentials` | (`channelCredentials`: [*ChannelCredentials*](../classes/grpc.grpc-1.channelcredentials.md), ...`callCredentials`: [*CallCredentials*](../classes/grpc.grpc-1.callcredentials.md)[]) => [*ChannelCredentials*](../classes/grpc.grpc-1.channelcredentials.md) | Combine a ChannelCredentials with any number of CallCredentials into a single ChannelCredentials object.  **`param`** The ChannelCredentials object.  **`param`** Any number of CallCredentials objects.  **`returns`** The resulting ChannelCredentials object.  |
`createEmpty` | *typeof* [*createEmpty*](../classes/grpc.grpc-1.callcredentials.md#createempty) | - |
`createFromGoogleCredential` | *typeof* [*createFromGoogleCredential*](../classes/grpc.grpc-1.callcredentials.md#createfromgooglecredential) | - |
`createFromMetadataGenerator` | *typeof* [*createFromMetadataGenerator*](../classes/grpc.grpc-1.callcredentials.md#createfrommetadatagenerator) | - |
`createInsecure` | *typeof* [*createInsecure*](../classes/grpc.grpc-1.channelcredentials.md#createinsecure) | - |
`createSsl` | *typeof* [*createSsl*](../classes/grpc.grpc-1.channelcredentials.md#createssl) | - |

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:17

## Functions

### closeClient

▸ `Const`**closeClient**(`client`: [*Client*](../classes/grpc.grpc-1.client.md)): *void*

Close a Client object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`client` | [*Client*](../classes/grpc.grpc-1.client.md) | The client to close.    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:50

___

### getClientChannel

▸ `Const`**getClientChannel**(`client`: [*Client*](../classes/grpc.grpc-1.client.md)): [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

#### Parameters:

Name | Type |
:------ | :------ |
`client` | [*Client*](../classes/grpc.grpc-1.client.md) |

**Returns:** [*ChannelInterface*](../interfaces/grpc.grpc-1.channelinterface.md)

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:64

___

### load

▸ `Const`**load**(`filename`: *any*, `format`: *any*, `options`: *any*): *never*

#### Parameters:

Name | Type |
:------ | :------ |
`filename` | *any* |
`format` | *any* |
`options` | *any* |

**Returns:** *never*

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:58

___

### loadObject

▸ `Const`**loadObject**(`value`: *any*, `options`: *any*): *never*

Unimplemented function stubs

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |
`options` | *any* |

**Returns:** *never*

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:57

___

### loadPackageDefinition

▸ **loadPackageDefinition**(`packageDef`: PackageDefinition): [*GrpcObject*](../interfaces/grpc.grpc-1.grpcobject.md)

Load a gRPC package definition as a gRPC object hierarchy.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`packageDef` | PackageDefinition | The package definition object.   |

**Returns:** [*GrpcObject*](../interfaces/grpc.grpc-1.grpcobject.md)

The resulting gRPC object.

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:71

___

### makeClientConstructor

▸ **makeClientConstructor**(`methods`: [*ServiceDefinition*](grpc.grpc-1.md#servicedefinition), `serviceName`: *string*, `classOptions?`: {}): ServiceClientConstructor

Creates a constructor for a client with the given methods, as specified in
the methods argument. The resulting class will have an instance method for
each method in the service, which is a partial application of one of the
[Client](../classes/grpc.grpc-1.client.md) request methods, depending on `requestSerialize`
and `responseSerialize`, with the `method`, `serialize`, and `deserialize`
arguments predefined.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`methods` | [*ServiceDefinition*](grpc.grpc-1.md#servicedefinition) | An object mapping method names to     method attributes   |
`serviceName` | *string* | The fully qualified name of the service   |
`classOptions?` | *object* | An options object.   |

**Returns:** ServiceClientConstructor

New client constructor, which is a subclass of
    [grpc.Client](../classes/grpc.grpc-1.client.md), and has the same arguments as that constructor.

Defined in: node_modules/@grpc/grpc-js/build/src/make-client.d.ts:62

___

### setLogVerbosity

▸ `Const`**setLogVerbosity**(`verbosity`: [*logVerbosity*](../enums/grpc.grpc-1.logverbosity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`verbosity` | [*logVerbosity*](../enums/grpc.grpc-1.logverbosity.md) |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:60

___

### setLogger

▸ `Const`**setLogger**(`logger`: *Partial*<Console\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`logger` | *Partial*<Console\> |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:59

___

### waitForClientReady

▸ `Const`**waitForClientReady**(`client`: [*Client*](../classes/grpc.grpc-1.client.md), `deadline`: [*Deadline*](grpc.grpc-1.md#deadline), `callback`: (`error?`: Error) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`client` | [*Client*](../classes/grpc.grpc-1.client.md) |
`deadline` | [*Deadline*](grpc.grpc-1.md#deadline) |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/index.d.ts:51
