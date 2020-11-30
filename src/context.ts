/**
 * 
 */
export interface NitricContext {
  requestId: string;
  source: string;
  sourceType: "REQUEST" | "SUBSCRIPTION";
  payloadType: string;
}