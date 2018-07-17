var burger = require("./../models/burger.js");
var express = require("express");
var app = express();

function routes(app) {

	app.get("/", function(request, response){
		return response.sendFile(path.join(__dirname, '../public/home.html'));;		
	});

}

module.exports = routes;

