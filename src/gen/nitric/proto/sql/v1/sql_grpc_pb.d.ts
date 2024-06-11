// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.sql.v1
// file: nitric/proto/sql/v1/sql.proto

import * as nitric_proto_sql_v1_sql_pb from "../../../../nitric/proto/sql/v1/sql_pb";
import * as grpc from "@grpc/grpc-js";

interface ISqlService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  connectionString: grpc.MethodDefinition<nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest, nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse>;
}

export const SqlService: ISqlService;

export interface ISqlServer extends grpc.UntypedServiceImplementation {
  connectionString: grpc.handleUnaryCall<nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest, nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse>;
}

export class SqlClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  connectionString(argument: nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest, callback: grpc.requestCallback<nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse>): grpc.ClientUnaryCall;
  connectionString(argument: nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse>): grpc.ClientUnaryCall;
  connectionString(argument: nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse>): grpc.ClientUnaryCall;
}
