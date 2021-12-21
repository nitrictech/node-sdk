import { storage, Bucket, File } from "../api/storage";

type BucketPermission = "Read" | "Write" | "Delete";

class BucketRef {
	private readonly bucket: Bucket
	private readonly permissions: BucketPermission[];

	constructor(name: string, permissions: BucketPermission[]) {
		this.bucket = storage().bucket(name);
		this.permissions = permissions;
	}

	private async register() {
		// TODO: register this resources details
	}

	public file(name: string): File {
		return this.bucket.file(name);
	}
}



class BucketResource {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	/**
	 * Retrieve a BucketReference with all permissions
	 */
	public all(): BucketRef {
		return this.permissions("Read", "Write", "Delete");
	}

	public permissions(...perms: BucketPermission[]): BucketRef {
		const bucketRef = new BucketRef(this.name, perms);

		// XXX: Will need to await this...
		bucketRef['register']();

		return bucketRef;
	}
}

export const bucket = (name: string): BucketResource => {
	return new BucketResource(name);
}