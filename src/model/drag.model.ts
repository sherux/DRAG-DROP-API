import { Model, DataTypes } from "sequelize";
import { sequelize } from "../util/db";

class FieldsFormschema extends Model {
  public id!: number;
  public fields_input!: object;
  public fields_radioBox!: object;
  public fields_checkBox!: object;
  public fields_textArea!: object;
  public fields_image!: object;
  public fields_comment!: object;
  public fields_rating!: object;
  public f_Id!: number;
}

FieldsFormschema.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fields_input: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    fields_radioBox: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    fields_checkBox: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    fields_textArea: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    fields_image: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    fields_comment: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    fields_rating: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    f_Id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Fields_Form",
  }
);

export default FieldsFormschema;
