const mongoose = require("mongoose");
//mongodb+srv://Deepakega:*Deepakega143@cluster0.bbsyybu.mongodb.net/todos

mongoose.connect("mongodb+srv://Deepakega:*Deepakega143@cluster0.bbsyybu.mongodb.net/todos")
const todoSchema=mongoose.Schema({
  title:String,
  description:String,
  completed:boolean
})

const todo= mongoose.model('todos',todoSchema);
module.exports={
  todo
}