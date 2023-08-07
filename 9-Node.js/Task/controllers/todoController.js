const express = require("express");
const Todo = require('./../models/todoModel')
//app.use(express.json());

//Get All Todos
exports.getAllTodos = async (req, res) => {
  try {
    const todo = await Todo.find().populate("userId");
    res.json({ status: "Success", data: todo });
  } catch (err) {
    res.status(500).json({ status: "Faild" });
  }
};

//Create todo
exports.createTodo = async (req, res) => {
  try {
    const todo = req.body;
    // console.log(todo);
    const newTodo = await Todo.create(todo);
    res.status(201).json({ status: "Success", data: newTodo });
  } catch (err) {
    res.status(404).json({ status: "Faild" });
  }
};

//Get Todo By Id
exports.getTodo = async (req, res) => {
  try {
    let { id } = req.params;
    let todo = await Todo.findOne({ _id: id });
    //let todo = todos.find((todo) => todo.id === +id);
    if (todo) {
      res.status(200).json({ status: "Success", data: todo });
    } else {
      res.status(404).json({ status: "Faild" });
    }
    /*
        if(req.params.id * 1 > tours.length){
            return res.status(404).json({
                status: 'Fail',
                message: 'Invalid id'
        })
        }
    */
  } catch (err) {
    res.status(404).json({ status: "Faild!" });
  }
};

//Update todo
exports.updateTodo = async (req, res) => {
  // console.log(req.body)
  try {
    const { title } = req.body;
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, { title }, { new: true });

    res.status(200).json({ status: "Success", data: todo });
    /*
        if(req.params.id * 1 > tours.length){
            return res.status(404).json({
                status: 'Fail',
                message: 'Invalid id'
        })
        }
    */
  } catch (err) {
    res.status(500).json({ status: "Faild" });
  }
};

//Delete Todo
exports.deleteTodo = async (req, res) => {
  // const { title } = req.body;
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    res.status(204).json({ status: "Success", data: todo });
  } catch (err) {
    res.status(500).json({ status: "Faild" });
  }
};
