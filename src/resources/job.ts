import { fromGrpcError } from "../api/errors";
import { SERVICE_BIND } from "../constants";
import { BatchClient } from "../gen/nitric/proto/batch/v1/batch_grpc_pb";
import { CreateJobRequest } from "../gen/nitric/proto/batch/v1/batch_pb";
import { ResourceDeclareRequest, ResourceIdentifier, ResourceType, JobResource, ResourceDeclareResponse, ResourceTypeMap } from "../gen/nitric/proto/resources/v1/resources_pb";
import resourceClient from "./client";
import { Resource, make } from "./common"
import * as grpc from '@grpc/grpc-js';

let batchClient: BatchClient;

const getBatchClient = (): BatchClient =>  {
    if (!batchClient) {
        batchClient = new BatchClient(
            SERVICE_BIND,
            grpc.ChannelCredentials.createInsecure()
        );
    
    }
    return batchClient;
}

class JobDefinitionResource extends Resource {
    constructor(name: string) {
        super(name);
    }

    protected async register(): Promise<ResourceIdentifier> {
        const req = new ResourceDeclareRequest();
        const resource = new ResourceIdentifier();
        resource.setName(this.name);
        resource.setType(ResourceType.JOB);

        req.setId(resource);
        req.setBucket(new JobResource());

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

    // define the job to be executed
    async define(callback: () => void | Promise<void>) {
        if (process.env.NITRIC_JOB_NAME === this.name) {
            // Run the callback as part of the job definition in line
            await callback();
        }
    }

    async submit() {
        const client = getBatchClient();
        const request = new CreateJobRequest();
    
        request.setName(this.name);
    
        return await new Promise((resolve, reject) => {
            client.createJob(request, (err, data) => {
    
            });
        });
    }

    protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap] {
        return ResourceType.JOB;
    }
}

const maker = make(JobDefinitionResource);

/**
 * Register a SQL Database Resource. If the SQL Database has already been registered, the existing SQL will be returned.
 *
 * The returned SQL Database object can be used to register handlers for SQL events.
 * e.g. const connectionString = db.connectionString()
 *
 * @param name the name of the SQL Database
 * @param options the options for the SQL Database
 * @returns a SQL resource
 */
export const jobDefinition = maker;

