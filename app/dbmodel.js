// define model =================
var mongoose = require('mongoose');

//set the schema
var blogSchema = new mongoose.Schema({
    title: String,
    name: String,
    date: String,
    author: String,
    body: String,
});

//make the model
var Blog = mongoose.model('Blog', blogSchema);

//expose the model
module.exports = Blog;
