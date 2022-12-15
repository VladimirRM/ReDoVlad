import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState("");

  const addTask =()=>{
    
  }
  const removeTask =()=>{

  }
  const handleToggle =()=>{

  }

  return (
    <div>
      <header>
        <h1>Todo List:{todos.length}</h1>
      </header>

      <ToDoForm addTask={addTask}/>
      {todos.map((todo)=>
      <ToDo
      key={todo.id}
      removeTask={removeTask}
      toggleTask={handleToggle}
      
      
      
      
      />
      )}
    </div>
  );
};

export default App;
