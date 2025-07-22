import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <li className={todo.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Remove</button>
      </li>

      {/* <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Remove</button>
      </li> */}
    </div>
  );
}

export default TodoItem;
