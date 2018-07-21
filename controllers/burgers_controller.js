var burger = require("./../models/burger.js");
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var path = require("path");

function routes(app) {
	app.get("/", function(request, response){
		response.render("index");	
	});

	app.post("/api/burger", function(request, response) {
		burger.insert(["burger_name", "devoured"], [request.body.burger_name], request.body.devoured, function(result) {
	    response.json({ id: result.id})
	  });
	})
}

module.exports = routes;

