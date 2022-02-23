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
import { SERVICE_BIND } from '../../../constants';
import { SecretServiceClient } from '@nitric/api/proto/secret/v1/secret_grpc_pb';
import {
  SecretPutRequest,
  SecretPutResponse,
  SecretAccessRequest,
  SecretAccessResponse,
  SecretVersion as GrpcSecretVersion,
  Secret as GrpcSecret,
} from '@nitric/api/proto/secret/v1/secret_pb';
import * as grpc from '@grpc/grpc-js';
import { fromGrpcError, InvalidArgumentError } from '../../errors';

const ENCODER = new TextEncoder();
const DECODER = new TextDecoder();

/**
 * Nitric secret client, facilitates writing and and accessing secrets.cd ../
 */
export class Secrets {
  SecretServiceClient: SecretServiceClient;

  constructor() {
    this.SecretServiceClient = new SecretServiceClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Get a reference to a secret
   * @retuns A Secret reference
   *
   * Example:
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * const secret = secrets().secret("my-secret");
   * ```
   */
  secret = (name: string): Secret => {
    if (!name) {
      throw new InvalidArgumentError('A name is required to use a Secret.');
    }
    return new Secret(this, name);
  };
}

/**
 * A reference to a secret.
 */
class Secret {
  readonly secrets: Secrets;
  readonly name: string;

  constructor(secrets: Secrets, name: string) {
    this.secrets = secrets;
    this.name = name;
  }

  /**
   * Creates a new SecretVersion containing the given value
   *
   * @param secret - The secret value to store
   * @returns Promise<SecretVersion>
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function putSecret() {
   *  const secret = secrets().secret('secret');
   *  const version = await secret.put("ssssshhhhh... it's a secret");
   * }
   * ```
   */
  put = async (secret: string | Uint8Array) => {
    return new Promise<SecretVersion>((resolve, reject) => {
      const secretBuff =
        typeof secret === 'string' ? ENCODER.encode(secret) : secret;

      const request = new SecretPutRequest();
      request.setSecret(Secret.toWire(this));
      request.setValue(secretBuff);

      this.secrets.SecretServiceClient.put(
        request,
        (error, response: SecretPutResponse) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(
              new SecretVersion(
                this.secrets,
                this,
                response.getSecretVersion().getVersion()
              )
            );
          }
        }
      );
    });
  };

  /**
   * Retrieves the latest version of a secret
   * @returns Promise<SecretVersion>
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function getSecret() {
   *  const secret = secrets().secret('secret');
   *  const latestVersion = secret.latest();
   * }
   * ```
   *
   */
  latest = () => {
    return this.version('latest');
  };

  /**
   * Retrieves the latest version of a secret
   * @returns Promise<SecretVersion>
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * const secret = secrets().secret('secret');
   * // NOTE: Version identifiers can difer between providers
   * // In most cases 'latest' should be used
   * const latestVersion = secret.version('1');
   * ```
   *
   */
  version = (version: string) => {
    if (!version) {
      throw new InvalidArgumentError(
        'A version is required to create a version reference.'
      );
    }
    return new SecretVersion(this.secrets, this, version);
  };

  static toWire = (secret: Secret) => {
    const wire = new GrpcSecret();

    wire.setName(secret.name);

    return wire;
  };
}

/**
 * A reference to a secret version.
 */
class SecretVersion {
  readonly secrets: Secrets;
  readonly secret: Secret;
  readonly version: string;

  constructor(secrets: Secrets, secret: Secret, version: string) {
    this.secrets = secrets;
    this.secret = secret;
    this.version = version;
  }

  /**
   * Accesses the value stored in a secret version
   *
   * @param secret - The secret value to store
   * @returns Promise<Uint8Array>
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function accessSecret() {
   *  const secret = secrets().secret('secret').latest();
   *  const secretValue = await secret.access();
   * }
   * ```
   */
  access = async (): Promise<SecretValue> => {
    return new Promise((resolve, reject) => {
      const request = new SecretAccessRequest();
      request.setSecretVersion(SecretVersion.toWire(this));

      this.secrets.SecretServiceClient.access(
        request,
        (error, response: SecretAccessResponse) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            const secretVersion = new SecretVersion(
              this.secrets,
              this.secret,
              response.getSecretVersion().getVersion()
            );

            const val = new SecretValue(
              secretVersion,
              response.getValue_asU8()
            );

            resolve(val);
          }
        }
      );
    });
  };

  static toWire = (secretVersion: SecretVersion) => {
    const wire = new GrpcSecretVersion();

    wire.setSecret(Secret.toWire(secretVersion.secret));
    wire.setVersion(secretVersion.version);

    return wire;
  };
}

/**
 * Container for a SecretValue
 * Also provides addtional metadata about the actual accessed secret version in the case that "latest" is used
 */
class SecretValue {
  readonly secretVersion: SecretVersion;
  private readonly val: Uint8Array;

  constructor(secretVersion: SecretVersion, val: Uint8Array) {
    this.secretVersion = secretVersion;
    this.val = val;
  }

  /**
   * @returns Uint8Array
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function accessSecret() {
   *  const secret = secrets().secret('secret').latest();
   *  const secretValue = await secret.access();
   *
   *  const content = secretValue.asBytes();
   * }
   * ```
   */
  asBytes = () => {
    return this.val;
  };

  /**
   * @returns string
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function accessSecret() {
   *  const secret = secrets().secret('secret').latest();
   *  const secretValue = await secret.access();
   *
   *  const content = secretValue.asString();
   * }
   * ```
   */
  asString = () => {
    return DECODER.decode(this.asBytes());
  };
}

// Secrets client singleton
let SECRETS = undefined;

/**
 * Secrets
 * @returns a Secrets API client.
 * @example
 * ```typescript
 * import { secrets } from "@nitric/sdk";
 *
 * async function getSecret() {
 *  const secret = secrets().secret('secret');
 *  const version = secret.latest();
 *  const content = await version.access();
 * }
 * ```
 */
export const secrets = (): Secrets => {
  if (!SECRETS) {
    SECRETS = new Secrets();
  }

  return SECRETS;
};
