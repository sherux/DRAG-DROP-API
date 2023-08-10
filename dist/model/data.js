"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class F1 extends sequelize_1.Model {
}
F1.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    fields_input2: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    f_Id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "Fields_Form2",
});
exports.default = F1;
