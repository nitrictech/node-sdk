import {
  HttpMiddleware,
	Faas,
  TriggerContext,
  TriggerMiddleware,
} from '../faas';

import { HttpMethod } from "../types"

export class ApiWorkerOptions {
	public readonly route: string;
	public readonly methods: HttpMethod[];

	constructor(route: string, methods: HttpMethod[]) {
		this.route = route;
		this.methods = methods;
	}
}

class Method {
	private readonly faas: Faas;
	public readonly route: Route;
	public readonly methods: HttpMethod[];

	constructor(route: Route, methods: HttpMethod[], ...middleware: HttpMiddleware[]) {
		this.route = route;
		this.methods = methods;
		console.log("faas", Faas);
		this.faas = new Faas(new ApiWorkerOptions(route.path, methods));
		this.faas.http(...middleware);
	}

	private async start(): Promise<void> {
		return this.faas.start();
	}
}

class Route {
	public readonly api: Api;
	public readonly path: string;
  public readonly middleware: HttpMiddleware[];
	

	constructor(api: Api, path: string, ...middleware: HttpMiddleware[]) {
		this.api = api;
		this.path = path;
		this.middleware = middleware;
	}

	async method(methods: HttpMethod[], ...middleware: HttpMiddleware[]): Promise<void> {
    const getHandler = new Method(this, methods, ...this.middleware, ...middleware)
		return getHandler['start']();
	}

	/**
	 * Register a handler function for GET requests to this route
	 */
	async get(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['GET'], ...middleware)
	}

	/**
	 * Register a handler function for POST requests to this route
	 */
	async post(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['POST'], ...middleware)
	}

	/**
	 * Register a handler function for PUT requests to this route
	 */
	async put(...middleware: HttpMiddleware[]): Promise<void> {
		return this.method(['PUT'], ...middleware)
	}

	/**
	 * Register a handler function for PATCH requests to this route
	 */
  async patch(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['PATCH'], ...middleware)
	}

	/**
	 * Register a handler function for DELETE requests to this route
	 */
	async delete(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['DELETE'], ...middleware)
	}

	/**
	 * Register a handler function for GET, POST, PATCH, PUT and DELETE requests to this route.
	 * 
	 * Most useful when routing isn't important or you're doing you own internal routing.
	 */
	async all(...middleware: HttpMiddleware[]): Promise<void> {
		return this.method(['GET', 'POST', 'PATCH', 'PUT', 'DELETE'], ...middleware)
	}
}

/**
 * API Resource
 * 
 * Represents an HTTP API, capable of routing and securing incoming HTTP requests to handlers.
 */
class Api {
	public readonly name: string;
  public readonly middleware?: HttpMiddleware[];

	constructor(name: string, ...middleware: HttpMiddleware[]) {
		this.name = name;
    this.middleware = middleware;
	}
	
  route = (match: string, ...middleware: HttpMiddleware[]): Route => {
		return new Route(this, match, ...this.middleware, ...middleware);
  }

}

/**
 * Register a new API Resource.
 * 
 * Use the returned API object to register routes and handlers
 */
export const api = (name: string, ...middleware: HttpMiddleware[]): Api => {
	return new Api(name, ...middleware);
}

// const userApi = api("users")

// // ==== user collection operations ====
// const allUsers = userApi.route('/users')

// // list all
// allUsers.get(ctx => { return ctx })
// // create new
// allUsers.post(ctx => { return ctx })

// // ==== single user operations ====
// const singleUser = userApi.route('/users/:userId')

// // retrieve user
// singleUser.get(ctx => { return ctx })
// // update user
// singleUser.put(ctx => { return ctx })
// // delete user
// singleUser.delete(ctx => { return ctx })