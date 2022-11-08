import React,{useState} from 'react';
import './App.css';
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function App() {
  const [todos, setTodos]= useState( )
  return (
    <div className="App">
    <ToDo/>
    <ToDoForm/>
    </div>
  );
}

export default App;
