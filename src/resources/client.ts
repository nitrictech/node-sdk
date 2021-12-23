import { ResourceServiceClient } from "@nitric/api/proto/resource/v1/resource_grpc_pb"
import { SERVICE_BIND } from "../constants"
import * as grpc from '@grpc/grpc-js';

const resourceClient = new ResourceServiceClient(
  SERVICE_BIND,
  grpc.ChannelCredentials.createInsecure()
)

export default resourceClient