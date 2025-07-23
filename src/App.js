import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // add new todo list into list
  const addTodos = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  // Delete an specified todo list by using Id
  const deleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };
  // Check Box
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // clear completed list
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <div className="container">
      <h2>Todo App</h2>
      <TodoForm addTodos={addTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <button onClick={clearCompletedTodos} className="clear-btn">
        Clear Completed Tasks
      </button>
    </div>
  );
}

export default App;
