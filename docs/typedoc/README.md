@nitric/sdk

# @nitric/sdk

## Table of contents

### Namespaces

- [faas](modules/faas.md)
- [grpc](modules/grpc.md)

### Classes

- [Documents](classes/documents.md)
- [Eventing](classes/eventing.md)
- [Queue](classes/queue.md)
- [Queueing](classes/queueing.md)
- [ReceivedTask](classes/receivedtask.md)
- [Storage](classes/storage.md)
- [Topic](classes/topic.md)

### Functions

- [documents](README.md#documents)
- [events](README.md#events)
- [queues](README.md#queues)
- [storage](README.md#storage)

## Functions

### documents

▸ `Const`**documents**(): *any*

Documents

**`example`** 
```typescript
import { documents } from "@nitric/sdk";

async function setCustomer() {
 const collection = documents().collection('customers');

 collection.doc('id').set({
   name: 'David',
 });
}
```

**Returns:** *any*

a Documents API client.

Defined in: [src/api/documents/documents.ts:64](https://github.com/nitrictech/node-sdk/blob/b6b885f/src/api/documents/documents.ts#L64)

___

### events

▸ `Const`**events**(): *any*

Events

**`example`** 
```typescript
import { events } from "@nitric/sdk";

async function publishEvent() {
 const topic = events().topic('notifications');

 await topic.publish({
   payload: {
    amazing: 'thing happened!',
   },
 });

 return 'Successfully published notification';
}
```

**Returns:** *any*

an Events API client.

Defined in: [src/api/events/events.ts:182](https://github.com/nitrictech/node-sdk/blob/b6b885f/src/api/events/events.ts#L182)

___

### queues

▸ `Const`**queues**(): *any*

Queues

**`example`** 
```typescript
import { queues } from "@nitric/sdk";

async function publishToQueue() {
 await queues()
 .queue('my-queue')
 .send({
   payload: {
     example: 'payload',
   },
 });
}
```

**Returns:** *any*

a Queues API client.

Defined in: [src/api/queues/queues.ts:311](https://github.com/nitrictech/node-sdk/blob/b6b885f/src/api/queues/queues.ts#L311)

___

### storage

▸ `Const`**storage**(): *any*

Storage

**`example`** 
```typescript
import { storage } from "@nitric/sdk";

async function writeToStorage() {
 const bucket = storage().bucket('bucket');
 const file = bucket.file('test-file');
 await file.write(contents)
}
```

**Returns:** *any*

a Storage API client.

Defined in: [src/api/storage/storage.ts:181](https://github.com/nitrictech/node-sdk/blob/b6b885f/src/api/storage/storage.ts#L181)
