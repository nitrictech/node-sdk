// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_batch_v1_batch_pb = require('../../../../nitric/proto/batch/v1/batch_pb.js');

function serialize_nitric_proto_batch_v1_CreateJobRequest(arg) {
  if (!(arg instanceof nitric_proto_batch_v1_batch_pb.CreateJobRequest)) {
    throw new Error('Expected argument of type nitric.proto.batch.v1.CreateJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_batch_v1_CreateJobRequest(buffer_arg) {
  return nitric_proto_batch_v1_batch_pb.CreateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_batch_v1_CreateJobResponse(arg) {
  if (!(arg instanceof nitric_proto_batch_v1_batch_pb.CreateJobResponse)) {
    throw new Error('Expected argument of type nitric.proto.batch.v1.CreateJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_batch_v1_CreateJobResponse(buffer_arg) {
  return nitric_proto_batch_v1_batch_pb.CreateJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for scheduling callbacks on a cadence
var BatchService = exports.BatchService = {
  createJob: {
    path: '/nitric.proto.batch.v1.Batch/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_batch_v1_batch_pb.CreateJobRequest,
    responseType: nitric_proto_batch_v1_batch_pb.CreateJobResponse,
    requestSerialize: serialize_nitric_proto_batch_v1_CreateJobRequest,
    requestDeserialize: deserialize_nitric_proto_batch_v1_CreateJobRequest,
    responseSerialize: serialize_nitric_proto_batch_v1_CreateJobResponse,
    responseDeserialize: deserialize_nitric_proto_batch_v1_CreateJobResponse,
  },
};

exports.BatchClient = grpc.makeGenericClientConstructor(BatchService);
