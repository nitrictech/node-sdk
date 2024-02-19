// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nitric_proto_topics_v1_topics_pb = require('../../../../nitric/proto/topics/v1/topics_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_nitric_proto_topics_v1_ClientMessage(arg) {
  if (!(arg instanceof nitric_proto_topics_v1_topics_pb.ClientMessage)) {
    throw new Error('Expected argument of type nitric.proto.topics.v1.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_topics_v1_ClientMessage(buffer_arg) {
  return nitric_proto_topics_v1_topics_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_topics_v1_ServerMessage(arg) {
  if (!(arg instanceof nitric_proto_topics_v1_topics_pb.ServerMessage)) {
    throw new Error('Expected argument of type nitric.proto.topics.v1.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_topics_v1_ServerMessage(buffer_arg) {
  return nitric_proto_topics_v1_topics_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_topics_v1_TopicPublishRequest(arg) {
  if (!(arg instanceof nitric_proto_topics_v1_topics_pb.TopicPublishRequest)) {
    throw new Error('Expected argument of type nitric.proto.topics.v1.TopicPublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_topics_v1_TopicPublishRequest(buffer_arg) {
  return nitric_proto_topics_v1_topics_pb.TopicPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nitric_proto_topics_v1_TopicPublishResponse(arg) {
  if (!(arg instanceof nitric_proto_topics_v1_topics_pb.TopicPublishResponse)) {
    throw new Error('Expected argument of type nitric.proto.topics.v1.TopicPublishResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nitric_proto_topics_v1_TopicPublishResponse(buffer_arg) {
  return nitric_proto_topics_v1_topics_pb.TopicPublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for publishing asynchronous messages
var TopicsService = exports.TopicsService = {
  // Publishes a message to a given topic
publish: {
    path: '/nitric.proto.topics.v1.Topics/Publish',
    requestStream: false,
    responseStream: false,
    requestType: nitric_proto_topics_v1_topics_pb.TopicPublishRequest,
    responseType: nitric_proto_topics_v1_topics_pb.TopicPublishResponse,
    requestSerialize: serialize_nitric_proto_topics_v1_TopicPublishRequest,
    requestDeserialize: deserialize_nitric_proto_topics_v1_TopicPublishRequest,
    responseSerialize: serialize_nitric_proto_topics_v1_TopicPublishResponse,
    responseDeserialize: deserialize_nitric_proto_topics_v1_TopicPublishResponse,
  },
};

exports.TopicsClient = grpc.makeGenericClientConstructor(TopicsService);
// Service for subscribing to asynchronous messages
var SubscriberService = exports.SubscriberService = {
  // Subscribe to a topic and handle incoming messages
subscribe: {
    path: '/nitric.proto.topics.v1.Subscriber/Subscribe',
    requestStream: true,
    responseStream: true,
    requestType: nitric_proto_topics_v1_topics_pb.ClientMessage,
    responseType: nitric_proto_topics_v1_topics_pb.ServerMessage,
    requestSerialize: serialize_nitric_proto_topics_v1_ClientMessage,
    requestDeserialize: deserialize_nitric_proto_topics_v1_ClientMessage,
    responseSerialize: serialize_nitric_proto_topics_v1_ServerMessage,
    responseDeserialize: deserialize_nitric_proto_topics_v1_ServerMessage,
  },
};

exports.SubscriberClient = grpc.makeGenericClientConstructor(SubscriberService);
