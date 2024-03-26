const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://rohan:LRedka01@cluster0.fpdg7p7.mongodb.net/todos_app")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
}) 

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}