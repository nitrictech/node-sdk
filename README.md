<p align="center">
  <img src="./docs/assets/dot-matrix-logo-node.png" alt="Nitric Logo"/>
</p>

![Tests](https://github.com/nitrictech/node-sdk/actions/workflows/test.yaml/badge.svg?branch=main)
[![codecov](https://codecov.io/gh/nitrictech/node-sdk/branch/main/graph/badge.svg?token=N46TTGPE4G)](https://codecov.io/gh/nitrictech/node-sdk)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nitrictech_node-sdk&metric=alert_status)](https://sonarcloud.io/dashboard?id=nitrictech_node-sdk)
[![Version](https://img.shields.io/npm/v/@nitric/sdk.svg)](https://npmjs.org/package/@nitric/sdk)
[![Downloads/week](https://img.shields.io/npm/dw/@nitric/sdk.svg)](https://npmjs.org/package/@nitric/sdk)

# @nitric/sdk
The NodeJS SDK supports the use of the cloud-portable [Nitric](https://nitric.io) framework with NodeJS 12+.
> The SDK is in early stage development and APIs and interfaces are still subject to breaking changes

## Prerequisites
- NodeJS 12+

## Getting Started

### Using the [Nitric CLI](https://github.com/nitric-tech/cli)
> @nitric/sdk is included in all node related SDK projects by default

```bash
nitric make:stack <node-stack> example
```

Some available node stacks are:

* typescript
* javascript


### Adding to an existing project
**NPM**
```bash
npm install @nitric/sdk
```
**Yarn**
```bash
yarn add @nitric/sdk
```

## Usage
[Nitric Documentation](https://nitric.io/docs)

## Local Development

```bash
yarn install
yarn build
```
