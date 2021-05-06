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
import { Path } from 'path-parser';
import querystring from 'querystring';
import { NitricContext } from './context';

interface RequestParameters {
  path: Record<string, string>;
  query: Record<string, string | string[] | undefined>;
}

/**
 * The representation of a NitricRequest to be passed to a {@link NitricFunction}
 */
export class NitricRequest<T> {
  private payload: Uint8Array;
  private path: string;
  // private headers: Record<string, string>;
  // private method: "GET" | "POST" | "PUT" | "DELETE";
  private context: NitricContext;

  constructor(
    headers: Record<string, string>,
    payload?: Uint8Array,
    path?: string
  ) {
    this.context = NitricContext.fromHeaders(headers);
    // this.headers = headers;
    this.payload = payload;
    // Default path to index, if one is not provided
    this.path = path || '/';
    // this.method = method;
  }

  // getHeaders(): Record<string, string> {
  //   return this.headers;
  // }

  // getMethod(): "GET" | "POST" | "PUT" | "DELETE" {
  //   return this.method;
  // }

  // TODO: Extract context from headers
  public getContext = (): NitricContext => {
    return this.context;
  };

  /**
   * Will attempt to get parameters for a given request
   * @param paramContext E.g. /customers/:customerId
   */
  public getParams = (paramContext?: string): RequestParameters => {
    const [pathString, queryString] = this.path.split('?');

    const pathParser = new Path(paramContext);
    // parse the context path
    const path = paramContext ? pathParser.test(pathString) : {};

    const query = querystring.parse(queryString);

    // parse query parameters
    return {
      path,
      query,
    };
  };

  /**
   * Does the request contain a body
   * @returns true when the body is defined and false if the body is undefined or null
   */
  public hasBody = (): boolean => {
    return !!this.payload;
  };

  /**
   * Return the raw body as bytes
   */
  public getBody = (): Uint8Array => {
    return this.payload;
  };

  /**
   * Return the payload as a string
   */
  public getString = (): string => {
    return new TextDecoder('utf-8').decode(this.payload);
  };

  /**
   * Return the typed object, this assumes that the body is JSON
   * Will throw in the case where the object cannot be correctly serialized...
   */
  public getObject = (): T => {
    return JSON.parse(this.getString());
  };
}
