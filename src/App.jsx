import React, { useEffect, useRef, useState } from "react";

import { TodoProvider } from "./assets/Contexts/TodoContext.js";
import TodoForm from "./assets/Components/TodoForm.jsx";
import "./index.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./assets/Components/Footer.jsx";
const App = () => {
  const [todos, setTodos] = useState([]);
  const Navigate = useNavigate();
  useEffect(()=>{
  const fetchtodos= async()=>{
    try{
      const res=await fetch("http://localhost:5000/api/todos/AllToDo");
      const data=await res.json();
      setTodos(data.todos || []); // Ensure todos is an array
      console.log("Fetched todos:", data);
    }catch(error){
      console.error("Error fetching todos:", error); 
    }
  }
  fetchtodos()
  },[])
  useEffect(() => {
  console.log("Todos state updated:", todos);
}, [todos]);


  const addTodo = async(todo) => {
    //Save the todo in the backend
    
      try{
        const res=await fetch("http://localhost:5000/api/todos/AllToDo",{
          body:JSON.stringify(todo),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const addedTodo=await res.json();
        setTodos((prev)=>[addedTodo,...prev]);
      }catch(error){
        console.error("Error adding todo:", error);
      }
    }

  const updateTodo = (_id, todo) => {
    // Update the todo in the backend
    const updateBackend=async()=>{
      const res= await fetch(`http://localhost:5000/api/todos/AllToDo/${_id}`,{
        body: JSON.stringify(todo),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
   const updatedTodo=  await res.json();
  console.log("Updated todo:", updatedTodo);
  setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo._id === _id ? updatedTodo : prevTodo))
    );
  }
  // Call the function to update the backend
  updateBackend();
  };
  const deleteTodo = (_id) => {
    setTodos((prev) => prev.filter((todo) => todo._id !== _id));
    // Delete the todo in the backend
    const deleteBackend=async()=>{
      const res= await fetch(`http://localhost:5000/api/todos/AllToDo/${_id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
   const deletedTodo=  await res.json();
  console.log("Removed todo:", deletedTodo);
  }
    // Call the function to delete the backend
    deleteBackend();
  };

  const toggleCompleted = (_id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id == _id ? { ...todo, Completed: !todo.Completed } : todo
      )
    );
  };
  if (Array.isArray(todos) == null) {
    return;
  }
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
         </div>
          <div className="flex md:justify-evenly justify-center items-center">
  <button
    className="h-12 w-32 rounded bg-yellow-600 hover:bg-yellow-700 md:hover:scale-110 duration-300 ease-in-out text-white text-sm leading-none flex items-center justify-center text-center"
    onClick={() => Navigate("AllToDo")}
  >
    ALL TO-DOs📃
  </button>

  <button
    className="h-12 w-32 rounded bg-green-600 hover:bg-green-700 md:hover:scale-110 duration-300 ease-in text-white text-sm leading-none flex items-center justify-center text-center"
    onClick={() => Navigate("Done")}
  >
    COMPLETED✅
  </button>

  <button
    className="h-12 w-32 rounded bg-red-600 hover:bg-red-700 md:hover:scale-110 duration-300 ease-in-out text-white text-sm leading-none flex items-center justify-center text-center"
    onClick={() => Navigate("NotDone")}
  >
    TO BE DONE⌛
  </button>
</div>

          <div className="mt-4 flex flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </TodoProvider>
  );
};

export default App;
