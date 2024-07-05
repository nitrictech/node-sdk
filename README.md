<p align="center">
  <a href="https://nitric.io">
    <img src="assets/nitric-logo.svg" width="120" alt="Nitric Logo"/>
  </a>
</p>

<p align="center">
  Build <a href="https://nitric.io">Nitric</a> applications with Node.js
</p>

<p align="center">
  <a href="https://codecov.io/gh/nitrictech/node-sdk">
    <img alt="codecov" src="https://img.shields.io/codecov/c/github/nitrictech/node-sdk?style=for-the-badge">
  </a>
  <a href="https://npmjs.org/package/@nitric/sdk">
    <img alt="Version" src="https://img.shields.io/npm/v/@nitric/sdk.svg?style=for-the-badge">
  </a>
  <a href="https://npmjs.org/package/@nitric/sdk">
    <img alt="Downloads/week" src="https://img.shields.io/npm/dw/@nitric/sdk.svg?style=for-the-badge">
  </a>
  <a href="https://discord.gg/Webemece5C"><img alt="Discord" src="https://img.shields.io/discord/955259353043173427?label=discord&style=for-the-badge"></a>
</p>

The NodeJS SDK supports the use of the Nitric framework with NodeJS 12+. For more information, check out the main [Nitric repo](https://github.com/nitrictech/nitric).

Nitric SDKs provide an infrastructure-as-code style that lets you define resources in code. You can also write the functions that support the logic behind APIs, subscribers and schedules.

You can request the type of access you need to resources such as publishing for topics, without dealing directly with IAM or policy documents.

- Reference Documentation: https://nitric.io/docs/reference/nodejs
- Guides: https://nitric.io/docs/guides/nodejs

## Usage

### Starting a new project

Install the [Nitric CLI](https://nitric.io/docs/getting-started/installation), then generate your project:

TypeScript:

```bash
nitric new hello-world ts-starter
```

JavaScript:

```bash
nitric new hello-world js-starter
```

### Add to an existing project

First of all, you need to install the library:

```bash
npm install @nitric/sdk
```

Then you're able to import the library and create cloud resources:

```typescript
import { api, bucket } from '@nitric/sdk';

const publicApi = api('public');
const uploads = bucket('uploads').allow('write');

publicApi.get('/upload', async (ctx) => {
  const photo = uploads.file('images/photo.png');

  const url = await photo.getUploadUrl({
    expiry: 300,
  });

  return ctx.res.json({ url });
});
```

## Learn more

Learn more by checking out the [Nitric documentation](https://nitric.io/docs).

## Get in touch:

- Join us on [Discord](https://nitric.io/chat)

- Ask questions in [GitHub discussions](https://github.com/nitrictech/nitric/discussions)

- Find us on [Twitter](https://twitter.com/nitric_io)

- Send us an [email](mailto:maintainers@nitric.io)
