import express from "express";
const CORS = require("cors");
import { sequelize } from "./util/db";
const app = express();
app.use(CORS());
app.options("*", CORS());

app.use(express.json());

import routes from "./routes/drag.routes";
app.use("/drag&drop", routes);
// ---------------------CORS---------------
app.set("trust proxy", true);
app.all("/*", (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:5000 http://172.16.16.182:5000"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

app.use(CORS(), routes);
// ----------------------DATABASE SETUP------------------
sequelize
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
