// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.documents.v1
// file: nitric/proto/documents/v1/documents.proto

import * as nitric_proto_documents_v1_documents_pb from "../../../../nitric/proto/documents/v1/documents_pb";
import * as grpc from "@grpc/grpc-js";

interface IDocumentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  get: grpc.MethodDefinition<nitric_proto_documents_v1_documents_pb.DocumentGetRequest, nitric_proto_documents_v1_documents_pb.DocumentGetResponse>;
  set: grpc.MethodDefinition<nitric_proto_documents_v1_documents_pb.DocumentSetRequest, nitric_proto_documents_v1_documents_pb.DocumentSetResponse>;
  delete: grpc.MethodDefinition<nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest, nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse>;
  query: grpc.MethodDefinition<nitric_proto_documents_v1_documents_pb.DocumentQueryRequest, nitric_proto_documents_v1_documents_pb.DocumentQueryResponse>;
  queryStream: grpc.MethodDefinition<nitric_proto_documents_v1_documents_pb.DocumentQueryStreamRequest, nitric_proto_documents_v1_documents_pb.DocumentQueryStreamResponse>;
}

export const DocumentsService: IDocumentsService;

export interface IDocumentsServer extends grpc.UntypedServiceImplementation {
  get: grpc.handleUnaryCall<nitric_proto_documents_v1_documents_pb.DocumentGetRequest, nitric_proto_documents_v1_documents_pb.DocumentGetResponse>;
  set: grpc.handleUnaryCall<nitric_proto_documents_v1_documents_pb.DocumentSetRequest, nitric_proto_documents_v1_documents_pb.DocumentSetResponse>;
  delete: grpc.handleUnaryCall<nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest, nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse>;
  query: grpc.handleUnaryCall<nitric_proto_documents_v1_documents_pb.DocumentQueryRequest, nitric_proto_documents_v1_documents_pb.DocumentQueryResponse>;
  queryStream: grpc.handleServerStreamingCall<nitric_proto_documents_v1_documents_pb.DocumentQueryStreamRequest, nitric_proto_documents_v1_documents_pb.DocumentQueryStreamResponse>;
}

export class DocumentsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(argument: nitric_proto_documents_v1_documents_pb.DocumentGetRequest, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentGetResponse>): grpc.ClientUnaryCall;
  get(argument: nitric_proto_documents_v1_documents_pb.DocumentGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentGetResponse>): grpc.ClientUnaryCall;
  get(argument: nitric_proto_documents_v1_documents_pb.DocumentGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentGetResponse>): grpc.ClientUnaryCall;
  set(argument: nitric_proto_documents_v1_documents_pb.DocumentSetRequest, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentSetResponse>): grpc.ClientUnaryCall;
  set(argument: nitric_proto_documents_v1_documents_pb.DocumentSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentSetResponse>): grpc.ClientUnaryCall;
  set(argument: nitric_proto_documents_v1_documents_pb.DocumentSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentSetResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse>): grpc.ClientUnaryCall;
  query(argument: nitric_proto_documents_v1_documents_pb.DocumentQueryRequest, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentQueryResponse>): grpc.ClientUnaryCall;
  query(argument: nitric_proto_documents_v1_documents_pb.DocumentQueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentQueryResponse>): grpc.ClientUnaryCall;
  query(argument: nitric_proto_documents_v1_documents_pb.DocumentQueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_documents_v1_documents_pb.DocumentQueryResponse>): grpc.ClientUnaryCall;
  queryStream(argument: nitric_proto_documents_v1_documents_pb.DocumentQueryStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_documents_v1_documents_pb.DocumentQueryStreamResponse>;
  queryStream(argument: nitric_proto_documents_v1_documents_pb.DocumentQueryStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<nitric_proto_documents_v1_documents_pb.DocumentQueryStreamResponse>;
}
