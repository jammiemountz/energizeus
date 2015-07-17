var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');
require('./powerReader.js');
var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 3030;
// app.listen(port);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(port, function(){
  console.log('Connectus is listening on port ' + port + '...');
});

module.exports = app;
