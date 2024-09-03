import { SERVICE_BIND } from '@nitric/sdk/constants';
import { BatchClient } from '@nitric/sdk/gen/nitric/proto/batch/v1/batch_grpc_pb';
import * as grpc from '@grpc/grpc-js';

let batchClient: BatchClient;

export const getBatchClient = (): BatchClient => {
  if (!batchClient) {
    batchClient = new BatchClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }
  return batchClient;
};
