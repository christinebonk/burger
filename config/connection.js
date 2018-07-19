var mysql = require("mysql");

function login() {
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "password",
		database: "burger_db"
	});
};

module.exports = login;