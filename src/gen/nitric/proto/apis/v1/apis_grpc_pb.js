// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_apis_v1_apis_pb = require('../../../../nitric/proto/apis/v1/apis_pb.js');

function serialize_nitric_proto_apis_v1_ApiDetailsRequest(arg) {
  if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ApiDetailsRequest)) {
    throw new Error('Expected argument of type nitric.proto.apis.v1.ApiDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_apis_v1_ApiDetailsRequest(buffer_arg) {
  return nitric_proto_apis_v1_apis_pb.ApiDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_apis_v1_ApiDetailsResponse(arg) {
  if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ApiDetailsResponse)) {
    throw new Error('Expected argument of type nitric.proto.apis.v1.ApiDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_apis_v1_ApiDetailsResponse(buffer_arg) {
  return nitric_proto_apis_v1_apis_pb.ApiDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_apis_v1_ClientMessage(arg) {
  if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ClientMessage)) {
    throw new Error('Expected argument of type nitric.proto.apis.v1.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_apis_v1_ClientMessage(buffer_arg) {
  return nitric_proto_apis_v1_apis_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_apis_v1_ServerMessage(arg) {
  if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ServerMessage)) {
    throw new Error('Expected argument of type nitric.proto.apis.v1.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_apis_v1_ServerMessage(buffer_arg) {
  return nitric_proto_apis_v1_apis_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for API routing and handlers
var ApiService = exports.ApiService = {
  // Serve a route on an API
serve: {
    path: '/nitric.proto.apis.v1.Api/Serve',
    requestStream: true,
    responseStream: true,
    requestType: nitric_proto_apis_v1_apis_pb.ClientMessage,
    responseType: nitric_proto_apis_v1_apis_pb.ServerMessage,
    requestSerialize: serialize_nitric_proto_apis_v1_ClientMessage,
    requestDeserialize: deserialize_nitric_proto_apis_v1_ClientMessage,
    responseSerialize: serialize_nitric_proto_apis_v1_ServerMessage,
    responseDeserialize: deserialize_nitric_proto_apis_v1_ServerMessage,
  },
  // Retrieve details about an API
apiDetails: {
    path: '/nitric.proto.apis.v1.Api/ApiDetails',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_apis_v1_apis_pb.ApiDetailsRequest,
    responseType: nitric_proto_apis_v1_apis_pb.ApiDetailsResponse,
    requestSerialize: serialize_nitric_proto_apis_v1_ApiDetailsRequest,
    requestDeserialize: deserialize_nitric_proto_apis_v1_ApiDetailsRequest,
    responseSerialize: serialize_nitric_proto_apis_v1_ApiDetailsResponse,
    responseDeserialize: deserialize_nitric_proto_apis_v1_ApiDetailsResponse,
  },
};

exports.ApiClient = grpc.makeGenericClientConstructor(ApiService);
