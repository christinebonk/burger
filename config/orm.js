var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {

	selectAll: function(table, cb) {
		var queryString = `SELECT * FROM ${table}`; 
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			else cb(res);
		})
	},

	insertOne: function(table, cols, vals, cb) {
		var cols = cols.toString();
		var question = printQuestionMarks(vals.length)
		var queryString = `INSERT INTO ${table} (${cols}) VALUES (${question})`

		connection.query(queryString, vals, function(err, res) {
			if(err) throw err;
			cb(res);
		});
	},

	updateOne: function(table, cols, vals, cb) {
		var queryString = `UPDATE ${table} SET devoured = ${vals} WHERE id = ${cols}`;
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	}
};


module.exports = orm;

