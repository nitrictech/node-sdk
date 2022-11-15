// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_faas_v1_faas_pb = require('../../../proto/faas/v1/faas_pb.js');

function serialize_nitric_faas_v1_ClientMessage(arg) {
  if (!(arg instanceof proto_faas_v1_faas_pb.ClientMessage)) {
    throw new Error('Expected argument of type nitric.faas.v1.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_faas_v1_ClientMessage(buffer_arg) {
  return proto_faas_v1_faas_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_faas_v1_ServerMessage(arg) {
  if (!(arg instanceof proto_faas_v1_faas_pb.ServerMessage)) {
    throw new Error('Expected argument of type nitric.faas.v1.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_faas_v1_ServerMessage(buffer_arg) {
  return proto_faas_v1_faas_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for streaming communication with gRPC FaaS implementations
var FaasServiceService = exports.FaasServiceService = {
  // Begin streaming triggers/response to/from the membrane
triggerStream: {
    path: '/nitric.faas.v1.FaasService/TriggerStream',
    requestStream: true,
    responseStream: true,
    requestType: proto_faas_v1_faas_pb.ClientMessage,
    responseType: proto_faas_v1_faas_pb.ServerMessage,
    requestSerialize: serialize_nitric_faas_v1_ClientMessage,
    requestDeserialize: deserialize_nitric_faas_v1_ClientMessage,
    responseSerialize: serialize_nitric_faas_v1_ServerMessage,
    responseDeserialize: deserialize_nitric_faas_v1_ServerMessage,
  },
};

exports.FaasServiceClient = grpc.makeGenericClientConstructor(FaasServiceService);
