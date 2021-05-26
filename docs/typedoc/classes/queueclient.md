[@nitric/sdk](../README.md) / QueueClient

# Class: QueueClient

Nitric queue client, facilitates pushing and popping to distributed queues.

## Table of contents

### Constructors

- [constructor](queueclient.md#constructor)

### Properties

- [grpcClient](queueclient.md#grpcclient)

### Methods

- [complete](queueclient.md#complete)
- [receive](queueclient.md#receive)
- [send](queueclient.md#send)
- [sendBatch](queueclient.md#sendbatch)

## Constructors

### constructor

\+ **new QueueClient**(): [*QueueClient*](queueclient.md)

**Returns:** [*QueueClient*](queueclient.md)

Defined in: [src/api/queue/queue.ts:43](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/queue/queue.ts#L43)

## Properties

### grpcClient

• `Private` **grpcClient**: [*QueueClient*](grpc.queue.queueclient.md)

Defined in: [src/api/queue/queue.ts:43](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/queue/queue.ts#L43)

## Methods

### complete

▸ **complete**(`queueName`: *string*, `task`: Task): *Promise*<void\>

Marks a queue item as successfully completed and removes it from the queue.

#### Parameters:

Name | Type |
:------ | :------ |
`queueName` | *string* |
`task` | Task |

**Returns:** *Promise*<void\>

A void promise

Example:
```typescript
import { QueueClient } from "@nitric/sdk"

const client = new QueueClient();

const [task] = await client.receive("my-queue");

// do something with task

// complete the task
client.complete("my-queue", task);
```

Defined in: [src/api/queue/queue.ts:218](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/queue/queue.ts#L218)

___

### receive

▸ **receive**(`queueName`: *string*, `depth?`: *number*): *Promise*<Task[]\>

Pop 1 or more queue items from the specified queue up to the depth limit.

Nitric Tasks are leased for a limited period of time, where they may be worked on.
Once complete or failed they must be acknowledged using request specified leaseId.

If the lease on a queue item expires before it is acknowledged or the lease is extended the task will be returned to the queue for reprocessing.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | the Nitric name for the queue. This will be automatically resolved to the provider specific queue identifier.   |
`depth?` | *number* | the maximum number of items to return. Default 1, Min 1.   |

**Returns:** *Promise*<Task[]\>

The list of recieved tasks

Example:
```typescript
import { QueueClient } from "@nitric/sdk"

const client = new QueueClient();

const [task] = await client.receive("my-queue");

// do something with task
```

Defined in: [src/api/queue/queue.ts:166](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/queue/queue.ts#L166)

___

### send

▸ **send**(`queueName`: *string*, `task`: Task): *Promise*<void\>

Send an task to a queue, which can be retrieved by other services.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | the of the queue to publish to   |
`task` | Task | the task to push to the queue   |

**Returns:** *Promise*<void\>

A void promise

Example:
```typescript
import { QueueClient } from "@nitric/sdk";

const client = new QueueClient();

await client.send("my-queue", {
  id: "1234";
  payloadType: "my-payload";
  payload: {
    value: "test"
  };
});
```

Defined in: [src/api/queue/queue.ts:74](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/queue/queue.ts#L74)

___

### sendBatch

▸ **sendBatch**(`queueName`: *string*, `tasks`: Task[]): *Promise*<FailedMessage[]\>

Send a collection of tasks to a queue, which can be retrieved by other services.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | the of the queue to publish to   |
`tasks` | Task[] | the tasks to push to the queue   |

**Returns:** *Promise*<FailedMessage[]\>

a list containing details of any messages that failed to publish.

Example:
```typescript
import { QueueClient } from "@nitric/sdk"

const client = new QueueClient();

const failedTasks = await client.sendBatch("my-queue", [{
  payloadType: "my-payload";
  payload: {
    value: "test"
  };
}]);

// do something with failedTasks
// console.log(failedTasks);
```

Defined in: [src/api/queue/queue.ts:115](https://github.com/nitrictech/node-sdk/blob/0f12f43/src/api/queue/queue.ts#L115)
