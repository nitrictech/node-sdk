// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_queues_v1_queues_pb = require('../../../../nitric/proto/queues/v1/queues_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_nitric_proto_queues_v1_QueueCompleteRequest(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueCompleteRequest)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueCompleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueCompleteRequest(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueCompleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueCompleteResponse(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueCompleteResponse)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueCompleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueCompleteResponse(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueCompleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueReceiveRequest(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueReceiveRequest)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueReceiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueReceiveRequest(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueReceiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueReceiveResponse(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueReceiveResponse)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueReceiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueReceiveResponse(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueReceiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueSendRequestBatch(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueSendRequestBatch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueSendRequestBatch(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueSendResponse(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueSendResponse)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueSendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueSendResponse(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Queue Service contract
var QueuesService = exports.QueuesService = {
  // Send messages to a queue
send: {
    path: '/nitric.proto.queues.v1.Queues/Send',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_queues_v1_queues_pb.QueueSendRequestBatch,
    responseType: nitric_proto_queues_v1_queues_pb.QueueSendResponse,
    requestSerialize: serialize_nitric_proto_queues_v1_QueueSendRequestBatch,
    requestDeserialize: deserialize_nitric_proto_queues_v1_QueueSendRequestBatch,
    responseSerialize: serialize_nitric_proto_queues_v1_QueueSendResponse,
    responseDeserialize: deserialize_nitric_proto_queues_v1_QueueSendResponse,
  },
  // Receive message(s) from a queue
receive: {
    path: '/nitric.proto.queues.v1.Queues/Receive',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_queues_v1_queues_pb.QueueReceiveRequest,
    responseType: nitric_proto_queues_v1_queues_pb.QueueReceiveResponse,
    requestSerialize: serialize_nitric_proto_queues_v1_QueueReceiveRequest,
    requestDeserialize: deserialize_nitric_proto_queues_v1_QueueReceiveRequest,
    responseSerialize: serialize_nitric_proto_queues_v1_QueueReceiveResponse,
    responseDeserialize: deserialize_nitric_proto_queues_v1_QueueReceiveResponse,
  },
  // Complete an item previously popped from a queue
complete: {
    path: '/nitric.proto.queues.v1.Queues/Complete',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_queues_v1_queues_pb.QueueCompleteRequest,
    responseType: nitric_proto_queues_v1_queues_pb.QueueCompleteResponse,
    requestSerialize: serialize_nitric_proto_queues_v1_QueueCompleteRequest,
    requestDeserialize: deserialize_nitric_proto_queues_v1_QueueCompleteRequest,
    responseSerialize: serialize_nitric_proto_queues_v1_QueueCompleteResponse,
    responseDeserialize: deserialize_nitric_proto_queues_v1_QueueCompleteResponse,
  },
};

exports.QueuesClient = grpc.makeGenericClientConstructor(QueuesService);
