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
    Fields_Input: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    Fields_RadioBox: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    Fields_CheckBox: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    Fields_TextArea: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    Fields_Image: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "Fields_Form",
});
exports.default = User;
