import express, { Response, Request } from "express";
import { FindAllClientsController } from "../infra/controllers/client/find-all-clients.controller";
import { FindAllClientsUseCase } from "../application/usecases/client/find-all-clients.usecase";
import { ClientInMemoryGateway } from "../infra/gateways/client/client-inmemory.gateway";

const app = express();

app.get("/api/clients", async (req: Request, res: Response) => {
  const gateway = new ClientInMemoryGateway();
  const usecase = new FindAllClientsUseCase(gateway);
  const controller = new FindAllClientsController(usecase);

  const response = await controller.execute({ body: {} });

  res.status(response.statusCode).json(response.body);
});

app.listen(3000, () => {
  console.log("Servidor express inciado na porta 3000");
});
