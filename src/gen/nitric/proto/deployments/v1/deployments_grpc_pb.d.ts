// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.deployments.v1
// file: nitric/proto/deployments/v1/deployments.proto

import * as nitric_proto_deployments_v1_deployments_pb from "../../../../nitric/proto/deployments/v1/deployments_pb";
import * as grpc from "@grpc/grpc-js";

interface IDeploymentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  up: grpc.MethodDefinition<nitric_proto_deployments_v1_deployments_pb.DeploymentUpRequest, nitric_proto_deployments_v1_deployments_pb.DeploymentUpEvent>;
  down: grpc.MethodDefinition<nitric_proto_deployments_v1_deployments_pb.DeploymentDownRequest, nitric_proto_deployments_v1_deployments_pb.DeploymentDownEvent>;
}

export const DeploymentService: IDeploymentService;

export interface IDeploymentServer extends grpc.UntypedServiceImplementation {
  up: grpc.handleServerStreamingCall<nitric_proto_deployments_v1_deployments_pb.DeploymentUpRequest, nitric_proto_deployments_v1_deployments_pb.DeploymentUpEvent>;
  down: grpc.handleServerStreamingCall<nitric_proto_deployments_v1_deployments_pb.DeploymentDownRequest, nitric_proto_deployments_v1_deployments_pb.DeploymentDownEvent>;
}

export class DeploymentClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  up(argument: nitric_proto_deployments_v1_deployments_pb.DeploymentUpRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeploymentUpEvent>;
  up(argument: nitric_proto_deployments_v1_deployments_pb.DeploymentUpRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeploymentUpEvent>;
  down(argument: nitric_proto_deployments_v1_deployments_pb.DeploymentDownRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeploymentDownEvent>;
  down(argument: nitric_proto_deployments_v1_deployments_pb.DeploymentDownRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_deployments_v1_deployments_pb.DeploymentDownEvent>;
}
