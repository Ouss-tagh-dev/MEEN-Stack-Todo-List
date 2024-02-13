const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

// List Todo
router.get("/", todoController.homeController);

// Add todo
router.get("/add-todo", todoController.addTodoFormController);

// Update todo
router.get("/update-todo", todoController.updateTodoFormController);

// Delete todo
router.get("/delete-todo", todoController.deleteTodoPageController);

// Add todo
router.post("/add-todo", todoController.addTodoController);

// Update todo
router.post("/update-todo/:id", todoController.updateTodoController);

// Delete todo (confirm)
router.get("/confirm-delete", todoController.deleteTodoController);

module.exports = router;
