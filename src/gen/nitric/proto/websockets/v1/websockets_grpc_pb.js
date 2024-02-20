// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_websockets_v1_websockets_pb = require('../../../../nitric/proto/websockets/v1/websockets_pb.js');

function serialize_nitric_proto_websockets_v1_ClientMessage(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.ClientMessage)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_ClientMessage(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_websockets_v1_ServerMessage(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.ServerMessage)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_ServerMessage(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_websockets_v1_WebsocketCloseConnectionRequest(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.WebsocketCloseConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_WebsocketCloseConnectionRequest(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_websockets_v1_WebsocketCloseConnectionResponse(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.WebsocketCloseConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_WebsocketCloseConnectionResponse(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_websockets_v1_WebsocketDetailsRequest(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.WebsocketDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_WebsocketDetailsRequest(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_websockets_v1_WebsocketDetailsResponse(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.WebsocketDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_WebsocketDetailsResponse(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_websockets_v1_WebsocketSendRequest(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.WebsocketSendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_WebsocketSendRequest(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_websockets_v1_WebsocketSendResponse(arg) {
  if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse)) {
    throw new Error('Expected argument of type nitric.proto.websockets.v1.WebsocketSendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_websockets_v1_WebsocketSendResponse(buffer_arg) {
  return nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WebsocketService = exports.WebsocketService = {
  // Send a messages to a websocket
sendMessage: {
    path: '/nitric.proto.websockets.v1.Websocket/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest,
    responseType: nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse,
    requestSerialize: serialize_nitric_proto_websockets_v1_WebsocketSendRequest,
    requestDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketSendRequest,
    responseSerialize: serialize_nitric_proto_websockets_v1_WebsocketSendResponse,
    responseDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketSendResponse,
  },
  // Close a websocket connection
// This can be used to force a client to disconnect
closeConnection: {
    path: '/nitric.proto.websockets.v1.Websocket/CloseConnection',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest,
    responseType: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse,
    requestSerialize: serialize_nitric_proto_websockets_v1_WebsocketCloseConnectionRequest,
    requestDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketCloseConnectionRequest,
    responseSerialize: serialize_nitric_proto_websockets_v1_WebsocketCloseConnectionResponse,
    responseDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketCloseConnectionResponse,
  },
  // Retrieve details about an API
socketDetails: {
    path: '/nitric.proto.websockets.v1.Websocket/SocketDetails',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest,
    responseType: nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse,
    requestSerialize: serialize_nitric_proto_websockets_v1_WebsocketDetailsRequest,
    requestDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketDetailsRequest,
    responseSerialize: serialize_nitric_proto_websockets_v1_WebsocketDetailsResponse,
    responseDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketDetailsResponse,
  },
};

exports.WebsocketClient = grpc.makeGenericClientConstructor(WebsocketService);
var WebsocketHandlerService = exports.WebsocketHandlerService = {
  // Handle incoming websocket events
handleEvents: {
    path: '/nitric.proto.websockets.v1.WebsocketHandler/HandleEvents',
    requestStream: true,
    responseStream: true,
    requestType: nitric_proto_websockets_v1_websockets_pb.ClientMessage,
    responseType: nitric_proto_websockets_v1_websockets_pb.ServerMessage,
    requestSerialize: serialize_nitric_proto_websockets_v1_ClientMessage,
    requestDeserialize: deserialize_nitric_proto_websockets_v1_ClientMessage,
    responseSerialize: serialize_nitric_proto_websockets_v1_ServerMessage,
    responseDeserialize: deserialize_nitric_proto_websockets_v1_ServerMessage,
  },
};

exports.WebsocketHandlerClient = grpc.makeGenericClientConstructor(WebsocketHandlerService);
