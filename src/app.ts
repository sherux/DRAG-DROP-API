import express from "express";
const CORS = require("cors");
import { sequelize } from "./util/db";
const app = express();
app.use(CORS());
app.options("*", CORS());

app.use(express.json());

import routes from "./routes/drag.routes";
import routes2 from "./routes/data3";
import FieldsFormschema from "./model/drag.model";
import F1 from "./model/data";

app.use("/drag&drop", routes);
app.use("/data", routes2);
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

const Fields_Form = FieldsFormschema;
const Fields_Form2 = F1;

Fields_Form.hasMany(Fields_Form2, {
  foreignKey: "f_Id",
  as: "Fields_Form2",
});
Fields_Form2.belongsTo(Fields_Form, {
  foreignKey: "f_Id",
  as: "Fields_Form",
});

// ----------------------DATABASE SETUP------------------
sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err: any) => {
    console.log("Unable to connect to the database: ", err.message);
  });

// -------------------------SERVER CREATE-----------------
app.listen(5000, () => {
  console.log("server running port no 5000");
});


