/**
 * NitricEvent
 */
export interface NitricEvent {
  id?: string;
  payloadType?: string;
  payload: Record<string, any>;
}

export interface Task {
  id?: string;
  leaseId?: string;
  payloadType?: string;
  payload?: Record<string, any>;
}

export interface PublishOptions {
  topicName: string;
  event: NitricEvent;
}
