import { Model, DataTypes } from "sequelize";
import { sequelize } from "../util/db";

class F1 extends Model {
  public id!: number;
  public fields_input2!: object;
  public f_Id!: number;
}

F1.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fields_input2: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    f_Id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Fields_Form2",
  }
);

export default F1;
