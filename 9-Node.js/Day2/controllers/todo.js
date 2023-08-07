//const fs = require("fs");

const Todo = require('./../models/todo');

function getAllTodo() {
    return Todo.find().populate("userId");
    //return Todo.find();
}

function saveTodo(todo) {
    //recieve document
    return Todo.create(todo)
}

function getTodoById(id){
    return Todo.findOne({_id: id});
}

function updateTodo(id, title){
    return Todo.findByIdAndUpdate(id, {title}, {new: true})
}

function deleteTodo(id){
    return Todo.findByIdAndDelete(id);
}

module.exports = { getAllTodo, saveTodo, getTodoById, updateTodo, deleteTodo };
