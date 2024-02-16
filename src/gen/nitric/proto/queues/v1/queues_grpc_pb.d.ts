// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.queues.v1
// file: nitric/proto/queues/v1/queues.proto

import * as nitric_proto_queues_v1_queues_pb from "../../../../nitric/proto/queues/v1/queues_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueuesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  enqueue: grpc.MethodDefinition<nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest, nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse>;
  dequeue: grpc.MethodDefinition<nitric_proto_queues_v1_queues_pb.QueueDequeueRequest, nitric_proto_queues_v1_queues_pb.QueueDequeueResponse>;
  complete: grpc.MethodDefinition<nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>;
}

export const QueuesService: IQueuesService;

export interface IQueuesServer extends grpc.UntypedServiceImplementation {
  enqueue: grpc.handleUnaryCall<nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest, nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse>;
  dequeue: grpc.handleUnaryCall<nitric_proto_queues_v1_queues_pb.QueueDequeueRequest, nitric_proto_queues_v1_queues_pb.QueueDequeueResponse>;
  complete: grpc.handleUnaryCall<nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>;
}

export class QueuesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  enqueue(argument: nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse>): grpc.ClientUnaryCall;
  enqueue(argument: nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse>): grpc.ClientUnaryCall;
  enqueue(argument: nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse>): grpc.ClientUnaryCall;
  dequeue(argument: nitric_proto_queues_v1_queues_pb.QueueDequeueRequest, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueDequeueResponse>): grpc.ClientUnaryCall;
  dequeue(argument: nitric_proto_queues_v1_queues_pb.QueueDequeueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueDequeueResponse>): grpc.ClientUnaryCall;
  dequeue(argument: nitric_proto_queues_v1_queues_pb.QueueDequeueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueDequeueResponse>): grpc.ClientUnaryCall;
  complete(argument: nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
}
