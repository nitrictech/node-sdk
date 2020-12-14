import { Path } from "path-parser";
import querystring from "querystring"
import { NitricContext } from "./context"

interface RequestParameters {
  path: Record<string, string>;
  query: Record<string, string | string[] | undefined>
}

export class NitricRequest<T extends Record<string, any>> {
  private payload: Uint8Array;
  private path: string;
  // private headers: Record<string, string>;
  // private method: "GET" | "POST" | "PUT" | "DELETE";
  private context: NitricContext;

  constructor(headers: Record<string, string>, payload: Uint8Array, path?: string) {
    this.context = NitricContext.fromHeaders(headers)
    // this.headers = headers;
    this.payload = payload;
    // Default path to index, if one is not provided
    this.path = path || "/";
    // this.method = method;
  }

  // getHeaders(): Record<string, string> {
  //   return this.headers;
  // }

  // getMethod(): "GET" | "POST" | "PUT" | "DELETE" {
  //   return this.method;
  // }

  // TODO: Extract context from headers
  getContext(): NitricContext {
    return this.context;
  } 

  /**
   * Will attempt to get parameters for a given request
   * @param paramContext E.g. /customers/:customerId
   */
  getParams(paramContext?: string): RequestParameters {
    const pathParser = new Path(paramContext);
    // parse the context path
    const path = paramContext 
      ? pathParser.test(this.path)
      : {}

    const query = querystring.parse(this.path);

    // parse query parameters
    return {
      path,
      query
    };
  }

  /**
   * Does the request contain a body at all?
   */
  hasBody(): boolean {
    return !!this.payload;
  }

  /**
   * Return the raw body as bytes
   */
  getBody(): Uint8Array {
    return this.payload;
  }

  /**
   * Return the typed object, this assumes that the body is JSON
   * Will throw in the case where the object cannot be correctly serialized...
   */
  getObject(): T {
    return JSON.parse(
      new TextDecoder("utf-8").decode(this.payload)
    );
  }
}