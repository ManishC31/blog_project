const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((response) => {
      console.log("DATABASE CONNECTED SUCCESSFULLY !");
    })
    .catch((error) => {
      console.log("DATABASE CONNECTION FAILED !", error);
      process.exit(1);
    });
};

module.exports = connectToDatabase;
