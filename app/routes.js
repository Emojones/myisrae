'use strict'
var express = require('express');
var app = express();
var Blog = require('./dbmodel');
var router = express.Router();

router.get('/api/blog', function (req, res) {
  Blog.find({}, function (err, blogs) {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({
      blogs: blogs
    });
  });
});

router.delete('/api/blog/:id', function (req, res) {
  res.send('Got a DELETE request');
});

// router.put('/api/blog/:id', function (req, res) {
//   res.send('Got a PUT request');
// });

router.put('/api/blog:id', function (req, res) {
  var id = req.params.id;
  var blog = req.body;
  if  (blog && blog._id !== id) {
    return res.status(500).json({err: 'Ids dont match'})
  }
  Blog.findByIdAndUpdate(id, blog, function (err, blog) {
      if (err) {
        return res.status(500).json({err: err.message});
      }
    res.json({'blog': blog, message: 'Todo Updated'});
  })
});

router.post('/api/blog', function (req, res) {
  res.send('Got a POST request');
});

module.exports = router;
