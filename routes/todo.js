const express = require("express");
const moment = require("moment");
const Todo = require("../models/Todo");

const router = express.Router();

// List Todo
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: 1 });
    res.locals.moment = moment;
    res.render("index", { title: "Todo List", todos });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Add todo
router.get("/add-todo", (req, res, next) => {
  try {
    res.render("new-todo", { title: "New Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update todo
router.get("/update-todo", (req, res, next) => {
  try {
    res.render("update-todo", { title: "Update Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update todo
router.get("/delete-todo", (req, res, next) => {
  try {
    res.render("delete-todo", { title: "Delete Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Add todo
router.post("/add-todo", async (req, res, next) => {
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

module.exports = router;
