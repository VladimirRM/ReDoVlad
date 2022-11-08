import React, { useState } from "react";
import "./App.css";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

const  addTasks = ()=>{
  
}

  return (
    <div className="App">
      <ToDo />
      <ToDoForm />
    </div>
  );
}

export default App;
