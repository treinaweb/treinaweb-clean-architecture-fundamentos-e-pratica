import { ClientGateway } from "../../gateways/client/client.gateway";
import { Client } from "../../../enterprise/entities/client/client.entity";

export class CreateClientUseCase {
  private readonly _clientGateway: ClientGateway;

  constructor(clientGateway: ClientGateway) {
    this._clientGateway = clientGateway;
  }

  async execute(client: Client): Promise<Client> {
    await this._clientGateway.create(client);
    return client;
  }
}
