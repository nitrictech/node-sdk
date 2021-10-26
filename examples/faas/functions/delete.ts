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