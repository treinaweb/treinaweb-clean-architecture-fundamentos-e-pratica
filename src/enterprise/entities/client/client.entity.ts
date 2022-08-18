export class Client {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _cpf: string;

  constructor(firstName: string, lastName: string, email: string, cpf: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._cpf = cpf;
    this.validate();
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get cpf(): string {
    return this._cpf;
  }

  private validate() {
    if (this._firstName.length < 3) {
      throw new Error("Ivalid firstName");
    }

    if (!this._firstName.match("^([a-zA-Z]+)$")) {
      throw new Error("Ivalid firstName");
    }

    if (this._lastName.length < 3) {
      throw new Error("Ivalid lastName");
    }
  }
}
