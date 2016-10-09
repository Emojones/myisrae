'use strict';

var express = require('express');
var app = express();
var parser = require('body-parser');
//var router = require('./public');



//require('./database');
//require ('./seed');

app.use('/', express.static('public'));
//app.use(parser.json());


//app.use('/public', router);

app.listen(3000, function(){
  console.log("The server is running on port 3000");
});

exports = module.exports = app;