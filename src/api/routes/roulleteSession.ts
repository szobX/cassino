import { Express } from "express";
import RoulletteSessionController from "../../controllers/roulette/index";

const controller = new RoulletteSessionController();
export function routes(app: Express) {
  app.get("/api/roulette-session", controller.list);
  app.post("/api/roulette-session", controller.create);
}
