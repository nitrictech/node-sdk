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

import { Faas } from '../faas';

type ListenerFunction =
  | ((port: number, callback?: () => void) => void)
  | ((port: number) => void);

interface NodeApplication {
  listen: ListenerFunction;
}

export class HttpWorkerOptions {
  public readonly app: NodeApplication;
  public readonly port: number;
  public readonly callback: () => void;

  constructor(app: NodeApplication, port: number, callback?: () => void) {
    this.app = app;
    this.port = port;
    this.callback = callback || (() => {});
  }
}

/**
 * Creates a http worker
 */
class HttpWorker {
  private readonly faas: Faas;

  constructor(app: NodeApplication, port: number, callback?: () => void) {
    this.faas = new Faas(new HttpWorkerOptions(app, port, callback));
    this.faas.start();
  }
}

export const http = (
  app: NodeApplication,
  port: number,
  callback?: () => void
) => {
  new HttpWorker(app, port, callback);
};
