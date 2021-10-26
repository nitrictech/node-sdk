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
import { faas, documents } from '@nitric/sdk';
import { Example, path } from '../common';

// Start your function here
faas
  .http(async (ctx: faas.HttpContext): Promise<faas.HttpContext> => {
    // get params from path
    const { id } = path.test(ctx.req.path);

    if (!id) {
      ctx.res.body = new TextEncoder().encode('Invalid Request');
      ctx.res.status = 400;
    }

    try {
      console.log('removing doc id', id);
      await documents().collection<Example>('examples').doc(id).delete();
      ctx.res.body = new TextEncoder().encode(`Removed example with ID: ${id}`);
    } catch (e) {
      ctx.res.status = 404;
      ctx.res.body = new TextEncoder().encode(
        `Example not found!: ${e.message}`
      );
    }

    return ctx;
  })
  .start();
// [END snippet]