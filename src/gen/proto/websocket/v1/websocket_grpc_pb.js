// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_websocket_v1_websocket_pb = require('../../../proto/websocket/v1/websocket_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');

function serialize_nitric_websocket_v1_WebsocketCloseRequest(arg) {
  if (!(arg instanceof proto_websocket_v1_websocket_pb.WebsocketCloseRequest)) {
    throw new Error('Expected argument of type nitric.websocket.v1.WebsocketCloseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_websocket_v1_WebsocketCloseRequest(buffer_arg) {
  return proto_websocket_v1_websocket_pb.WebsocketCloseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_websocket_v1_WebsocketCloseResponse(arg) {
  if (!(arg instanceof proto_websocket_v1_websocket_pb.WebsocketCloseResponse)) {
    throw new Error('Expected argument of type nitric.websocket.v1.WebsocketCloseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_websocket_v1_WebsocketCloseResponse(buffer_arg) {
  return proto_websocket_v1_websocket_pb.WebsocketCloseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_websocket_v1_WebsocketSendRequest(arg) {
  if (!(arg instanceof proto_websocket_v1_websocket_pb.WebsocketSendRequest)) {
    throw new Error('Expected argument of type nitric.websocket.v1.WebsocketSendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_websocket_v1_WebsocketSendRequest(buffer_arg) {
  return proto_websocket_v1_websocket_pb.WebsocketSendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_websocket_v1_WebsocketSendResponse(arg) {
  if (!(arg instanceof proto_websocket_v1_websocket_pb.WebsocketSendResponse)) {
    throw new Error('Expected argument of type nitric.websocket.v1.WebsocketSendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_websocket_v1_WebsocketSendResponse(buffer_arg) {
  return proto_websocket_v1_websocket_pb.WebsocketSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WebsocketServiceService = exports.WebsocketServiceService = {
  // Send a messages to a websocket
send: {
    path: '/nitric.websocket.v1.WebsocketService/Send',
    requestStream: false,
    responseStream: false,
    requestType: proto_websocket_v1_websocket_pb.WebsocketSendRequest,
    responseType: proto_websocket_v1_websocket_pb.WebsocketSendResponse,
    requestSerialize: serialize_nitric_websocket_v1_WebsocketSendRequest,
    requestDeserialize: deserialize_nitric_websocket_v1_WebsocketSendRequest,
    responseSerialize: serialize_nitric_websocket_v1_WebsocketSendResponse,
    responseDeserialize: deserialize_nitric_websocket_v1_WebsocketSendResponse,
  },
  // Close a websocket connection
// This can be used to force a client to disconnect
close: {
    path: '/nitric.websocket.v1.WebsocketService/Close',
    requestStream: false,
    responseStream: false,
    requestType: proto_websocket_v1_websocket_pb.WebsocketCloseRequest,
    responseType: proto_websocket_v1_websocket_pb.WebsocketCloseResponse,
    requestSerialize: serialize_nitric_websocket_v1_WebsocketCloseRequest,
    requestDeserialize: deserialize_nitric_websocket_v1_WebsocketCloseRequest,
    responseSerialize: serialize_nitric_websocket_v1_WebsocketCloseResponse,
    responseDeserialize: deserialize_nitric_websocket_v1_WebsocketCloseResponse,
  },
};

exports.WebsocketServiceClient = grpc.makeGenericClientConstructor(WebsocketServiceService);
