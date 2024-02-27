// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.KeyValue.v1
// file: nitric/proto/keyvalue/v1/keyvalue.proto

import * as nitric_proto_keyvalue_v1_keyvalue_pb from "../../../../nitric/proto/keyvalue/v1/keyvalue_pb";
import * as grpc from "@grpc/grpc-js";

interface IKeyValueService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  get: grpc.MethodDefinition<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse>;
  set: grpc.MethodDefinition<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse>;
  delete: grpc.MethodDefinition<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse>;
  keys: grpc.MethodDefinition<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysResponse>;
}

export const KeyValueService: IKeyValueService;

export interface IKeyValueServer extends grpc.UntypedServiceImplementation {
  get: grpc.handleUnaryCall<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse>;
  set: grpc.handleUnaryCall<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse>;
  delete: grpc.handleUnaryCall<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse>;
  keys: grpc.handleServerStreamingCall<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysRequest, nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysResponse>;
}

export class KeyValueClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse>): grpc.ClientUnaryCall;
  get(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse>): grpc.ClientUnaryCall;
  get(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse>): grpc.ClientUnaryCall;
  set(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse>): grpc.ClientUnaryCall;
  set(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse>): grpc.ClientUnaryCall;
  set(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse>): grpc.ClientUnaryCall;
  keys(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysResponse>;
  keys(argument: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueKeysResponse>;
}
