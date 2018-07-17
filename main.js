var express = require('express');
const url = require('url');
var path = require("path");
var app = express();

app.get('/Scripts/*', function (req, res) {
  var parsed = url.parse(req.originalUrl);
  var file = path.basename(parsed.pathname);
  res.sendFile(__dirname+"/Scripts/"+file+".js");
});

app.get('/Styles/*', function (req, res) {
  var parsed = url.parse(req.originalUrl);
  var file = path.basename(parsed.pathname);
  res.sendFile(__dirname+"/Style/"+file+".css");
});

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/Pages/main.html");
});

app.get('/*', function (req, res) {
    var parsed = url.parse(req.originalUrl);
    var file = path.basename(parsed.pathname);
    res.sendFile(__dirname+"/Pages/"+file+".html");
});



app.listen(5000, function () {
  console.log('App listening on port 5000!');
});
