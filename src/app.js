'use strict';

//MODULES********************************************************************
var express = require('express');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('../app/routes');

//import config files
var db = require('../config/db');

//seed the database
require ('../mock/seed');

//serve these static files
app.use(parser.json());
app.use(express.static(__dirname + '/../public'));

/**
 *  TODO: host the node_modules folder (or at least node_modules/angular) to a static route
 *  so you don't need the vendor directory
 * 
 *    app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
**/

//connect to mongodb
mongoose.connect(db.url, function(err){
  if (err) {
    console.log("Unable to connect to database")
  } else {console.log("Connected to database")};
});

app.get('/api/blog/', routes);
app.delete('/api/blog/:_id', routes);
app.post('/api/blog/', routes);
app.put('/api/blog/:_id', routes);


//start the server and print out to the console
app.listen(3000, function () {
    console.log("The server is running on port 3000");
});

// //expose our app
// exports = module.exports = app;
