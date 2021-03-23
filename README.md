# @nitric/sdk

The NodeJS SDK supports the use of the cloud-portable [Nitric](http://nitric.io) framework with NodeJS 12+.

> The SDK is in early stage development and is currently only privately available on NPM.

## Prerequisites

- NodeJS 12+

## Usage

### Nitric Functions (FaaS):

- Install the [Nitric CLI](#)
- Create / Open a Nitric Project
- Make a typescript or javascript function

```bash
# Create a new nitric project
nitric make:project example-typescript
cd example-typescript

# Create a typescript Nitric Function
nitric make:function typescript example-function
```

> note: The SDK will be included in the package.json of a new typescript or javascript function by default.

### Standalone NodeJS Project

Using NPM

```bash
# Install the Nitric SDK
npm install @nitric/api
```

or using Yarn

```bash
yarn add @nitric/api
```

Example import

```typescript
# Import the nitric API
import { EventClient } from "@nitric/api";

// Instasiate a new EventClient
const eventClient = new EventClient();
```

### Building Locally

```bash
yarn install
yarn build
```
