import { Request, Response } from "express";
import { rouletteSessionDAO } from "../../dao/index";
import RoulletteSessionDAO from "../../dao/rouletteSession";
import { IControllerAPi } from "../../types";
export default class RoulletteSessionController implements IControllerAPi {
  DAO: RoulletteSessionDAO;
  constructor() {
    this.DAO = new RoulletteSessionDAO();
  }
  list(req: Request, res: Response) {
    return this.DAO.findAll()
      .then((rouletteSessions: any) => res.status(200).send(rouletteSessions))
      .catch((error: OnErrorEventHandler) => res.boom.badRequest(error));
  }
  create(req: Request, res: Response) {
    return this.DAO.create(req.body)
      .then((rouletteSession: any) => res.status(201).send(rouletteSession))
      .catch((error: OnErrorEventHandler) => res.boom.badRequest(error));
  }
}
