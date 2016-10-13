//import the dbmodel
var Blog = require('./dbmodel');

module.exports = function(app) {
  app.get('/api/blog', function(req, res) {
             Blog.find(function(err, blog) {
                if (err) res.send(err);
                 res.json(blog);
             });
         });

//TODO: post create
//TODO: post delete

app.get('*', function(req, res) {
 res.sendfile('../public/index.html'); // load our public/index.html file
               });
};
