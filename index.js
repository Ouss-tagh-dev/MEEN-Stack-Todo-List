const { cache } = require("ejs");
const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;

// init app
const app = express();

// Dtabase connection
const connectionUrl = "mongodb://127.0.0.1:27017/todoDb";
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

//
app.get("/", (req, res, next) => {
  try {
    res.render("");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// listen server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
