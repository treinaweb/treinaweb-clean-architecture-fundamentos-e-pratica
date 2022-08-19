import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-clients.usecase";
import { Client } from "../../../../src/enterprise/entities/client/client.entity";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client-inmemory.gateway";

test("deve return a lista de clientes", async () => {
  const clientGateway = new ClientInMemoryGateway();
  const findAllClientsUseCase = new FindAllClientsUseCase(clientGateway);

  const expectedClients = [
    new Client("Test", "Test", "test@mail.com", "12345678912"),
  ];
  const actualClients = await findAllClientsUseCase.execute();

  expect(actualClients).toEqual(expectedClients);
});
