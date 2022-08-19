import { FindAllClientsController } from "../../../../src/infra/controllers/client/find-all-clients.controller";
import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-clients.usecase";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client-inmemory.gateway";
import { HttpResponse } from "../../../../src/infra/web/http";
import { FindAllClientsOutputDto } from "../../../../src/infra/presenters/client/find-all-clients.presenter";

test("deve retornar uma resposta http com status code 200 e o body contendo a lista de clientes", async () => {
  const gateway = new ClientInMemoryGateway();
  const usecase = new FindAllClientsUseCase(gateway);
  const controller = new FindAllClientsController(usecase);

  const expectedResponse: HttpResponse<FindAllClientsOutputDto[]> = {
    statusCode: 200,
    body: [
      {
        first_name: "Test",
        last_name: "Test",
        email: "test@mail.com",
        cpf: "12345678912",
      },
    ],
  };
  const actualResponse = await controller.execute({ body: {} });

  expect(actualResponse).toEqual(expectedResponse);
});
