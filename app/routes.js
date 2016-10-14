//import the dbmodel
var Blog = require('./dbmodel');

module.exports = function(app) {
  app.get('/api/blog', function(req, res) {
             Blog.find(function(err, blogs) {
                if (err) res.send(err);
                 res.json(blogs);
             });
         });

//TODO: post create
//TODO: post delete

app.get('*', function(req, res) {
 res.sendfile('../public/index.html'); // load our public/index.html file
               });
};
