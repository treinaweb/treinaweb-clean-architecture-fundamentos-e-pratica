import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";
import { ClientFactory } from "./factories/client.factory";

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/api/clients",
    handler: async (request: Request, h: ResponseToolkit, err?: Error) => {
      const controller = ClientFactory.getFindAllClientsController();

      const response = await controller.execute({ body: {} });

      return h.response(response.body).code(response.statusCode);
    },
  });

  await server.start();
};

init();
