var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser")
var routes = require("./controllers/burgers_controller.js")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

routes(app);

app.listen(process.env.PORT || port, function(){
	console.log("Listening on PORT " + port);
})











