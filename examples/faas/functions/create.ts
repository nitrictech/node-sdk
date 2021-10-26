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

// [START snippet]
import { faas, documents } from "@nitric/sdk";
import { Example } from "../common";
import { uuid } from "uuidv4";

interface CreateContext extends faas.HttpContext {
  req: faas.HttpRequest & {
    body?: Example;
  };
}

// Start your function here
faas
  .http(
    faas.json(), //  use json body parser middleware to decode data
    async (ctx: CreateContext): Promise<faas.HttpContext> => {
      const example = ctx.req.body;

      // generate a new uuid
      const id = uuid();

      // Create a new example document
      await documents().collection("examples").doc(id).set(example);

      ctx.res.body = new TextEncoder().encode(`Created example with ID: ${id}`);

      return ctx;
    }
  )
  .start();
// [END snippet]
