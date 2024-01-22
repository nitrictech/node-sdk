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
import {
  Action,
  ResourceIdentifier,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/proto/resources/v1/resources_pb';
import resourceClient from './client';
import { storage, Bucket } from '../api/storage';
import {
  ActionsList,
  make,
  SecureResource,
  startStreamHandler,
} from './common';
import {
  BlobEventType,
  ClientMessage,
  RegistrationRequest,
  ServerMessage,
  BlobEvent,
  BlobEventResponse,
} from '@nitric/proto/storage/v1/storage_pb';
import { StorageListenerClient } from '@nitric/proto/storage/v1/storage_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import { SERVICE_BIND } from '../constants';
import {
  BucketNotificationMiddleware,
  FileNotificationMiddleware,
  createHandler,
} from '../helpers/handler';
import { BlobEventContext, BucketEventContext } from '../context/bucket';

type BucketPermission = 'reading' | 'writing' | 'deleting';

const everything: BucketPermission[] = ['reading', 'writing', 'deleting'];

export type BucketNotificationType = 'write' | 'delete';

export class BucketNotificationWorkerOptions {
  public readonly bucket: string;
  public readonly notificationType: 0 | 1;
  public readonly notificationPrefixFilter: string;

  constructor(
    bucket: string,
    notificationType: BucketNotificationType,
    notificationPrefixFilter: string
  ) {
    this.bucket = bucket;
    this.notificationType =
      BucketNotificationWorkerOptions.toGrpcEvent(notificationType);
    this.notificationPrefixFilter = notificationPrefixFilter;
  }

  static toGrpcEvent(notificationType: BucketNotificationType): 0 | 1 {
    switch (notificationType) {
      case 'write':
        return BlobEventType.CREATED;
      case 'delete':
        return BlobEventType.DELETED;
      default:
        throw new Error(`notification type ${notificationType} is unsupported`);
    }
  }
}

export class FileNotificationWorkerOptions extends BucketNotificationWorkerOptions {
  public readonly bucketRef: Bucket;

  constructor(
    bucketRef: Bucket,
    notificationType: BucketNotificationType,
    notificationPrefixFilter: string
  ) {
    super(bucketRef.name, notificationType, notificationPrefixFilter);

    this.bucketRef = bucketRef;
  }
}

export class BucketNotification {
  private readonly options: BucketNotificationWorkerOptions;
  private readonly handler: BucketNotificationMiddleware;

  constructor(
    bucketName: string,
    notificationType: BucketNotificationType,
    notificationPrefixFilter: string,
    ...middleware: BucketNotificationMiddleware[]
  ) {
    this.options = new BucketNotificationWorkerOptions(
      bucketName,
      notificationType,
      notificationPrefixFilter
    );
    this.handler = createHandler(...middleware);
  }

  private async start(bucket?: Bucket): Promise<void> {
    return startStreamHandler(async () => {
      const storageListenerClient = new StorageListenerClient(
        SERVICE_BIND,
        grpc.ChannelCredentials.createInsecure()
      );

      // Begin Bi-Di streaming
      const stream = storageListenerClient.listen();

      stream.on('data', async (message: ServerMessage) => {
        // We have an init response from the membrane
        if (message.hasRegistrationResponse()) {
          console.log('Function connected with membrane');
          // We got an init response from the membrane
          // The client can configure itself with any information provided by the membrane..
        } else if (message.hasBlobEventRequest()) {
          // We want to handle a function here...
          const blobEventRequest = message.getBlobEventRequest();
          const responseMessage = new ClientMessage();

          responseMessage.setId(message.getId());

          try {
            blobEventRequest.setBucketName(this.options.bucket);
            const blobEvent = new BlobEvent();
            blobEvent.setKey(this.options.notificationPrefixFilter);
            blobEvent.setType(this.options.notificationType);
            blobEventRequest.setBlobEvent(blobEvent);

            if (bucket) {
              const ctx = BlobEventContext.fromRequest(
                blobEventRequest,
                bucket
              );

              const result =
                (await this.handler(ctx, async (ctx) => ctx)) || ctx;

              responseMessage.setBlobEventResponse(
                BlobEventContext.toResponse(result as BlobEventContext)
              );
            } else {
              const ctx = BucketEventContext.fromRequest(blobEventRequest);

              const result =
                (await this.handler(ctx, async (ctx) => ctx)) || ctx;
              responseMessage.setBlobEventResponse(
                BucketEventContext.toResponse(result)
              );
            }
          } catch (e) {
            // generic error handling
            console.error(e);
            const eventResponse = new BlobEventResponse();
            eventResponse.setSuccess(false);
            responseMessage.setBlobEventResponse(eventResponse);
          }
          // Send the response back to the membrane
          stream.write(responseMessage);
        }
      });

      // Let the membrane know we're ready to start
      const initRequest = new RegistrationRequest();
      const initMessage = new ClientMessage();

      initRequest.setBucketName(this.options.bucket);
      initRequest.setKeyPrefixFilter(this.options.notificationPrefixFilter);
      initRequest.setBlobEventType(this.options.notificationType);

      //Original faas workers should return a blank InitRequest for compatibility.
      initMessage.setRegistrationRequest(initRequest);
      stream.write(initMessage);

      return stream;
    });
  }
}

export class FileNotification extends BucketNotification {
  private readonly bucket: Bucket | undefined;

  constructor(
    bucket: Bucket,
    notificationType: BucketNotificationType,
    notificationPrefixFilter: string,
    ...middleware: FileNotificationMiddleware[]
  ) {
    super(
      bucket.name,
      notificationType,
      notificationPrefixFilter,
      ...middleware
    );

    this.bucket = bucket;
  }
}

/**
 * Cloud storage bucket resource for large file storage.
 */
export class BucketResource extends SecureResource<BucketPermission> {
  /**
   * Register this bucket as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();
    const resource = new ResourceIdentifier();
    resource.setName(this.name);
    resource.setType(ResourceType.BUCKET);

    req.setId(resource);

    return new Promise<ResourceIdentifier>((resolve, reject) => {
      resourceClient.declare(req, (error, _: ResourceDeclareResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(resource);
        }
      });
    });
  }

  /**
   * Register and start a bucket notification handler that will be called for all matching notification events on this bucket
   *
   * @param notificationType the notification type that should trigger the middleware, either 'write' or 'delete'
   * @param notificationPrefixFilter the file name prefix that files must match to trigger a notification
   * @param middleware handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  on(
    notificationType: BucketNotificationType,
    notificationPrefixFilter: string,
    ...middleware: BucketNotificationMiddleware[]
  ): Promise<void> {
    const notification = new BucketNotification(
      this.name,
      notificationType,
      notificationPrefixFilter,
      ...middleware
    );
    return notification['start']();
  }

  protected permsToActions(...perms: BucketPermission[]): ActionsList {
    return perms.reduce((actions, perm) => {
      switch (perm) {
        case 'reading':
          return [...actions, Action.BUCKETFILEGET, Action.BUCKETFILELIST];
        case 'writing':
          return [...actions, Action.BUCKETFILEPUT];
        case 'deleting':
          return [...actions, Action.BUCKETFILEDELETE];
        default:
          throw new Error(
            `unknown bucket permission ${perm}, supported permissions are ${everything.join(
              ', '
            )}`
          );
      }
    }, []);
  }

  protected resourceType() {
    return ResourceType.BUCKET;
  }

  /**
   * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const imgs = resources.bucket('image').for('writing')
   *
   * @param perm  the required permission set
   * @param perms additional required permissions set
   * @returns a usable bucket reference
   */
  public for(perm: BucketPermission, ...perms: BucketPermission[]): Bucket {
    this.registerPolicy(perm, ...perms);

    return storage().bucket(this.name);
  }
}

export const bucket = make(BucketResource);
