// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_deployments_v1_deployments_pb = require('../../../../nitric/proto/deployments/v1/deployments_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var nitric_proto_resources_v1_resources_pb = require('../../../../nitric/proto/resources/v1/resources_pb.js');
var nitric_proto_storage_v1_storage_pb = require('../../../../nitric/proto/storage/v1/storage_pb.js');

function serialize_nitric_proto_deployments_v1_DeployDownEvent(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeployDownEvent)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeployDownEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeployDownEvent(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeployDownEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_deployments_v1_DeployDownRequest(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeployDownRequest)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeployDownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeployDownRequest(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeployDownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_deployments_v1_DeployUpEvent(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeployUpEvent)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeployUpEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeployUpEvent(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeployUpEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_deployments_v1_DeployUpRequest(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeployUpRequest)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeployUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeployUpRequest(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeployUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Deloyment Service contract
var DeployService = exports.DeployService = {
  // Begins a new deployment
// Server will stream updates back to the connected client
// on the status of the deployment
up: {
    path: '/nitric.proto.deployments.v1.Deploy/Up',
    requestStream: false,
    responseStream: true,
    requestType: nitric_proto_deployments_v1_deployments_pb.DeployUpRequest,
    responseType: nitric_proto_deployments_v1_deployments_pb.DeployUpEvent,
    requestSerialize: serialize_nitric_proto_deployments_v1_DeployUpRequest,
    requestDeserialize: deserialize_nitric_proto_deployments_v1_DeployUpRequest,
    responseSerialize: serialize_nitric_proto_deployments_v1_DeployUpEvent,
    responseDeserialize: deserialize_nitric_proto_deployments_v1_DeployUpEvent,
  },
  // Tears down an existing deployment
// Server will stream updates back to the connected client
// on the status of the teardown
down: {
    path: '/nitric.proto.deployments.v1.Deploy/Down',
    requestStream: false,
    responseStream: true,
    requestType: nitric_proto_deployments_v1_deployments_pb.DeployDownRequest,
    responseType: nitric_proto_deployments_v1_deployments_pb.DeployDownEvent,
    requestSerialize: serialize_nitric_proto_deployments_v1_DeployDownRequest,
    requestDeserialize: deserialize_nitric_proto_deployments_v1_DeployDownRequest,
    responseSerialize: serialize_nitric_proto_deployments_v1_DeployDownEvent,
    responseDeserialize: deserialize_nitric_proto_deployments_v1_DeployDownEvent,
  },
};

exports.DeployClient = grpc.makeGenericClientConstructor(DeployService);
