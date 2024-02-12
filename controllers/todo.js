const moment = require("moment");
const Todo = require("../models/Todo");

// Controller for rendering the home page with the list of todos
const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: 1 });
    res.locals.moment = moment;
    res.render("index", { title: "Todo List", todos });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Controller for rendering the form to add a new todo
const addTodoFormController = (req, res, next) => {
  try {
    res.render("new-todo", { title: "New Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Controller for rendering the form to update a todo
const updateTodoFormController = (req, res, next) => {
  try {
    res.render("update-todo", { title: "Update Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Controller for rendering the page to delete a todo
const deleteTodoPageController = (req, res, next) => {
  try {
    res.render("delete-todo", { title: "Delete Todo" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Controller for adding a new todo
const addTodoController = async (req, res, next) => {
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
};

module.exports = {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoPageController,
  addTodoController,
};
