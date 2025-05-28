import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext.js";

function TodoItem({ todo }) {
  if (!todo) {
    return <div>loading</div>;
  }
  const [isTodoEditable, setIsTodoEditable] = useState(todo.isEditable);
  const [task, settask] = useState(todo.todo);

  const { updateTodo, toggleCompleted, deleteTodo } = useTodo();
  return (
    <div
      className={`hover:scale-105 duration-300 ease-in-out justify-between relative flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 my-4 text-black w-full ${
        todo.Completed ? "bg-[#c6e9a7]" : "bg-[#b9a6c7]"
      }`}
    >
      <div className="flex gap-3 ">
        <div>
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.Completed}
          onChange={(e) => toggleCompleted(todo._id)}
        />
        </div>
        <div>
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg 
    ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
    ${todo.Completed ? "line-through" : ""}`}
          value={task}
          onChange={(e) => {
            settask(e.target.value);
            const newtodo = {
              ...todo,
              todo: e.target.value,
            };
            updateTodo(todo._id, newtodo);
          }}
          readOnly={!isTodoEditable}
        />
        </div>
      </div>
      {/* Edit, Save Button */}
      <div className="hover:scale-110 duration-200 ease-in">
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 mx-3"
          onClick={() => {
            setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.Completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo._id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
