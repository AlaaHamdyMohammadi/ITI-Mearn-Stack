const User = require("./../models/user");

function getAllUsers() {
  return User.find();
}

function saveUser(user) {
  //recieve document
  return User.create(user);
}

function getUserById(id) {
  return User.findOne({ _id: id });
}

function updateUser(id, title) {
  return User.findByIdAndUpdate(id, { title }, { new: true });
}

function deleteUser(id) {
  return User.findByIdAndDelete(id);
}

module.exports = { getAllUsers, saveUser, getUserById, updateUser, deleteUser };
