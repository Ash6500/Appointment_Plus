const express = require("express");

const {
    getUsers,
    addUsers,
    updateUser,
    getUserById
} = require("../controller/user.controller.js");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", addUsers);
userRouter.post("/:id", updateUser);
userRouter.get("/:id", getUserById);


module.exports = userRouter;
