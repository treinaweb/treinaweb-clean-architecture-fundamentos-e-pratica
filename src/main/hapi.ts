import Hapi from "@hapi/hapi";
import { ClientFactory } from "./factories/client.factory";
import { HapiAdapter } from "./adapters/hapi.adapter";

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/api/clients",
    handler: HapiAdapter.adapt(ClientFactory.getFindAllClientsController()),
  });

  server.route({
    method: "POST",
    path: "/api/clients",
    handler: HapiAdapter.adapt(ClientFactory.getCreateClientController()),
  });

  await server.start();
};

init();
