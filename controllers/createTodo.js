//import the model

const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async (req,res)  => {
    try{
        //extract title and description
        const {title,description} = req.body;
        //create a new todo object and insert in DB
        const response = await Todo.create({title,description});
        //ssend a json response with a succes flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successflly' 
            }
        );
    }
    catch(err) {
        console.error(err);
        console.log();
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })

    }
}