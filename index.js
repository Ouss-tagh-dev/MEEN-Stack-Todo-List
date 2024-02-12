const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;

// init app
const app = express();

// Dtabase connection
const connectionUrl = "mongodb://127.0.0.1:27017/schoolDb";
mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("Database  Connected");
  })
  .catch((err) => {
    console.error(err);
  });

// view engine
app.set("view engine", "ejs");


// listen server
app.listen(PORT, () => {console.log(`Server listening on ${PORT}`)});