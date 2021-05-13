[@nitric/sdk](../README.md) / [faas](../modules/faas.md) / NitricRequest

# Class: NitricRequest<T\>

[faas](../modules/faas.md).NitricRequest

The representation of a NitricRequest to be passed to a [NitricFunction](../modules/faas.md#nitricfunction)

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Constructors

- [constructor](faas.nitricrequest.md#constructor)

### Properties

- [context](faas.nitricrequest.md#context)
- [path](faas.nitricrequest.md#path)
- [payload](faas.nitricrequest.md#payload)

### Methods

- [getBody](faas.nitricrequest.md#getbody)
- [getContext](faas.nitricrequest.md#getcontext)
- [getObject](faas.nitricrequest.md#getobject)
- [getParams](faas.nitricrequest.md#getparams)
- [getString](faas.nitricrequest.md#getstring)
- [hasBody](faas.nitricrequest.md#hasbody)

## Constructors

### constructor

\+ **new NitricRequest**<T\>(`headers`: *Record*<string, string\>, `payload?`: *Uint8Array*, `path?`: *string*): [*NitricRequest*](faas.nitricrequest.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`headers` | *Record*<string, string\> |
`payload?` | *Uint8Array* |
`path?` | *string* |

**Returns:** [*NitricRequest*](faas.nitricrequest.md)<T\>

Defined in: [src/faas/request.ts:31](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L31)

## Properties

### context

• `Private` **context**: [*NitricContext*](faas.nitriccontext.md)

Defined in: [src/faas/request.ts:31](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L31)

___

### path

• `Private` **path**: *string*

Defined in: [src/faas/request.ts:28](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L28)

___

### payload

• `Private` **payload**: *Uint8Array*

Defined in: [src/faas/request.ts:27](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L27)

## Methods

### getBody

▸ **getBody**(): *Uint8Array*

Return the raw body as bytes

**Returns:** *Uint8Array*

Defined in: [src/faas/request.ts:90](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L90)

___

### getContext

▸ **getContext**(): [*NitricContext*](faas.nitriccontext.md)

**Returns:** [*NitricContext*](faas.nitriccontext.md)

Defined in: [src/faas/request.ts:55](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L55)

___

### getObject

▸ **getObject**(): T

Return the typed object, this assumes that the body is JSON
Will throw in the case where the object cannot be correctly serialized...

**Returns:** T

Defined in: [src/faas/request.ts:105](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L105)

___

### getParams

▸ **getParams**(`paramContext?`: *string*): RequestParameters

Will attempt to get parameters for a given request

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`paramContext?` | *string* | E.g. /customers/:customerId    |

**Returns:** RequestParameters

Defined in: [src/faas/request.ts:63](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L63)

___

### getString

▸ **getString**(): *string*

Return the payload as a string

**Returns:** *string*

Defined in: [src/faas/request.ts:97](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L97)

___

### hasBody

▸ **hasBody**(): *boolean*

Does the request contain a body

**Returns:** *boolean*

true when the body is defined and false if the body is undefined or null

Defined in: [src/faas/request.ts:83](https://github.com/nitrictech/node-sdk/blob/0bd29fc/src/faas/request.ts#L83)
