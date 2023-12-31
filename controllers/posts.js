const Post = require("../models/post");

const postContorller = {
  createPost: (req, res) => {
    try {
      // get the userid from the request
      const userId = req.userId;

      const { title, description } = req.body;

      // create a POST
      const post = new Post({
        title,
        description,
        user: userId,
      });

      // save the post
      post.save();

      // return the post

      return res.json({ message: "Post created successfully", post });
    } catch (error) {
      return res.json({ error: "Token is invalid" });
    }
  },

  viewAllPosts: async (req, res) => {
      try {
        const userId = req.userId
      // get all the posts
      const posts = await Post.find({user: userId});

      //return the posts
      return res.json({ message: "post retrieved successfully", posts });
    } catch (error) {
      return res.json({ error: "token is invalid" });
    }
  },
};

module.exports = postContorller;
