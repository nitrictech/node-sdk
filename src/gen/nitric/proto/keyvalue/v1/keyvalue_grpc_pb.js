// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_keyvalue_v1_keyvalue_pb = require('../../../../nitric/proto/keyvalue/v1/keyvalue_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest(arg) {
  if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest)) {
    throw new Error('Expected argument of type nitric.proto.KeyValue.v1.KeyValueDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest(buffer_arg) {
  return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse(arg) {
  if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse)) {
    throw new Error('Expected argument of type nitric.proto.KeyValue.v1.KeyValueDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse(buffer_arg) {
  return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_KeyValue_v1_KeyValueGetRequest(arg) {
  if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest)) {
    throw new Error('Expected argument of type nitric.proto.KeyValue.v1.KeyValueGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_KeyValue_v1_KeyValueGetRequest(buffer_arg) {
  return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_KeyValue_v1_KeyValueGetResponse(arg) {
  if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse)) {
    throw new Error('Expected argument of type nitric.proto.KeyValue.v1.KeyValueGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_KeyValue_v1_KeyValueGetResponse(buffer_arg) {
  return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_KeyValue_v1_KeyValueSetRequest(arg) {
  if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest)) {
    throw new Error('Expected argument of type nitric.proto.KeyValue.v1.KeyValueSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_KeyValue_v1_KeyValueSetRequest(buffer_arg) {
  return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_KeyValue_v1_KeyValueSetResponse(arg) {
  if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse)) {
    throw new Error('Expected argument of type nitric.proto.KeyValue.v1.KeyValueSetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_KeyValue_v1_KeyValueSetResponse(buffer_arg) {
  return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for storage and retrieval of simple JSON keyValue
var KeyValueService = exports.KeyValueService = {
  // Get an existing document
get: {
    path: '/nitric.proto.KeyValue.v1.KeyValue/Get',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest,
    responseType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse,
    requestSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueGetRequest,
    requestDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueGetRequest,
    responseSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueGetResponse,
    responseDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueGetResponse,
  },
  // Create a new or overwrite an existing document
set: {
    path: '/nitric.proto.KeyValue.v1.KeyValue/Set',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest,
    responseType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse,
    requestSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueSetRequest,
    requestDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueSetRequest,
    responseSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueSetResponse,
    responseDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueSetResponse,
  },
  // Delete an existing document
delete: {
    path: '/nitric.proto.KeyValue.v1.KeyValue/Delete',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest,
    responseType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse,
    requestSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest,
    requestDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest,
    responseSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse,
    responseDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse,
  },
};

exports.KeyValueClient = grpc.makeGenericClientConstructor(KeyValueService);
