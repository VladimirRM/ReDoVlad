import React, { useState } from "react";
import "./App.css";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

const  addTasks = (userInput)=>{
  if(userInput){
    const newItem= {
      id:Math.random().toString(36).substring(2,9),
      task:userInput,
      complete:false
    }
    setTodos([...todos, newItem])
  }
}
const  removeTasks = ()=>{

}
const  handleToggle = ()=>{

}

  return (
    <div className="App">
      <header>
        <h1>Todo List:{todos.length}</h1>
      </header>
      <ToDoForm  addTask={addTask}/>
      {todos.map((todo)=>{
        return(
          <ToDo todo={todo}
          key={todos.od}/>
          toggleTask={handleToggle}
          removeTask={removeTask}
        )}
       ) }
     
      
    </div>
  );
}

export default App;
