const express = require("express");
const userController = require('./../controllers/userController');

//app.use(express.json());

const userRouter = express.Router();

userRouter.route("/api/v1/users").get(userController.getAllUsers).post(userController.createUser);
userRouter
  .route("/api/v1/users/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;