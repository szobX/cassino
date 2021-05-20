import { v4 } from "uuid";
import { RouletteSession } from "../models/rouletteSession";
import { IDAOControllerApi } from "../types";

export default class RoulletteSessionDAO implements IDAOControllerApi {
  constructor() {}
  create(rouletteSession: any): Promise<any> {
    return RouletteSession.create({
      id: v4(),
      label: rouletteSession.label,
      name: rouletteSession.name,
      pot: rouletteSession.pot,
      winning: rouletteSession.winning,
      winners: rouletteSession.winners,
      lossers: rouletteSession.losers,
    });
  }

  findAll(): Promise<any> {
    return RouletteSession.findAll();
  }
}
