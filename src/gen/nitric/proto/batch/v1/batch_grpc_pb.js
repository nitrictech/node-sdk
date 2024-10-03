// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_batch_v1_batch_pb = require('../../../../nitric/proto/batch/v1/batch_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_nitric_proto_batch_v1_ClientMessage(arg) {
  if (!(arg instanceof nitric_proto_batch_v1_batch_pb.ClientMessage)) {
    throw new Error('Expected argument of type nitric.proto.batch.v1.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_batch_v1_ClientMessage(buffer_arg) {
  return nitric_proto_batch_v1_batch_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_batch_v1_JobSubmitRequest(arg) {
  if (!(arg instanceof nitric_proto_batch_v1_batch_pb.JobSubmitRequest)) {
    throw new Error('Expected argument of type nitric.proto.batch.v1.JobSubmitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_batch_v1_JobSubmitRequest(buffer_arg) {
  return nitric_proto_batch_v1_batch_pb.JobSubmitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_batch_v1_JobSubmitResponse(arg) {
  if (!(arg instanceof nitric_proto_batch_v1_batch_pb.JobSubmitResponse)) {
    throw new Error('Expected argument of type nitric.proto.batch.v1.JobSubmitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_batch_v1_JobSubmitResponse(buffer_arg) {
  return nitric_proto_batch_v1_batch_pb.JobSubmitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_batch_v1_ServerMessage(arg) {
  if (!(arg instanceof nitric_proto_batch_v1_batch_pb.ServerMessage)) {
    throw new Error('Expected argument of type nitric.proto.batch.v1.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_batch_v1_ServerMessage(buffer_arg) {
  return nitric_proto_batch_v1_batch_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for processing jobs
var JobService = exports.JobService = {
  handleJob: {
    path: '/nitric.proto.batch.v1.Job/HandleJob',
    requestStream: true,
    responseStream: true,
    requestType: nitric_proto_batch_v1_batch_pb.ClientMessage,
    responseType: nitric_proto_batch_v1_batch_pb.ServerMessage,
    requestSerialize: serialize_nitric_proto_batch_v1_ClientMessage,
    requestDeserialize: deserialize_nitric_proto_batch_v1_ClientMessage,
    responseSerialize: serialize_nitric_proto_batch_v1_ServerMessage,
    responseDeserialize: deserialize_nitric_proto_batch_v1_ServerMessage,
  },
};

exports.JobClient = grpc.makeGenericClientConstructor(JobService);
// Service for submitting jobs to be processed
var BatchService = exports.BatchService = {
  submitJob: {
    path: '/nitric.proto.batch.v1.Batch/SubmitJob',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_batch_v1_batch_pb.JobSubmitRequest,
    responseType: nitric_proto_batch_v1_batch_pb.JobSubmitResponse,
    requestSerialize: serialize_nitric_proto_batch_v1_JobSubmitRequest,
    requestDeserialize: deserialize_nitric_proto_batch_v1_JobSubmitRequest,
    responseSerialize: serialize_nitric_proto_batch_v1_JobSubmitResponse,
    responseDeserialize: deserialize_nitric_proto_batch_v1_JobSubmitResponse,
  },
};

exports.BatchClient = grpc.makeGenericClientConstructor(BatchService);
