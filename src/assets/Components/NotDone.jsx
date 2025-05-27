import { useState } from "react";
import { useTodo } from "../Contexts";
import TodoItem from "./TodoItem.jsx";
function NotDone() {
    const {todos} = useTodo()
       
      const todos_C=todos.filter((todo)=>todo.Completed==false)

  return (
    <div className="gap-y-3 w-full">
    <ul>
      {todos_C.length > 0 ? (
        todos_C.map((todo) => (
          <li key={todo._id}>
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

export default NotDone;
