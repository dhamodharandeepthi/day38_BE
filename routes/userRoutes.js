const express = require("express");
const userContorller = require("../controllers/users");
const userRouter = express.Router();

userRouter.post("/signup", userContorller.signup);
userRouter.post('/signin', userContorller.signin);



module.exports = userRouter;
