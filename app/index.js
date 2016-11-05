//treehouse code FOR REFERENCE ONLY

//add POST route to create new entries
router.post('/todos', function (req, res) {
  var todo = req.body;
  Todo.create(todo, function (err, todo) {
      if (err) {
        return res.status(500).json({err: err.message});
      }
    res.json({'todo': todo, message: 'Todo Created'});
  })
});

//add PUT route to update existing entries
router.put('/todos:id', function (req, res) {
  var id = req.params.id;
  var todo = req.body;
  if  (todo && todo._id !== id) {
    return res.status(500).json({err: 'Ids dont match'})
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function (err, todo) {
      if (err) {
        return res.status(500).json({err: err.message});
      }
    res.json({'todo': todo, message: 'Todo Updated'});
  })
});

//TODOL add DELETE route to delete entries
