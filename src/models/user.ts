import { INTEGER } from "sequelize";
import { Model, STRING, UUID } from "sequelize";
import sequelize from "./_index";

type roleType = "USER" | "PRO" | "ULTIMATE";

export class User extends Model {}

export class UserModel {
  id: string | undefined;
  email: string | undefined;
  nickname: string | undefined;
  balance: number | undefined;
  role: roleType | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

User.init(
  {
    label: STRING(255),
    name: STRING(50),
  },
  { sequelize, modelName: "users" }
);
