
class CollectionRef {

}

type CollectionPermission = "reading" | "writing" | "deleting";

const everything: CollectionPermission[] = ["reading", "writing", "deleting"];

class CollectionResource {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	public for(perm: CollectionPermission[] | CollectionPermission, ...perms: CollectionPermission[]): CollectionRef {
		return new CollectionRef();
	}
}

export const collection = (name: string): CollectionResource => {
	return new CollectionResource(name);
}