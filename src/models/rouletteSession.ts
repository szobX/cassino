import { INTEGER } from "sequelize";
import { Model, STRING, UUID } from "sequelize";
import sequelize from "./_index";

export class RouletteSession extends Model {}

export class RouletteSessionModel {
  id: string | undefined;
  label: string | undefined;
  name: string | undefined;
  pot: number | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

RouletteSession.init(
  {
    label: STRING(255),
    name: STRING(50),
  },
  { sequelize, modelName: "roulette" }
);
