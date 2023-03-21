"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CORS = require("cors");
const db_1 = require("./util/db");
const app = (0, express_1.default)();
app.use(CORS());
app.options("*", CORS());
app.use(express_1.default.json());
const drag_routes_1 = __importDefault(require("./routes/drag.routes"));
app.use("/drag&drop", drag_routes_1.default);
// ---------------------CORS---------------
app.set("trust proxy", true);
app.all("/*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000 http://172.16.16.182:5000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});
app.use(CORS(), drag_routes_1.default);
// ----------------------DATABASE SETUP------------------
db_1.sequelize
    .sync()
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
