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
import { HttpMiddleware, Faas } from '../faas';

import { HttpMethod } from '../types';

export class ApiWorkerOptions {
  public readonly api: string;
  public readonly route: string;
  public readonly methods: HttpMethod[];

  constructor(api: string, route: string, methods: HttpMethod[]) {
    this.api = api;
    this.route = route;
    this.methods = methods;
  }
}

class Method {
  private readonly faas: Faas;
  public readonly route: Route;
  public readonly methods: HttpMethod[];

  constructor(
    route: Route,
    methods: HttpMethod[],
    ...middleware: HttpMiddleware[]
  ) {
    this.route = route;
    this.methods = methods;
    console.log('faas', Faas);
    this.faas = new Faas(new ApiWorkerOptions(route.api.name, route.path, methods));
    this.faas.http(...middleware);
  }

  private async start(): Promise<void> {
    return this.faas.start();
  }
}

interface RouteOpts {
  /**
   * Optional middleware to apply to all methods for the route. Useful for universal middleware such as CORS or Auth.
   */
  middleware?: HttpMiddleware[] | HttpMiddleware;
}

class Route {
  public readonly api: Api;
  public readonly path: string;
  public readonly middleware: HttpMiddleware[];

  constructor(api: Api, path: string, opts: RouteOpts = {}) {
    this.api = api;
    this.path = path;
    const { middleware = [] } = opts;
    this.middleware = Array.isArray(middleware) ? middleware : [middleware];
  }

  async method(
    methods: HttpMethod[],
    ...middleware: HttpMiddleware[]
  ): Promise<void> {
    const getHandler = new Method(
      this,
      methods,
      ...this.middleware,
      ...middleware
    );
    return getHandler['start']();
  }

  /**
   * Register a handler function for GET requests to this route
   */
  async get(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['GET'], ...middleware);
  }

  /**
   * Register a handler function for POST requests to this route
   */
  async post(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['POST'], ...middleware);
  }

  /**
   * Register a handler function for PUT requests to this route
   */
  async put(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['PUT'], ...middleware);
  }

  /**
   * Register a handler function for PATCH requests to this route
   */
  async patch(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['PATCH'], ...middleware);
  }

  /**
   * Register a handler function for DELETE requests to this route
   */
  async delete(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(['DELETE'], ...middleware);
  }

  /**
   * Register a handler function for GET, POST, PATCH, PUT and DELETE requests to this route.
   *
   * Most useful when routing isn't important or you're doing you own internal routing.
   */
  async all(...middleware: HttpMiddleware[]): Promise<void> {
    return this.method(
      ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
      ...middleware
    );
  }
}

interface ApiOpts {
  /**
   * The base path for all routes in the API.
   *
   * Acts as a prefix, e.g. path '/api/v1/', with route '/customers' would result in the full path '/api/v1/customers'.
   */
  path?: string;
  /**
   * Optional middleware to apply to all routes/methods in the API. Useful for universal middleware such as CORS or Auth.
   */
  middleware?: HttpMiddleware[] | HttpMiddleware;
}

/**
 * API Resource
 *
 * Represents an HTTP API, capable of routing and securing incoming HTTP requests to handlers.
 */
class Api {
  public readonly name: string;
  public readonly path: string;
  public readonly middleware?: HttpMiddleware[];

  private readonly routes: Route[];

  constructor(name: string, options: ApiOpts = {}) {
    const { middleware, path = '/' } = options;
    this.name = name;
    this.path = path;
    this.middleware = Array.isArray(middleware) ? middleware : [middleware];
    this.routes = [];
  }

  /**
   * Register a new route in this API.
   *
   * Used to define Method handlers. e.g.
   *
   * ```
   * // Create a route
   * const home = api.route('/home')
   *
   * // Register a handler for Http GET request to this route
   * home.get(homeHandler)
   * ```
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param options route options such as setting middleware which applies to all methods in the route
   * @returns the route object, which can be used to register method handlers
   */
  route(match: string, options?: RouteOpts): Route {
    const r = new Route(this, match, options);
    this.routes.push(r);
    return r;
  }

  /*  === Quick Register Functions ===
   *
   * Convenience methods that enable quick registration of method handlers, without defining the route first.
   * makes for more succinct code in straightforward cases.
   *
   * e.g. api.route('/home').get(ctx => ctx) becomes api.get('/home', ctx => ctx)
   */

  /**
   * Registers a new route with a GET handler in a single method.
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to GET
   * @returns {Promise} that resolves when the handler terminates.
   */
  async get(match: string, ...middleware: HttpMiddleware[]): Promise<void> {
    const r = this.route(match);
    return r.get(...middleware);
  }

  /**
   * Registers a new route with a POST handler in a single method.
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to POST
   * @returns {Promise} that resolves when the handler terminates.
   */
  async post(match: string, ...middleware: HttpMiddleware[]): Promise<void> {
    const r = this.route(match);
    return r.post(...middleware);
  }

  /**
   * Registers a new route with a PUT handler in a single method.
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PUT
   * @returns {Promise} that resolves when the handler terminates.
   */
  async put(match: string, ...middleware: HttpMiddleware[]): Promise<void> {
    const r = this.route(match);
    return r.put(...middleware);
  }

  /**
   * Registers a new route with a PATCH handler in a single method.
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PATCH
   * @returns {Promise} that resolves when the handler terminates.
   */
  async patch(match: string, ...middleware: HttpMiddleware[]): Promise<void> {
    const r = this.route(match);
    return r.patch(...middleware);
  }

  /**
   * Registers a new route with a DELETE handler in a single method.
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to DELETE
   * @returns {Promise} that resolves when the handler terminates.
   */
  async delete(match: string, ...middleware: HttpMiddleware[]): Promise<void> {
    const r = this.route(match);
    return r.delete(...middleware);
  }
}

/**
 * Register a new API Resource.
 *
 * The returned API object can be used to register Routes and Methods, with Handlers.
 * e.g. api.route('/customers').get(getCustomerHandler)
 *
 * @param name
 * @param options
 * @returns
 */
export const api = (name: string, options?: ApiOpts): Api => {
  return new Api(name, options);
};
