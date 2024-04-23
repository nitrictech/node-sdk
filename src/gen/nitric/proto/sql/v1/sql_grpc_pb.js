// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_sql_v1_sql_pb = require('../../../../nitric/proto/sql/v1/sql_pb.js');

function serialize_nitric_proto_sql_v1_SqlConnectionStringRequest(arg) {
  if (!(arg instanceof nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest)) {
    throw new Error('Expected argument of type nitric.proto.sql.v1.SqlConnectionStringRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_sql_v1_SqlConnectionStringRequest(buffer_arg) {
  return nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_sql_v1_SqlConnectionStringResponse(arg) {
  if (!(arg instanceof nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse)) {
    throw new Error('Expected argument of type nitric.proto.sql.v1.SqlConnectionStringResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_sql_v1_SqlConnectionStringResponse(buffer_arg) {
  return nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Secret Service
var SqlService = exports.SqlService = {
  // Retrieve the connection string for a given database
connectionString: {
    path: '/nitric.proto.sql.v1.Sql/ConnectionString',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_sql_v1_sql_pb.SqlConnectionStringRequest,
    responseType: nitric_proto_sql_v1_sql_pb.SqlConnectionStringResponse,
    requestSerialize: serialize_nitric_proto_sql_v1_SqlConnectionStringRequest,
    requestDeserialize: deserialize_nitric_proto_sql_v1_SqlConnectionStringRequest,
    responseSerialize: serialize_nitric_proto_sql_v1_SqlConnectionStringResponse,
    responseDeserialize: deserialize_nitric_proto_sql_v1_SqlConnectionStringResponse,
  },
};

exports.SqlClient = grpc.makeGenericClientConstructor(SqlService);
