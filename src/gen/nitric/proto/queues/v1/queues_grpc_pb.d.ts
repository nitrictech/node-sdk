// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.queues.v1
// file: nitric/proto/queues/v1/queues.proto

import * as nitric_proto_queues_v1_queues_pb from "../../../../nitric/proto/queues/v1/queues_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueuesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  send: grpc.MethodDefinition<nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch, nitric_proto_queues_v1_queues_pb.QueueSendResponse>;
  receive: grpc.MethodDefinition<nitric_proto_queues_v1_queues_pb.QueueReceiveRequest, nitric_proto_queues_v1_queues_pb.QueueReceiveResponse>;
  complete: grpc.MethodDefinition<nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>;
}

export const QueuesService: IQueuesService;

export interface IQueuesServer extends grpc.UntypedServiceImplementation {
  send: grpc.handleUnaryCall<nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch, nitric_proto_queues_v1_queues_pb.QueueSendResponse>;
  receive: grpc.handleUnaryCall<nitric_proto_queues_v1_queues_pb.QueueReceiveRequest, nitric_proto_queues_v1_queues_pb.QueueReceiveResponse>;
  complete: grpc.handleUnaryCall<nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>;
}

export class QueuesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  send(argument: nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueSendResponse>): grpc.ClientUnaryCall;
  send(argument: nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueSendResponse>): grpc.ClientUnaryCall;
  send(argument: nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueSendResponse>): grpc.ClientUnaryCall;
  receive(argument: nitric_proto_queues_v1_queues_pb.QueueReceiveRequest, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueReceiveResponse>): grpc.ClientUnaryCall;
  receive(argument: nitric_proto_queues_v1_queues_pb.QueueReceiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueReceiveResponse>): grpc.ClientUnaryCall;
  receive(argument: nitric_proto_queues_v1_queues_pb.QueueReceiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueReceiveResponse>): grpc.ClientUnaryCall;
  complete(argument: nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
  complete(argument: nitric_proto_queues_v1_queues_pb.QueueCompleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_queues_v1_queues_pb.QueueCompleteResponse>): grpc.ClientUnaryCall;
}
