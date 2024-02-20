// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.topics.v1
// file: nitric/proto/topics/v1/topics.proto

import * as nitric_proto_topics_v1_topics_pb from "../../../../nitric/proto/topics/v1/topics_pb";
import * as grpc from "@grpc/grpc-js";

interface ITopicsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  publish: grpc.MethodDefinition<nitric_proto_topics_v1_topics_pb.TopicPublishRequest, nitric_proto_topics_v1_topics_pb.TopicPublishResponse>;
}

export const TopicsService: ITopicsService;

export interface ITopicsServer extends grpc.UntypedServiceImplementation {
  publish: grpc.handleUnaryCall<nitric_proto_topics_v1_topics_pb.TopicPublishRequest, nitric_proto_topics_v1_topics_pb.TopicPublishResponse>;
}

export class TopicsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  publish(argument: nitric_proto_topics_v1_topics_pb.TopicPublishRequest, callback: grpc.requestCallback<nitric_proto_topics_v1_topics_pb.TopicPublishResponse>): grpc.ClientUnaryCall;
  publish(argument: nitric_proto_topics_v1_topics_pb.TopicPublishRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_topics_v1_topics_pb.TopicPublishResponse>): grpc.ClientUnaryCall;
  publish(argument: nitric_proto_topics_v1_topics_pb.TopicPublishRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_topics_v1_topics_pb.TopicPublishResponse>): grpc.ClientUnaryCall;
}

interface ISubscriberService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  subscribe: grpc.MethodDefinition<nitric_proto_topics_v1_topics_pb.ClientMessage, nitric_proto_topics_v1_topics_pb.ServerMessage>;
}

export const SubscriberService: ISubscriberService;

export interface ISubscriberServer extends grpc.UntypedServiceImplementation {
  subscribe: grpc.handleBidiStreamingCall<nitric_proto_topics_v1_topics_pb.ClientMessage, nitric_proto_topics_v1_topics_pb.ServerMessage>;
}

export class SubscriberClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  subscribe(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_topics_v1_topics_pb.ClientMessage, nitric_proto_topics_v1_topics_pb.ServerMessage>;
  subscribe(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_topics_v1_topics_pb.ClientMessage, nitric_proto_topics_v1_topics_pb.ServerMessage>;
}
