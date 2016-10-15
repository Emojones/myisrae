// define model =================
var mongoose = require('mongoose');

//set the schema
var blogSchema = new mongoose.Schema({
    name: String,
    body: String,
});

//make the model
var model = mongoose.model('blogPost', blogSchema);

//expose the model
model.exports = model;
