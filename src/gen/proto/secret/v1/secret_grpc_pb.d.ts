// GENERATED CODE -- DO NOT EDIT!

// package: nitric.secret.v1
// file: proto/secret/v1/secret.proto

import * as proto_secret_v1_secret_pb from "../../../proto/secret/v1/secret_pb";
import * as grpc from "@grpc/grpc-js";

interface ISecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  put: grpc.MethodDefinition<proto_secret_v1_secret_pb.SecretPutRequest, proto_secret_v1_secret_pb.SecretPutResponse>;
  access: grpc.MethodDefinition<proto_secret_v1_secret_pb.SecretAccessRequest, proto_secret_v1_secret_pb.SecretAccessResponse>;
}

export const SecretServiceService: ISecretServiceService;

export interface ISecretServiceServer extends grpc.UntypedServiceImplementation {
  put: grpc.handleUnaryCall<proto_secret_v1_secret_pb.SecretPutRequest, proto_secret_v1_secret_pb.SecretPutResponse>;
  access: grpc.handleUnaryCall<proto_secret_v1_secret_pb.SecretAccessRequest, proto_secret_v1_secret_pb.SecretAccessResponse>;
}

export class SecretServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  put(argument: proto_secret_v1_secret_pb.SecretPutRequest, callback: grpc.requestCallback<proto_secret_v1_secret_pb.SecretPutResponse>): grpc.ClientUnaryCall;
  put(argument: proto_secret_v1_secret_pb.SecretPutRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_secret_v1_secret_pb.SecretPutResponse>): grpc.ClientUnaryCall;
  put(argument: proto_secret_v1_secret_pb.SecretPutRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_secret_v1_secret_pb.SecretPutResponse>): grpc.ClientUnaryCall;
  access(argument: proto_secret_v1_secret_pb.SecretAccessRequest, callback: grpc.requestCallback<proto_secret_v1_secret_pb.SecretAccessResponse>): grpc.ClientUnaryCall;
  access(argument: proto_secret_v1_secret_pb.SecretAccessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_secret_v1_secret_pb.SecretAccessResponse>): grpc.ClientUnaryCall;
  access(argument: proto_secret_v1_secret_pb.SecretAccessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_secret_v1_secret_pb.SecretAccessResponse>): grpc.ClientUnaryCall;
}
