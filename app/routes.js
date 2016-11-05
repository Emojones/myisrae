'use strict'
var express = require('express');
var app = express();
var Blog = require('./dbmodel');
var router = express.Router();

router.get('/api/blog', function(req, res) {
    Blog.find(function(err, blogs) {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.json({blogs});
    });
});

router.delete('/api/blog/:_id', function(req, res) {
    Blog.remove({
        _id: req.params._id
    }, function(err) {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        return res.send('Post deleted!');
    });
});

router.put('/api/blog/:id', function(req, res) {
    res.send('Got a PUT request');
});

router.post('/api/blog', function(req, res) {
    res.send('Got a POST request');
});

module.exports = router;
