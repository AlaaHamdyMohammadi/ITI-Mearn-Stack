const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Empty title!"],
      minLength: 3,
      maxLength: 15,
      trim: true,
    },
    status: {
      type: String,
      // enum: ['todo', 'inProgress', 'done'],
      // default: 'default TODO',
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
    }
  },
  { timestamps: true }
);

//todo: name of collection
const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;