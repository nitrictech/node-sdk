export interface NitricResponse<P> {
  headers: Record<string, string>;
  status: number;
  body: P | Uint8Array;
}
