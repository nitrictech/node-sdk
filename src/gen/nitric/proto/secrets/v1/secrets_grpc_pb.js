// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_secrets_v1_secrets_pb = require('../../../../nitric/proto/secrets/v1/secrets_pb.js');

function serialize_nitric_proto_secrets_v1_SecretAccessRequest(arg) {
  if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest)) {
    throw new Error('Expected argument of type nitric.proto.secrets.v1.SecretAccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_secrets_v1_SecretAccessRequest(buffer_arg) {
  return nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_secrets_v1_SecretAccessResponse(arg) {
  if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse)) {
    throw new Error('Expected argument of type nitric.proto.secrets.v1.SecretAccessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_secrets_v1_SecretAccessResponse(buffer_arg) {
  return nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_secrets_v1_SecretPutRequest(arg) {
  if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretPutRequest)) {
    throw new Error('Expected argument of type nitric.proto.secrets.v1.SecretPutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_secrets_v1_SecretPutRequest(buffer_arg) {
  return nitric_proto_secrets_v1_secrets_pb.SecretPutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_secrets_v1_SecretPutResponse(arg) {
  if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretPutResponse)) {
    throw new Error('Expected argument of type nitric.proto.secrets.v1.SecretPutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_secrets_v1_SecretPutResponse(buffer_arg) {
  return nitric_proto_secrets_v1_secrets_pb.SecretPutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SecretManagerService = exports.SecretManagerService = {
  // Updates a secret, creating a new one if it doesn't already exist
put: {
    path: '/nitric.proto.secrets.v1.SecretManager/Put',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_secrets_v1_secrets_pb.SecretPutRequest,
    responseType: nitric_proto_secrets_v1_secrets_pb.SecretPutResponse,
    requestSerialize: serialize_nitric_proto_secrets_v1_SecretPutRequest,
    requestDeserialize: deserialize_nitric_proto_secrets_v1_SecretPutRequest,
    responseSerialize: serialize_nitric_proto_secrets_v1_SecretPutResponse,
    responseDeserialize: deserialize_nitric_proto_secrets_v1_SecretPutResponse,
  },
  // Gets a secret from a Secret Store
access: {
    path: '/nitric.proto.secrets.v1.SecretManager/Access',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest,
    responseType: nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse,
    requestSerialize: serialize_nitric_proto_secrets_v1_SecretAccessRequest,
    requestDeserialize: deserialize_nitric_proto_secrets_v1_SecretAccessRequest,
    responseSerialize: serialize_nitric_proto_secrets_v1_SecretAccessResponse,
    responseDeserialize: deserialize_nitric_proto_secrets_v1_SecretAccessResponse,
  },
};

exports.SecretManagerClient = grpc.makeGenericClientConstructor(SecretManagerService);
