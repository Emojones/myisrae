'use strict'

var mongoose = require('mongoose');

var blogschema = new mongoose.schema({
  name: String,
  body: String
});

var model = mongoose.model(
  'blog',blogschema
)

module.exports = model;