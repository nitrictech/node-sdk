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
  ResourceType,
  ResourceTypeMap,
  SqlDatabaseResource,
} from '@nitric/proto/resources/v1/resources_pb';
import { SqlConnectionStringRequest } from '@nitric/proto/sql/v1/sql_pb';
import resourceClient from './client';
import { make, Resource as Base } from './common';
import { SqlClient } from '../gen/nitric/proto/sql/v1/sql_grpc_pb';
import { SERVICE_BIND } from '../constants';
import * as grpc from '@grpc/grpc-js';
import { fromGrpcError } from '../api/errors';

/**
 * Register a SQL resource to the provided application.
 */
export class SQLDatabaseResource extends Base {
  private readonly sqlClient: SqlClient;

  constructor(name: string) {
    super(name);
    this.sqlClient = new SqlClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );
  }

  /**
   * Register this SQL as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<ResourceIdentifier> {
    const req = new ResourceDeclareRequest();
    const resource = new ResourceIdentifier();
    resource.setName(this.name);
    resource.setType(ResourceType.SQLDATABASE);
    req.setId(resource);

    const sqlConfig = new SqlDatabaseResource();
    req.setSqlDatabase(sqlConfig);

    const res = await new Promise<ResourceIdentifier>((resolve, reject) => {
      resourceClient.declare(req, (error, _: ResourceDeclareRequest) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(resource);
        }
      });
    });

    return res;
  }

  /**
   * Retrieves the connection string of this SQL Database at runtime.
   *
   * @returns Promise that returns the connection string of this SQL Database
   */
  async connectionString(): Promise<string> {
    const request = new SqlConnectionStringRequest();
    request.setDatabaseName(this.name);

    const connectionString = await new Promise<string>((resolve, reject) => {
      this.sqlClient.connectionString(request, (error, data) => {
        if (error) {
          reject(fromGrpcError(error));
        } else {
          resolve(data.getConnectionString());
        }
      });
    });

    return connectionString;
  }

  protected resourceType(): ResourceTypeMap[keyof ResourceTypeMap] {
    return ResourceType.SQLDATABASE;
  }
}

/**
 * Register a SQL Database Resource. If the SQL Database has already been registered, the existing SQL will be returned.
 *
 * The returned SQL Database object can be used to register handlers for SQL events.
 * e.g. const connectionString = db.connectionString()
 *
 * @param name the name of the SQL Database
 * @returns a SQL resource
 */
export const sql: (name: string) => SQLDatabaseResource =
  make(SQLDatabaseResource);
