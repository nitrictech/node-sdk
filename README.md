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
npm install @nitric/sdk
```
or using Yarn
```bash
yarn add @nitric/sdk
```

Example import
```typescript
# Import the nitric SDK v1
import { v1 } from "@nitric/sdk";

// Instasiate a new EventingClient
const eventingClient = new v1.EventingClient();
```