const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.use("/register", userController.register);
router.use("/login", userController.login);

module.exports = router;
