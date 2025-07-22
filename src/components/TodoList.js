import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
