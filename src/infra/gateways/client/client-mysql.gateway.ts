import { ClientGateway } from "../../../application/gateways/client/client.gateway";
import { Client } from "../../../enterprise/entities/client/client.entity";
import { connect } from "../../db/mysql";

export class ClientMySqlGateway implements ClientGateway {
  async findAll(): Promise<Client[]> {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM clients");
    return JSON.parse(JSON.stringify(rows)).map((row: any) => {
      return new Client(row.nome, row.sobrenome, row.email, row.cpf);
    });
  }

  async create(client: Client): Promise<void> {
    const connection = await connect();
    await connection.execute(
      "INSERT INTO clients (nome, sobrenome, email, cpf) VALUES (?, ?, ?, ?)",
      [client.firstName, client.lastName, client.email, client.cpf]
    );
  }
}
