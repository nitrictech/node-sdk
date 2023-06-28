// GENERATED CODE -- DO NOT EDIT!

// package: nitric.websocket.v1
// file: proto/websocket/v1/websocket.proto

import * as proto_websocket_v1_websocket_pb from "../../../proto/websocket/v1/websocket_pb";
import * as grpc from "@grpc/grpc-js";

interface IWebsocketServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  send: grpc.MethodDefinition<proto_websocket_v1_websocket_pb.WebsocketSendRequest, proto_websocket_v1_websocket_pb.WebsocketSendResponse>;
  close: grpc.MethodDefinition<proto_websocket_v1_websocket_pb.WebsocketCloseRequest, proto_websocket_v1_websocket_pb.WebsocketCloseResponse>;
}

export const WebsocketServiceService: IWebsocketServiceService;

export interface IWebsocketServiceServer extends grpc.UntypedServiceImplementation {
  send: grpc.handleUnaryCall<proto_websocket_v1_websocket_pb.WebsocketSendRequest, proto_websocket_v1_websocket_pb.WebsocketSendResponse>;
  close: grpc.handleUnaryCall<proto_websocket_v1_websocket_pb.WebsocketCloseRequest, proto_websocket_v1_websocket_pb.WebsocketCloseResponse>;
}

export class WebsocketServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  send(argument: proto_websocket_v1_websocket_pb.WebsocketSendRequest, callback: grpc.requestCallback<proto_websocket_v1_websocket_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  send(argument: proto_websocket_v1_websocket_pb.WebsocketSendRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_websocket_v1_websocket_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  send(argument: proto_websocket_v1_websocket_pb.WebsocketSendRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_websocket_v1_websocket_pb.WebsocketSendResponse>): grpc.ClientUnaryCall;
  close(argument: proto_websocket_v1_websocket_pb.WebsocketCloseRequest, callback: grpc.requestCallback<proto_websocket_v1_websocket_pb.WebsocketCloseResponse>): grpc.ClientUnaryCall;
  close(argument: proto_websocket_v1_websocket_pb.WebsocketCloseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_websocket_v1_websocket_pb.WebsocketCloseResponse>): grpc.ClientUnaryCall;
  close(argument: proto_websocket_v1_websocket_pb.WebsocketCloseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_websocket_v1_websocket_pb.WebsocketCloseResponse>): grpc.ClientUnaryCall;
}
