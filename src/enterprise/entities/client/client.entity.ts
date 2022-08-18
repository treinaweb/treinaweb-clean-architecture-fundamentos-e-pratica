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
}
