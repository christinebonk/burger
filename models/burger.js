var orm = require("./../config/orm.js");

var burger = {
	all: function(cb) {
		orm.selectAll("burger", function(res) {
			cb(res);
		});
	},

	insert: function(cols, vals, cb) {
		orm.insertOne("burger", cols, vals, function(res) {
			cb(res);
		});
	},

	update: function(b) {
	}
}

module.exports = burger;