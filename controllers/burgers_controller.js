var burger = require("./../models/burger.js");
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var path = require("path");


function routes(app) {
	app.get("/", function(request, response){
		burger.all(function(data) {
			var burger_obj = {
				burger: data
			}
			console.log(burger_obj);
			response.render("index", burger_obj);	
		})
		
	});

	app.post("/api/burger", function(request, response) {
		burger.insert(["burger_name"], [request.body.burger_name], function(result) {
	    response.json({ id: result.id})
	  });
	})
}

module.exports = routes;


