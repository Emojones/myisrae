'use strict';

//MODULES********************************************************************
var express = require('express');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog-posts')

// define model =================
var blogMongo = mongoose.model('blogPost', {
    name: String,
    body: String,
});

app.use('/', express.static('public'));

app.listen(3000, function () {
    console.log("The server is running on port 3000");
});