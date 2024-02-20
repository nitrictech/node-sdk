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
import {
  ResourceIdentifier,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
  ResourceTypeMap,
  ApiSecurityDefinitionResource,
  ApiOpenIdConnectionDefinition,
} from '@nitric/proto/resources/v1/resources_pb';
import resourceClient from './client';
import { make, newer, Resource } from './common';
import { fromGrpcError } from '../api/errors';

/**
 * Cloud storage bucket resource for large file storage.
 */
export class OidcSecurityDefinition extends Resource {
  private apiName: string;
  private issuer: string;
  private ruleName: string;
  private audiences: string[];

  constructor(name: string, apiName: string, options: UnscopedOicdOptions) {
    super(name);
    this.apiName = apiName;
    this.issuer = options.issuer;
    this.audiences = options.audiences;
    this.ruleName = options.name;
  }

  protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap] {
    return ResourceType.APISECURITYDEFINITION;
  }

  /**
   * Register this bucket as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();
    const resource = new ResourceIdentifier();
    resource.setName(this.ruleName);
    resource.setType(ResourceType.APISECURITYDEFINITION);

    const securityDefinition = new ApiSecurityDefinitionResource();
    const oidcDefinition = new ApiOpenIdConnectionDefinition();

    oidcDefinition.setAudiencesList(this.audiences);
    oidcDefinition.setIssuer(this.issuer);

    securityDefinition.setApiName(this.apiName);
    securityDefinition.setOidc(oidcDefinition);

    req.setId(resource);
    req.setApiSecurityDefinition(securityDefinition);

    return new Promise<ResourceIdentifier>((resolve, reject) => {
      resourceClient.declare(req, (error, _: ResourceDeclareResponse) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(resource);
        }
      });
    });
  }
}

export interface OidcOptions {
  name: string;
  issuer: string;
  audiences: string[];
  scopes: string[];
}

export type UnscopedOicdOptions = Omit<OidcOptions, 'scopes'>;

export type SecurityOption = (...scopes: string[]) => OidcOptions;

/**
 * Constructs a new OpenID Connect (OIDC) security definition, which can be applied to APIs and their routes.
 *
 * This rule can be applied with various scopes, which are used to restrict access to the API.
 */
export const oidcRule = ({
  name,
  issuer,
  audiences,
}: UnscopedOicdOptions): SecurityOption => {
  return (...scopes: string[]): OidcOptions => {
    return {
      name,
      issuer,
      audiences,
      scopes,
    };
  };
};

const baseMaker = make(OidcSecurityDefinition);

/**
 *
 */
export const attachOidc: newer<OidcSecurityDefinition> = (
  apiName: string,
  options: UnscopedOicdOptions
) => {
  return baseMaker(`${options.name}-${apiName}`, apiName, options);
};
