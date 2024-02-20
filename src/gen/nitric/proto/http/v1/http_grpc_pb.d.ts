// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.http.v1
// file: nitric/proto/http/v1/http.proto

import * as nitric_proto_http_v1_http_pb from "../../../../nitric/proto/http/v1/http_pb";
import * as grpc from "@grpc/grpc-js";

interface IHttpService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  proxy: grpc.MethodDefinition<nitric_proto_http_v1_http_pb.ClientMessage, nitric_proto_http_v1_http_pb.ServerMessage>;
}

export const HttpService: IHttpService;

export interface IHttpServer extends grpc.UntypedServiceImplementation {
  proxy: grpc.handleBidiStreamingCall<nitric_proto_http_v1_http_pb.ClientMessage, nitric_proto_http_v1_http_pb.ServerMessage>;
}

export class HttpClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  proxy(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_http_v1_http_pb.ClientMessage, nitric_proto_http_v1_http_pb.ServerMessage>;
  proxy(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_http_v1_http_pb.ClientMessage, nitric_proto_http_v1_http_pb.ServerMessage>;
}
