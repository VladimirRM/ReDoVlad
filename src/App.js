import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState("");

  const addTask = (userInput) => {
    if (userInput) {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: true,
      };
      setTodos([...todos, newTodo]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => (todo.id = !id))]);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div>
      <header>
        <h1>Todo List:{todos.length}</h1>
      </header>

      <ToDoForm addTask={addTask} />
      {todos.map((todo) => (
        <ToDo removeTask={removeTask} todo={todo}
        
        
        />
      ))}
    </div>
  );
};

export default App;
