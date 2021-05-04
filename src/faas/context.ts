// Copyright 2021, Nitric Pty Ltd.
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
export type NitricSourceType = 'REQUEST' | 'SUBSCRIPTION' | 'UNKNOWN';

export class NitricContext {
  public readonly requestId: string;
  public readonly source: string;
  public readonly sourceType: NitricSourceType;
  public readonly payloadType: string;

  constructor(
    requestId: string,
    source: string,
    sourceType: NitricSourceType,
    payloadType: string
  ) {
    (this.requestId = requestId), (this.sourceType = sourceType);
    this.source = source;
    this.payloadType = payloadType;
  }

  static fromHeaders(headers: Record<string, string>): NitricContext {
    const requestId = headers['x-nitric-request-id'];
    const sourceType =
      (headers['x-nitric-source-type'] as NitricSourceType) || 'UNKNOWN';
    const source = headers['x-nitric-source'];
    const payloadType = headers['x-nitric-payload-type'];

    return new NitricContext(requestId, source, sourceType, payloadType);
  }
}
