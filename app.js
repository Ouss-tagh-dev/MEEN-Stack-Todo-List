const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectMongoDb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

// Environment variable configuration
dotenv.config();

// Initialize Express application
const app = express();

// Database connection
connectMongoDb();

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute);

module.exports = app;
