// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.batch.v1
// file: nitric/proto/batch/v1/batch.proto

import * as nitric_proto_batch_v1_batch_pb from "../../../../nitric/proto/batch/v1/batch_pb";
import * as grpc from "@grpc/grpc-js";

interface IJobService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  handleJob: grpc.MethodDefinition<nitric_proto_batch_v1_batch_pb.ClientMessage, nitric_proto_batch_v1_batch_pb.ServerMessage>;
}

export const JobService: IJobService;

export interface IJobServer extends grpc.UntypedServiceImplementation {
  handleJob: grpc.handleBidiStreamingCall<nitric_proto_batch_v1_batch_pb.ClientMessage, nitric_proto_batch_v1_batch_pb.ServerMessage>;
}

export class JobClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  handleJob(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_batch_v1_batch_pb.ClientMessage, nitric_proto_batch_v1_batch_pb.ServerMessage>;
  handleJob(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_batch_v1_batch_pb.ClientMessage, nitric_proto_batch_v1_batch_pb.ServerMessage>;
}

interface IBatchService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  submitJob: grpc.MethodDefinition<nitric_proto_batch_v1_batch_pb.JobSubmitRequest, nitric_proto_batch_v1_batch_pb.JobSubmitResponse>;
}

export const BatchService: IBatchService;

export interface IBatchServer extends grpc.UntypedServiceImplementation {
  submitJob: grpc.handleUnaryCall<nitric_proto_batch_v1_batch_pb.JobSubmitRequest, nitric_proto_batch_v1_batch_pb.JobSubmitResponse>;
}

export class BatchClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  submitJob(argument: nitric_proto_batch_v1_batch_pb.JobSubmitRequest, callback: grpc.requestCallback<nitric_proto_batch_v1_batch_pb.JobSubmitResponse>): grpc.ClientUnaryCall;
  submitJob(argument: nitric_proto_batch_v1_batch_pb.JobSubmitRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_batch_v1_batch_pb.JobSubmitResponse>): grpc.ClientUnaryCall;
  submitJob(argument: nitric_proto_batch_v1_batch_pb.JobSubmitRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_batch_v1_batch_pb.JobSubmitResponse>): grpc.ClientUnaryCall;
}
