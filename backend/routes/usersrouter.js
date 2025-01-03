const express = require("express");
const {register} = require("../controllers/Userscontroller");
const usersRouter = express.Router();

usersRouter.post("/register", register);

module.exports = usersRouter;
