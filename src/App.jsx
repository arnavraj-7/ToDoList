import React, { use, useEffect, useRef, useState } from "react";

import { TodoProvider } from "./assets/Contexts";
import TodoForm from "./assets/Components/TodoForm.jsx";
import "./index.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./assets/Components/Footer.jsx";
const App = () => {
  const [todos, setTodos] = useState([]);
  const isInitialMount = useRef(true);
  const Navigate = useNavigate();
  useEffect(()=>{
  const fetchtodos= async()=>{
    try{
      const res=await fetch("http://localhost:5000/AllDoTo");
      const data=await res.json();
      setTodos(data);
      console.log("Fetched todos:", data);
    }catch(error){
      console.error("Error fetching todos:", error); 
    }
  }
  fetchtodos()
  },[])
  // Load todos from localStorage on component mount
  // useEffect(() => {
  //   const td = localStorage.getItem("storeTodo");
  //   console.log("Fetched from localStorage:", td);
  //   if (td) {
  //     setTodos(JSON.parse(td));
  //   }
  // }, []);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //     return;
  //   }
  //   // Save todos to localStorage whenever todos change
   
  // }, [todos]);



  const addTodo = (todo) => {
    if(todo==""){
      return 
    }

    setTodos((prev) => [todo, ...prev]);
  };

  const updateTodo = (_id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo._id === todo._id ? todo : prevTodo))
    );
  };
  const deleteTodo = (_id) => {
    setTodos((prev) => prev.filter((Todo) => Todo._id !== _id));
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
          {/* <div className="flex md:justify-evenly justify-center items-center">
              <button
                className="h-12 w-32 rounded-l md:rounded bg-yellow-600 hover:bg-yellow-700  md:hover:scale-110 duration-300 ease-in-out text-white border-0"
                onClick={(e) => Navigate("AllToDo")}
              >
                ALL TO-DOs
              </button>
              <button
                className="h-12 w-32  md:rounded rounded-none bg-green-600 hover:bg-green-700 md:hover:scale-110 duration-300 ease-in text-white border-0"
                onClick={(e) => Navigate("Done")}
              >
                COMPLETED
              </button>
              <button
                className="h-12 w-32 rounded-r md:rounded border-0
            md:hover:scale-110 duration-300 ease-in-out bg-red-600 hover:bg-red-700 text-white"
                onClick={(e) => Navigate("NotDone")}  
              >
                TO BE DONE
              </button>
          </div> */}
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
