// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.resources.v1
// file: nitric/proto/resources/v1/resources.proto

import * as nitric_proto_resources_v1_resources_pb from "../../../../nitric/proto/resources/v1/resources_pb";
import * as grpc from "@grpc/grpc-js";

interface IResourcesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  declare: grpc.MethodDefinition<nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest, nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse>;
  details: grpc.MethodDefinition<nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest, nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse>;
}

export const ResourcesService: IResourcesService;

export interface IResourcesServer extends grpc.UntypedServiceImplementation {
  declare: grpc.handleUnaryCall<nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest, nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse>;
  details: grpc.handleUnaryCall<nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest, nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse>;
}

export class ResourcesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  declare(argument: nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest, callback: grpc.requestCallback<nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse>): grpc.ClientUnaryCall;
  declare(argument: nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse>): grpc.ClientUnaryCall;
  declare(argument: nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse>): grpc.ClientUnaryCall;
  details(argument: nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest, callback: grpc.requestCallback<nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse>): grpc.ClientUnaryCall;
  details(argument: nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse>): grpc.ClientUnaryCall;
  details(argument: nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse>): grpc.ClientUnaryCall;
}
