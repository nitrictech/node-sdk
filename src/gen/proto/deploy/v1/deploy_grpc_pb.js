// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_deploy_v1_deploy_pb = require('../../../proto/deploy/v1/deploy_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var proto_resource_v1_resource_pb = require('../../../proto/resource/v1/resource_pb.js');
var proto_faas_v1_faas_pb = require('../../../proto/faas/v1/faas_pb.js');

function serialize_nitric_deploy_v1_DeployDownEvent(arg) {
  if (!(arg instanceof proto_deploy_v1_deploy_pb.DeployDownEvent)) {
    throw new Error('Expected argument of type nitric.deploy.v1.DeployDownEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_deploy_v1_DeployDownEvent(buffer_arg) {
  return proto_deploy_v1_deploy_pb.DeployDownEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_deploy_v1_DeployDownRequest(arg) {
  if (!(arg instanceof proto_deploy_v1_deploy_pb.DeployDownRequest)) {
    throw new Error('Expected argument of type nitric.deploy.v1.DeployDownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_deploy_v1_DeployDownRequest(buffer_arg) {
  return proto_deploy_v1_deploy_pb.DeployDownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_deploy_v1_DeployUpEvent(arg) {
  if (!(arg instanceof proto_deploy_v1_deploy_pb.DeployUpEvent)) {
    throw new Error('Expected argument of type nitric.deploy.v1.DeployUpEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_deploy_v1_DeployUpEvent(buffer_arg) {
  return proto_deploy_v1_deploy_pb.DeployUpEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_deploy_v1_DeployUpRequest(arg) {
  if (!(arg instanceof proto_deploy_v1_deploy_pb.DeployUpRequest)) {
    throw new Error('Expected argument of type nitric.deploy.v1.DeployUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_deploy_v1_DeployUpRequest(buffer_arg) {
  return proto_deploy_v1_deploy_pb.DeployUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Deloyment Service contract
var DeployServiceService = exports.DeployServiceService = {
  // Begins a new deployment
// Server will stream updates back to the connected client
// on the status of the deployment
up: {
    path: '/nitric.deploy.v1.DeployService/Up',
    requestStream: false,
    responseStream: true,
    requestType: proto_deploy_v1_deploy_pb.DeployUpRequest,
    responseType: proto_deploy_v1_deploy_pb.DeployUpEvent,
    requestSerialize: serialize_nitric_deploy_v1_DeployUpRequest,
    requestDeserialize: deserialize_nitric_deploy_v1_DeployUpRequest,
    responseSerialize: serialize_nitric_deploy_v1_DeployUpEvent,
    responseDeserialize: deserialize_nitric_deploy_v1_DeployUpEvent,
  },
  // Tears down an existing deployment
// Server will stream updates back to the connected client
// on the status of the teardown
down: {
    path: '/nitric.deploy.v1.DeployService/Down',
    requestStream: false,
    responseStream: true,
    requestType: proto_deploy_v1_deploy_pb.DeployDownRequest,
    responseType: proto_deploy_v1_deploy_pb.DeployDownEvent,
    requestSerialize: serialize_nitric_deploy_v1_DeployDownRequest,
    requestDeserialize: deserialize_nitric_deploy_v1_DeployDownRequest,
    responseSerialize: serialize_nitric_deploy_v1_DeployDownEvent,
    responseDeserialize: deserialize_nitric_deploy_v1_DeployDownEvent,
  },
};

exports.DeployServiceClient = grpc.makeGenericClientConstructor(DeployServiceService);
