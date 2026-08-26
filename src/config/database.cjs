module.exports = {
	dialect: "postgres",
	host: "localhost",
	database: "dev-burguer_db",
	username: "admin",
	password: "123456",
	define: {
		timestamps: true,
		underscored: true,
		underscoredALL: true,
	},
};
