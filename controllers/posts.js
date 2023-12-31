const Post = require('../models/post');

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
                user:userId,
            })

            // save the post
            post.save();

            // return the post

            return res.json({ message: 'Post created successfully', post });
        
        } catch (error) {
            return res.json({ error: 'Token is invalid' });
       }
    },
}


module.exports = postContorller;