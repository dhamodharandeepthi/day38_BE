const mongoose = require("mongoose");
const config = require("./utils/config");
const app = require('./app');


console.log('connecting to mongodb...');
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MONGODB...");

    // start the server
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    })
  })
  .catch((error) => {
      console.log('error connecting to MONGODB:', error.message);
  });
