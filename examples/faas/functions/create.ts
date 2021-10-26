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
