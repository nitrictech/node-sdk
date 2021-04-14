[@nitric/sdk](../README.md) / [faas](../modules/faas.md) / NitricContext

# Class: NitricContext

[faas](../modules/faas.md).NitricContext

## Table of contents

### Constructors

- [constructor](faas.nitriccontext.md#constructor)

### Properties

- [payloadType](faas.nitriccontext.md#payloadtype)
- [requestId](faas.nitriccontext.md#requestid)
- [source](faas.nitriccontext.md#source)
- [sourceType](faas.nitriccontext.md#sourcetype)

### Methods

- [fromHeaders](faas.nitriccontext.md#fromheaders)

## Constructors

### constructor

\+ **new NitricContext**(`requestId`: *string*, `source`: *string*, `sourceType`: [*NitricSourceType*](../modules/faas.md#nitricsourcetype), `payloadType`: *string*): [*NitricContext*](faas.nitriccontext.md)

#### Parameters:

Name | Type |
:------ | :------ |
`requestId` | *string* |
`source` | *string* |
`sourceType` | [*NitricSourceType*](../modules/faas.md#nitricsourcetype) |
`payloadType` | *string* |

**Returns:** [*NitricContext*](faas.nitriccontext.md)

Defined in: [src/faas/context.ts:7](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/context.ts#L7)

## Properties

### payloadType

• `Readonly` **payloadType**: *string*

Defined in: [src/faas/context.ts:7](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/context.ts#L7)

___

### requestId

• `Readonly` **requestId**: *string*

Defined in: [src/faas/context.ts:4](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/context.ts#L4)

___

### source

• `Readonly` **source**: *string*

Defined in: [src/faas/context.ts:5](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/context.ts#L5)

___

### sourceType

• `Readonly` **sourceType**: [*NitricSourceType*](../modules/faas.md#nitricsourcetype)

Defined in: [src/faas/context.ts:6](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/context.ts#L6)

## Methods

### fromHeaders

▸ `Static`**fromHeaders**(`headers`: *Record*<string, string\>): [*NitricContext*](faas.nitriccontext.md)

#### Parameters:

Name | Type |
:------ | :------ |
`headers` | *Record*<string, string\> |

**Returns:** [*NitricContext*](faas.nitriccontext.md)

Defined in: [src/faas/context.ts:16](https://github.com/nitrictech/node-sdk/blob/6836675/src/faas/context.ts#L16)
