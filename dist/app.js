"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./util/db");
const app = (0, express_1.default)();
// import bodyParser from "body-parser";
app.use(express_1.default.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const drag_routes_1 = __importDefault(require("./routes/drag.routes"));
app.use("/drag&drop", drag_routes_1.default);
// ----------------------DATABASE SETUP------------------
db_1.sequelize
    .sync({})
    .then(() => {
    console.log("Database conneted");
})
    .catch((err) => {
    console.log("error", err.message);
});
// -------------------------SERVER CREATE-----------------
app.listen(5000, () => {
    console.log("server running port no 5000");
});
