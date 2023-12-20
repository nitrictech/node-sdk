// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.http.v1
// file: nitric/proto/http/v1/http.proto

import * as nitric_proto_http_v1_http_pb from "../../../../nitric/proto/http/v1/http_pb";
import * as grpc from "@grpc/grpc-js";

interface IHttpService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  proxy: grpc.MethodDefinition<nitric_proto_http_v1_http_pb.HttpProxyRequest, nitric_proto_http_v1_http_pb.HttpProxyResponse>;
}

export const HttpService: IHttpService;

export interface IHttpServer extends grpc.UntypedServiceImplementation {
  proxy: grpc.handleUnaryCall<nitric_proto_http_v1_http_pb.HttpProxyRequest, nitric_proto_http_v1_http_pb.HttpProxyResponse>;
}

export class HttpClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  proxy(argument: nitric_proto_http_v1_http_pb.HttpProxyRequest, callback: grpc.requestCallback<nitric_proto_http_v1_http_pb.HttpProxyResponse>): grpc.ClientUnaryCall;
  proxy(argument: nitric_proto_http_v1_http_pb.HttpProxyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_http_v1_http_pb.HttpProxyResponse>): grpc.ClientUnaryCall;
  proxy(argument: nitric_proto_http_v1_http_pb.HttpProxyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_http_v1_http_pb.HttpProxyResponse>): grpc.ClientUnaryCall;
}
