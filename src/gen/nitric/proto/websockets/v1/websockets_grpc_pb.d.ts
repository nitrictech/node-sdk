// GENERATED CODE -- DO NOT EDIT!

// package: nitric.proto.websockets.v1
// file: nitric/proto/websockets/v1/websockets.proto

import * as nitric_proto_websockets_v1_websockets_pb from "../../../../nitric/proto/websockets/v1/websockets_pb";
import * as grpc from "@grpc/grpc-js";

interface IWebsocketService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendMessage: grpc.MethodDefinition<nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>;
  closeConnection: grpc.MethodDefinition<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse>;
  socketDetails: grpc.MethodDefinition<nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse>;
}

export const WebsocketService: IWebsocketService;

export interface IWebsocketServer extends grpc.UntypedServiceImplementation {
  sendMessage: grpc.handleUnaryCall<nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>;
  closeConnection: grpc.handleUnaryCall<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse>;
  socketDetails: grpc.handleUnaryCall<nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest, nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse>;
}

export class WebsocketClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sendMessage(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  closeConnection(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse>): grpc.ClientUnaryCall;
  closeConnection(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse>): grpc.ClientUnaryCall;
  closeConnection(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketCloseConnectionResponse>): grpc.ClientUnaryCall;
  socketDetails(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse>): grpc.ClientUnaryCall;
  socketDetails(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse>): grpc.ClientUnaryCall;
  socketDetails(argument: nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse>): grpc.ClientUnaryCall;
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
