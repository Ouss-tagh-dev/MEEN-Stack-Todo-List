const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = 8000;

// Initialize Express application
const app = express();

// Database connection
const connectionUrl = "mongodb://127.0.0.1:27017/todoDb";
mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res, next) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Add todo
app.get("/add-todo", (req, res, next) => {
  try {
    res.render("new-todo");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update todo
app.get("/update-todo", (req, res, next) => {
  try {
    res.render("update-todo");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update todo
app.get("/delete-todo", (req, res, next) => {
  try {
    res.render("delete-todo");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
