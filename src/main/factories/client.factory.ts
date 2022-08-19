import { ClientGateway } from "../../application/gateways/client/client.gateway";
import { ClientInMemoryGateway } from "../../infra/gateways/client/client-inmemory.gateway";
import { FindAllClientsUseCase } from "../../application/usecases/client/find-all-clients.usecase";
import { FindAllClientsController } from "../../infra/controllers/client/find-all-clients.controller";

export class ClientFactory {
  private static _clientGatewayInstance: ClientGateway;

  public static getClientGateway(): ClientGateway {
    if (!this._clientGatewayInstance) {
      this._clientGatewayInstance = new ClientInMemoryGateway();
    }
    return this._clientGatewayInstance;
  }

  public static getFindAllClientsUseCase(): FindAllClientsUseCase {
    return new FindAllClientsUseCase(this.getClientGateway());
  }

  public static getFindAllClientsController(): FindAllClientsController {
    return new FindAllClientsController(this.getFindAllClientsUseCase());
  }
}
