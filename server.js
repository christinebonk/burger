var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.listen(process.env.PORT || port, function(){
	console.log("Listening on PORT " + port);
})