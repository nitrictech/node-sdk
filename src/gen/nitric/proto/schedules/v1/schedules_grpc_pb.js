// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_schedules_v1_schedules_pb = require('../../../../nitric/proto/schedules/v1/schedules_pb.js');

function serialize_nitric_proto_schedules_v1_ClientMessage(arg) {
  if (!(arg instanceof nitric_proto_schedules_v1_schedules_pb.ClientMessage)) {
    throw new Error('Expected argument of type nitric.proto.schedules.v1.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_schedules_v1_ClientMessage(buffer_arg) {
  return nitric_proto_schedules_v1_schedules_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_schedules_v1_ServerMessage(arg) {
  if (!(arg instanceof nitric_proto_schedules_v1_schedules_pb.ServerMessage)) {
    throw new Error('Expected argument of type nitric.proto.schedules.v1.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_schedules_v1_ServerMessage(buffer_arg) {
  return nitric_proto_schedules_v1_schedules_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for scheduling callbacks on a cadence
var SchedulesService = exports.SchedulesService = {
  schedule: {
    path: '/nitric.proto.schedules.v1.Schedules/Schedule',
    requestStream: true,
    responseStream: true,
    requestType: nitric_proto_schedules_v1_schedules_pb.ClientMessage,
    responseType: nitric_proto_schedules_v1_schedules_pb.ServerMessage,
    requestSerialize: serialize_nitric_proto_schedules_v1_ClientMessage,
    requestDeserialize: deserialize_nitric_proto_schedules_v1_ClientMessage,
    responseSerialize: serialize_nitric_proto_schedules_v1_ServerMessage,
    responseDeserialize: deserialize_nitric_proto_schedules_v1_ServerMessage,
  },
};

exports.SchedulesClient = grpc.makeGenericClientConstructor(SchedulesService);
