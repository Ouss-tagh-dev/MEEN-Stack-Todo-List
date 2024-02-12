const mongoose = require("mongoose");
const ConnectMongoDb = () => {
  const connectionUrl = "mongodb://127.0.0.1:27017/todoDb";
  mongoose
    .connect(connectionUrl)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Error connecting to database:", err);
    });
  try {
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = ConnectMongoDb;
