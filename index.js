const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const moment = require("moment");

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

const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: String,
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// List Todo
app.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: 1 });
    res.locals.moment = moment;
    res.render("index", { title: "Todo List", todos });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Add todo
app.get("/add-todo", (req, res, next) => {
  try {
    res.render("new-todo", { title: "New Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update todo
app.get("/update-todo", (req, res, next) => {
  try {
    res.render("update-todo", { title: "Update Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update todo
app.get("/delete-todo", (req, res, next) => {
  try {
    res.render("delete-todo", { title: "Delete Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Add todo
app.post("/add-todo", async (req, res, next) => {
  try {
    const { title, desc } = req.body;

    if (!title) {
      return res.status(400).send({ message: "Title is required" });
    }

    const newTodo = new Todo({ title, desc });
    await newTodo.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
