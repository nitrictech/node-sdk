// GENERATED CODE -- DO NOT EDIT!

// package: nitric.document.v1
// file: proto/document/v1/document.proto

import * as proto_document_v1_document_pb from "../../../proto/document/v1/document_pb";
import * as grpc from "@grpc/grpc-js";

interface IDocumentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  get: grpc.MethodDefinition<proto_document_v1_document_pb.DocumentGetRequest, proto_document_v1_document_pb.DocumentGetResponse>;
  set: grpc.MethodDefinition<proto_document_v1_document_pb.DocumentSetRequest, proto_document_v1_document_pb.DocumentSetResponse>;
  delete: grpc.MethodDefinition<proto_document_v1_document_pb.DocumentDeleteRequest, proto_document_v1_document_pb.DocumentDeleteResponse>;
  query: grpc.MethodDefinition<proto_document_v1_document_pb.DocumentQueryRequest, proto_document_v1_document_pb.DocumentQueryResponse>;
  queryStream: grpc.MethodDefinition<proto_document_v1_document_pb.DocumentQueryStreamRequest, proto_document_v1_document_pb.DocumentQueryStreamResponse>;
}

export const DocumentServiceService: IDocumentServiceService;

export interface IDocumentServiceServer extends grpc.UntypedServiceImplementation {
  get: grpc.handleUnaryCall<proto_document_v1_document_pb.DocumentGetRequest, proto_document_v1_document_pb.DocumentGetResponse>;
  set: grpc.handleUnaryCall<proto_document_v1_document_pb.DocumentSetRequest, proto_document_v1_document_pb.DocumentSetResponse>;
  delete: grpc.handleUnaryCall<proto_document_v1_document_pb.DocumentDeleteRequest, proto_document_v1_document_pb.DocumentDeleteResponse>;
  query: grpc.handleUnaryCall<proto_document_v1_document_pb.DocumentQueryRequest, proto_document_v1_document_pb.DocumentQueryResponse>;
  queryStream: grpc.handleServerStreamingCall<proto_document_v1_document_pb.DocumentQueryStreamRequest, proto_document_v1_document_pb.DocumentQueryStreamResponse>;
}

export class DocumentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(argument: proto_document_v1_document_pb.DocumentGetRequest, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentGetResponse>): grpc.ClientUnaryCall;
  get(argument: proto_document_v1_document_pb.DocumentGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentGetResponse>): grpc.ClientUnaryCall;
  get(argument: proto_document_v1_document_pb.DocumentGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentGetResponse>): grpc.ClientUnaryCall;
  set(argument: proto_document_v1_document_pb.DocumentSetRequest, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentSetResponse>): grpc.ClientUnaryCall;
  set(argument: proto_document_v1_document_pb.DocumentSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentSetResponse>): grpc.ClientUnaryCall;
  set(argument: proto_document_v1_document_pb.DocumentSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentSetResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_document_v1_document_pb.DocumentDeleteRequest, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_document_v1_document_pb.DocumentDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_document_v1_document_pb.DocumentDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentDeleteResponse>): grpc.ClientUnaryCall;
  query(argument: proto_document_v1_document_pb.DocumentQueryRequest, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentQueryResponse>): grpc.ClientUnaryCall;
  query(argument: proto_document_v1_document_pb.DocumentQueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentQueryResponse>): grpc.ClientUnaryCall;
  query(argument: proto_document_v1_document_pb.DocumentQueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_document_v1_document_pb.DocumentQueryResponse>): grpc.ClientUnaryCall;
  queryStream(argument: proto_document_v1_document_pb.DocumentQueryStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_document_v1_document_pb.DocumentQueryStreamResponse>;
  queryStream(argument: proto_document_v1_document_pb.DocumentQueryStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_document_v1_document_pb.DocumentQueryStreamResponse>;
}
