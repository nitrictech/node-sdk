import { auth } from "../interfaces/v1";
import { AMBASSADOR_BIND } from "../constants";
import * as grpc from '@grpc/grpc-js';

export class AuthClient {
  private grpcClient: auth.UserClient;
  private tenant: string;

  constructor(tenant: string) {
    this.tenant = tenant;
    this.grpcClient = new auth.UserClient(
      AMBASSADOR_BIND, 
      grpc.ChannelCredentials.createInsecure()
    );
  }

  createUser = async (id: string, email: string, password: string): Promise<void> => {
    const request = new auth.UserCreateRequest()
    request.setId(id);
    request.setEmail(email);
    request.setPassword(password);
    request.setTenant(this.tenant);

    return new Promise<void>((resolve, reject) => {
      this.grpcClient.create(request, (error, _) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      });
    });
  }
}