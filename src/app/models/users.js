import { DataTypes, Model } from "sequelize";

class user extends Model {
	static init(sequelize) {
		Model.init(
			{
				name: DataTypes.STRING,
				email: DataTypes.STRING,
				password_hash: DataTypes.STRING,
				admin: DataTypes.BOOLEAN,
			},
			{ sequelize, tableName: "users" },
		);
	}
}
export default user;
