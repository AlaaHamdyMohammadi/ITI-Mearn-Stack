const express = require('express');
const todoController = require('./../controllers/todoController')

//app.use(express.json());

const todoRouter = express.Router();

todoRouter.route("/").get(todoController.getAllTodos).post(todoController.createTodo);
todoRouter
  .route("/:id")
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = todoRouter