var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {

// 	selectAll: function() {
// 		var queryString = `SELECT * FROM burger`; 
// 		connection.query(queryString, function(err, res) {
// 			if (err) throw err;
// 			else console.log(res);
// 		})
// 	},

	insertOne: function(table, cols, vals, cb) {
		var cols = cols.toString();
		var question = printQuestionMarks(vals.length)
		var queryString = `INSERT INTO ${table} (${cols}) VALUES (${question})`

		connection.query(queryString, vals, function(err, result) {
			if(err) throw err;
			cb(result);
		});
	}

// 	updateOne: function(burger_obj) {
// 		var queryString = `UPDATE burger SET devoured = 1 WHERE burger.name = ?`;
// 		var values = burger_obj.name;
// 		connection.query(queryString, values, function (err, res) {
// 			if (err) throw err;
// 			else console.log ("Burger Updated!")
// 		})
// 	}
};


module.exports = orm;

