import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState("");

  return (
    <div>
      <header>
        <h1>Todo List:{todos.length}</h1>
      </header>
    </div>
     



  );
};

export default App;
