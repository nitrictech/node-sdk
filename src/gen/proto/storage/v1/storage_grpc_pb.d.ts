// GENERATED CODE -- DO NOT EDIT!

// package: nitric.storage.v1
// file: proto/storage/v1/storage.proto

import * as proto_storage_v1_storage_pb from "../../../proto/storage/v1/storage_pb";
import * as grpc from "@grpc/grpc-js";

interface IStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  read: grpc.MethodDefinition<proto_storage_v1_storage_pb.StorageReadRequest, proto_storage_v1_storage_pb.StorageReadResponse>;
  write: grpc.MethodDefinition<proto_storage_v1_storage_pb.StorageWriteRequest, proto_storage_v1_storage_pb.StorageWriteResponse>;
  delete: grpc.MethodDefinition<proto_storage_v1_storage_pb.StorageDeleteRequest, proto_storage_v1_storage_pb.StorageDeleteResponse>;
  preSignUrl: grpc.MethodDefinition<proto_storage_v1_storage_pb.StoragePreSignUrlRequest, proto_storage_v1_storage_pb.StoragePreSignUrlResponse>;
  listFiles: grpc.MethodDefinition<proto_storage_v1_storage_pb.StorageListFilesRequest, proto_storage_v1_storage_pb.StorageListFilesResponse>;
}

export const StorageServiceService: IStorageServiceService;

export interface IStorageServiceServer extends grpc.UntypedServiceImplementation {
  read: grpc.handleUnaryCall<proto_storage_v1_storage_pb.StorageReadRequest, proto_storage_v1_storage_pb.StorageReadResponse>;
  write: grpc.handleUnaryCall<proto_storage_v1_storage_pb.StorageWriteRequest, proto_storage_v1_storage_pb.StorageWriteResponse>;
  delete: grpc.handleUnaryCall<proto_storage_v1_storage_pb.StorageDeleteRequest, proto_storage_v1_storage_pb.StorageDeleteResponse>;
  preSignUrl: grpc.handleUnaryCall<proto_storage_v1_storage_pb.StoragePreSignUrlRequest, proto_storage_v1_storage_pb.StoragePreSignUrlResponse>;
  listFiles: grpc.handleUnaryCall<proto_storage_v1_storage_pb.StorageListFilesRequest, proto_storage_v1_storage_pb.StorageListFilesResponse>;
}

export class StorageServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  read(argument: proto_storage_v1_storage_pb.StorageReadRequest, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageReadResponse>): grpc.ClientUnaryCall;
  read(argument: proto_storage_v1_storage_pb.StorageReadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageReadResponse>): grpc.ClientUnaryCall;
  read(argument: proto_storage_v1_storage_pb.StorageReadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageReadResponse>): grpc.ClientUnaryCall;
  write(argument: proto_storage_v1_storage_pb.StorageWriteRequest, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageWriteResponse>): grpc.ClientUnaryCall;
  write(argument: proto_storage_v1_storage_pb.StorageWriteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageWriteResponse>): grpc.ClientUnaryCall;
  write(argument: proto_storage_v1_storage_pb.StorageWriteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageWriteResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_storage_v1_storage_pb.StorageDeleteRequest, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_storage_v1_storage_pb.StorageDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_storage_v1_storage_pb.StorageDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageDeleteResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: proto_storage_v1_storage_pb.StoragePreSignUrlRequest, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: proto_storage_v1_storage_pb.StoragePreSignUrlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: proto_storage_v1_storage_pb.StoragePreSignUrlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  listFiles(argument: proto_storage_v1_storage_pb.StorageListFilesRequest, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageListFilesResponse>): grpc.ClientUnaryCall;
  listFiles(argument: proto_storage_v1_storage_pb.StorageListFilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageListFilesResponse>): grpc.ClientUnaryCall;
  listFiles(argument: proto_storage_v1_storage_pb.StorageListFilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_storage_v1_storage_pb.StorageListFilesResponse>): grpc.ClientUnaryCall;
}
