
/**
 * NitricEvent
 */
export interface NitricEvent {
  requestId?: string;
  payloadType?: string;
  payload: Record<string, any>;
}