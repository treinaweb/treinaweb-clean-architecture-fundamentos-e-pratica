import { Controller } from "../controller";
import { FindAllClientsOutputDto } from "../../presenters/client/find-all-clients.presenter";
import { HttpRequest, HttpResponse } from "../../web/http";
import { FindAllClientsUseCase } from "../../../application/usecases/client/find-all-clients.usecase";
import { FindAllClientsMapper } from "../../mappers/client/find-all-clients.mapper";

export class FindAllClientsController
  implements Controller<any, FindAllClientsOutputDto[]>
{
  private _findAllClientsUseCase: FindAllClientsUseCase;

  constructor(findAllClientsUseCase: FindAllClientsUseCase) {
    this._findAllClientsUseCase = findAllClientsUseCase;
  }

  async execute(
    request: HttpRequest<any>
  ): Promise<HttpResponse<FindAllClientsOutputDto[]>> {
    const clients = await this._findAllClientsUseCase.execute();
    return {
      statusCode: 200,
      body: clients.map((client) =>
        FindAllClientsMapper.toFindAllClientsOutputDto(client)
      ),
    };
  }
}
