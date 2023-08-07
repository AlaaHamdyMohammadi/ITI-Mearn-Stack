const express = require("express");
const User = require('./../models/userModel');
//app.use(express.json());

//Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json({ status: "Success", data: user });
  } catch (err) {
    res.status(500).json({ status: "Faild" });
  }
};

//Create User
exports.createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await User.create(user);
    res.status(201).json({ status: "Success", data: newUser });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "Faild", err });
  }
};

//Get Todo By Id
exports.getUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await User.findOne({ _id: id });
    if (user) {
      res.status(200).json({ status: "Success", data: user });
    } else {
      res.status(404).json({ status: "Faild" });
    }
  } catch (err) {
    res.status(404).json({ status: "Faild!" });
  }
};

//Update User
exports.updateUser = async (req, res) => {
  // console.log(req.body)
  try {
    const { title } = req.body;
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { title }, { new: true });

    res.status(200).json({ status: "Success", data: user });
  } catch (err) {
    res.status(500).json({ status: "Faild" });
  }
};

//Delete User
exports.deleteUser = async (req, res) => {
  // const { title } = req.body;
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(204).json({ status: "Success", data: user });
  } catch (err) {
    res.status(500).json({ status: "Faild" });
  }
};
