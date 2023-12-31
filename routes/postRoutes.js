const express = require("express");
const postContorller = require("../controllers/posts");
const postRouter = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

postRouter.post("/", authMiddleware.verifytoken,postContorller.createPost);


module.exports = postRouter;
