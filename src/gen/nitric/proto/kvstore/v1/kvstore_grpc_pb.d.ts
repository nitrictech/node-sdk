// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.kvstore.v1
// file: nitric/proto/kvstore/v1/kvstore.proto

import * as nitric_proto_kvstore_v1_kvstore_pb from "../../../../nitric/proto/kvstore/v1/kvstore_pb";
import * as grpc from "@grpc/grpc-js";

interface IKvStoreService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getValue: grpc.MethodDefinition<nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse>;
  setValue: grpc.MethodDefinition<nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse>;
  deleteKey: grpc.MethodDefinition<nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse>;
  scanKeys: grpc.MethodDefinition<nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysResponse>;
}

export const KvStoreService: IKvStoreService;

export interface IKvStoreServer extends grpc.UntypedServiceImplementation {
  getValue: grpc.handleUnaryCall<nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse>;
  setValue: grpc.handleUnaryCall<nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse>;
  deleteKey: grpc.handleUnaryCall<nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse>;
  scanKeys: grpc.handleServerStreamingCall<nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysRequest, nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysResponse>;
}

export class KvStoreClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getValue(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse>): grpc.ClientUnaryCall;
  getValue(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse>): grpc.ClientUnaryCall;
  getValue(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse>): grpc.ClientUnaryCall;
  setValue(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse>): grpc.ClientUnaryCall;
  setValue(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse>): grpc.ClientUnaryCall;
  setValue(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse>): grpc.ClientUnaryCall;
  deleteKey(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse>): grpc.ClientUnaryCall;
  deleteKey(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse>): grpc.ClientUnaryCall;
  deleteKey(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse>): grpc.ClientUnaryCall;
  scanKeys(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysResponse>;
  scanKeys(argument: nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysResponse>;
}
