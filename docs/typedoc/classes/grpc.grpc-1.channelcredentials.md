[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / ChannelCredentials

# Class: ChannelCredentials

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).ChannelCredentials

A class that contains credentials for communicating over a channel, as well
as a set of per-call credentials, which are applied to every method call made
over a channel initialized with an instance of this class.

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.channelcredentials.md#constructor)

### Properties

- [callCredentials](grpc.grpc-1.channelcredentials.md#callcredentials)

### Methods

- [\_equals](grpc.grpc-1.channelcredentials.md#_equals)
- [\_getCallCredentials](grpc.grpc-1.channelcredentials.md#_getcallcredentials)
- [\_getConnectionOptions](grpc.grpc-1.channelcredentials.md#_getconnectionoptions)
- [\_isSecure](grpc.grpc-1.channelcredentials.md#_issecure)
- [compose](grpc.grpc-1.channelcredentials.md#compose)
- [createInsecure](grpc.grpc-1.channelcredentials.md#createinsecure)
- [createSsl](grpc.grpc-1.channelcredentials.md#createssl)

## Constructors

### constructor

\+ `Protected`**new ChannelCredentials**(`callCredentials?`: [*CallCredentials*](grpc.grpc-1.callcredentials.md)): [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

#### Parameters:

Name | Type |
:------ | :------ |
`callCredentials?` | [*CallCredentials*](grpc.grpc-1.callcredentials.md) |

**Returns:** [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:37

## Properties

### callCredentials

• `Protected` **callCredentials**: [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:37

## Methods

### \_equals

▸ `Abstract`**_equals**(`other`: [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)): *boolean*

Check whether two channel credentials objects are equal. Two secure
credentials are equal if they were constructed with the same parameters.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`other` | [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md) | The other ChannelCredentials Object    |

**Returns:** *boolean*

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:65

___

### \_getCallCredentials

▸ **_getCallCredentials**(): [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Gets the set of per-call credentials associated with this instance.

**Returns:** [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:49

___

### \_getConnectionOptions

▸ `Abstract`**_getConnectionOptions**(): ConnectionOptions

Gets a SecureContext object generated from input parameters if this
instance was created with createSsl, or null if this instance was created
with createInsecure.

**Returns:** ConnectionOptions

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:55

___

### \_isSecure

▸ `Abstract`**_isSecure**(): *boolean*

Indicates whether this credentials object creates a secure channel.

**Returns:** *boolean*

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:59

___

### compose

▸ `Abstract`**compose**(`callCredentials`: [*CallCredentials*](grpc.grpc-1.callcredentials.md)): [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

Returns a copy of this object with the included set of per-call credentials
expanded to include callCredentials.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callCredentials` | [*CallCredentials*](grpc.grpc-1.callcredentials.md) | A CallCredentials object to associate with this instance.    |

**Returns:** [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:45

___

### createInsecure

▸ `Static`**createInsecure**(): [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

Return a new ChannelCredentials instance with no credentials.

**Returns:** [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:78

___

### createSsl

▸ `Static`**createSsl**(`rootCerts?`: *Buffer*, `privateKey?`: *Buffer*, `certChain?`: *Buffer*, `verifyOptions?`: VerifyOptions): [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

Return a new ChannelCredentials instance with a given set of credentials.
The resulting instance can be used to construct a Channel that communicates
over TLS.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`rootCerts?` | *Buffer* | The root certificate data.   |
`privateKey?` | *Buffer* | The client certificate private key, if available.   |
`certChain?` | *Buffer* | The client certificate key chain, if available.    |
`verifyOptions?` | VerifyOptions | - |

**Returns:** [*ChannelCredentials*](grpc.grpc-1.channelcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:74
