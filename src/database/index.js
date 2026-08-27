import { Sequelize } from "sequelize";
import users from "../app/models/users.js";
import configdatabase from "../config/database.cjs";

const model = [users];

class database {
	constructor() {
		this.init();
	}
	init() {
		this.connection = new Sequelize(configdatabase);
		model.map((model) => model.init(this.connection));
	}
}
export default new database();
