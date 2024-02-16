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
import * as grpc from '@grpc/grpc-js';
import {
  ApiResource,
  ApiScopes,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceIdentifier,
  ResourceType,
  ResourceTypeMap,
} from '@nitric/proto/resources/v1/resources_pb';
import { ApiDetailsRequest } from '@nitric/proto/apis/v1/apis_pb';
import { ApiClient } from '@nitric/proto/apis/v1/apis_grpc_pb';
import resourceClient from './client';
import { HttpMethod } from '../types';
import { make, Resource as Base, startStreamHandler } from './common';
import path from 'path';
import {
  ClientMessage,
  RegistrationRequest,
  ServerMessage,
  ApiWorkerScopes,
  HttpResponse,
  HeaderValue,
  ApiWorkerOptions as ApiWorkerOptionsPb,
} from '@nitric/proto/apis/v1/apis_pb';
import { SERVICE_BIND } from '../constants';
import {
  GenericMiddleware,
  HttpMiddleware,
  createHandler,
} from '../handlers/handler';
import { HttpContext } from '../context/http';
import { fromGrpcError } from '../api/errors';

export class ApiWorkerOptions {
  public readonly api: string;
  public readonly route: string;
  public readonly methods: HttpMethod[];
  public readonly opts: MethodOptions<string>;

  constructor(
    api: string,
    route: string,
    methods: HttpMethod[],
    opts: MethodOptions<string> = {}
  ) {
    this.api = api;
    this.route = route;
    this.methods = methods;
    this.opts = opts;
  }
}

export interface MethodOptions<SecurityDefs extends string> {
  /**
   * Optional security definitions for this method
   */
  security?: Partial<Record<SecurityDefs, string[]>>;
}

export class Method<SecurityDefs extends string> {
  private readonly options: ApiWorkerOptions;
  private readonly handler: GenericMiddleware<HttpContext>;
  public readonly route: Route<SecurityDefs>;
  public readonly methods: HttpMethod[];

  constructor(
    route: Route<SecurityDefs>,
    methods: HttpMethod[],
    opts: MethodOptions<SecurityDefs>,
    ...middleware: HttpMiddleware[]
  ) {
    this.route = route;
    this.methods = methods;
    this.options = new ApiWorkerOptions(
      this.route.api.name,
      this.route.path,
      this.methods,
      opts
    );
    this.handler = createHandler(...middleware);
  }

  private async start(): Promise<void> {
    return startStreamHandler(async () => {
      if (!this.handler) {
        throw new Error(
          `A handler function must be provided for ${this.route.path}.`
        );
      }

      const apiClient = new ApiClient(
        SERVICE_BIND,
        grpc.ChannelCredentials.createInsecure()
      );

      // Begin Bi-Di streaming
      const stream = apiClient.serve();

      stream.on('data', async (message: ServerMessage) => {
        // We have an init response from the membrane
        if (message.hasRegistrationResponse()) {
          // We got an init response from the membrane
          // The client can configure itself with any information provided by the membrane..
        } else if (message.hasHttpRequest()) {
          // We want to handle a function here...
          const httpRequest = message.getHttpRequest();
          const responseMessage = new ClientMessage();

          responseMessage.setId(message.getId());

          try {
            const httpResponse = new HttpResponse();
            httpResponse.setStatus(200);
            httpResponse.setBody('');

            const ctx = HttpContext.fromHttpRequest(httpRequest);

            const result = (await this.handler(ctx, async (ctx) => ctx)) || ctx;
            responseMessage.setHttpResponse(HttpContext.toHttpResponse(result));
          } catch (e) {
            // generic error handling
            console.error(e);
            const httpResponse = new HttpResponse();
            responseMessage.setHttpResponse(httpResponse);
            httpResponse.setBody(
              new TextEncoder().encode('Internal Server Error')
            );
            httpResponse.setStatus(500);

            const headers = httpResponse.getHeadersMap();
            const contentTypeHeader = new HeaderValue();
            contentTypeHeader.addValue('text/plain');
            headers.set('Content-Type', contentTypeHeader);
          }
          // Send the response back to the membrane
          stream.write(responseMessage);
        }
      });

      // Let the membrane know we're ready to start
      const initRequest = new RegistrationRequest();
      const initMessage = new ClientMessage();

      if (this.options instanceof ApiWorkerOptions) {
        initRequest.setApi(this.options.api);
        initRequest.setMethodsList(this.options.methods);
        initRequest.setPath(this.options.route);

        const opts = new ApiWorkerOptionsPb();
        if (this.options.opts && this.options.opts.security) {
          if (Object.keys(this.options.opts.security).length == 0) {
            // disable security if empty security is explicitly set
            opts.setSecurityDisabled(true);
          } else {
            const methodOpts = this.options.opts;
            Object.keys(methodOpts.security).forEach((k) => {
              const scopes = new ApiWorkerScopes();
              scopes.setScopesList(methodOpts.security[k]);
              opts.getSecurityMap().set(k, scopes);
            });
          }
        }

        initRequest.setOptions(opts);
      }

      //Original faas workers should return a blank InitRequest for compatibility.
      initMessage.setRegistrationRequest(initRequest);
      stream.write(initMessage);

      return stream;
    });
  }
}

