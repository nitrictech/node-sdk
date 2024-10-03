// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
