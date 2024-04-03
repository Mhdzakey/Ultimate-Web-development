//import model 
const Todo = require("../models/todo");

exports.updateTodo = async (req,res) =>{
    try {
       
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt: Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"Entry updated Successfully"
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
    }
} 