export interface RouteOptions {
  /**
   * Optional middleware to apply to all methods for the route. Useful for universal middleware such as CORS or Auth.
   */
  middleware?: HttpMiddleware[] | HttpMiddleware;
}

export class Route<SecurityDefs extends string> {
  public readonly api: Api<SecurityDefs>;
  public readonly path: string;
  public readonly middleware: HttpMiddleware[];

  constructor(
    api: Api<SecurityDefs>,
    path: string,
    options: RouteOptions = {}
  ) {
    this.api = api;
    this.path = path;
    const { middleware = [] } = options;
    this.middleware = composeMiddleware(middleware);
  }

  async method(
    methods: HttpMethod[],
    options: MethodOptions<SecurityDefs>,
    ...middleware: HttpMiddleware[]
  ): Promise<void> {
    const getHandler = new Method(
      this,
      methods,
      options,
      ...this.middleware,
      ...middleware
    );
    return getHandler['start']();
  }

  /**
   * Register a handler function for GET requests to this route
   *
   * @param middleware that should be run on any GET request to this route
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  async get(
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.method(['GET'], options, ...composeMiddleware(middleware));
  }

  /**
   * Register a handler function for POST requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  async post(
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.method(['POST'], options, ...composeMiddleware(middleware));
  }

  /**
   * Register a handler function for PUT requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  async put(
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.method(['PUT'], options, ...composeMiddleware(middleware));
  }

  /**
   * Register a handler function for PATCH requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  async patch(
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.method(['PATCH'], options, ...composeMiddleware(middleware));
  }

  /**
   * Register a handler function for DELETE requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  async delete(
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.method(['DELETE'], options, ...composeMiddleware(middleware));
  }

  /**
   * Register a handler function for OPTIONS requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  async options(
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.method(['OPTIONS'], options, ...composeMiddleware(middleware));
  }

  /**
   * Register a handler function for GET, POST, PATCH, PUT and DELETE requests to this route
   *
   * @param middleware that should respond to matching requests to this route and all HTTP methods
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  async all(
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.method(
      ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      options,
      ...composeMiddleware(middleware)
    );
  }
}

export interface BaseSecurityDefinition<T extends string> {
  kind: T;
}

export interface JwtSecurityDefinition extends BaseSecurityDefinition<'jwt'> {
  issuer: string;
  audiences: string[];
}

// TODO: Union type for multiple security definition mappings
export type SecurityDefinition = JwtSecurityDefinition;

export interface ApiOptions<Defs extends string> {
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

  // FIXME: remove?
  /**
   * Optional security definitions for the API
   */
  // securityDefinitions?: Record<Defs, SecurityDefinition>;

  /**
   * Optional root level security for the API
   */
  security?: Record<Defs, string[]>;
}

interface ApiDetails {
  url: string;
}

/**
 * API Resource
 *
 * Represents an HTTP API, capable of routing and securing incoming HTTP requests to handlers.
 */
export class Api<SecurityDefs extends string> extends Base {
  // public readonly name: string;
  public readonly path: string;
  public readonly middleware?: HttpMiddleware[];
  private readonly routes: Route<SecurityDefs>[];
  // private readonly securityDefinitions?: Record<
  //   SecurityDefs,
  //   SecurityDefinition
  // >;
  private readonly security?: Record<SecurityDefs, string[]>;

