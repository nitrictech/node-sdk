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
import { getBatchClient } from '../api/batch/v1/batch';
import { Job } from '../api/batch/v1/job';
import { fromGrpcError } from '../api/errors';
import { SERVICE_BIND } from '../constants';
import { JobContext } from '../context/job';
import { JobClient } from '../gen/nitric/proto/batch/v1/batch_grpc_pb';
import {
  ClientMessage,
  JobResourceRequirements as JobResourceRequirementsPb,
  JobResponse,
  RegistrationRequest,
  ServerMessage,
} from '../gen/nitric/proto/batch/v1/batch_pb';
import {
  ResourceDeclareRequest,
  ResourceIdentifier,
  ResourceType,
  JobResource as JobResourcePb,
  ResourceDeclareResponse,
  ResourceTypeMap,
  ActionMap,
  Action,
} from '../gen/nitric/proto/resources/v1/resources_pb';
import { createHandler, JobMiddleware } from '../handlers';
import resourceClient from './client';
import { SecureResource, make, startStreamHandler } from './common';
import * as grpc from '@grpc/grpc-js';

type JobPermission = 'submit';

interface JobResourceRequirements {
  cpus: number;
  memory: number;
  gpus: number;
}

const everything: JobPermission[] = ['submit'];

export class JobHandler {
  private readonly jobName: string;
  private readonly handler: JobMiddleware;
  private readonly requirements: JobResourceRequirements;

  constructor(
    jobName: string,
    requirements: JobResourceRequirements,
    ...middleware: JobMiddleware[]
  ) {
    this.jobName = jobName;
    this.requirements = requirements;
    this.handler = createHandler(...middleware);
  }

  private async start(): Promise<void> {
    return startStreamHandler(async () => {
      const storageListenerClient = new JobClient(
        SERVICE_BIND,
        grpc.ChannelCredentials.createInsecure()
      );

      // Begin Bi-Di streaming
      const stream = storageListenerClient.handleJob();

      stream.on('data', async (message: ServerMessage) => {
        // We have an init response from the membrane
        if (message.hasRegistrationResponse()) {
          // We got an init response from the membrane
          // The client can configure itself with any information provided by the membrane..
        } else if (message.hasJobRequest()) {
          // We want to handle a function here...
          const jobRequest = message.getJobRequest();
          const responseMessage = new ClientMessage();

          responseMessage.setId(message.getId());

          try {
            const ctx = JobContext.fromJobRequest(jobRequest);

            const result = (await this.handler(ctx, async (ctx) => ctx)) || ctx;

            responseMessage.setJobResponse(JobContext.toJobResponse(result));
          } catch (e) {
            // generic error handling
            console.error(e);
            const jobResponse = new JobResponse();
            jobResponse.setSuccess(false);
            responseMessage.setJobResponse(jobResponse);
          }
          // Send the response back to the membrane
          stream.write(responseMessage);
        }
      });

      // Let the membrane know we're ready to start
      const initRequest = new RegistrationRequest();
      const initMessage = new ClientMessage();

      // Set the resource requirements
      const requirementsPb = new JobResourceRequirementsPb();
      requirementsPb.setCpus(this.requirements.cpus);
      requirementsPb.setMemory(this.requirements.memory);
      requirementsPb.setGpus(this.requirements.gpus);

      initRequest.setJobName(this.jobName);
      initRequest.setRequirements(requirementsPb);

      // Original faas workers should return a blank InitRequest for compatibility.
      initMessage.setRegistrationRequest(initRequest);
      stream.write(initMessage);

      return stream;
    });
  }
}

const defaultJobRequirements: JobResourceRequirements = {
  cpus: 0,
  memory: 0,
  gpus: 0,
};

export class JobResource extends SecureResource<JobPermission> {
  constructor(name: string) {
    super(name);
  }

  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();
    const resource = new ResourceIdentifier();
    resource.setName(this.name);
    resource.setType(ResourceType.JOB);

    req.setId(resource);
    req.setJob(new JobResourcePb());

    return new Promise<ResourceIdentifier>((resolve, reject) => {
      resourceClient.declare(req, (error, _: ResourceDeclareResponse) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(resource);
        }
      });
    });
  }

  protected permsToActions(
    ...perms: JobPermission[]
  ): ActionMap[keyof ActionMap][] {
    const actions = perms.reduce((actions, perm) => {
      switch (perm) {
        case 'submit':
          return [...actions, Action.JOBSUBMIT];
        default:
          throw new Error(
            `unknown job permission ${perm}, supported permissions are ${everything.join(
              ', '
            )}`
          );
      }
    }, []);

    return actions;
  }

  protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap] {
    return ResourceType.JOB;
  }

  /**
   * Return a job reference and register the permissions required by the currently scoped function for this resource.
   *
   * @example
   * ```typescript
   * const myJob = job('jobName').allow('submit')
   * ```
   *
   * @param perm  the required permission set
   * @param perms additional required permissions set
   * @returns a usable job reference
   */
  public allow(perm: JobPermission, ...perms: JobPermission[]): Job {
    this.registerPolicy(perm, ...perms);

    return new Job(this.name, getBatchClient());
  }

  /**
   * Register a handler for the job.
   *
   * @example
   * ```typescript
   * job('my-job').handler(async (ctx) => {
   *  console.log('Hello from my-job');
   *  return ctx;
   * }, { cpus: 1, memory: 1024, gpus: 0 });
   * ```
   *
   * @param middleware the middleware to be executed for the job
   * @param requirements the resource requirements for the job, e.g. cpus, memory, gpus
   * @returns Promise which resolves when the handler server terminates
   */
  public handler(
    middleware: JobMiddleware,
    requirements: JobResourceRequirements = defaultJobRequirements,
  ): Promise<void> {
    const jobRequirements = {
      ...defaultJobRequirements,
      ...requirements,
    }

    const jobHandler = new JobHandler(this.name, jobRequirements, middleware);

    return jobHandler['start']();
  }
}

/**
 * Create a reference to a named batch job in this project.
 *
 * If the batch job hasn't been referenced before this is a request for a new resource. Otherwise, the existing batch job with the same name will be used.
 *
 * @param name the name of the job.
 * @returns a reference to the job.
 */
export const job = (name: string): JobResource => make(JobResource)(name);
