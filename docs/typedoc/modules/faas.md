[@nitric/sdk](../README.md) / faas

# Namespace: faas

## Table of contents

### Classes

- [HttpTriggerContext](../classes/faas.httptriggercontext.md)
- [NitricTrigger](../classes/faas.nitrictrigger.md)
- [NitricTriggerContext](../classes/faas.nitrictriggercontext.md)
- [Response](../classes/faas.response.md)
- [TopicTriggerContext](../classes/faas.topictriggercontext.md)

### Type aliases

- [NitricFunction](faas.md#nitricfunction)

### Functions

- [start](faas.md#start)

## Type aliases

### NitricFunction

Ƭ **NitricFunction**<P, T\>: (`trigger`: [*NitricTrigger*](../classes/faas.nitrictrigger.md)<P\>) => *Promise*<T\> \| T \| *Promise*<[*Response*](../classes/faas.response.md)<T\>\> \| [*Response*](../classes/faas.response.md)<T\>

Function defintion for the Nitric FaaS framework
Can be either sync or async

**`param`** 

#### Type parameters:

Name | Type | Description |
:------ | :------ | :------ |
`P` | - | The type of the payload of the NitricRequest   |
`T` | ResponseData | The return type of the NitricFunction    |

#### Type declaration:

▸ (`trigger`: [*NitricTrigger*](../classes/faas.nitrictrigger.md)<P\>): *Promise*<T\> \| T \| *Promise*<[*Response*](../classes/faas.response.md)<T\>\> \| [*Response*](../classes/faas.response.md)<T\>

#### Parameters:

Name | Type |
:------ | :------ |
`trigger` | [*NitricTrigger*](../classes/faas.nitrictrigger.md)<P\> |

**Returns:** *Promise*<T\> \| T \| *Promise*<[*Response*](../classes/faas.response.md)<T\>\> \| [*Response*](../classes/faas.response.md)<T\>

Defined in: [src/faas/function.ts:27](https://github.com/nitrictech/node-sdk/blob/1f868fd/src/faas/function.ts#L27)

## Functions

### start

▸ **start**<Req, Resp\>(`func`: [*NitricFunction*](faas.md#nitricfunction)<Req, Resp\>): *Promise*<void\>

Starts a nitric function

Example:
```typescript
import { faas } from "@nitric/sdk";

interface Greeting {
  greeting?: string;
	 name: string;
}

async function handler(request: faas.NitricRequest<Greeting>): Promise<string> {
	 const { name, greeting = "hello" } = request.dataAsObject();

	 return `${greeting} ${name}!`;
}

faas.start(handler);
```

**`typeparam`** The contents of the provided nitric request

**`typeparam`** The type the function handler returns

#### Type parameters:

Name | Default |
:------ | :------ |
`Req` | *any* |
`Resp` | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`func` | [*NitricFunction*](faas.md#nitricfunction)<Req, Resp\> | The function handler see [NitricFunction](faas.md#nitricfunction)   |

**Returns:** *Promise*<void\>

Defined in: [src/faas/start.ts:48](https://github.com/nitrictech/node-sdk/blob/1f868fd/src/faas/start.ts#L48)
