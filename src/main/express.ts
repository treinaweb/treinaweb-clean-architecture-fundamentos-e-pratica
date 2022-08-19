import express from "express";
import { ClientFactory } from "./factories/client.factory";
import { ExpressAdapter } from "./adapters/express.adapter";

const app = express();

app.get(
  "/api/clients",
  ExpressAdapter.adapt(ClientFactory.getFindAllClientsController())
);

app.listen(3000, () => {
  console.log("Servidor express inciado na porta 3000");
});
