const express = require("express");
const userContorller = require("../controllers/users");
const authMiddleware = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.post("/signup", userContorller.signup);
userRouter.post("/signin", userContorller.signin);
userRouter.get("/getUser", authMiddleware.verifytoken, userContorller.getUser);

module.exports = userRouter;
