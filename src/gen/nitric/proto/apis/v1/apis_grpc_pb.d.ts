// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.apis.v1
// file: nitric/proto/apis/v1/apis.proto

import * as nitric_proto_apis_v1_apis_pb from "../../../../nitric/proto/apis/v1/apis_pb";
import * as grpc from "@grpc/grpc-js";

interface IApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  serve: grpc.MethodDefinition<nitric_proto_apis_v1_apis_pb.ClientMessage, nitric_proto_apis_v1_apis_pb.ServerMessage>;
}

export const ApiService: IApiService;

export interface IApiServer extends grpc.UntypedServiceImplementation {
  serve: grpc.handleBidiStreamingCall<nitric_proto_apis_v1_apis_pb.ClientMessage, nitric_proto_apis_v1_apis_pb.ServerMessage>;
}

export class ApiClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  serve(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_apis_v1_apis_pb.ClientMessage, nitric_proto_apis_v1_apis_pb.ServerMessage>;
  serve(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_apis_v1_apis_pb.ClientMessage, nitric_proto_apis_v1_apis_pb.ServerMessage>;
}
