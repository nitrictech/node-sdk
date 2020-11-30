import { Path } from "path-parser";

interface RequestParameters {
  path: Record<string, string>;
  query: Record<string, string>
}

import { NitricContext } from "./context"

export class NitricRequest<T extends Record<string, any>> {
  private body: Uint8Array;
  private contextPath: string;
  private headers: Record<string, string>;
  private method: "GET" | "POST" | "PUT" | "DELETE";

  constructor() {}

  getHeaders(): Record<string, string> {
    return this.headers;
  }

  getMethod(): "GET" | "POST" | "PUT" | "DELETE" {
    return this.method;
  }

  // TODO: Extract context from headers
  getContext(): NitricContext {
    return null as any;
  } 

  /**
   * Will attempt to get parameters for a given request
   * @param paramContext E.g. /customers/:customerId
   */
  getParams(paramContext?: string): RequestParameters {
    const pathParser = new Path(paramContext);
    // parse the context path
    const path = paramContext 
      ? pathParser.test(this.contextPath)
      : {}

    // parse query parameters

    return {
      path,
      query: {}
    };
  }

  /**
   * Does the request contain a body at all?
   */
  hasBody(): boolean {
    return !!this.body;
  }

  /**
   * Return the raw body as bytes
   */
  getBody(): Uint8Array {
    return this.body;
  }

  /**
   * Return the typed object, this assumes that the body is JSON
   * Will throw in the case where the object cannot be correctly serialized...
   */
  getObject(): T {
    return JSON.parse(
      new TextDecoder("utf-8").decode(this.body)
    );
  }
}