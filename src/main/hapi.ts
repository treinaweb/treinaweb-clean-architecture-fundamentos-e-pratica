import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";
import { ClientInMemoryGateway } from "../infra/gateways/client/client-inmemory.gateway";
import { FindAllClientsUseCase } from "../application/usecases/client/find-all-clients.usecase";
import { FindAllClientsController } from "../infra/controllers/client/find-all-clients.controller";

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/api/clients",
    handler: async (request: Request, h: ResponseToolkit, err?: Error) => {
      const gateway = new ClientInMemoryGateway();
      const usecase = new FindAllClientsUseCase(gateway);
      const controller = new FindAllClientsController(usecase);

      const response = await controller.execute({ body: {} });

      return h.response(response.body).code(response.statusCode);
    },
  });

  await server.start();
};

init();
