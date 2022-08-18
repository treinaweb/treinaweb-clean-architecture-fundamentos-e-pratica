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

test("deve lançar um erro quando nome com menos que três caracteres", () => {
  const exec = () => new Client("A", "Test", "test@mail.com", "12345678912");
  expect(exec).toThrow(Error);
});

test("deve lançar um erro quando sobrenome com menos que três caracteres", () => {
  const exec = () => new Client("Test", "A", "test@mail.com", "12345678912");
  expect(exec).toThrow(Error);
});
