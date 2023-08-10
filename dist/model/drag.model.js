"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class FieldsFormschema extends sequelize_1.Model {
}
FieldsFormschema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    fields_input: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    fields_radioBox: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    fields_checkBox: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    fields_textArea: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    fields_image: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    fields_comment: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    fields_rating: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    f_Id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "Fields_Form",
});
exports.default = FieldsFormschema;
