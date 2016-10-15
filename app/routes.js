//import the dbmodel
var Blog = require('./dbmodel');
var path = require('path');


//backend routes############################################
module.exports = function(app) {
  app.get('/blog', function(req, res) {
             Blog.find(function(err, blogs) {
                if (err) {
                  res.send(err);
                } else res.json(blogs);
              });
         });

//TODO: post create
//TODO: post delete


//frontend routes################################################
//route to handle all angular requests
app.get('*', function(req, res) {
res.sendFile(path.resolve(__dirname+'/../public/'+'index.html'));
});
};
