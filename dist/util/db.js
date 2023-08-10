"use strict";
// import { Sequelize } from "sequelize";
// require("dotenv").config();
// export const sequelize = new Sequelize("DRAG&DROP", "root", "Abbas@123", {
//   dialect: "mysql",
//   host: "localhost",
// });
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const Sequelize = require("sequelize");
require("dotenv").config();
const database = process.env.database;
const username = process.env.username;
const password = process.env.password;
const host = process.env.host;
exports.sequelize = new Sequelize(database, username, password, {
    dialect: "mysql",
    host: host,
    logging: false,
});
