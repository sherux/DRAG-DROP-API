import { Model, DataTypes } from "sequelize";
import { sequelize } from "../util/db";

class User extends Model {
  public id!: number;
  public Input_value!: object;
  public RadioBox!: object;
  public CheckBox!: object;
  public TextArea!: object;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    Input_value: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    RadioBox: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    CheckBox: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    TextArea: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users_form",
  }
);

export default User;
