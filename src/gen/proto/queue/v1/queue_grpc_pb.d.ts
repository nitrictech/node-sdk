// GENERATED CODE -- DO NOT EDIT!

// package: nitric.queue.v1
// file: proto/queue/v1/queue.proto

import * as proto_queue_v1_queue_pb from "../../../proto/queue/v1/queue_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueueServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  send: grpc.MethodDefinition<proto_queue_v1_queue_pb.QueueSendRequest, proto_queue_v1_queue_pb.QueueSendResponse>;
  sendBatch: grpc.MethodDefinition<proto_queue_v1_queue_pb.QueueSendBatchRequest, proto_queue_v1_queue_pb.QueueSendBatchResponse>;
  receive: grpc.MethodDefinition<proto_queue_v1_queue_pb.QueueReceiveRequest, proto_queue_v1_queue_pb.QueueReceiveResponse>;
  complete: grpc.MethodDefinition<proto_queue_v1_queue_pb.QueueCompleteRequest, proto_queue_v1_queue_pb.QueueCompleteResponse>;
}

export const QueueServiceService: IQueueServiceService;

export interface IQueueServiceServer extends grpc.UntypedServiceImplementation {
  send: grpc.handleUnaryCall<proto_queue_v1_queue_pb.QueueSendRequest, proto_queue_v1_queue_pb.QueueSendResponse>;
  sendBatch: grpc.handleUnaryCall<proto_queue_v1_queue_pb.QueueSendBatchRequest, proto_queue_v1_queue_pb.QueueSendBatchResponse>;
  receive: grpc.handleUnaryCall<proto_queue_v1_queue_pb.QueueReceiveRequest, proto_queue_v1_queue_pb.QueueReceiveResponse>;
  complete: grpc.handleUnaryCall<proto_queue_v1_queue_pb.QueueCompleteRequest, proto_queue_v1_queue_pb.QueueCompleteResponse>;
}

export class QueueServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  send(argument: proto_queue_v1_queue_pb.QueueSendRequest, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueSendResponse>): grpc.ClientUnaryCall;
  send(argument: proto_queue_v1_queue_pb.QueueSendRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueSendResponse>): grpc.ClientUnaryCall;
  send(argument: proto_queue_v1_queue_pb.QueueSendRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueSendResponse>): grpc.ClientUnaryCall;
  sendBatch(argument: proto_queue_v1_queue_pb.QueueSendBatchRequest, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueSendBatchResponse>): grpc.ClientUnaryCall;
  sendBatch(argument: proto_queue_v1_queue_pb.QueueSendBatchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueSendBatchResponse>): grpc.ClientUnaryCall;
  sendBatch(argument: proto_queue_v1_queue_pb.QueueSendBatchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueSendBatchResponse>): grpc.ClientUnaryCall;
  receive(argument: proto_queue_v1_queue_pb.QueueReceiveRequest, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueReceiveResponse>): grpc.ClientUnaryCall;
  receive(argument: proto_queue_v1_queue_pb.QueueReceiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueReceiveResponse>): grpc.ClientUnaryCall;
  receive(argument: proto_queue_v1_queue_pb.QueueReceiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueReceiveResponse>): grpc.ClientUnaryCall;
  complete(argument: proto_queue_v1_queue_pb.QueueCompleteRequest, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: proto_queue_v1_queue_pb.QueueCompleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: proto_queue_v1_queue_pb.QueueCompleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_queue_v1_queue_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
}
