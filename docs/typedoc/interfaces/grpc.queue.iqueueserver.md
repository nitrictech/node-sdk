[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [queue](../modules/grpc.queue.md) / IQueueServer

# Interface: IQueueServer

[grpc](../modules/grpc.md).[queue](../modules/grpc.queue.md).IQueueServer

## Hierarchy

* [*UntypedServiceImplementation*](grpc.grpc-1.untypedserviceimplementation.md)

  ↳ **IQueueServer**

## Table of contents

### Properties

- [complete](grpc.queue.iqueueserver.md#complete)
- [receive](grpc.queue.iqueueserver.md#receive)
- [send](grpc.queue.iqueueserver.md#send)
- [sendBatch](grpc.queue.iqueueserver.md#sendbatch)

## Properties

### complete

• **complete**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*QueueCompleteRequest*](../classes/grpc.queue.queuecompleterequest-1.md), [*QueueCompleteResponse*](../classes/grpc.queue.queuecompleteresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:22

___

### receive

• **receive**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*QueueReceiveRequest*](../classes/grpc.queue.queuereceiverequest-1.md), [*QueueReceiveResponse*](../classes/grpc.queue.queuereceiveresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:21

___

### send

• **send**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*QueueSendRequest*](../classes/grpc.queue.queuesendrequest-1.md), [*QueueSendResponse*](../classes/grpc.queue.queuesendresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:19

___

### sendBatch

• **sendBatch**: [*handleUnaryCall*](../modules/grpc.grpc-1.md#handleunarycall)<[*QueueSendBatchRequest*](../classes/grpc.queue.queuesendbatchrequest-1.md), [*QueueSendBatchResponse*](../classes/grpc.queue.queuesendbatchresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:20
