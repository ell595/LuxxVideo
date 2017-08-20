var express = require('express');
var app = express();
var ejs = require('ejs');

app.use(express.static(__dirname + '/public'));

// Configure our HTTP server to respond with Hello World the root request
app.get("/", function(req, res) {
  res.render('home.ejs');
});

app.get("/thanks", function(req, res) {
  res.render('thanks.ejs');
});

// Listen on port 8080 on localhost
app.listen(8000, "localhost", function(){
	console.log("Server is listening!");
});