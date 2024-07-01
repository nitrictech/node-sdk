// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.batch.v1
// file: nitric/proto/batch/v1/batch.proto

import * as nitric_proto_batch_v1_batch_pb from "../../../../nitric/proto/batch/v1/batch_pb";
import * as grpc from "@grpc/grpc-js";

interface IBatchService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createJob: grpc.MethodDefinition<nitric_proto_batch_v1_batch_pb.CreateJobRequest, nitric_proto_batch_v1_batch_pb.CreateJobResponse>;
}

export const BatchService: IBatchService;

export interface IBatchServer extends grpc.UntypedServiceImplementation {
  createJob: grpc.handleUnaryCall<nitric_proto_batch_v1_batch_pb.CreateJobRequest, nitric_proto_batch_v1_batch_pb.CreateJobResponse>;
}

export class BatchClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createJob(argument: nitric_proto_batch_v1_batch_pb.CreateJobRequest, callback: grpc.requestCallback<nitric_proto_batch_v1_batch_pb.CreateJobResponse>): grpc.ClientUnaryCall;
  createJob(argument: nitric_proto_batch_v1_batch_pb.CreateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_batch_v1_batch_pb.CreateJobResponse>): grpc.ClientUnaryCall;
  createJob(argument: nitric_proto_batch_v1_batch_pb.CreateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_batch_v1_batch_pb.CreateJobResponse>): grpc.ClientUnaryCall;
}
