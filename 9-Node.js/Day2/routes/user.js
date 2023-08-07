const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { getAllUsers, saveUser, getUserById, updateUser, deleteUser } = require('./../controllers/user');
const User = require("../models/user");

router.use(express.json());

//Get method: get all users
router.get("/", async(req, res) => {
    try{
        const user = await getAllUsers();
        res.json({ status: "Success", data: user });
    }catch(err){
        res.status(500).json({ status: "Faild"});
    }
});

//Post method : save user
router.post("/", async(req, res) => {
    try{
        const user = req.body;
        const newUser = await User.create(user);
        res.status(201).json({ status: "Success", data: newUser });
    }catch(err){
      console.log(err);
        res.status(404).json({ status: "Faild", err});
    }
});

router.post("/login", async function(req, res){
    const {email, password}= req.body;
    if(!email || !password){
        return res.status(404).json({status: 'Faild method', message: 'please enter email and password'})
    }
    try{
    //check if user exist in DB
    const user = await User.findOne({email:email});
    if(!user){
        return res
            .status(404)
            .json({
            status: "Faild method",
            message: "invalid email or password",
            });
    }
    //Compare password
    const isEqual = await bcrypt.compare(password, user.password);

    //If not Equal
    if(!isEqual){
        return res.status(404).json({
          status: "Faild method",
          message: "invalid email or password",
        });
    }
    //If Equal => send token
    //jwt.sign({payload})
    const token = jwt.sign(
      { id: user._id, name: user.name },
      "this-is-my-jwt-secret"
    );
    res.status(200).json({status: 'Success', token});
}catch(err){
        res.status(404).json({status: 'Faild method'});
    }
})

//Get method: get user by id


router.get("/:id", async(req, res) => {
  try{

      let { id } = req.params;
      let user = await getUserById(id);
      if (user) {
          res.status(200).json({ status: "Success", data: user });
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
      const user = await updateUser(id, title);

      res.status(200).json({ status: "Success", data: user });
    }catch(err){
      res.status(500).json({ status: "Faild"});
    }
});

//Delete method
router.delete("/:id", async(req, res) => {
  // const { title } = req.body;
  try{

      const { id } = req.params;
      const user = await deleteUser(id);
      res.status(204).json({ status: "Success", data: user });
    }catch(err){
        res.status(500).json({ status: "Faild"});
    }
});


module.exports = router