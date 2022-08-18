import { Client } from "../../../../src/enterprise/entities/client/client.entity";

test("deve retornar o nome como uma string", () => {
  const client = new Client("Test", "Test", "test@mail.com", "12345678912");
  expect(client.firstName).toBe("Test");
});

test("deve retornar o sobrenome como uma string", () => {
  const client = new Client("Test", "Test", "test@mail.com", "12345678912");
  expect(client.lastName).toBe("Test");
});

test("deve retornar o email como uma string", () => {
  const client = new Client("Test", "Test", "test@mail.com", "12345678912");
  expect(client.email).toBe("test@mail.com");
});

test("deve retornar o cpf como uma string", () => {
  const client = new Client("Test", "Test", "test@mail.com", "12345678912");
  expect(client.cpf).toBe("12345678912");
});