  constructor(name: string, options: ApiOptions<SecurityDefs> = {}) {
    super(name);
    const {
      middleware,
      path = '/',
      // securityDefinitions = null,
      security = {} as Record<SecurityDefs, string[]>,
    } = options;
    // prepend / to path if its not there
    this.path = path.replace(/^\/?/, '/');
    this.middleware = composeMiddleware(middleware);
    // this.securityDefinitions = securityDefinitions;
    this.security = security;
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
  route(match: string, options?: RouteOptions): Route<SecurityDefs> {
    // ensure path seperator is always foward slash (for windows)
    const apiRoute = path.join(this.path, match).split(path.sep).join('/');

    const routeMiddleware = options
      ? composeMiddleware(options.middleware)
      : [];

    const r = new Route(this, apiRoute, {
      ...options,
      // join the api level middleware and route level (route options) middleware
      middleware: [...this.middleware, ...routeMiddleware],
    });
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
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to GET
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  async get(
    match: string,
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.route(match).get(composeMiddleware(middleware), options);
  }

  /**
   * Registers a new route with a POST handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to POST
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  async post(
    match: string,
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.route(match).post(composeMiddleware(middleware), options);
  }

  /**
   * Registers a new route with a PUT handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PUT
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  async put(
    match: string,
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.route(match).put(composeMiddleware(middleware), options);
  }

  /**
   * Registers a new route with a PATCH handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PATCH
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  async patch(
    match: string,
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.route(match).patch(composeMiddleware(middleware), options);
  }

  /**
   * Registers a new route with a DELETE handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to DELETE
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  async delete(
    match: string,
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.route(match).delete(composeMiddleware(middleware), options);
  }

  /**
   * Registers a new route with a OPTIONS handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to DELETE
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  async options(
    match: string,
    middleware: HttpMiddleware | HttpMiddleware[],
    options: MethodOptions<SecurityDefs> = {}
  ): Promise<void> {
    return this.route(match).options(composeMiddleware(middleware), options);
  }

  /**
   * Retrieves the Invocation URL of this API at runtime.
   *
   * @returns Promise that returns the URL of this API
   */
  async url(): Promise<string> {
    const request = new ApiDetailsRequest();
    request.setApiName(this.name);

    const apiClient = new ApiClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );

    const details = await new Promise<ApiDetails>((resolve, reject) => {
      apiClient.apiDetails(request, (error, data) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve({
            url: data.getUrl(),
          });
        }
      });
    });

    return details.url;
  }

  protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap] {
    return ResourceType.API;
  }

  /**
   * Register this api as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();
    const resourceId = new ResourceIdentifier();
    const apiResource = new ApiResource();
    const { security } = this;

    if (security) {
      Object.keys(security).forEach((k) => {
        const scopes = new ApiScopes();
        scopes.setScopesList(security[k]);
        apiResource.getSecurityMap().set(k, scopes);
      });
    }

    resourceId.setName(this.name);
    resourceId.setType(ResourceType.API);

    req.setApi(apiResource);
    req.setId(resourceId);

    return new Promise<ResourceIdentifier>((resolve, reject) => {
      resourceClient.declare(req, (error, _: ResourceDeclareResponse) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(resourceId);
        }
      });
    });
  }
}

/**
 * Register an API Resource. If the API has already been registered, the existing API will be returned.
 *
 * The returned API object can be used to register Routes and Methods, with Handlers.
 * e.g. api.route('/customers').get(getCustomerHandler)
 *
 * @param name the name of the API
 * @param options additional options for creating the API
 * @returns an API resource
 */
export const api: <Defs extends string>(
  name: string,
  options?: ApiOptions<Defs>
) => Api<Defs> = make(Api);

/**
 * Create a JWT security definition.
 *
 * @param options security definition options
 * @returns the new security definition.
 */
export const jwt = (
  options: Omit<JwtSecurityDefinition, 'kind'>
): JwtSecurityDefinition => {
  return { kind: 'jwt', issuer: options.issuer, audiences: options.audiences };
};

const composeMiddleware = (middleware: HttpMiddleware | HttpMiddleware[]) =>
  Array.isArray(middleware) ? middleware : middleware ? [middleware] : [];
