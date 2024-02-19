// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.secrets.v1
// file: nitric/proto/secrets/v1/secrets.proto

import * as nitric_proto_secrets_v1_secrets_pb from "../../../../nitric/proto/secrets/v1/secrets_pb";
import * as grpc from "@grpc/grpc-js";

interface ISecretManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  put: grpc.MethodDefinition<nitric_proto_secrets_v1_secrets_pb.SecretPutRequest, nitric_proto_secrets_v1_secrets_pb.SecretPutResponse>;
  access: grpc.MethodDefinition<nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest, nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse>;
}

export const SecretManagerService: ISecretManagerService;

export interface ISecretManagerServer extends grpc.UntypedServiceImplementation {
  put: grpc.handleUnaryCall<nitric_proto_secrets_v1_secrets_pb.SecretPutRequest, nitric_proto_secrets_v1_secrets_pb.SecretPutResponse>;
  access: grpc.handleUnaryCall<nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest, nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse>;
}

export class SecretManagerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  put(argument: nitric_proto_secrets_v1_secrets_pb.SecretPutRequest, callback: grpc.requestCallback<nitric_proto_secrets_v1_secrets_pb.SecretPutResponse>): grpc.ClientUnaryCall;
  put(argument: nitric_proto_secrets_v1_secrets_pb.SecretPutRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_secrets_v1_secrets_pb.SecretPutResponse>): grpc.ClientUnaryCall;
  put(argument: nitric_proto_secrets_v1_secrets_pb.SecretPutRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_secrets_v1_secrets_pb.SecretPutResponse>): grpc.ClientUnaryCall;
  access(argument: nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest, callback: grpc.requestCallback<nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse>): grpc.ClientUnaryCall;
  access(argument: nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse>): grpc.ClientUnaryCall;
  access(argument: nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse>): grpc.ClientUnaryCall;
}
