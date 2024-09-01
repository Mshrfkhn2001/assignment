import React, { useState } from 'react';

const TaskItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleUpdate = () => {
    updateTodo(todo._id, { title });
    setIsEditing(false);
  };

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
      "bg-[#ccbed7]"
  }`}
    >
    <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditing ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isEditing}
    />
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
            if (todo.completed) return;

            if (isEditing) {
              handleUpdate();
            } else setIsEditing((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {isEditing ? "📁" : "✏️"}
    </button>
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo._id)}
    >
        ❌
    </button>
</div>
  );
};

export default TaskItem;
