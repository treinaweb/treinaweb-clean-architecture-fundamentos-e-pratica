import { ClientGateway } from "../../application/gateways/client/client.gateway";
import { ClientInMemoryGateway } from "../../infra/gateways/client/client-inmemory.gateway";
import { FindAllClientsUseCase } from "../../application/usecases/client/find-all-clients.usecase";
import { FindAllClientsController } from "../../infra/controllers/client/find-all-clients.controller";
import { CreateClientUseCase } from "../../application/usecases/client/create-client.usecase";
import { CreateClientController } from "../../infra/controllers/client/create-client.controller";

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

  public static getCreateClientUseCase(): CreateClientUseCase {
    return new CreateClientUseCase(this.getClientGateway());
  }

  public static getCreateClientController(): CreateClientController {
    return new CreateClientController(this.getCreateClientUseCase());
  }
}
