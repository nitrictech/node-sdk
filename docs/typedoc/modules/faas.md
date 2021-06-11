[@nitric/sdk](../README.md) / faas

# Namespace: faas

## Table of contents

### Classes

- [NitricContext](../classes/faas.nitriccontext.md)
- [NitricRequest](../classes/faas.nitricrequest.md)
- [NitricResponse](../classes/faas.nitricresponse.md)

### Type aliases

- [NitricFunction](faas.md#nitricfunction)
- [NitricSourceType](faas.md#nitricsourcetype)

### Functions

- [start](faas.md#start)

## Type aliases

### NitricFunction

Ƭ **NitricFunction**<P, T\>: (`request`: [*NitricRequest*](../classes/faas.nitricrequest.md)<P\>) => *Promise*<[*NitricResponse*](../classes/faas.nitricresponse.md)<T\>\> \| *Promise*<T\> \| [*NitricResponse*](../classes/faas.nitricresponse.md)<T\> \| T

Function defintion for the Nitric FaaS framework
Can be either sync or async

**`param`** 

#### Type parameters:

Name | Description |
:------ | :------ |
`P` | The type of the payload of the NitricRequest   |
`T` | The return type of the NitricFunction    |

#### Type declaration:

▸ (`request`: [*NitricRequest*](../classes/faas.nitricrequest.md)<P\>): *Promise*<[*NitricResponse*](../classes/faas.nitricresponse.md)<T\>\> \| *Promise*<T\> \| [*NitricResponse*](../classes/faas.nitricresponse.md)<T\> \| T

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*NitricRequest*](../classes/faas.nitricrequest.md)<P\> |

**Returns:** *Promise*<[*NitricResponse*](../classes/faas.nitricresponse.md)<T\>\> \| *Promise*<T\> \| [*NitricResponse*](../classes/faas.nitricresponse.md)<T\> \| T

Defined in: [src/faas/function.ts:25](https://github.com/nitrictech/node-sdk/blob/ca4895b/src/faas/function.ts#L25)

___

### NitricSourceType

Ƭ **NitricSourceType**: *REQUEST* \| *SUBSCRIPTION* \| *UNKNOWN*

Defined in: [src/faas/context.ts:14](https://github.com/nitrictech/node-sdk/blob/ca4895b/src/faas/context.ts#L14)

## Functions

### start

▸ **start**<Request, Response\>(`func`: [*NitricFunction*](faas.md#nitricfunction)<Request, Response\>): *Promise*<Server\>

Starts a nitric function

Example:
```typescript
import { faas } from "@nitric/sdk";

interface Greeting {
  greeting?: string;
	 name: string;
}

async function handler(request: faas.NitricRequest<Greeting>): Promise<faas.NitricResponse<string>> {
	 const { name, greeting = "hello" } = request.getObject();

	 return `${greeting} ${name}!`;
}

faas.start(handler);
```

#### Type parameters:

Name | Default | Description |
:------ | :------ | :------ |
`Request` | *any* | The contents of the provided nitric request   |
`Response` | *any* | The type the function handler returns    |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`func` | [*NitricFunction*](faas.md#nitricfunction)<Request, Response\> | The function handler see [NitricFunction](faas.md#nitricfunction)   |

**Returns:** *Promise*<Server\>

Defined in: [src/faas/start.ts:47](https://github.com/nitrictech/node-sdk/blob/ca4895b/src/faas/start.ts#L47)
