import express from "express";
import { ClientFactory } from "./factories/client.factory";
import { ExpressAdapter } from "./adapters/express.adapter";

const app = express();

app.use(express.json());

app.get(
  "/api/clients",
  ExpressAdapter.adapt(ClientFactory.getFindAllClientsController())
);

app.post(
  "/api/clients",
  ExpressAdapter.adapt(ClientFactory.getCreateClientController())
);

app.listen(3000, () => {
  console.log("Servidor express inciado na porta 3000");
});
