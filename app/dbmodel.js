// define model =================
var mongoose = require('mongoose');

var blogMongo = mongoose.model('blogPost', {
    name: String,
    body: String,
});

module.exports = blogMongo;
