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

Defined in: [src/faas/context.ts:20](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/faas/context.ts#L20)

## Properties

### payloadType

• `Readonly` **payloadType**: *string*

Defined in: [src/faas/context.ts:20](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/faas/context.ts#L20)

___

### requestId

• `Readonly` **requestId**: *string*

Defined in: [src/faas/context.ts:17](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/faas/context.ts#L17)

___

### source

• `Readonly` **source**: *string*

Defined in: [src/faas/context.ts:18](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/faas/context.ts#L18)

___

### sourceType

• `Readonly` **sourceType**: [*NitricSourceType*](../modules/faas.md#nitricsourcetype)

Defined in: [src/faas/context.ts:19](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/faas/context.ts#L19)

## Methods

### fromHeaders

▸ `Static`**fromHeaders**(`headers`: *Record*<string, string\>): [*NitricContext*](faas.nitriccontext.md)

#### Parameters:

Name | Type |
:------ | :------ |
`headers` | *Record*<string, string\> |

**Returns:** [*NitricContext*](faas.nitriccontext.md)

Defined in: [src/faas/context.ts:33](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/faas/context.ts#L33)
