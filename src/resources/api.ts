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
import {
  ApiCorsDefinition,
  ApiResource,
  ApiScopes,
  ApiSecurityDefinition,
  ApiSecurityDefinitionJwt,
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceDetailsResponse,
  ResourceType,
  ResourceTypeMap,
} from '@nitric/api/proto/resource/v1/resource_pb';
import { fromGrpcError } from '../api/errors';
import resourceClient from './client';
import { Duration, HttpMethod } from '../types';
import { make, Resource as Base } from './common';
import path from 'path';

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

class Method<SecurityDefs extends string> {
  private readonly faas: Faas;
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
    this.faas = new Faas(
      new ApiWorkerOptions(route.api.name, route.path, methods, opts)
    );
    this.faas.http(...middleware);
  }

  private async start(): Promise<void> {
    return this.faas.start();
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

export interface CorsOptions {
  /**
   * Specifies whether credentials are included in the CORS request.
   *
   * @default false
   */
  allowCredentials?: boolean;
  /**
   * The collection of allowed headers.
   *
   * @default Allow all headers.
   *
   * @example
   * ```js
   * // Allow all headers
   * allowHeaders: ["*"]
   *
   * // Allow specific headers
   * allowHeaders: ["Accept", "Content-Type", "Authorization"]
   * ```
   */
  allowHeaders?: string[];
  /**
   * The collection of allowed HTTP methods.
   *
   * @default Allow all methods.
   *
   * @example
   * ```js
   * // Allow specific methods
   * allowMethods: ["GET", "POST"]
   * ```
   */
  allowMethods?: HttpMethod[];
  /**
   * The collection of allowed origins.
   *
   * @default Allow all origins.
   *
   * @example
   * ```js
   * // Allow all origins
   * allowOrigins: ["*"]
   *
   * // Allow specific origins. Note that the url protocol, ie. "https://", is required.
   * allowOrigins: ["https://domain.com"]
   * ```
   */
  allowOrigins?: string[];
  /**
   * The collection of exposed headers.
   *
   * @default No expose headers are allowed.
   */
  exposeHeaders?: string[];
  /**
   * Specify how long the results of a preflight response can be cached
   *
   * @default No caching
   *
   * @example
   * ```js
   * maxAge: "1 day"
   * ```
   */
  maxAge?: Duration;
}

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

  /**
   * Optional security definitions for the API
   */
  securityDefinitions?: Record<Defs, SecurityDefinition>;

  /**
   * Optional root level security for the API
   */
  security?: Record<Defs, string[]>;

  /**
   * CORS support applied to all endpoints in this API
   *
   * @default false
   *
   * @example
   * ```js
   * const mainApi = api('main', {
   *  cors: {
   *     allowOrigins: ['*'],
   *     allowMethods: ['GET', 'POST'],
   *     allowCredentials: true,
   *   },
   * });
   * ```
   */
  cors?: boolean | CorsOptions;
}

interface ApiDetails {
  url: string;
}

/**
 * API Resource
 *
 * Represents an HTTP API, capable of routing and securing incoming HTTP requests to handlers.
 */
export class Api<SecurityDefs extends string> extends Base<ApiDetails> {
  // public readonly name: string;
  public readonly path: string;
  public readonly middleware?: HttpMiddleware[];
  private readonly routes: Route<SecurityDefs>[];
  private readonly securityDefinitions?: Record<
    SecurityDefs,
    SecurityDefinition
  >;
  private readonly security?: Record<SecurityDefs, string[]>;
  private readonly cors?: boolean | CorsOptions;

  constructor(name: string, options: ApiOptions<SecurityDefs> = {}) {
    super(name);
    const {
      middleware,
      path = '/',
      securityDefinitions = null,
      security = {} as Record<SecurityDefs, string[]>,
      cors,
    } = options;
    // prepend / to path if its not there
    this.path = path.replace(/^\/?/, '/');
    this.middleware = composeMiddleware(middleware);
    this.securityDefinitions = securityDefinitions;
    this.security = security;
    this.routes = [];
    this.cors = cors;
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
    const {
      details: { url },
    } = await this.details();

    return url;
  }

  protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap] {
    return ResourceType.API;
  }

  protected unwrapDetails(resp: ResourceDetailsResponse): ApiDetails {
    if (resp.hasApi()) {
      return {
        url: resp.getApi().getUrl(),
      };
    }

    throw new Error('Unexpected details in response. Expected API details');
  }

  /**
   * Register this api as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    const apiResource = new ApiResource();
    const { security, securityDefinitions, cors } = this;

    if (security) {
      Object.keys(security).forEach((k) => {
        const scopes = new ApiScopes();
        scopes.setScopesList(security[k]);
        apiResource.getSecurityMap().set(k, scopes);
      });
    }

    resource.setName(this.name);
    resource.setType(ResourceType.API);

    if (securityDefinitions) {
      Object.keys(securityDefinitions).forEach((k) => {
        const def = securityDefinitions[k] as SecurityDefinition;
        const definition = new ApiSecurityDefinition();

        if (def.kind === 'jwt') {
          // Set it to a JWT definition
          const secDef = new ApiSecurityDefinitionJwt();
          secDef.setIssuer(def.issuer);
          secDef.setAudiencesList(def.audiences);
          definition.setJwt(secDef);
        }

        apiResource.getSecurityDefinitionsMap().set(k, definition);
      });
    }

    if (cors) {
      const corsConfig = typeof cors === 'object' ? cors : {};
      const corsDef = new ApiCorsDefinition();

      corsDef.setAllowCredentials(corsConfig.allowCredentials);
      corsDef.setAllowOriginsList(corsConfig.allowOrigins);
      corsDef.setAllowHeadersList(corsConfig.allowHeaders);
      corsDef.setAllowMethodsList(corsConfig.allowMethods);
      corsDef.setExposeHeadersList(corsConfig.exposeHeaders);
      corsDef.setMaxAge(
        corsConfig.maxAge ? durationToSeconds(corsConfig.maxAge) : undefined
      );

      apiResource.setCors(corsDef);
    }

    req.setApi(apiResource);
    req.setResource(resource);

    return new Promise<Resource>((resolve, reject) => {
      resourceClient.declare(req, (error, _: ResourceDeclareResponse) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(resource);
        }
      });
    });
  }
}

/**
 * Register a new API Resource.
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

// Function to convert Duration to seconds
/**
 *
 * @param duration the duration as a string
 * @returns number
 */
function durationToSeconds(duration: Duration): number {
  const [amount, unit] = duration.split(' ');

  switch (unit) {
    case 'second':
    case 'seconds':
      return parseInt(amount, 10);
    case 'minute':
    case 'minutes':
      return parseInt(amount, 10) * 60;
    case 'hour':
    case 'hours':
      return parseInt(amount, 10) * 3600;
    case 'day':
    case 'days':
      return parseInt(amount, 10) * 86400;
    default:
      throw new Error('Invalid duration unit');
  }
}
