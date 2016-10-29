'use strict'
//import the dbmodel
var express = require('express');
var app = express();
var Blog = require('./dbmodel');
var path = require('path');
var blogMock = require('../mock/blogMock');


//backend routes############################################
module.exports = function(app) {
    app.get('/api/blog', function(req, res) {
        Blog.find(function(err, blogs) {
            if (err) {
                res.send(err);
            } else res.json(blogMock)
        });
    });

    //TODO: post create
    app.post('/api/blog/', function(req, res) {
        Blog.find(function(err, blogs) {
            if (err) {
                res.send(err);
            } else res.json(blogMock)
        });
    });

    //TODO: post delete
    app.delete('/api/blog/', function(req, res) {
        Blog.find(function(err, blogs) {
            if (err) {
                res.send(err);
            } else res.json(blogMock)
        });
    });


//frontend routes################################################
//route to handle all angular requests
// app.get('*', function(req, res) {
//   res.render('/index.html');
// });

};
