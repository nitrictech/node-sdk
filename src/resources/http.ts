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

import portfinder from 'portfinder';
import { HttpClient } from '@nitric/proto/http/v1/http_grpc_pb';
import { SERVICE_BIND } from '../constants';
import * as grpc from '@grpc/grpc-js';
import { ClientMessage, HttpProxyRequest } from '@nitric/proto/http/v1/http_pb';
import { Server } from 'http';

type ListenerFunction =
  | ((port: number, callback?: () => void) => Server)
  | ((port: number) => Server);

interface NodeApplication {
  listen: ListenerFunction;
}

// eslint-disable-next-line
const NO_OP = () => {};

export class HttpWorkerOptions {
  public readonly app: NodeApplication;
  public readonly port: number;
  public readonly callback: () => void;

  constructor(
    app: NodeApplication,
    port: number,
    callback: () => void = NO_OP
  ) {
    this.app = app;
    this.port = port;
    this.callback = callback;
  }
}

const createWorker = (
  app: NodeApplication,
  port: number,
  callback?: () => void
) => {
  const httpClient = new HttpClient(
    SERVICE_BIND,
    grpc.ChannelCredentials.createInsecure()
  );

  const httpProxyRequest = new HttpProxyRequest();
  httpProxyRequest.setHost(`localhost:${port}`);

  const httpProxyStream = httpClient.proxy();

  httpProxyStream.on('data', NO_OP);

  httpProxyStream.on('error', (err) => {
    console.error('An error occurred:', err);
  });

  const clientMessage = new ClientMessage();
  clientMessage.setRequest(httpProxyRequest);
  httpProxyStream.write(clientMessage);
  // Start Node application that HTTP proxy sits on
  if (process.env.NITRIC_ENVIRONMENT !== 'build') {
    const srv = app.listen(port, callback);

    srv.on('close', () => {
      httpProxyStream.cancel();
    });
  }
};

/**
 * Register an HTTP Proxy to the provided application.
 *
 * @param app the http application to run behind the proxy
 * @param callback an optional callback to run after the proxy has started
 * @returns void
 */
export const http = (
  app: NodeApplication | ListenerFunction,
  callback?: () => void
): void => {
  const unknownApp = app as any;

  const nodeApp =
    !!unknownApp.listen && typeof unknownApp.listen === 'function'
      ? (app as NodeApplication)
      : { listen: app as ListenerFunction };

  const port = Number.parseInt(process.env.NITRIC_HTTP_PROXY_PORT);

  if (Number.isNaN(port)) {
    // If port isn't set and the nitric environment is not run or cloud
    console.log('NITRIC_HTTP_PROXY_PORT not set. Finding open port...');
    portfinder.getPort((err, port) => {
      if (err) {
        throw new Error(
          'Unable to find open port. Try setting the env var `NITRIC_HTTP_PROXY_PORT`'
        );
      }

      createWorker(nodeApp, port, callback);
    });

    return;
  }

  createWorker(nodeApp, port, callback);
};
