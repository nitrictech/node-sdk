// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_document_v1_document_pb = require('../../../proto/document/v1/document_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');

function serialize_nitric_document_v1_DocumentDeleteRequest(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentDeleteRequest)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentDeleteRequest(buffer_arg) {
  return proto_document_v1_document_pb.DocumentDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentDeleteResponse(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentDeleteResponse)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentDeleteResponse(buffer_arg) {
  return proto_document_v1_document_pb.DocumentDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentGetRequest(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentGetRequest)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentGetRequest(buffer_arg) {
  return proto_document_v1_document_pb.DocumentGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentGetResponse(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentGetResponse)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentGetResponse(buffer_arg) {
  return proto_document_v1_document_pb.DocumentGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentQueryRequest(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryRequest)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentQueryRequest(buffer_arg) {
  return proto_document_v1_document_pb.DocumentQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentQueryResponse(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryResponse)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentQueryResponse(buffer_arg) {
  return proto_document_v1_document_pb.DocumentQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentQueryStreamRequest(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryStreamRequest)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentQueryStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentQueryStreamRequest(buffer_arg) {
  return proto_document_v1_document_pb.DocumentQueryStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentQueryStreamResponse(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryStreamResponse)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentQueryStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentQueryStreamResponse(buffer_arg) {
  return proto_document_v1_document_pb.DocumentQueryStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentSetRequest(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentSetRequest)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentSetRequest(buffer_arg) {
  return proto_document_v1_document_pb.DocumentSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_document_v1_DocumentSetResponse(arg) {
  if (!(arg instanceof proto_document_v1_document_pb.DocumentSetResponse)) {
    throw new Error('Expected argument of type nitric.document.v1.DocumentSetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_document_v1_DocumentSetResponse(buffer_arg) {
  return proto_document_v1_document_pb.DocumentSetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for storage and retrieval of simple JSON keyValue
var DocumentServiceService = exports.DocumentServiceService = {
  // Get an existing document
get: {
    path: '/nitric.document.v1.DocumentService/Get',
    requestStream: false,
    responseStream: false,
    requestType: proto_document_v1_document_pb.DocumentGetRequest,
    responseType: proto_document_v1_document_pb.DocumentGetResponse,
    requestSerialize: serialize_nitric_document_v1_DocumentGetRequest,
    requestDeserialize: deserialize_nitric_document_v1_DocumentGetRequest,
    responseSerialize: serialize_nitric_document_v1_DocumentGetResponse,
    responseDeserialize: deserialize_nitric_document_v1_DocumentGetResponse,
  },
  // Create a new or overwrite an existing document
set: {
    path: '/nitric.document.v1.DocumentService/Set',
    requestStream: false,
    responseStream: false,
    requestType: proto_document_v1_document_pb.DocumentSetRequest,
    responseType: proto_document_v1_document_pb.DocumentSetResponse,
    requestSerialize: serialize_nitric_document_v1_DocumentSetRequest,
    requestDeserialize: deserialize_nitric_document_v1_DocumentSetRequest,
    responseSerialize: serialize_nitric_document_v1_DocumentSetResponse,
    responseDeserialize: deserialize_nitric_document_v1_DocumentSetResponse,
  },
  // Delete an existing document
delete: {
    path: '/nitric.document.v1.DocumentService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: proto_document_v1_document_pb.DocumentDeleteRequest,
    responseType: proto_document_v1_document_pb.DocumentDeleteResponse,
    requestSerialize: serialize_nitric_document_v1_DocumentDeleteRequest,
    requestDeserialize: deserialize_nitric_document_v1_DocumentDeleteRequest,
    responseSerialize: serialize_nitric_document_v1_DocumentDeleteResponse,
    responseDeserialize: deserialize_nitric_document_v1_DocumentDeleteResponse,
  },
  // Query the document collection (supports pagination)
query: {
    path: '/nitric.document.v1.DocumentService/Query',
    requestStream: false,
    responseStream: false,
    requestType: proto_document_v1_document_pb.DocumentQueryRequest,
    responseType: proto_document_v1_document_pb.DocumentQueryResponse,
    requestSerialize: serialize_nitric_document_v1_DocumentQueryRequest,
    requestDeserialize: deserialize_nitric_document_v1_DocumentQueryRequest,
    responseSerialize: serialize_nitric_document_v1_DocumentQueryResponse,
    responseDeserialize: deserialize_nitric_document_v1_DocumentQueryResponse,
  },
  // Query the document collection (supports streaming)
queryStream: {
    path: '/nitric.document.v1.DocumentService/QueryStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_document_v1_document_pb.DocumentQueryStreamRequest,
    responseType: proto_document_v1_document_pb.DocumentQueryStreamResponse,
    requestSerialize: serialize_nitric_document_v1_DocumentQueryStreamRequest,
    requestDeserialize: deserialize_nitric_document_v1_DocumentQueryStreamRequest,
    responseSerialize: serialize_nitric_document_v1_DocumentQueryStreamResponse,
    responseDeserialize: deserialize_nitric_document_v1_DocumentQueryStreamResponse,
  },
};

exports.DocumentServiceClient = grpc.makeGenericClientConstructor(DocumentServiceService);
