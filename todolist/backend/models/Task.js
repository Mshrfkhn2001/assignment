const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: 
  { 
    type: String, 
    required: true 
  },
  completed: 
  { type: Boolean, 
    default: false 
  },
});

const Todo = mongoose.model('Todo', taskSchema);
module.exports = Todo;
