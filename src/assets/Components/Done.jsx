import { useState } from "react";
import { useTodo } from "../Contexts";
import TodoItem from "./TodoItem.jsx";
function Done({ todo }) {
    const {todos} = useTodo()
       
      const todos_C=todos.filter((todo)=>todo.Completed==true)

  return (
    <div className="flex flex-wrap gap-y-3">
    <ul>
      {todos_C.length > 0 ? (
        todos_C.map((todo) => (
          <li key={todo.todoID}>
            <TodoItem todo={todo} />
          </li>
        ))
      ) : (
        <p className="text-gray-400 text-center">All todos are Completed!🥳</p>
      )}
    </ul>
  </div>
  )
}

export default Done;
