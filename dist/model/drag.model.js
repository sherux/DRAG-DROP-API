"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    Input_value: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    RadioBox: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    CheckBox: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    TextArea: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "users_form",
});
exports.default = User;
