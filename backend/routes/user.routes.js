const express = require("express");

const {
    getUsers,
    addUsers
} = require("../controller/user.controller.js");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", addUsers);

module.exports = userRouter;
