import express, { Response, Request } from "express";
import { ClientFactory } from "./factories/client.factory";

const app = express();

app.get("/api/clients", async (req: Request, res: Response) => {
  const controller = ClientFactory.getFindAllClientsController();

  const response = await controller.execute({ body: {} });

  res.status(response.statusCode).json(response.body);
});

app.listen(3000, () => {
  console.log("Servidor express inciado na porta 3000");
});
