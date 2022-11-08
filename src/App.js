import React, { useState } from "react";
import "./App.css";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

const  addTasks = ()=>{
  
}
const  removeTasks = ()=>{

}
const  handleToggle = ()=>{

}

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      <ToDo />
      <ToDoForm />
      </header>
    </div>
  );
}

export default App;
