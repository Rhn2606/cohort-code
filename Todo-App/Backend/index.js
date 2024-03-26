const express = require("express")
const { createTodo, updateTodo } = require("./types")
const app = express()
const { todo } = require("./db")

app.use(express.json())

app.post("/todo", async function (req , res) {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if( !parsedPayload.success) {
        res.status(411).json({
            msg : "Wrong Inputs"
        })
        return
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json ({
        msg : "Todo Created"
    })


})

app.get("/todos", async function (req, res) {
    const todos = await todo.find()
    console.log(todos)
    res.json({
        todos
    })


})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if( !parsedPayload.success) {
        res.status(411).json({
            msg : "Wrong Inputs"
        })
        return
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "Marked as Complete"
    })
}) 

app.listen(3000)