const express = require("express");

// initialization
const app = express();

app.use(express.json());

const port = 8081;
const toDoList = ["Need to learn","Need to code"];

// http://localhost:8081/todos

app.get("/todos", (req,res) => {
    res.status(200).send(toDoList);
});

app.post("/todos",(req,res) => {
    let newToDo = req.body.item;
    toDoList.push(newToDo);
    res.status(201).send({
        message: "ToDo Got added successfully"
    })
});

app.delete("/todos",(req,res) => {
    const ItemToDelete = req.body.item;
    toDoList.find((element,index) => {
        if(element == ItemToDelete) {
            toDoList.splice(index,1);
        }
    })
    res.status(204).send({
        message : `Deleted Item "${req.body.item}"`
    })
});

app.all("/todos", (req,res) => {
    res.status(501).send();
});

app.all("*",(req,res) => {
    res.status(404).send();
});

app.listen(port,() => {
    console.log(`Node Js server started on ${port}`);
})
