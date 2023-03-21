import { Sequelize } from "sequelize";
require("dotenv").config();
export const sequelize = new Sequelize("DRAG&DROP", "abbasali", "Abbas@123", {
  dialect: "mysql",
  host: "localhost",
});
