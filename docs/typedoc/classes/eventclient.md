[@nitric/sdk](../README.md) / EventClient

# Class: EventClient

EventClient

Used to publish events to nitric topics

## Table of contents

### Constructors

- [constructor](eventclient.md#constructor)

### Properties

- [grpcClient](eventclient.md#grpcclient)

### Methods

- [publish](eventclient.md#publish)

## Constructors

### constructor

\+ **new EventClient**(): [*EventClient*](eventclient.md)

**Returns:** [*EventClient*](eventclient.md)

Defined in: [src/api/event/event.ts:26](https://github.com/nitrictech/node-sdk/blob/c7411df/src/api/event/event.ts#L26)

## Properties

### grpcClient

• `Private` **grpcClient**: [*EventClient*](grpc.event.eventclient.md)

Defined in: [src/api/event/event.ts:26](https://github.com/nitrictech/node-sdk/blob/c7411df/src/api/event/event.ts#L26)

## Methods

### publish

▸ **publish**(`topic`: *string*, `__namedParameters`: NitricEvent): *Promise*<string\>

Publishes an event to a nitric topic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | The topic to publish to   |
`__namedParameters` | NitricEvent | - |

**Returns:** *Promise*<string\>

The unique id of the event (if one was not provided it will be generated)

Example:
```typescript
import { EventClient } from "@nitric/sdk";

async function publishEvent(): string {
  const client = new EventClient("my-topic", {
    payloadType: "my-payload",
    payload: {
      value: "Hello World!"
    }
  });

  const requestId = await client.publish();

  return requestId;
}
```

Defined in: [src/api/event/event.ts:59](https://github.com/nitrictech/node-sdk/blob/c7411df/src/api/event/event.ts#L59)
