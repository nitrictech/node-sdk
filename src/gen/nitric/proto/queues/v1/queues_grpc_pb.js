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

function serialize_nitric_proto_queues_v1_QueueDequeueRequest(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueDequeueRequest)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueDequeueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueDequeueRequest(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueDequeueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueDequeueResponse(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueDequeueResponse)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueDequeueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueDequeueResponse(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueDequeueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueEnqueueRequest(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueEnqueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueEnqueueRequest(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_queues_v1_QueueEnqueueResponse(arg) {
  if (!(arg instanceof nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse)) {
    throw new Error('Expected argument of type nitric.proto.queues.v1.QueueEnqueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_queues_v1_QueueEnqueueResponse(buffer_arg) {
  return nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Queue Service contract
var QueuesService = exports.QueuesService = {
  // Send message(s) to a queue
enqueue: {
    path: '/nitric.proto.queues.v1.Queues/Enqueue',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_queues_v1_queues_pb.QueueEnqueueRequest,
    responseType: nitric_proto_queues_v1_queues_pb.QueueEnqueueResponse,
    requestSerialize: serialize_nitric_proto_queues_v1_QueueEnqueueRequest,
    requestDeserialize: deserialize_nitric_proto_queues_v1_QueueEnqueueRequest,
    responseSerialize: serialize_nitric_proto_queues_v1_QueueEnqueueResponse,
    responseDeserialize: deserialize_nitric_proto_queues_v1_QueueEnqueueResponse,
  },
  // Receive message(s) from a queue
dequeue: {
    path: '/nitric.proto.queues.v1.Queues/Dequeue',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_queues_v1_queues_pb.QueueDequeueRequest,
    responseType: nitric_proto_queues_v1_queues_pb.QueueDequeueResponse,
    requestSerialize: serialize_nitric_proto_queues_v1_QueueDequeueRequest,
    requestDeserialize: deserialize_nitric_proto_queues_v1_QueueDequeueRequest,
    responseSerialize: serialize_nitric_proto_queues_v1_QueueDequeueResponse,
    responseDeserialize: deserialize_nitric_proto_queues_v1_QueueDequeueResponse,
  },
  // Complete an message previously popped from a queue
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
