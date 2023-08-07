const express = require('express');
//const fs = require("fs");
const router = express.Router();
const {
  getAllTodo,
  saveTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("./../controllers/todo");

const authentication = require('./../middlewares/authentication')
//router.use(authentication);

//UseMiddleware: convert body to parse
router.use(express.json());
//exp.json() : return function

//Get method: get all todos
router.get("/", async(req, res) => {
    try{
        const todo = await getAllTodo();
        res.json({ status: "Success", data: todo });
    }catch(err){
        res.status(500).json({ status: "Faild" });
    }
});


//Post method : save todo

router.post("/", authentication,async (req, res) => {
  try {
    const todo = req.body;
    // console.log(todo);
    const newTodo = await saveTodo(todo);
    res.status(201).json({ status: "Success", data: newTodo });
  } catch (err) {
    res.status(404).json({ status: "Faild" });
  }
});

//Get method: get todo by id
router.get("/:id", async(req, res) => {
  try{

      let { id } = req.params;
      let todo = await getTodoById(id);
      //let todo = todos.find((todo) => todo.id === +id);
      if (todo) {
          res.status(200).json({ status: "Success", data: todo });
        } else {
            res.status(404).json({ status: "Faild" });
        }
    }catch(err){
        res.status(404).json({ status: "Faild!" });
    }
});

//Update method
router.patch("/:id", async(req, res) => {
  // console.log(req.body)
  try{
      const { title } = req.body;
      const { id } = req.params;
      const todo = await updateTodo(id, title);

      res.status(200).json({ status: "Success", data: todo });
    }catch(err){
      res.status(500).json({ status: "Faild"});
    }
});

//Delete method
router.delete("/:id", async(req, res) => {
  // const { title } = req.body;
  try{

      const { id } = req.params;
      const todo = await deleteTodo(id);
      res.status(204).json({ status: "Success", data: todo });
    }catch(err){
        res.status(500).json({ status: "Faild"});
    }
});

module.exports = router

