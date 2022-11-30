// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_queue_v1_queue_pb = require('../../../proto/queue/v1/queue_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');

function serialize_nitric_queue_v1_QueueCompleteRequest(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueCompleteRequest)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueCompleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueCompleteRequest(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueCompleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_queue_v1_QueueCompleteResponse(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueCompleteResponse)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueCompleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueCompleteResponse(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueCompleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_queue_v1_QueueReceiveRequest(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueReceiveRequest)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueReceiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueReceiveRequest(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueReceiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_queue_v1_QueueReceiveResponse(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueReceiveResponse)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueReceiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueReceiveResponse(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueReceiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_queue_v1_QueueSendBatchRequest(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendBatchRequest)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueSendBatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueSendBatchRequest(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueSendBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_queue_v1_QueueSendBatchResponse(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendBatchResponse)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueSendBatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueSendBatchResponse(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueSendBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_queue_v1_QueueSendRequest(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendRequest)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueSendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueSendRequest(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueSendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_queue_v1_QueueSendResponse(arg) {
  if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendResponse)) {
    throw new Error('Expected argument of type nitric.queue.v1.QueueSendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_queue_v1_QueueSendResponse(buffer_arg) {
  return proto_queue_v1_queue_pb.QueueSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Queue Service contract
var QueueServiceService = exports.QueueServiceService = {
  // Send a single event to a queue
send: {
    path: '/nitric.queue.v1.QueueService/Send',
    requestStream: false,
    responseStream: false,
    requestType: proto_queue_v1_queue_pb.QueueSendRequest,
    responseType: proto_queue_v1_queue_pb.QueueSendResponse,
    requestSerialize: serialize_nitric_queue_v1_QueueSendRequest,
    requestDeserialize: deserialize_nitric_queue_v1_QueueSendRequest,
    responseSerialize: serialize_nitric_queue_v1_QueueSendResponse,
    responseDeserialize: deserialize_nitric_queue_v1_QueueSendResponse,
  },
  // Send multiple events to a queue
sendBatch: {
    path: '/nitric.queue.v1.QueueService/SendBatch',
    requestStream: false,
    responseStream: false,
    requestType: proto_queue_v1_queue_pb.QueueSendBatchRequest,
    responseType: proto_queue_v1_queue_pb.QueueSendBatchResponse,
    requestSerialize: serialize_nitric_queue_v1_QueueSendBatchRequest,
    requestDeserialize: deserialize_nitric_queue_v1_QueueSendBatchRequest,
    responseSerialize: serialize_nitric_queue_v1_QueueSendBatchResponse,
    responseDeserialize: deserialize_nitric_queue_v1_QueueSendBatchResponse,
  },
  // Receive event(s) off a queue
receive: {
    path: '/nitric.queue.v1.QueueService/Receive',
    requestStream: false,
    responseStream: false,
    requestType: proto_queue_v1_queue_pb.QueueReceiveRequest,
    responseType: proto_queue_v1_queue_pb.QueueReceiveResponse,
    requestSerialize: serialize_nitric_queue_v1_QueueReceiveRequest,
    requestDeserialize: deserialize_nitric_queue_v1_QueueReceiveRequest,
    responseSerialize: serialize_nitric_queue_v1_QueueReceiveResponse,
    responseDeserialize: deserialize_nitric_queue_v1_QueueReceiveResponse,
  },
  // Complete an event previously popped from a queue
complete: {
    path: '/nitric.queue.v1.QueueService/Complete',
    requestStream: false,
    responseStream: false,
    requestType: proto_queue_v1_queue_pb.QueueCompleteRequest,
    responseType: proto_queue_v1_queue_pb.QueueCompleteResponse,
    requestSerialize: serialize_nitric_queue_v1_QueueCompleteRequest,
    requestDeserialize: deserialize_nitric_queue_v1_QueueCompleteRequest,
    responseSerialize: serialize_nitric_queue_v1_QueueCompleteResponse,
    responseDeserialize: deserialize_nitric_queue_v1_QueueCompleteResponse,
  },
};

exports.QueueServiceClient = grpc.makeGenericClientConstructor(QueueServiceService);
