'use strict';

//MODULES********************************************************************
var express = require('express');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');
var blogMock = require('../mock/blogMock.json');
var path = require('path');

//import config files
var db = require('../config/db');

//serve these static files
app.use(parser.json());
app.use(express.static(path.join(__dirname + '/../public')));

//connect to mongo
mongoose.connect(db.url, function(err){
  if (err) {
    console.log("Unable to connect to database")
  } else {console.log("Connected to database")};
});

//our routes
require('../app/routes')(app);

//start the server and print out to the console
app.listen(3000, function () {
    console.log("The server is running on port 3000");
});

//expose our app
exports = module.exports = app;
