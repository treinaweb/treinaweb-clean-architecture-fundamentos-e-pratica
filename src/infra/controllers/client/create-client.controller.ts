import { Controller } from "../controller";
import {
  CreateClientInputDto,
  CreateClientOutputDto,
} from "../../presenters/client/create-client.presenter";
import { HttpRequest, HttpResponse } from "../../web/http";
import { CreateClientMapper } from "../../mappers/client/create-client.mapper";
import { CreateClientUseCase } from "../../../application/usecases/client/create-client.usecase";

export class CreateClientController
  implements Controller<CreateClientInputDto, CreateClientOutputDto>
{
  private _createClientUseCase: CreateClientUseCase;

  constructor(createClientUseCase: CreateClientUseCase) {
    this._createClientUseCase = createClientUseCase;
  }

  async execute(
    request: HttpRequest<CreateClientInputDto>
  ): Promise<HttpResponse<CreateClientOutputDto>> {
    const clientToCreate = CreateClientMapper.toClient(request.body);
    const createdClient = await this._createClientUseCase.execute(
      clientToCreate
    );
    return {
      statusCode: 201,
      body: CreateClientMapper.toCreateClientOutputDto(createdClient),
    };
  }
}
