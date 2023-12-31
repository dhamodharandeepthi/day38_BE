const express = require("express");
const postContorller = require("../controllers/posts");
const postRouter = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

postRouter.post("/", authMiddleware.verifytoken,postContorller.createPost);
postRouter.get('/', authMiddleware.verifytoken, postContorller.viewAllPosts);


module.exports = postRouter;
