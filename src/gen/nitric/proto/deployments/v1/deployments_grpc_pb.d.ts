// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.deployments.v1
// file: nitric/proto/deployments/v1/deployments.proto

import * as nitric_proto_deployments_v1_deployments_pb from "../../../../nitric/proto/deployments/v1/deployments_pb";
import * as grpc from "@grpc/grpc-js";

interface IDeployService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  up: grpc.MethodDefinition<nitric_proto_deployments_v1_deployments_pb.DeployUpRequest, nitric_proto_deployments_v1_deployments_pb.DeployUpEvent>;
  down: grpc.MethodDefinition<nitric_proto_deployments_v1_deployments_pb.DeployDownRequest, nitric_proto_deployments_v1_deployments_pb.DeployDownEvent>;
}

export const DeployService: IDeployService;

export interface IDeployServer extends grpc.UntypedServiceImplementation {
  up: grpc.handleServerStreamingCall<nitric_proto_deployments_v1_deployments_pb.DeployUpRequest, nitric_proto_deployments_v1_deployments_pb.DeployUpEvent>;
  down: grpc.handleServerStreamingCall<nitric_proto_deployments_v1_deployments_pb.DeployDownRequest, nitric_proto_deployments_v1_deployments_pb.DeployDownEvent>;
}

export class DeployClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  up(argument: nitric_proto_deployments_v1_deployments_pb.DeployUpRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeployUpEvent>;
  up(argument: nitric_proto_deployments_v1_deployments_pb.DeployUpRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeployUpEvent>;
  down(argument: nitric_proto_deployments_v1_deployments_pb.DeployDownRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeployDownEvent>;
  down(argument: nitric_proto_deployments_v1_deployments_pb.DeployDownRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeployDownEvent>;
}
