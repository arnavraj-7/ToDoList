import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext.js";
import { Link, useNavigate } from "react-router-dom";

function TodoForm() {
    
   const {addTodo}=useTodo()
   const Navigate=useNavigate()
   const [task,settask]=useState("")

   const handleSubmit=async (e)=>{
       e.preventDefault();
    const newTodo={
        todo:task,
        Completed:false,
        isEditable:true,
    }
        addTodo(newTodo).then(()=>{
        console.log("Todo added successfully");
        Navigate("/AllToDo");
        settask("");
        });
    } 

    
    return (
        <form  className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={task}        
                onChange={(e)=>{
                    settask(e.target.value)
                }
                }
                    />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-800 duration-150 ease-in hover:scale-110 hover:rounded-l-lg">Add
            </button>
        </form>
    );
}

export default TodoForm;