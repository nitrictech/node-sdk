// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.schedules.v1
// file: nitric/proto/schedules/v1/schedules.proto

import * as nitric_proto_schedules_v1_schedules_pb from "../../../../nitric/proto/schedules/v1/schedules_pb";
import * as grpc from "@grpc/grpc-js";

interface ISchedulesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  schedule: grpc.MethodDefinition<nitric_proto_schedules_v1_schedules_pb.ClientMessage, nitric_proto_schedules_v1_schedules_pb.ServerMessage>;
}

export const SchedulesService: ISchedulesService;

export interface ISchedulesServer extends grpc.UntypedServiceImplementation {
  schedule: grpc.handleBidiStreamingCall<nitric_proto_schedules_v1_schedules_pb.ClientMessage, nitric_proto_schedules_v1_schedules_pb.ServerMessage>;
}

export class SchedulesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  schedule(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_schedules_v1_schedules_pb.ClientMessage, nitric_proto_schedules_v1_schedules_pb.ServerMessage>;
  schedule(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_schedules_v1_schedules_pb.ClientMessage, nitric_proto_schedules_v1_schedules_pb.ServerMessage>;
}
