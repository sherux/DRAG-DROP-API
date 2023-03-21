import { Sequelize } from "sequelize";
require("dotenv").config();
export const sequelize = new Sequelize("DRAG&DROP", "", "", {
  dialect: "mysql",
  host: "localhost",
});
