// GENERATED CODE -- DO NOT EDIT!

// package: nitric.resource.v1
// file: proto/resource/v1/resource.proto

import * as proto_resource_v1_resource_pb from "../../../proto/resource/v1/resource_pb";
import * as grpc from "@grpc/grpc-js";

interface IResourceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  declare: grpc.MethodDefinition<proto_resource_v1_resource_pb.ResourceDeclareRequest, proto_resource_v1_resource_pb.ResourceDeclareResponse>;
  details: grpc.MethodDefinition<proto_resource_v1_resource_pb.ResourceDetailsRequest, proto_resource_v1_resource_pb.ResourceDetailsResponse>;
}

export const ResourceServiceService: IResourceServiceService;

export interface IResourceServiceServer extends grpc.UntypedServiceImplementation {
  declare: grpc.handleUnaryCall<proto_resource_v1_resource_pb.ResourceDeclareRequest, proto_resource_v1_resource_pb.ResourceDeclareResponse>;
  details: grpc.handleUnaryCall<proto_resource_v1_resource_pb.ResourceDetailsRequest, proto_resource_v1_resource_pb.ResourceDetailsResponse>;
}

export class ResourceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  declare(argument: proto_resource_v1_resource_pb.ResourceDeclareRequest, callback: grpc.requestCallback<proto_resource_v1_resource_pb.ResourceDeclareResponse>): grpc.ClientUnaryCall;
  declare(argument: proto_resource_v1_resource_pb.ResourceDeclareRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_resource_v1_resource_pb.ResourceDeclareResponse>): grpc.ClientUnaryCall;
  declare(argument: proto_resource_v1_resource_pb.ResourceDeclareRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_resource_v1_resource_pb.ResourceDeclareResponse>): grpc.ClientUnaryCall;
  details(argument: proto_resource_v1_resource_pb.ResourceDetailsRequest, callback: grpc.requestCallback<proto_resource_v1_resource_pb.ResourceDetailsResponse>): grpc.ClientUnaryCall;
  details(argument: proto_resource_v1_resource_pb.ResourceDetailsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_resource_v1_resource_pb.ResourceDetailsResponse>): grpc.ClientUnaryCall;
  details(argument: proto_resource_v1_resource_pb.ResourceDetailsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_resource_v1_resource_pb.ResourceDetailsResponse>): grpc.ClientUnaryCall;
}
