import { Model, DataTypes } from "sequelize";
import { sequelize } from "../util/db";

class User extends Model {
  public id!: number;
  public Fields_Input!: object;
  public Fields_RadioBox!: object;
  public Fields_CheckBox!: object;
  public Fields_TextArea!: object;
  public Fields_Image!: object;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    Fields_Input: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    Fields_RadioBox: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    Fields_CheckBox: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    Fields_TextArea: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    Fields_Image: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Fields_Form",
  }
);

export default User;
