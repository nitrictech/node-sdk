[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [queue](../modules/grpc.queue.md) / IQueueService

# Interface: IQueueService

[grpc](../modules/grpc.md).[queue](../modules/grpc.queue.md).IQueueService

## Hierarchy

* [*ServiceDefinition*](../modules/grpc.grpc-1.md#servicedefinition)<[*UntypedServiceImplementation*](grpc.grpc-1.untypedserviceimplementation.md)\>

  ↳ **IQueueService**

## Table of contents

### Properties

- [complete](grpc.queue.iqueueservice.md#complete)
- [receive](grpc.queue.iqueueservice.md#receive)
- [send](grpc.queue.iqueueservice.md#send)
- [sendBatch](grpc.queue.iqueueservice.md#sendbatch)

## Properties

### complete

• **complete**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*QueueCompleteRequest*](../classes/grpc.queue.queuecompleterequest-1.md), [*QueueCompleteResponse*](../classes/grpc.queue.queuecompleteresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:13

___

### receive

• **receive**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*QueueReceiveRequest*](../classes/grpc.queue.queuereceiverequest-1.md), [*QueueReceiveResponse*](../classes/grpc.queue.queuereceiveresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:12

___

### send

• **send**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*QueueSendRequest*](../classes/grpc.queue.queuesendrequest-1.md), [*QueueSendResponse*](../classes/grpc.queue.queuesendresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:10

___

### sendBatch

• **sendBatch**: [*MethodDefinition*](grpc.grpc-1.methoddefinition.md)<[*QueueSendBatchRequest*](../classes/grpc.queue.queuesendbatchrequest-1.md), [*QueueSendBatchResponse*](../classes/grpc.queue.queuesendbatchresponse-1.md)\>

Defined in: src/interfaces/queue/v1/queue_grpc_pb.d.ts:11
