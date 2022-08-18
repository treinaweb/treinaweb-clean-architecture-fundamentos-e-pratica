import { Cpf } from "../../../src/enterprise/entities/cpf.valueobject";

test("deve lançar um erro quando tiver menos que onze caracteres", () => {
  const exec = () => new Cpf("123");
  expect(exec).toThrow(Error);
});
