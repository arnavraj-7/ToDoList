import React from 'react'
import { useTodo } from '../Contexts/TodoContext.js'
import TodoItem from './TodoItem'

const AllToDo = () => {
    const {todos}=useTodo()
  return (
    <div className="w-full">
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo._id}>
            {<TodoItem todo={todo}/>}
          </li>
        ))
      ) : (
        <p className="text-gray-400 text-center">No todos yet!😃</p>
      )}
    </ul>
  </div>

  )
}

export default AllToDo
