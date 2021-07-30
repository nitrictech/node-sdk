# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.20](https://github.com/nitrictech/node-sdk/compare/v0.1.19...v0.1.20) (2021-07-30)


### Features

* **api/secrets:** Secrets client implementation. ([17b75ff](https://github.com/nitrictech/node-sdk/commit/17b75ffe6ed0e7975e61747c438bf09331bd88c7))

### [0.1.19](https://github.com/nitrictech/node-sdk/compare/v0.1.18...v0.1.19) (2021-07-30)


### Bug Fixes

* return ref in fetched documents ([24ff742](https://github.com/nitrictech/node-sdk/commit/24ff742920871e6d478aba76a6176cf7378ff4f1))

### [0.1.18](https://github.com/nitrictech/node-sdk/compare/v0.1.17...v0.1.18) (2021-07-30)

### [0.1.17](https://github.com/nitrictech/node-sdk/compare/v0.1.16...v0.1.17) (2021-07-26)

### [0.1.16](https://github.com/nitrictech/node-sdk/compare/v0.1.15...v0.1.16) (2021-07-22)


### Features

* **apis/documents:** document service ([da917ef](https://github.com/nitrictech/node-sdk/commit/da917ef6600b2ded395f8315e4175c223a1d5049))


### Bug Fixes

* full doc responses ([146abeb](https://github.com/nitrictech/node-sdk/commit/146abebf18c6cbdbe8de0f646d4a81c15cfb42c4))

### [0.1.15](https://github.com/nitrictech/node-sdk/compare/v0.1.14...v0.1.15) (2021-07-06)


### Features

* Add delete method to storage client ([7e124d8](https://github.com/nitrictech/node-sdk/commit/7e124d8c8e62a1a1918ce70d88f80c294af9a010))

### [0.1.14](https://github.com/nitrictech/node-sdk/compare/v0.1.13...v0.1.14) (2021-06-19)


### Features

* **faas:** Update FaaS to use gRPC interface with memrbane. ([df23235](https://github.com/nitrictech/node-sdk/commit/df23235a9475150486b36ebe25c686f05f0e9458))

### [0.1.11](https://github.com/nitrictech/node-sdk/compare/v0.1.10...v0.1.11) (2021-05-26)

### [0.1.10](https://github.com/nitrictech/node-sdk/compare/v0.1.9...v0.1.10) (2021-05-25)


### Features

* Add new NitricResponse class for returns. Add new tests and fix broken tests. ([2c6e371](https://github.com/nitrictech/node-sdk/commit/2c6e3719b88b44632afbd7b733edf62a868ed178))
* Add NitricResponse class, and update start method. ([c9dfe28](https://github.com/nitrictech/node-sdk/commit/c9dfe2872b842c5731f23e1355d3718c70686de2))

### [0.1.9](https://github.com/nitrictech/node-sdk/compare/v0.1.8...v0.1.9) (2021-05-13)

### [0.1.8](https://github.com/nitrictech/node-sdk/compare/v0.1.7...v0.1.8) (2021-05-06)

### [0.1.7](https://github.com/nitrictech/node-sdk/compare/v0.1.6...v0.1.7) (2021-05-06)


### Features

* Add license header checks for source files. ([2b1dc88](https://github.com/nitrictech/node-sdk/commit/2b1dc88646f653dbcb0245197aad034df9247954))
* Enhance error handling and enable a debug mode. ([78f6fdc](https://github.com/nitrictech/node-sdk/commit/78f6fdc87876ce06afbf4752c7de9e6eb5ca2130))


### Bug Fixes

* Allow undefined responses, and add better debugging when debug env is enabled.  ([5ecf1e1](https://github.com/nitrictech/node-sdk/commit/5ecf1e17829bfde80acda3134f76c74e49334b38))

### [0.1.6](https://github.com/nitrictech/node-sdk/compare/v0.1.5...v0.1.6) (2021-04-09)


### Features

* Remove request id generation from the SDK. ([ecd170c](https://github.com/nitrictech/node-sdk/commit/ecd170c9f4b0cdd7a0ef2e9fd9680b2f8683a4d0))

### [0.1.5](https://github.com/nitrictech/node-sdk/compare/v0.1.4...v0.1.5) (2021-04-07)


### Bug Fixes

* Convert buffered strings to ArrayBuffers, for consistency. ([d01134d](https://github.com/nitrictech/node-sdk/commit/d01134d58cf638b0f817a331a679a71af1e568ef))

### [0.1.4](https://github.com/nitrictech/node-sdk/compare/v0.1.3...v0.1.4) (2021-04-01)


### Bug Fixes

* remove tsconfig paths ([dca4624](https://github.com/nitrictech/node-sdk/commit/dca462484acd378259bec111b84a9bfec5ae564c))

### [0.1.3](https://github.com/nitrictech/node-sdk/compare/v0.1.2...v0.1.3) (2021-04-01)

### [0.1.2](https://github.com/nitrictech/node-sdk/compare/v0.1.1...v0.1.2) (2021-03-25)

### [0.1.1](https://github.com/nitrictech/node-sdk/compare/v0.1.0...v0.1.1) (2021-03-25)


### Features

* Rework to simplify node faas entrypoint. ([9390657](https://github.com/nitrictech/node-sdk/commit/9390657cd6aa078ee3d7e356beb2b97d7b7422d2))

## [0.1.0](https://github.com/nitrictech/node-sdk/compare/v0.0.1...v0.1.0) (2021-02-26)


### ⚠ BREAKING CHANGES

* update to new grpc contracts

### Features

* update to new grpc contracts ([cd13ab6](https://github.com/nitrictech/node-sdk/commit/cd13ab682ba8508ddfbda4cf18da9f43effa5096))
* **queue:** add queue pop method ([2e50995](https://github.com/nitrictech/node-sdk/commit/2e509956ea366abe9d350ac3bbd2bc1a358d54f4))
* Add Queue capability and add some light structure refactoring ([9ad4109](https://github.com/nitrictech/node-sdk/commit/9ad41097b40ba492f4a5137e56817dec74c88def))
* Implement request and context parsing. ([27dd7ec](https://github.com/nitrictech/node-sdk/commit/27dd7ec522756ec4953e444fedb978a0f6213c1f))
* Initial AuthClient implementation. ([422317d](https://github.com/nitrictech/node-sdk/commit/422317d78558bf2470524a64ad286a1cb4c5ef3b))


### Bug Fixes

* Ensure nitric functions are async by default. ([161c4fd](https://github.com/nitrictech/node-sdk/commit/161c4fd5ec74dee419887b4cbae703d0bfb462e0))

### 0.0.1 (2020-11-24)


### Features

* Add typings for functions and requests. ([0c38820](https://github.com/nitric-dev/node-sdk/commit/0c38820cedd6f3047a235a072c21ecc43a995a70))
* More idiomatic interfaces. ([79a37e4](https://github.com/nitric-dev/node-sdk/commit/79a37e45732ff58666619866ffedb30c84b0efee))
* WIP DocumentsClient implementation. ([5e6cd96](https://github.com/nitric-dev/node-sdk/commit/5e6cd96431f22bc785bd4d61a4540c50a8f673e7))
* WIP idiomatic nitric SDK for NodeJS.  ([0ed9c62](https://github.com/nitric-dev/node-sdk/commit/0ed9c62b8b8be5883017722ad246d077e4bde35f))


### Bug Fixes

* Update contracts submodule. ([e3beca2](https://github.com/nitric-dev/node-sdk/commit/e3beca24d8d069d96466b80c5f37166f10d01bf9))
