// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_storage_v1_storage_pb = require('../../../proto/storage/v1/storage_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');

function serialize_nitric_storage_v1_StorageDeleteRequest(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageDeleteRequest)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageDeleteRequest(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageDeleteResponse(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageDeleteResponse)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageDeleteResponse(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageExistsRequest(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageExistsRequest)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageExistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageExistsRequest(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageExistsResponse(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageExistsResponse)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageExistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageExistsResponse(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageListFilesRequest(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageListFilesRequest)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageListFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageListFilesRequest(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageListFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageListFilesResponse(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageListFilesResponse)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageListFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageListFilesResponse(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageListFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StoragePreSignUrlRequest(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StoragePreSignUrlRequest)) {
    throw new Error('Expected argument of type nitric.storage.v1.StoragePreSignUrlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StoragePreSignUrlRequest(buffer_arg) {
  return proto_storage_v1_storage_pb.StoragePreSignUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StoragePreSignUrlResponse(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StoragePreSignUrlResponse)) {
    throw new Error('Expected argument of type nitric.storage.v1.StoragePreSignUrlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StoragePreSignUrlResponse(buffer_arg) {
  return proto_storage_v1_storage_pb.StoragePreSignUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageReadRequest(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageReadRequest)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageReadRequest(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageReadResponse(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageReadResponse)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageReadResponse(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageWriteRequest(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageWriteRequest)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageWriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageWriteRequest(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageWriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_storage_v1_StorageWriteResponse(arg) {
  if (!(arg instanceof proto_storage_v1_storage_pb.StorageWriteResponse)) {
    throw new Error('Expected argument of type nitric.storage.v1.StorageWriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_storage_v1_StorageWriteResponse(buffer_arg) {
  return proto_storage_v1_storage_pb.StorageWriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Services for storage and retrieval of files in the form of byte arrays, such as text and binary files.
var StorageServiceService = exports.StorageServiceService = {
  // Retrieve an item from a bucket
read: {
    path: '/nitric.storage.v1.StorageService/Read',
    requestStream: false,
    responseStream: false,
    requestType: proto_storage_v1_storage_pb.StorageReadRequest,
    responseType: proto_storage_v1_storage_pb.StorageReadResponse,
    requestSerialize: serialize_nitric_storage_v1_StorageReadRequest,
    requestDeserialize: deserialize_nitric_storage_v1_StorageReadRequest,
    responseSerialize: serialize_nitric_storage_v1_StorageReadResponse,
    responseDeserialize: deserialize_nitric_storage_v1_StorageReadResponse,
  },
  // Store an item to a bucket
write: {
    path: '/nitric.storage.v1.StorageService/Write',
    requestStream: false,
    responseStream: false,
    requestType: proto_storage_v1_storage_pb.StorageWriteRequest,
    responseType: proto_storage_v1_storage_pb.StorageWriteResponse,
    requestSerialize: serialize_nitric_storage_v1_StorageWriteRequest,
    requestDeserialize: deserialize_nitric_storage_v1_StorageWriteRequest,
    responseSerialize: serialize_nitric_storage_v1_StorageWriteResponse,
    responseDeserialize: deserialize_nitric_storage_v1_StorageWriteResponse,
  },
  // Delete an item from a bucket
delete: {
    path: '/nitric.storage.v1.StorageService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: proto_storage_v1_storage_pb.StorageDeleteRequest,
    responseType: proto_storage_v1_storage_pb.StorageDeleteResponse,
    requestSerialize: serialize_nitric_storage_v1_StorageDeleteRequest,
    requestDeserialize: deserialize_nitric_storage_v1_StorageDeleteRequest,
    responseSerialize: serialize_nitric_storage_v1_StorageDeleteResponse,
    responseDeserialize: deserialize_nitric_storage_v1_StorageDeleteResponse,
  },
  // Generate a pre-signed URL for direct operations on an item
preSignUrl: {
    path: '/nitric.storage.v1.StorageService/PreSignUrl',
    requestStream: false,
    responseStream: false,
    requestType: proto_storage_v1_storage_pb.StoragePreSignUrlRequest,
    responseType: proto_storage_v1_storage_pb.StoragePreSignUrlResponse,
    requestSerialize: serialize_nitric_storage_v1_StoragePreSignUrlRequest,
    requestDeserialize: deserialize_nitric_storage_v1_StoragePreSignUrlRequest,
    responseSerialize: serialize_nitric_storage_v1_StoragePreSignUrlResponse,
    responseDeserialize: deserialize_nitric_storage_v1_StoragePreSignUrlResponse,
  },
  // List files currently in the bucket
listFiles: {
    path: '/nitric.storage.v1.StorageService/ListFiles',
    requestStream: false,
    responseStream: false,
    requestType: proto_storage_v1_storage_pb.StorageListFilesRequest,
    responseType: proto_storage_v1_storage_pb.StorageListFilesResponse,
    requestSerialize: serialize_nitric_storage_v1_StorageListFilesRequest,
    requestDeserialize: deserialize_nitric_storage_v1_StorageListFilesRequest,
    responseSerialize: serialize_nitric_storage_v1_StorageListFilesResponse,
    responseDeserialize: deserialize_nitric_storage_v1_StorageListFilesResponse,
  },
  // Determine is an object exists in a bucket
exists: {
    path: '/nitric.storage.v1.StorageService/Exists',
    requestStream: false,
    responseStream: false,
    requestType: proto_storage_v1_storage_pb.StorageExistsRequest,
    responseType: proto_storage_v1_storage_pb.StorageExistsResponse,
    requestSerialize: serialize_nitric_storage_v1_StorageExistsRequest,
    requestDeserialize: deserialize_nitric_storage_v1_StorageExistsRequest,
    responseSerialize: serialize_nitric_storage_v1_StorageExistsResponse,
    responseDeserialize: deserialize_nitric_storage_v1_StorageExistsResponse,
  },
};

exports.StorageServiceClient = grpc.makeGenericClientConstructor(StorageServiceService);
