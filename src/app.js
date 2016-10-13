'use strict';

//MODULES********************************************************************
var express = require('express');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');

//import config files
var db = require('../config/db');

//connect to mongo
mongoose.connect(db.url);

//server these static files
app.use('/', express.static('public'));

//our routes
require('../app/routes');

//start the server and print out to the console
app.listen(3000, function () {
    console.log("The server is running on port 3000");
});

//expose our app
exports = module.exports = app;
