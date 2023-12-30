const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const userContorller = {
  signup: async (req, res) => {
    try {
      // get the username, name, and password from the request body
      const { username, name, password } = req.body;

      // check if the username already exists in the database
      const user = await User.findOne({ username });

      // if the username already exists,return an error
      if (user) {
        return res.status(400).json({ error: "username already exists" });
      }

      // if the username is unique, create a new user

      // hash the password
      const passwordHash = await bcrypt.hash(password, 10);

      // create a new user with the username,name,and hashed password
      const newUser = new User({
        username,
        name,
        passwordHash,
      });

      // save the user to the database
      const savedUser = await newUser.save();

      //return the saved user
      res.status(200).json({ message: "user created", user: savedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  signin: async (req, res) => {
    try {
      // get username and password from the request body
      const { username, password } = req.body;

      // catch if the user exists in the databases
      const user = await User.findOne({ username });

      // if the user does not exist,return an error
      if (!user) {
        return res.json({ error: "user not found" });
      }

      // if the user exists, check if the password is correct
      const passwordMatch = await bcrypt.compare(password, user.passwordHash);

      // if the password is incorrect, return an error
      if (!passwordMatch) {
        return res.json({ error: "incorrect password" });
      }

      // if the password is correct,generate a token and return it
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
          name: user.name,
        },
        config.JWT_SECRET
      );

      res.json({
        message: "user signed in",
        token,
        username: user.username,
        name: user.name,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = userContorller;
