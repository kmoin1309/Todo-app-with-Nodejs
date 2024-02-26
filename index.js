

const express = require("express");
const app = express();

// app.listen(3000,()=>{
//     console.log("App is running Successfully");
// })

require("dotenv").config();
const PORT = process.env.PORT || 4000;

 //middleware to parse json request body

app.use(express.json());

 //import routes fotr TODO api

const todoRoutes = require("./routes/todos");

 //mount the todo API routes

app.use("/api/v1",todoRoutes);

 //start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
 })


 // connect to DB
const dbconnect = require("./config/database");
 dbconnect();

 //default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is Homepage</h1>`);
})