const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const movie = require("./movie");

router.use("/register", userController.register);
router.use("/login", userController.login);
router.use("/api/movie", movie);

module.exports = router;
