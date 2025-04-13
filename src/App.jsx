import React, { useEffect, useRef, useState } from "react";

import { TodoProvider } from "./assets/Contexts";
import TodoForm from "./assets/Components/TodoForm.jsx";
import "./index.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./assets/Components/Footer.jsx";
const App = () => {
  const [todos, setTodos] = useState([]);
  const isInitialMount = useRef(true);
  const Navigate = useNavigate();
  // Load todos from localStorage on component mount
  useEffect(() => {
    const td = localStorage.getItem("storeTodo");
    console.log("Fetched from localStorage:", td);
    if (td) {
      setTodos(JSON.parse(td));
    }
  }, []);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return; // 🚫 Skip first effect run
    } else {
      localStorage.setItem("storeTodo", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    console.log(
      "Current todos:",
      todos.map((t) => t)
    );
  }, [todos]);

  const addTodo = (todo) => {
    const newtodo = {
      todoID: crypto.randomUUID(),
      Completed: false,
      isTodoEditable: false,
      todo: todo,
    };
    setTodos((prev) => [newtodo, ...prev]);
  };

  const updateTodo = (todoID, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.todoID === todoID ? todo : prevTodo))
    );
  };
  const deleteTodo = (todoID) => {
    setTodos((prev) => prev.filter((Todo) => Todo.todoID !== todoID));
  };

  const toggleCompleted = (todoID) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.todoID == todoID ? { ...todo, Completed: !todo.Completed } : todo
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
          <div className="flex md:justify-evenly justify-center items-center gap-x-2">
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
