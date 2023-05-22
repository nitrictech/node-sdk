// GENERATED CODE -- DO NOT EDIT!

// package: nitric.deploy.v1
// file: proto/deploy/v1/deploy.proto

import * as proto_deploy_v1_deploy_pb from "../../../proto/deploy/v1/deploy_pb";
import * as grpc from "@grpc/grpc-js";

interface IDeployServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  up: grpc.MethodDefinition<proto_deploy_v1_deploy_pb.DeployUpRequest, proto_deploy_v1_deploy_pb.DeployUpEvent>;
  down: grpc.MethodDefinition<proto_deploy_v1_deploy_pb.DeployDownRequest, proto_deploy_v1_deploy_pb.DeployDownEvent>;
}

export const DeployServiceService: IDeployServiceService;

export interface IDeployServiceServer extends grpc.UntypedServiceImplementation {
  up: grpc.handleServerStreamingCall<proto_deploy_v1_deploy_pb.DeployUpRequest, proto_deploy_v1_deploy_pb.DeployUpEvent>;
  down: grpc.handleServerStreamingCall<proto_deploy_v1_deploy_pb.DeployDownRequest, proto_deploy_v1_deploy_pb.DeployDownEvent>;
}

export class DeployServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  up(argument: proto_deploy_v1_deploy_pb.DeployUpRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_deploy_v1_deploy_pb.DeployUpEvent>;
  up(argument: proto_deploy_v1_deploy_pb.DeployUpRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_deploy_v1_deploy_pb.DeployUpEvent>;
  down(argument: proto_deploy_v1_deploy_pb.DeployDownRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_deploy_v1_deploy_pb.DeployDownEvent>;
  down(argument: proto_deploy_v1_deploy_pb.DeployDownRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_deploy_v1_deploy_pb.DeployDownEvent>;
}
