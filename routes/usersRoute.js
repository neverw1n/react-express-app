const express = require('express');
const router = express.Router();
const userController = require("../controllers/usersController");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserByID);

module.exports = router;




// const db = require('./../db');

// router.get('/', (req, res) => {
//   query("SELECT * FROM Users",
//   function(err, results, fields) {
//     res.json(results);
// });
// })

// module.exports = router;
