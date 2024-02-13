const mongoose = require("mongoose");
const ConnectMongoDb = () => {
  mongoose
    .connect(process.env.CONNECTION_URL)
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
