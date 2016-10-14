// define model =================
var mongoose = require('mongoose');


module.exports = mongoose.model('blogPost', {
    name: String,
    body: String
});
