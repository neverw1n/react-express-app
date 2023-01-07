const User = require('./../models/users');


exports.getUsers = function(req, res){
  User.findAll().then(data => {
    if (Object.keys(data).length === 0) {
      return res.status(204).send({
        message: "No Content"
      });
    } else {
      res.send(data);
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Internal Server Error"
    });
  });
};

exports.getUserByID = function(req, res){
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Not Found`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Internal Server Error"
      });
    });
};





// const db = require('./../db');

// router.get('/', (req, res) => {
//   query("SELECT * FROM Users",
//   function(err, results, fields) {
//     res.json(results);
// });
// })

// module.exports = router;
