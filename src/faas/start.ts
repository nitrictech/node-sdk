// Copyright 2021, Nitric Pty Ltd.
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
import { NitricFunction } from './function';
import { NitricRequest } from './request';
import { NitricResponse } from './response';
import micro, { buffer, send } from 'micro';
import process from 'process';
import { NITRIC_DEBUG } from '../constants';
import { html } from 'common-tags';
import { Server } from 'net';

/**
 * Starts a nitric function
 *
 * Example:
 * ```typescript
 * import { faas } from "@nitric/sdk";
 *
 * interface Greeting {
 *   greeting?: string;
 * 	 name: string;
 * }
 *
 * async function handler(request: faas.NitricRequest<Greeting>): Promise<faas.NitricResponse<string>> {
 * 	 const { name, greeting = "hello" } = request.getObject();
 *
 * 	 return `${greeting} ${name}!`;
 * }
 *
 * faas.start(handler);
 * ```
 * @param func The function handler see {@link NitricFunction}
 * @typeParam Request The contents of the provided nitric request
 * @typeParam Response The type the function handler returns
 */
export async function start<Request = any, Response = any>(
  func: NitricFunction<Request, Response>
): Promise<Server> {
  const [_, port] = (process.env['CHILD_ADDRESS'] || '127.0.0.1:8080').split(
    ':'
  );
  const server = micro(async (req, res) => {
    try {
      const payload = await buffer(req);

      let buff: Uint8Array = null;
      if (typeof payload === 'string') {
        const enc = new TextEncoder();
        buff = enc.encode(payload);
      } else {
        buff = payload;
      }

      const nitricRequest = new NitricRequest<Request>(
        req.headers as Record<string, string>,
        buff,
        req.url
      );
      const nitricResponse = await func(nitricRequest);

      // Return parsed http response...
      if (
        nitricResponse &&
        nitricResponse['status'] &&
        nitricResponse['headers'] &&
        nitricResponse['body']
      ) {
        const typedResponse = nitricResponse as NitricResponse<Response>;

        res.writeHead(typedResponse.status);

        Object.keys(typedResponse.headers).forEach((k) => {
          res.setHeader(k, typedResponse.headers[k]);
        });
        send(res, typedResponse.status, typedResponse.body);
        return;
      } else if (!nitricResponse) {
        // Empty 200 response
        send(res, 200);
        return;
      }

      return nitricResponse;
    } catch(e) {
      if (NITRIC_DEBUG) {
        send(res, 500,
          html`
            <html>
              <head>
                <title>
                  Error
                </title>
              </head>
              <body>
                <h2>An error occurred!</h2>
                <pre>
                  ${e.stack}
                </pre>
              </body>
            </html>
          `
        );
      } else {
        console.log(e.stack);
        // TODO: Firm up error handling design
        send(res, 500, 'Internal Server Error');
      }
    }
  });

  await server.listen(port);
  console.log(`Function listening on ${port}`);
  return server;
}
