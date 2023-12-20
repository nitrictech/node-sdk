// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_http_v1_http_pb = require('../../../../nitric/proto/http/v1/http_pb.js');

function serialize_nitric_proto_http_v1_HttpProxyRequest(arg) {
  if (!(arg instanceof nitric_proto_http_v1_http_pb.HttpProxyRequest)) {
    throw new Error('Expected argument of type nitric.proto.http.v1.HttpProxyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_http_v1_HttpProxyRequest(buffer_arg) {
  return nitric_proto_http_v1_http_pb.HttpProxyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_http_v1_HttpProxyResponse(arg) {
  if (!(arg instanceof nitric_proto_http_v1_http_pb.HttpProxyResponse)) {
    throw new Error('Expected argument of type nitric.proto.http.v1.HttpProxyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_http_v1_HttpProxyResponse(buffer_arg) {
  return nitric_proto_http_v1_http_pb.HttpProxyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for publishing asynchronous messages
var HttpService = exports.HttpService = {
  // Serve a route on an API Gateway
proxy: {
    path: '/nitric.proto.http.v1.Http/Proxy',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_http_v1_http_pb.HttpProxyRequest,
    responseType: nitric_proto_http_v1_http_pb.HttpProxyResponse,
    requestSerialize: serialize_nitric_proto_http_v1_HttpProxyRequest,
    requestDeserialize: deserialize_nitric_proto_http_v1_HttpProxyRequest,
    responseSerialize: serialize_nitric_proto_http_v1_HttpProxyResponse,
    responseDeserialize: deserialize_nitric_proto_http_v1_HttpProxyResponse,
  },
};

exports.HttpClient = grpc.makeGenericClientConstructor(HttpService);
