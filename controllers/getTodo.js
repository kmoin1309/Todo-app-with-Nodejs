const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
   //fetch all todo items from DB
   const todos =  await Todo.find({});
   //response
   res.status(200)
   .json({
    success:true,
    data:todos,
    message:"Entire Todo Data is Fetched"
   })
  } catch (err) {
    console.error(err);
    res.status(500)
    .json({
        success:false,
        data:"Internal Server Error",
        message:err.message,
    })
    
  }
};

exports.getTodoById = async(req,res) => {
    try {
     //extarct todo items by id
     const id = req.params.id;
     const todo = await Todo.findById({_id: id})
     //data forgiven id not found
     if(!todo){
        return res.status(404).json({
            success:false,
            message:"No Data Found with Given Id",
        })
     }
     //Data for given id found
     res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`
     })
       
    } catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          data: "Internal Server Error",
          message: err.message,
        });
      
    }
}