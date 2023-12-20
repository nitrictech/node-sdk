import {
  BlobEventRequest as BlobEventRequestPb,
  BlobEventResponse as BlobEventResponsePb,
  BlobEventType as BlobEventTypePb,
} from '@nitric/proto/storage/v1/storage_pb';
import { AbstractRequest, BaseContext } from './base';
import type { Bucket, File } from '../api/storage';

export class BlobEventContext extends BaseContext<
  BlobEventRequest,
  BucketNotificationResponse
> {
  public get bucketNotification(): BlobEventContext {
    return this;
  }

  static fromRequest(
    request: BlobEventRequestPb,
    bucket: Bucket
  ): BlobEventContext {
    const ctx = new BlobEventContext();
    const blobEvent = request.getBlobEvent();

    ctx.request = new BlobEventRequest(
      blobEvent.getKey(),
      blobEvent.getType(),
      bucket
    );

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toResponse(ctx: BlobEventContext): BlobEventResponsePb {
    const blobEventRespsonse = new BlobEventResponsePb();
    blobEventRespsonse.setSuccess(ctx.res.success);
    return blobEventRespsonse;
  }
}

export class BucketEventContext extends BaseContext<
  BucketEventRequest,
  BucketNotificationResponse
> {
  public get bucketNotification(): BucketEventContext {
    return this;
  }

  static fromRequest(request: BlobEventRequestPb) {
    const ctx = new BucketEventContext();
    const blobEvent = request.getBlobEvent();

    ctx.request = new BucketEventRequest(
      blobEvent.getKey(),
      blobEvent.getType()
    );

    ctx.response = {
      success: true,
    };

    return ctx;
  }

  static toResponse(ctx: BucketEventContext): BlobEventResponsePb {
    const blobEventRespsonse = new BlobEventResponsePb();
    blobEventRespsonse.setSuccess(ctx.res.success);
    return blobEventRespsonse;
  }
}

export enum BlobEventType {
  Created,
  Deleted,
}

export class BucketEventRequest extends AbstractRequest {
  public readonly key: string;
  public readonly eventType: BlobEventType;

  constructor(key: string, notificationType: number) {
    super('');

    // Get reference to the bucket
    this.key = key;
    this.eventType = this.eventTypeToNotificationType(notificationType);
  }

  private eventTypeToNotificationType = (eventType: number): BlobEventType => {
    switch (eventType) {
      case BlobEventTypePb.CREATED:
        return BlobEventType.Created;
      case BlobEventTypePb.DELETED:
        return BlobEventType.Deleted;
      default:
        throw new Error(`event type unsupported: ${eventType}`);
    }
  };
}

export class BlobEventRequest extends BucketEventRequest {
  public readonly file: File | undefined;

  constructor(key: string, notificationType: number, bucket: Bucket) {
    super(key, notificationType);

    this.file = bucket.file(key);
  }
}

export interface BucketNotificationResponse {
  success: boolean;
}
