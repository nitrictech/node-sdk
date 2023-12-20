// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.websockets.v1
// file: nitric/proto/websockets/v1/websockets.proto

import * as nitric_proto_websockets_v1_websockets_pb from "../../../../nitric/proto/websockets/v1/websockets_pb";
import * as grpc from "@grpc/grpc-js";

interface IWebsocketService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  send: grpc.MethodDefinition<nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>;
  close: grpc.MethodDefinition<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse>;
}

export const WebsocketService: IWebsocketService;

export interface IWebsocketServer extends grpc.UntypedServiceImplementation {
  send: grpc.handleUnaryCall<nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>;
  close: grpc.handleUnaryCall<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse>;
}

export class WebsocketClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  send(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  send(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  send(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  close(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse>): grpc.ClientUnaryCall;
  close(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse>): grpc.ClientUnaryCall;
  close(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse>): grpc.ClientUnaryCall;
}

interface IWebsocketHandlerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  handleEvents: grpc.MethodDefinition<nitric_proto_websockets_v1_websockets_pb.ClientMessage, nitric_proto_websockets_v1_websockets_pb.ServerMessage>;
}

export const WebsocketHandlerService: IWebsocketHandlerService;

export interface IWebsocketHandlerServer extends grpc.UntypedServiceImplementation {
  handleEvents: grpc.handleBidiStreamingCall<nitric_proto_websockets_v1_websockets_pb.ClientMessage, nitric_proto_websockets_v1_websockets_pb.ServerMessage>;
}

export class WebsocketHandlerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  handleEvents(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_websockets_v1_websockets_pb.ClientMessage, nitric_proto_websockets_v1_websockets_pb.ServerMessage>;
  handleEvents(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<nitric_proto_websockets_v1_websockets_pb.ClientMessage, nitric_proto_websockets_v1_websockets_pb.ServerMessage>;
}
