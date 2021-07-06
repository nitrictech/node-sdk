[@nitric/sdk](../README.md) / TopicClient

# Class: TopicClient

Nitric client for managing topics

## Table of contents

### Constructors

- [constructor](topicclient.md#constructor)

### Properties

- [grpcClient](topicclient.md#grpcclient)

### Methods

- [list](topicclient.md#list)

## Constructors

### constructor

\+ **new TopicClient**(): [*TopicClient*](topicclient.md)

**Returns:** [*TopicClient*](topicclient.md)

Defined in: [src/api/topic/topic.ts:22](https://github.com/nitrictech/node-sdk/blob/537936d/src/api/topic/topic.ts#L22)

## Properties

### grpcClient

• `Private` **grpcClient**: [*TopicClient*](grpc.event.topicclient.md)

Defined in: [src/api/topic/topic.ts:22](https://github.com/nitrictech/node-sdk/blob/537936d/src/api/topic/topic.ts#L22)

## Methods

### list

▸ **list**(): *Promise*<string[]\>

List available nitric topics

**`retuns`** A promise containing the list of available nitric topics

Example:
```typescript
import { TopicClient } from "@nitric/sdk";

const client = new TopicClient();

const topics = await client.list();

// TODO: Do something with topics
```

**Returns:** *Promise*<string[]\>

Defined in: [src/api/topic/topic.ts:47](https://github.com/nitrictech/node-sdk/blob/537936d/src/api/topic/topic.ts#L47)
