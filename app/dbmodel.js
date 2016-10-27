// define model =================
var mongoose = require('mongoose');

//set the schema
var blogSchema = new mongoose.Schema({
    name: String,
    date: String,
    author: String,
    body: String,
});

//make the model
var model = mongoose.model('blogPost', blogSchema);

//expose the model
module.exports = model
