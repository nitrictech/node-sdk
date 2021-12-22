import { Task } from "src/types";
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
	}

	return queuesCache[name];
}