// GENERATED CODE -- DO NOT EDIT!

// package: nitric.faas.v1
// file: proto/faas/v1/faas.proto

import * as proto_faas_v1_faas_pb from "../../../proto/faas/v1/faas_pb";
import * as grpc from "@grpc/grpc-js";

interface IFaasServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  triggerStream: grpc.MethodDefinition<proto_faas_v1_faas_pb.ClientMessage, proto_faas_v1_faas_pb.ServerMessage>;
}

export const FaasServiceService: IFaasServiceService;

export interface IFaasServiceServer extends grpc.UntypedServiceImplementation {
  triggerStream: grpc.handleBidiStreamingCall<proto_faas_v1_faas_pb.ClientMessage, proto_faas_v1_faas_pb.ServerMessage>;
}

export class FaasServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  triggerStream(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<proto_faas_v1_faas_pb.ClientMessage, proto_faas_v1_faas_pb.ServerMessage>;
  triggerStream(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<proto_faas_v1_faas_pb.ClientMessage, proto_faas_v1_faas_pb.ServerMessage>;
}
