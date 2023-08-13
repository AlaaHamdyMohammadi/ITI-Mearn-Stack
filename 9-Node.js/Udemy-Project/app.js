const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://GraduationProject:iti-team2@cluster0.daxyxcz.mongodb.net/projectNode?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });