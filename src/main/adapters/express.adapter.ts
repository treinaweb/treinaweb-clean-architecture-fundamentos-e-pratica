import { Request, Response } from "express";

import { Controller } from "../../infra/controllers/controller";

export class ExpressAdapter {
  public static adapt(controller: Controller<any, any>) {
    return async (req: Request, res: Response) => {
      const response = await controller.execute({
        body: req.body,
      });
      res.status(response.statusCode).json(response.body);
    };
  }
}
