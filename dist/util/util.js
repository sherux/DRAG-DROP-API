"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("DRAG&DROP", "root", "abbas@123", {
    dialect: "mysql",
    host: "localhost",
});
