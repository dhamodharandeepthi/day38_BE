const mongoose = require("mongoose");
const config = require("./utils/config");

console.log('connecting to mongodb...');
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MONGODB...");
  })
  .catch((error) => {
      console.log('error connecting to MONGODB:', error.message);
  });
