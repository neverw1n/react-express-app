const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

router.post("/", authController.loginRoute);

module.exports = router;
