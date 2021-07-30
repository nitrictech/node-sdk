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
- [Secrets](classes/secrets.md)
- [Storage](classes/storage.md)
- [Topic](classes/topic.md)

### Functions

- [documents](README.md#documents)
- [events](README.md#events)
- [queues](README.md#queues)
- [secrets](README.md#secrets)
- [storage](README.md#storage)

## Functions

### documents

▸ `Const`**documents**(): [*Documents*](classes/documents.md)

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

**Returns:** [*Documents*](classes/documents.md)

a Documents API client.

Defined in: [src/api/documents/documents.ts:64](https://github.com/nitrictech/node-sdk/blob/43f5f10/src/api/documents/documents.ts#L64)

___

### events

▸ `Const`**events**(): [*Eventing*](classes/eventing.md)

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

**Returns:** [*Eventing*](classes/eventing.md)

an Events API client.

Defined in: [src/api/events/events.ts:182](https://github.com/nitrictech/node-sdk/blob/43f5f10/src/api/events/events.ts#L182)

___

### queues

▸ `Const`**queues**(): [*Queueing*](classes/queueing.md)

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

**Returns:** [*Queueing*](classes/queueing.md)

a Queues API client.

Defined in: [src/api/queues/queues.ts:311](https://github.com/nitrictech/node-sdk/blob/43f5f10/src/api/queues/queues.ts#L311)

___

### secrets

▸ `Const`**secrets**(): *any*

Secrets

**`example`** 
```typescript
import { secrets } from "@nitric/sdk";

async function getSecret() {
 const secret = secrets().secret('secret');
 const version = secret.latest();
 const content = await version.access();
}
```

**Returns:** *any*

a Secrets API client.

Defined in: [src/api/secrets/secrets.ts:291](https://github.com/nitrictech/node-sdk/blob/43f5f10/src/api/secrets/secrets.ts#L291)

___

### storage

▸ `Const`**storage**(): [*Storage*](classes/storage.md)

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

**Returns:** [*Storage*](classes/storage.md)

a Storage API client.

Defined in: [src/api/storage/storage.ts:181](https://github.com/nitrictech/node-sdk/blob/43f5f10/src/api/storage/storage.ts#L181)
