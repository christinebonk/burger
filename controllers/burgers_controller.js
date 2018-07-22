var burger = require("./../models/burger.js");
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var path = require("path");


function routes(app) {
	app.get("/", function(req, res){
		burger.all(function(data) {
			var burger_obj = {
				burger: data
			}
			console.log(burger_obj);
			res.render("index", burger_obj);	
		})
		
	});

	app.post("/api/burger", function(req, res) {
		burger.insert(["burger_name"], [req.body.burger_name], function(result) {
	    res.json({ id: result.id})
	  });
	});

	app.put("/api/burger", function(req, res) {
		burger.update(req.body.id, req.body.devoured, function(result) {
			res.status(200).end();
		});
	});
};

module.exports = routes;


