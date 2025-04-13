import { useState } from "react";
import { useTodo } from "../Contexts";
import TodoItem from "./TodoItem.jsx";
function Done({ todo }) {
    const {todos} = useTodo()
       
      const todos_C=todos.filter((todo)=>todo.Completed==false)

  return (
    <div className="gap-y-3 w-full">
    <ul>
      {todos_C.length > 0 ? (
        todos_C.map((todo) => (
          <li key={todo.todoID}>
            <TodoItem todo={todo} />
          </li>
        ))
      ) : (
        <p className="text-gray-400 text-center">No Completed todos yet!🥵</p>
      )}
    </ul>
  </div>
  )
}

export default Done;
