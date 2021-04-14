[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / CallCredentials

# Class: CallCredentials

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).CallCredentials

A class that represents a generic method of adding authentication-related
metadata on a per-request basis.

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.callcredentials.md#constructor)

### Methods

- [\_equals](grpc.grpc-1.callcredentials.md#_equals)
- [compose](grpc.grpc-1.callcredentials.md#compose)
- [generateMetadata](grpc.grpc-1.callcredentials.md#generatemetadata)
- [createEmpty](grpc.grpc-1.callcredentials.md#createempty)
- [createFromGoogleCredential](grpc.grpc-1.callcredentials.md#createfromgooglecredential)
- [createFromMetadataGenerator](grpc.grpc-1.callcredentials.md#createfrommetadatagenerator)

## Constructors

### constructor

\+ **new CallCredentials**(): [*CallCredentials*](grpc.grpc-1.callcredentials.md)

**Returns:** [*CallCredentials*](grpc.grpc-1.callcredentials.md)

## Methods

### \_equals

▸ `Abstract`**_equals**(`other`: [*CallCredentials*](grpc.grpc-1.callcredentials.md)): *boolean*

Check whether two call credentials objects are equal. Separate
SingleCallCredentials with identical metadata generator functions are
equal.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`other` | [*CallCredentials*](grpc.grpc-1.callcredentials.md) | The other CallCredentials object to compare with.    |

**Returns:** *boolean*

Defined in: node_modules/@grpc/grpc-js/build/src/call-credentials.d.ts:40

___

### compose

▸ `Abstract`**compose**(`callCredentials`: [*CallCredentials*](grpc.grpc-1.callcredentials.md)): [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Creates a new CallCredentials object from properties of both this and
another CallCredentials object. This object's metadata generator will be
called first.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callCredentials` | [*CallCredentials*](grpc.grpc-1.callcredentials.md) | The other CallCredentials object.    |

**Returns:** [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/call-credentials.d.ts:33

___

### generateMetadata

▸ `Abstract`**generateMetadata**(`options`: CallMetadataOptions): *Promise*<[*Metadata*](grpc.grpc-1.metadata.md)\>

Asynchronously generates a new Metadata object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | CallMetadataOptions | Options used in generating the Metadata object.    |

**Returns:** *Promise*<[*Metadata*](grpc.grpc-1.metadata.md)\>

Defined in: node_modules/@grpc/grpc-js/build/src/call-credentials.d.ts:26

___

### createEmpty

▸ `Static`**createEmpty**(): [*CallCredentials*](grpc.grpc-1.callcredentials.md)

**Returns:** [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/call-credentials.d.ts:55

___

### createFromGoogleCredential

▸ `Static`**createFromGoogleCredential**(`googleCredentials`: [*OAuth2Client*](../modules/grpc.grpc-1.md#oauth2client)): [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Create a gRPC credential from a Google credential object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`googleCredentials` | [*OAuth2Client*](../modules/grpc.grpc-1.md#oauth2client) | The authentication client to use.   |

**Returns:** [*CallCredentials*](grpc.grpc-1.callcredentials.md)

The resulting CallCredentials object.

Defined in: node_modules/@grpc/grpc-js/build/src/call-credentials.d.ts:54

___

### createFromMetadataGenerator

▸ `Static`**createFromMetadataGenerator**(`metadataGenerator`: CallMetadataGenerator): [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Creates a new CallCredentials object from a given function that generates
Metadata objects.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`metadataGenerator` | CallMetadataGenerator | A function that accepts a set of options, and generates a Metadata object based on these options, which is passed back to the caller via a supplied (err, metadata) callback.    |

**Returns:** [*CallCredentials*](grpc.grpc-1.callcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/call-credentials.d.ts:48
