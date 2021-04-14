[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / ServerCredentials

# Class: ServerCredentials

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).ServerCredentials

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.servercredentials.md#constructor)

### Methods

- [\_getSettings](grpc.grpc-1.servercredentials.md#_getsettings)
- [\_isSecure](grpc.grpc-1.servercredentials.md#_issecure)
- [createInsecure](grpc.grpc-1.servercredentials.md#createinsecure)
- [createSsl](grpc.grpc-1.servercredentials.md#createssl)

## Constructors

### constructor

\+ **new ServerCredentials**(): [*ServerCredentials*](grpc.grpc-1.servercredentials.md)

**Returns:** [*ServerCredentials*](grpc.grpc-1.servercredentials.md)

## Methods

### \_getSettings

▸ `Abstract`**_getSettings**(): SecureServerOptions

**Returns:** SecureServerOptions

Defined in: node_modules/@grpc/grpc-js/build/src/server-credentials.d.ts:9

___

### \_isSecure

▸ `Abstract`**_isSecure**(): *boolean*

**Returns:** *boolean*

Defined in: node_modules/@grpc/grpc-js/build/src/server-credentials.d.ts:8

___

### createInsecure

▸ `Static`**createInsecure**(): [*ServerCredentials*](grpc.grpc-1.servercredentials.md)

**Returns:** [*ServerCredentials*](grpc.grpc-1.servercredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/server-credentials.d.ts:10

___

### createSsl

▸ `Static`**createSsl**(`rootCerts`: *Buffer*, `keyCertPairs`: [*KeyCertPair*](../interfaces/grpc.grpc-1.keycertpair.md)[], `checkClientCertificate?`: *boolean*): [*ServerCredentials*](grpc.grpc-1.servercredentials.md)

#### Parameters:

Name | Type |
:------ | :------ |
`rootCerts` | *Buffer* |
`keyCertPairs` | [*KeyCertPair*](../interfaces/grpc.grpc-1.keycertpair.md)[] |
`checkClientCertificate?` | *boolean* |

**Returns:** [*ServerCredentials*](grpc.grpc-1.servercredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/server-credentials.d.ts:11
