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

Defined in: [src/faas/request.ts:18](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L18)

## Properties

### context

• `Private` **context**: [*NitricContext*](faas.nitriccontext.md)

Defined in: [src/faas/request.ts:18](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L18)

___

### path

• `Private` **path**: *string*

Defined in: [src/faas/request.ts:15](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L15)

___

### payload

• `Private` **payload**: *Uint8Array*

Defined in: [src/faas/request.ts:14](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L14)

## Methods

### getBody

▸ **getBody**(): *Uint8Array*

Return the raw body as bytes

**Returns:** *Uint8Array*

Defined in: [src/faas/request.ts:75](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L75)

___

### getContext

▸ **getContext**(): [*NitricContext*](faas.nitriccontext.md)

**Returns:** [*NitricContext*](faas.nitriccontext.md)

Defined in: [src/faas/request.ts:38](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L38)

___

### getObject

▸ **getObject**(): T

Return the typed object, this assumes that the body is JSON
Will throw in the case where the object cannot be correctly serialized...

**Returns:** T

Defined in: [src/faas/request.ts:90](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L90)

___

### getParams

▸ **getParams**(`paramContext?`: *string*): RequestParameters

Will attempt to get parameters for a given request

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`paramContext?` | *string* | E.g. /customers/:customerId    |

**Returns:** RequestParameters

Defined in: [src/faas/request.ts:46](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L46)

___

### getString

▸ **getString**(): *string*

Return the payload as a string

**Returns:** *string*

Defined in: [src/faas/request.ts:82](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L82)

___

### hasBody

▸ **hasBody**(): *boolean*

Does the request contain a body

**Returns:** *boolean*

true when the body is defined and false if the body is undefined or null

Defined in: [src/faas/request.ts:68](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/request.ts#L68)
