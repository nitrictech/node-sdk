// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_documents_v1_documents_pb = require('../../../../nitric/proto/documents/v1/documents_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_nitric_proto_documents_v1_DocumentDeleteRequest(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentDeleteRequest(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentDeleteResponse(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentDeleteResponse(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentGetRequest(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentGetRequest)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentGetRequest(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentGetResponse(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentGetResponse)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentGetResponse(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentQueryRequest(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentQueryRequest)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentQueryRequest(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentQueryResponse(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentQueryResponse)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentQueryResponse(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentQueryStreamRequest(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentQueryStreamRequest)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentQueryStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentQueryStreamRequest(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentQueryStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentQueryStreamResponse(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentQueryStreamResponse)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentQueryStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentQueryStreamResponse(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentQueryStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentSetRequest(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentSetRequest)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentSetRequest(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_documents_v1_DocumentSetResponse(arg) {
  if (!(arg instanceof nitric_proto_documents_v1_documents_pb.DocumentSetResponse)) {
    throw new Error('Expected argument of type nitric.proto.documents.v1.DocumentSetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_documents_v1_DocumentSetResponse(buffer_arg) {
  return nitric_proto_documents_v1_documents_pb.DocumentSetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for storage and retrieval of simple JSON keyValue
var DocumentsService = exports.DocumentsService = {
  // Get an existing document
get: {
    path: '/nitric.proto.documents.v1.Documents/Get',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_documents_v1_documents_pb.DocumentGetRequest,
    responseType: nitric_proto_documents_v1_documents_pb.DocumentGetResponse,
    requestSerialize: serialize_nitric_proto_documents_v1_DocumentGetRequest,
    requestDeserialize: deserialize_nitric_proto_documents_v1_DocumentGetRequest,
    responseSerialize: serialize_nitric_proto_documents_v1_DocumentGetResponse,
    responseDeserialize: deserialize_nitric_proto_documents_v1_DocumentGetResponse,
  },
  // Create a new or overwrite an existing document
set: {
    path: '/nitric.proto.documents.v1.Documents/Set',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_documents_v1_documents_pb.DocumentSetRequest,
    responseType: nitric_proto_documents_v1_documents_pb.DocumentSetResponse,
    requestSerialize: serialize_nitric_proto_documents_v1_DocumentSetRequest,
    requestDeserialize: deserialize_nitric_proto_documents_v1_DocumentSetRequest,
    responseSerialize: serialize_nitric_proto_documents_v1_DocumentSetResponse,
    responseDeserialize: deserialize_nitric_proto_documents_v1_DocumentSetResponse,
  },
  // Delete an existing document
delete: {
    path: '/nitric.proto.documents.v1.Documents/Delete',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_documents_v1_documents_pb.DocumentDeleteRequest,
    responseType: nitric_proto_documents_v1_documents_pb.DocumentDeleteResponse,
    requestSerialize: serialize_nitric_proto_documents_v1_DocumentDeleteRequest,
    requestDeserialize: deserialize_nitric_proto_documents_v1_DocumentDeleteRequest,
    responseSerialize: serialize_nitric_proto_documents_v1_DocumentDeleteResponse,
    responseDeserialize: deserialize_nitric_proto_documents_v1_DocumentDeleteResponse,
  },
  // Query the document collection (supports pagination)
query: {
    path: '/nitric.proto.documents.v1.Documents/Query',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_documents_v1_documents_pb.DocumentQueryRequest,
    responseType: nitric_proto_documents_v1_documents_pb.DocumentQueryResponse,
    requestSerialize: serialize_nitric_proto_documents_v1_DocumentQueryRequest,
    requestDeserialize: deserialize_nitric_proto_documents_v1_DocumentQueryRequest,
    responseSerialize: serialize_nitric_proto_documents_v1_DocumentQueryResponse,
    responseDeserialize: deserialize_nitric_proto_documents_v1_DocumentQueryResponse,
  },
  // Query the document collection (supports streaming)
queryStream: {
    path: '/nitric.proto.documents.v1.Documents/QueryStream',
    requestStream: false,
    responseStream: true,
    requestType: nitric_proto_documents_v1_documents_pb.DocumentQueryStreamRequest,
    responseType: nitric_proto_documents_v1_documents_pb.DocumentQueryStreamResponse,
    requestSerialize: serialize_nitric_proto_documents_v1_DocumentQueryStreamRequest,
    requestDeserialize: deserialize_nitric_proto_documents_v1_DocumentQueryStreamRequest,
    responseSerialize: serialize_nitric_proto_documents_v1_DocumentQueryStreamResponse,
    responseDeserialize: deserialize_nitric_proto_documents_v1_DocumentQueryStreamResponse,
  },
};

exports.DocumentsClient = grpc.makeGenericClientConstructor(DocumentsService);
