import { Request, ResponseToolkit } from "@hapi/hapi";

import { Controller } from "../../infra/controllers/controller";

export class HapiAdapter {
  public static adapt(controller: Controller<any, any>) {
    return async (request: Request, h: ResponseToolkit, err?: Error) => {
      const response = await controller.execute({ body: {} });
      return h.response(response.body).code(response.statusCode);
    };
  }
}
