import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-clients.usecase";
import { ClientGateway } from "../../../../src/application/gateways/client/client.gateway";
import { Client } from "../../../../src/enterprise/entities/client/client.entity";

class ClientGatewayMock implements ClientGateway {
  async findAll(): Promise<Client[]> {
    return Promise.resolve([
      new Client("Test", "Test", "test@mail.com", "12345678912"),
    ]);
  }
}

test("deve return a lista de clientes", async () => {
  const clientGateway = new ClientGatewayMock();
  const findAllClientsUseCase = new FindAllClientsUseCase(clientGateway);

  const expectedClients = [
    new Client("Test", "Test", "test@mail.com", "12345678912"),
  ];
  const actualClients = await findAllClientsUseCase.execute();

  expect(actualClients).toEqual(expectedClients);
});
