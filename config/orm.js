var connection = require("./connection.js");

var orm = {

	selectAll: function() {
		var queryString = `SELECT * FROM burger`; 
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			else console.log(res);
		})
	},

	insertOne: function(burger_obj) {
		var queryString = `INSERT INTO burger (burger_name, link) VALUES [??]`;
		var values = [${burger_obj.name}, ${burger_obj.link}]
		connection.query(queryString, values, function(err,res) {
			if(err) throw err;
			else console.log("Burger Added!")
		})
	},

	updateOne: function(burger_obj) {
		var queryString = `UPDATE burger SET devoured = 1 WHERE burger.name = ?`;
		var values = burger_obj.name;
		connection.query(queryString, values, function (err, res) {
			if (err) throw err;
			else console.log ("Burger Updated!")
		})
	}
};


module.exports = orm;



