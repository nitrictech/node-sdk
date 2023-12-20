// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_resources_v1_resources_pb = require('../../../../nitric/proto/resources/v1/resources_pb.js');

function serialize_nitric_proto_resources_v1_ResourceDeclareRequest(arg) {
  if (!(arg instanceof nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest)) {
    throw new Error('Expected argument of type nitric.proto.resources.v1.ResourceDeclareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_resources_v1_ResourceDeclareRequest(buffer_arg) {
  return nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_resources_v1_ResourceDeclareResponse(arg) {
  if (!(arg instanceof nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse)) {
    throw new Error('Expected argument of type nitric.proto.resources.v1.ResourceDeclareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_resources_v1_ResourceDeclareResponse(buffer_arg) {
  return nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_resources_v1_ResourceDetailsRequest(arg) {
  if (!(arg instanceof nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest)) {
    throw new Error('Expected argument of type nitric.proto.resources.v1.ResourceDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_resources_v1_ResourceDetailsRequest(buffer_arg) {
  return nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_resources_v1_ResourceDetailsResponse(arg) {
  if (!(arg instanceof nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse)) {
    throw new Error('Expected argument of type nitric.proto.resources.v1.ResourceDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_resources_v1_ResourceDetailsResponse(buffer_arg) {
  return nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Nitric Resource Service
// The service definition exists to allow a nitric application to declare peripheral dependencies
var ResourcesService = exports.ResourcesService = {
  // Declare a resource for the nitric application
// At Deploy time this will create resources as part of the nitric stacks dependency graph
// At runtime
declare: {
    path: '/nitric.proto.resources.v1.Resources/Declare',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest,
    responseType: nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse,
    requestSerialize: serialize_nitric_proto_resources_v1_ResourceDeclareRequest,
    requestDeserialize: deserialize_nitric_proto_resources_v1_ResourceDeclareRequest,
    responseSerialize: serialize_nitric_proto_resources_v1_ResourceDeclareResponse,
    responseDeserialize: deserialize_nitric_proto_resources_v1_ResourceDeclareResponse,
  },
  // Retrieve details about a resource at runtime
details: {
    path: '/nitric.proto.resources.v1.Resources/Details',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_resources_v1_resources_pb.ResourceDetailsRequest,
    responseType: nitric_proto_resources_v1_resources_pb.ResourceDetailsResponse,
    requestSerialize: serialize_nitric_proto_resources_v1_ResourceDetailsRequest,
    requestDeserialize: deserialize_nitric_proto_resources_v1_ResourceDetailsRequest,
    responseSerialize: serialize_nitric_proto_resources_v1_ResourceDetailsResponse,
    responseDeserialize: deserialize_nitric_proto_resources_v1_ResourceDetailsResponse,
  },
};

exports.ResourcesClient = grpc.makeGenericClientConstructor(ResourcesService);
