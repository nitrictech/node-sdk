// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.storage.v1
// file: nitric/proto/storage/v1/storage.proto

import * as nitric_proto_storage_v1_storage_pb from "../../../../nitric/proto/storage/v1/storage_pb";
import * as grpc from "@grpc/grpc-js";

interface IStorageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  read: grpc.MethodDefinition<nitric_proto_storage_v1_storage_pb.StorageReadRequest, nitric_proto_storage_v1_storage_pb.StorageReadResponse>;
  write: grpc.MethodDefinition<nitric_proto_storage_v1_storage_pb.StorageWriteRequest, nitric_proto_storage_v1_storage_pb.StorageWriteResponse>;
  delete: grpc.MethodDefinition<nitric_proto_storage_v1_storage_pb.StorageDeleteRequest, nitric_proto_storage_v1_storage_pb.StorageDeleteResponse>;
  preSignUrl: grpc.MethodDefinition<nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest, nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse>;
  listBlobs: grpc.MethodDefinition<nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest, nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse>;
  exists: grpc.MethodDefinition<nitric_proto_storage_v1_storage_pb.StorageExistsRequest, nitric_proto_storage_v1_storage_pb.StorageExistsResponse>;
}

export const StorageService: IStorageService;

export interface IStorageServer extends grpc.UntypedServiceImplementation {
  read: grpc.handleUnaryCall<nitric_proto_storage_v1_storage_pb.StorageReadRequest, nitric_proto_storage_v1_storage_pb.StorageReadResponse>;
  write: grpc.handleUnaryCall<nitric_proto_storage_v1_storage_pb.StorageWriteRequest, nitric_proto_storage_v1_storage_pb.StorageWriteResponse>;
  delete: grpc.handleUnaryCall<nitric_proto_storage_v1_storage_pb.StorageDeleteRequest, nitric_proto_storage_v1_storage_pb.StorageDeleteResponse>;
  preSignUrl: grpc.handleUnaryCall<nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest, nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse>;
  listBlobs: grpc.handleUnaryCall<nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest, nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse>;
  exists: grpc.handleUnaryCall<nitric_proto_storage_v1_storage_pb.StorageExistsRequest, nitric_proto_storage_v1_storage_pb.StorageExistsResponse>;
}

export class StorageClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  read(argument: nitric_proto_storage_v1_storage_pb.StorageReadRequest, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageReadResponse>): grpc.ClientUnaryCall;
  read(argument: nitric_proto_storage_v1_storage_pb.StorageReadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageReadResponse>): grpc.ClientUnaryCall;
  read(argument: nitric_proto_storage_v1_storage_pb.StorageReadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageReadResponse>): grpc.ClientUnaryCall;
  write(argument: nitric_proto_storage_v1_storage_pb.StorageWriteRequest, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageWriteResponse>): grpc.ClientUnaryCall;
  write(argument: nitric_proto_storage_v1_storage_pb.StorageWriteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageWriteResponse>): grpc.ClientUnaryCall;
  write(argument: nitric_proto_storage_v1_storage_pb.StorageWriteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageWriteResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_storage_v1_storage_pb.StorageDeleteRequest, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_storage_v1_storage_pb.StorageDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_storage_v1_storage_pb.StorageDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageDeleteResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  preSignUrl(argument: nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse>): grpc.ClientUnaryCall;
  listBlobs(argument: nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse>): grpc.ClientUnaryCall;
  listBlobs(argument: nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse>): grpc.ClientUnaryCall;
  listBlobs(argument: nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse>): grpc.ClientUnaryCall;
  exists(argument: nitric_proto_storage_v1_storage_pb.StorageExistsRequest, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: nitric_proto_storage_v1_storage_pb.StorageExistsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: nitric_proto_storage_v1_storage_pb.StorageExistsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_storage_v1_storage_pb.StorageExistsResponse>): grpc.ClientUnaryCall;
}

interface IStorageListenerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listen: grpc.MethodDefinition<nitric_proto_storage_v1_storage_pb.ClientMessage, nitric_proto_storage_v1_storage_pb.ServerMessage>;
}

export const StorageListenerService: IStorageListenerService;

export interface IStorageListenerServer extends grpc.UntypedServiceImplementation {
  listen: grpc.handleBidiStreamingCall<nitric_proto_storage_v1_storage_pb.ClientMessage, nitric_proto_storage_v1_storage_pb.ServerMessage>;
}

export class StorageListenerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listen(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_storage_v1_storage_pb.ClientMessage, nitric_proto_storage_v1_storage_pb.ServerMessage>;
  listen(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_storage_v1_storage_pb.ClientMessage, nitric_proto_storage_v1_storage_pb.ServerMessage>;
}
