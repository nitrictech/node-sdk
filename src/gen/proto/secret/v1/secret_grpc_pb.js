// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_secret_v1_secret_pb = require('../../../proto/secret/v1/secret_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');

function serialize_nitric_secret_v1_SecretAccessRequest(arg) {
  if (!(arg instanceof proto_secret_v1_secret_pb.SecretAccessRequest)) {
    throw new Error('Expected argument of type nitric.secret.v1.SecretAccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_secret_v1_SecretAccessRequest(buffer_arg) {
  return proto_secret_v1_secret_pb.SecretAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_secret_v1_SecretAccessResponse(arg) {
  if (!(arg instanceof proto_secret_v1_secret_pb.SecretAccessResponse)) {
    throw new Error('Expected argument of type nitric.secret.v1.SecretAccessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_secret_v1_SecretAccessResponse(buffer_arg) {
  return proto_secret_v1_secret_pb.SecretAccessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_secret_v1_SecretPutRequest(arg) {
  if (!(arg instanceof proto_secret_v1_secret_pb.SecretPutRequest)) {
    throw new Error('Expected argument of type nitric.secret.v1.SecretPutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_secret_v1_SecretPutRequest(buffer_arg) {
  return proto_secret_v1_secret_pb.SecretPutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_secret_v1_SecretPutResponse(arg) {
  if (!(arg instanceof proto_secret_v1_secret_pb.SecretPutResponse)) {
    throw new Error('Expected argument of type nitric.secret.v1.SecretPutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_secret_v1_SecretPutResponse(buffer_arg) {
  return proto_secret_v1_secret_pb.SecretPutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Nitric Secret Service contract
var SecretServiceService = exports.SecretServiceService = {
  // Updates a secret, creating a new one if it doesn't already exist
put: {
    path: '/nitric.secret.v1.SecretService/Put',
    requestStream: false,
    responseStream: false,
    requestType: proto_secret_v1_secret_pb.SecretPutRequest,
    responseType: proto_secret_v1_secret_pb.SecretPutResponse,
    requestSerialize: serialize_nitric_secret_v1_SecretPutRequest,
    requestDeserialize: deserialize_nitric_secret_v1_SecretPutRequest,
    responseSerialize: serialize_nitric_secret_v1_SecretPutResponse,
    responseDeserialize: deserialize_nitric_secret_v1_SecretPutResponse,
  },
  // Gets a secret from a Secret Store
access: {
    path: '/nitric.secret.v1.SecretService/Access',
    requestStream: false,
    responseStream: false,
    requestType: proto_secret_v1_secret_pb.SecretAccessRequest,
    responseType: proto_secret_v1_secret_pb.SecretAccessResponse,
    requestSerialize: serialize_nitric_secret_v1_SecretAccessRequest,
    requestDeserialize: deserialize_nitric_secret_v1_SecretAccessRequest,
    responseSerialize: serialize_nitric_secret_v1_SecretAccessResponse,
    responseDeserialize: deserialize_nitric_secret_v1_SecretAccessResponse,
  },
};

exports.SecretServiceClient = grpc.makeGenericClientConstructor(SecretServiceService);
