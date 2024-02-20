// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_storage_v1_storage_pb = require('../../../../nitric/proto/storage/v1/storage_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_nitric_proto_storage_v1_ClientMessage(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.ClientMessage)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_ClientMessage(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_ServerMessage(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.ServerMessage)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_ServerMessage(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageDeleteRequest(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageDeleteRequest)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageDeleteRequest(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageDeleteResponse(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageDeleteResponse)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageDeleteResponse(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageExistsRequest(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageExistsRequest)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageExistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageExistsRequest(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageExistsResponse(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageExistsResponse)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageExistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageExistsResponse(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageListBlobsRequest(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageListBlobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageListBlobsRequest(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageListBlobsResponse(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageListBlobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageListBlobsResponse(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StoragePreSignUrlRequest(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StoragePreSignUrlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StoragePreSignUrlRequest(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StoragePreSignUrlResponse(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StoragePreSignUrlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StoragePreSignUrlResponse(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageReadRequest(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageReadRequest)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageReadRequest(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageReadResponse(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageReadResponse)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageReadResponse(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageWriteRequest(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageWriteRequest)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageWriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageWriteRequest(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageWriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_storage_v1_StorageWriteResponse(arg) {
  if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageWriteResponse)) {
    throw new Error('Expected argument of type nitric.proto.storage.v1.StorageWriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_storage_v1_StorageWriteResponse(buffer_arg) {
  return nitric_proto_storage_v1_storage_pb.StorageWriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Services for storage and retrieval of blobs in the form of byte arrays, such as text and binary blobs.
var StorageService = exports.StorageService = {
  // Retrieve an item from a bucket
read: {
    path: '/nitric.proto.storage.v1.Storage/Read',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_storage_v1_storage_pb.StorageReadRequest,
    responseType: nitric_proto_storage_v1_storage_pb.StorageReadResponse,
    requestSerialize: serialize_nitric_proto_storage_v1_StorageReadRequest,
    requestDeserialize: deserialize_nitric_proto_storage_v1_StorageReadRequest,
    responseSerialize: serialize_nitric_proto_storage_v1_StorageReadResponse,
    responseDeserialize: deserialize_nitric_proto_storage_v1_StorageReadResponse,
  },
  // Store an item to a bucket
write: {
    path: '/nitric.proto.storage.v1.Storage/Write',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_storage_v1_storage_pb.StorageWriteRequest,
    responseType: nitric_proto_storage_v1_storage_pb.StorageWriteResponse,
    requestSerialize: serialize_nitric_proto_storage_v1_StorageWriteRequest,
    requestDeserialize: deserialize_nitric_proto_storage_v1_StorageWriteRequest,
    responseSerialize: serialize_nitric_proto_storage_v1_StorageWriteResponse,
    responseDeserialize: deserialize_nitric_proto_storage_v1_StorageWriteResponse,
  },
  // Delete an item from a bucket
delete: {
    path: '/nitric.proto.storage.v1.Storage/Delete',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_storage_v1_storage_pb.StorageDeleteRequest,
    responseType: nitric_proto_storage_v1_storage_pb.StorageDeleteResponse,
    requestSerialize: serialize_nitric_proto_storage_v1_StorageDeleteRequest,
    requestDeserialize: deserialize_nitric_proto_storage_v1_StorageDeleteRequest,
    responseSerialize: serialize_nitric_proto_storage_v1_StorageDeleteResponse,
    responseDeserialize: deserialize_nitric_proto_storage_v1_StorageDeleteResponse,
  },
  // Generate a pre-signed URL for direct operations on an item
preSignUrl: {
    path: '/nitric.proto.storage.v1.Storage/PreSignUrl',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest,
    responseType: nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse,
    requestSerialize: serialize_nitric_proto_storage_v1_StoragePreSignUrlRequest,
    requestDeserialize: deserialize_nitric_proto_storage_v1_StoragePreSignUrlRequest,
    responseSerialize: serialize_nitric_proto_storage_v1_StoragePreSignUrlResponse,
    responseDeserialize: deserialize_nitric_proto_storage_v1_StoragePreSignUrlResponse,
  },
  // List blobs currently in the bucket
listBlobs: {
    path: '/nitric.proto.storage.v1.Storage/ListBlobs',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest,
    responseType: nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse,
    requestSerialize: serialize_nitric_proto_storage_v1_StorageListBlobsRequest,
    requestDeserialize: deserialize_nitric_proto_storage_v1_StorageListBlobsRequest,
    responseSerialize: serialize_nitric_proto_storage_v1_StorageListBlobsResponse,
    responseDeserialize: deserialize_nitric_proto_storage_v1_StorageListBlobsResponse,
  },
  // Determine is an object exists in a bucket
exists: {
    path: '/nitric.proto.storage.v1.Storage/Exists',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_storage_v1_storage_pb.StorageExistsRequest,
    responseType: nitric_proto_storage_v1_storage_pb.StorageExistsResponse,
    requestSerialize: serialize_nitric_proto_storage_v1_StorageExistsRequest,
    requestDeserialize: deserialize_nitric_proto_storage_v1_StorageExistsRequest,
    responseSerialize: serialize_nitric_proto_storage_v1_StorageExistsResponse,
    responseDeserialize: deserialize_nitric_proto_storage_v1_StorageExistsResponse,
  },
};

exports.StorageClient = grpc.makeGenericClientConstructor(StorageService);
var StorageListenerService = exports.StorageListenerService = {
  // Listen for changes on a bucket
listen: {
    path: '/nitric.proto.storage.v1.StorageListener/Listen',
    requestStream: true,
    responseStream: true,
    requestType: nitric_proto_storage_v1_storage_pb.ClientMessage,
    responseType: nitric_proto_storage_v1_storage_pb.ServerMessage,
    requestSerialize: serialize_nitric_proto_storage_v1_ClientMessage,
    requestDeserialize: deserialize_nitric_proto_storage_v1_ClientMessage,
    responseSerialize: serialize_nitric_proto_storage_v1_ServerMessage,
    responseDeserialize: deserialize_nitric_proto_storage_v1_ServerMessage,
  },
};

exports.StorageListenerClient = grpc.makeGenericClientConstructor(StorageListenerService);
