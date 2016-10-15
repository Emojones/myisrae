'use strict';

//MODULES********************************************************************
var express = require('express');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');
var blogMock = require('../mock/blogMock.json');

//import config files
var db = require('../config/db');

//connect to mongo
mongoose.connect(db.url, function(err){
  if (err) {
    console.log("Unable to connect to database")
  } else {console.log("Connected to database")};
});

//server these static files
app.use('/', express.static('public'));
app.use(parser.json());


//our routes
require('../app/routes')(app);

//start the server and print out to the console
app.listen(3000, function () {
    console.log("The server is running on port 3000");
});

//expose our app
exports = module.exports = app;
