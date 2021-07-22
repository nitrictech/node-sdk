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
import { NitricFunction } from './function';
import { NitricTrigger } from './trigger';
import { NITRIC_DEBUG } from '../constants';
import { html } from 'common-tags';
import * as grpc from '@grpc/grpc-js';
import { SERVICE_BIND } from '../constants';
import { faas } from '../interfaces';
import { Response } from './response';
import { TriggerResponse } from '../interfaces/faas';

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
 * async function handler(request: faas.NitricRequest<Greeting>): Promise<string> {
 * 	 const { name, greeting = "hello" } = request.dataAsObject();
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
export async function start<Req = any, Resp = any>(
  func: NitricFunction<Req, Resp>
): Promise<void> {
  const faasClient = new faas.FaasServiceClient(
    SERVICE_BIND,
    grpc.ChannelCredentials.createInsecure()
  );

  // Begin Bi-Di streaming
  const faasStream = faasClient.triggerStream();

  faasStream.on('data', async (message: faas.ServerMessage) => {
    // We have an init response from the membrane
    if (message.hasInitResponse()) {
      console.log('Function connected with membrane');
      // We got an init response from the membrane
      // The client can configure itself with any information provided by the membrane..
    } else if (message.hasTriggerRequest()) {
      // We want to handle a function here...
      const triggerRequest = message.getTriggerRequest();
      const responseMessage = new faas.ClientMessage();

      responseMessage.setId(message.getId());

      try {
        const nitricTrigger = NitricTrigger.fromGrpcTriggerRequest<any>(
          triggerRequest
        );
        const data: string | Uint8Array | Record<string, any> = await func(
          nitricTrigger
        );
        let response: Response<any>;

        if (data instanceof Response) {
          response = data;
        } else {
          // Create the default response and proceed
          response = nitricTrigger.defaultResponse();
          response.data = data;
        }

        // Translate and attach to the response ClientMessage
        responseMessage.setTriggerResponse(response.toGrpcTriggerResponse());
      } catch (e) {
        console.error(e);
        const triggerResponse = new TriggerResponse();
        responseMessage.setTriggerResponse(triggerResponse);

        if (triggerRequest.hasHttp()) {
          const httpResponse = new faas.HttpResponseContext();
          triggerResponse.setHttp(httpResponse);
          const headers = httpResponse.getHeadersMap();
          httpResponse.setStatus(500);

          if (NITRIC_DEBUG) {
            triggerResponse.setData(html`
              <html>
                <head>
                  <title>Error</title>
                </head>
                <body>
                  <h2>An error occurred!</h2>
                  <pre>
                    ${e.stack}
                  </pre
                  >
                </body>
              </html>
            `);
            headers.set('Content-Type', 'text/html');
          } else {
            headers.set('Content-Type', 'text/plain');
            triggerResponse.setData('An unknown error ocurred');
          }
        } else if (triggerRequest.hasTopic()) {
          const topicResponse = new faas.TopicResponseContext();

          topicResponse.setSuccess(false);
          triggerResponse.setTopic(topicResponse);
          triggerResponse.setData('An unknown error ocurred');
        }
      }
      // Send the response back to the membrane
      faasStream.write(responseMessage);
    }
  });

  // Let the membrane know we're ready to start
  const initRequest = new faas.InitRequest();
  const initMessage = new faas.ClientMessage();
  initMessage.setInitRequest(initRequest);
  faasStream.write(initMessage);

  // Block until the stream has closed...
  await new Promise<void>((res) => {
    // The server has determined this stream must close
    faasStream.on('end', () => {
      console.log('Membrane has terminated the trigger stream');
      res();
    });
  });
}
