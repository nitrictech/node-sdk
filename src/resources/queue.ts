import { Resource, ResourceDeclareRequest, ResourceDeclareResponse, ResourceType } from "@nitric/api/proto/resource/v1/resource_pb";
import { Task } from "src/types";
import resourceClient from './client';
import { queues, Queue } from "../api/"; 

type QueuePermission = "sending" | "receiving";

const everything: QueuePermission[] = ["sending", "receiving"];

class QueueResource {
	private readonly name: string;
	private hasPublisher: boolean;
	private hasSubscriber: boolean;

	constructor(name: string) {
		this.name = name;
	}

	private async register(): Promise<void> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.QUEUE);
    req.setResource(resource);

    return new Promise<void>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            // TODO: remove this ignore when not using link
            // @ts-ignore
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        }
      );
    });
  }

	public for(perm: QueuePermission[] | QueuePermission, ...perms: QueuePermission[]): Queue {
		// TODO: call server to request permissions.
		return queues().queue(this.name);
	}
}

// This singleton ensures duplicate references to queue('name') return the same topic resource
const queuesCache: Record<string, QueueResource> = {};

export const queue = (name: string): QueueResource => {
	if(!queuesCache[name]) {
		queuesCache[name] = new QueueResource(name);
		queuesCache[name]['register']();
	}

	return queuesCache[name];
}