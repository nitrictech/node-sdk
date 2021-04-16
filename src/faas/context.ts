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
