// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_deployments_v1_deployments_pb = require('../../../../nitric/proto/deployments/v1/deployments_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var nitric_proto_batch_v1_batch_pb = require('../../../../nitric/proto/batch/v1/batch_pb.js');
var nitric_proto_resources_v1_resources_pb = require('../../../../nitric/proto/resources/v1/resources_pb.js');
var nitric_proto_storage_v1_storage_pb = require('../../../../nitric/proto/storage/v1/storage_pb.js');

function serialize_nitric_proto_deployments_v1_DeploymentDownEvent(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeploymentDownEvent)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeploymentDownEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeploymentDownEvent(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeploymentDownEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_deployments_v1_DeploymentDownRequest(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeploymentDownRequest)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeploymentDownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeploymentDownRequest(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeploymentDownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_deployments_v1_DeploymentUpEvent(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeploymentUpEvent)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeploymentUpEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeploymentUpEvent(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeploymentUpEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_deployments_v1_DeploymentUpRequest(arg) {
  if (!(arg instanceof nitric_proto_deployments_v1_deployments_pb.DeploymentUpRequest)) {
    throw new Error('Expected argument of type nitric.proto.deployments.v1.DeploymentUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_deployments_v1_DeploymentUpRequest(buffer_arg) {
  return nitric_proto_deployments_v1_deployments_pb.DeploymentUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Deloyment Service contract
var DeploymentService = exports.DeploymentService = {
  // Begins a new deployment
// Server will stream updates back to the connected client
// on the status of the deployment
up: {
    path: '/nitric.proto.deployments.v1.Deployment/Up',
    requestStream: false,
    responseStream: true,
    requestType: nitric_proto_deployments_v1_deployments_pb.DeploymentUpRequest,
    responseType: nitric_proto_deployments_v1_deployments_pb.DeploymentUpEvent,
    requestSerialize: serialize_nitric_proto_deployments_v1_DeploymentUpRequest,
    requestDeserialize: deserialize_nitric_proto_deployments_v1_DeploymentUpRequest,
    responseSerialize: serialize_nitric_proto_deployments_v1_DeploymentUpEvent,
    responseDeserialize: deserialize_nitric_proto_deployments_v1_DeploymentUpEvent,
  },
  // Tears down an existing deployment
// Server will stream updates back to the connected client
// on the status of the teardown
down: {
    path: '/nitric.proto.deployments.v1.Deployment/Down',
    requestStream: false,
    responseStream: true,
    requestType: nitric_proto_deployments_v1_deployments_pb.DeploymentDownRequest,
    responseType: nitric_proto_deployments_v1_deployments_pb.DeploymentDownEvent,
    requestSerialize: serialize_nitric_proto_deployments_v1_DeploymentDownRequest,
    requestDeserialize: deserialize_nitric_proto_deployments_v1_DeploymentDownRequest,
    responseSerialize: serialize_nitric_proto_deployments_v1_DeploymentDownEvent,
    responseDeserialize: deserialize_nitric_proto_deployments_v1_DeploymentDownEvent,
  },
};

exports.DeploymentClient = grpc.makeGenericClientConstructor(DeploymentService);
