import express from "express";
import { sequelize } from "./util/db";
const app = express();
// import bodyParser from "body-parser";
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

import routes from "./routes/drag.routes";
app.use("/drag&drop", routes);

// ----------------------DATABASE SETUP------------------
sequelize
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
