// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_kvstore_v1_kvstore_pb = require('../../../../nitric/proto/kvstore/v1/kvstore_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyRequest(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreDeleteKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyRequest(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyResponse(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreDeleteKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyResponse(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_kvstore_v1_KvStoreGetValueRequest(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreGetValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreGetValueRequest(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_kvstore_v1_KvStoreGetValueResponse(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreGetValueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreGetValueResponse(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_kvstore_v1_KvStoreScanKeysRequest(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysRequest)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreScanKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreScanKeysRequest(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_kvstore_v1_KvStoreScanKeysResponse(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysResponse)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreScanKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreScanKeysResponse(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_kvstore_v1_KvStoreSetValueRequest(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreSetValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreSetValueRequest(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_kvstore_v1_KvStoreSetValueResponse(arg) {
  if (!(arg instanceof nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse)) {
    throw new Error('Expected argument of type nitric.proto.kvstore.v1.KvStoreSetValueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_kvstore_v1_KvStoreSetValueResponse(buffer_arg) {
  return nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for storage and retrieval of simple JSON keyValue
var KvStoreService = exports.KvStoreService = {
  // Get an existing value
getValue: {
    path: '/nitric.proto.kvstore.v1.KvStore/GetValue',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueRequest,
    responseType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreGetValueResponse,
    requestSerialize: serialize_nitric_proto_kvstore_v1_KvStoreGetValueRequest,
    requestDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreGetValueRequest,
    responseSerialize: serialize_nitric_proto_kvstore_v1_KvStoreGetValueResponse,
    responseDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreGetValueResponse,
  },
  // Create a new or overwrite an existing value
setValue: {
    path: '/nitric.proto.kvstore.v1.KvStore/SetValue',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueRequest,
    responseType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreSetValueResponse,
    requestSerialize: serialize_nitric_proto_kvstore_v1_KvStoreSetValueRequest,
    requestDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreSetValueRequest,
    responseSerialize: serialize_nitric_proto_kvstore_v1_KvStoreSetValueResponse,
    responseDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreSetValueResponse,
  },
  // Delete a key and its value
deleteKey: {
    path: '/nitric.proto.kvstore.v1.KvStore/DeleteKey',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyRequest,
    responseType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreDeleteKeyResponse,
    requestSerialize: serialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyRequest,
    requestDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyRequest,
    responseSerialize: serialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyResponse,
    responseDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreDeleteKeyResponse,
  },
  // Iterate over all keys in a store
scanKeys: {
    path: '/nitric.proto.kvstore.v1.KvStore/ScanKeys',
    requestStream: false,
    responseStream: true,
    requestType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysRequest,
    responseType: nitric_proto_kvstore_v1_kvstore_pb.KvStoreScanKeysResponse,
    requestSerialize: serialize_nitric_proto_kvstore_v1_KvStoreScanKeysRequest,
    requestDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreScanKeysRequest,
    responseSerialize: serialize_nitric_proto_kvstore_v1_KvStoreScanKeysResponse,
    responseDeserialize: deserialize_nitric_proto_kvstore_v1_KvStoreScanKeysResponse,
  },
};

exports.KvStoreClient = grpc.makeGenericClientConstructor(KvStoreService);
