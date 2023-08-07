const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRouter = require('./routes/todoRoutes')
const userRouter = require('./routes/userRoutes')

//Middleware function that can modify the incoming request data
//middle between request and response
app.use(express.json());
app.use('/todos', todoRouter);
app.use('api/v1/users', userRouter);

mongoose.connect("mongodb://127.0.0.1:27017/todosdb").then(() => {
  console.log("Connected to Database");
});

const port = 9000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
