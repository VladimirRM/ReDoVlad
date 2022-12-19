import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");


  const handleChange =(e)=>{
         setUserInput(e.currentTarget.value)
  }
  const handleSubmit =(e)=>{
         addTask(userInput)
  }
  const handleKeyPress =()=>{

  }
  return (
    <form onSubmit={handleSubmit}>
      <div key={todo.id}>
        <input
          type="text"
          placeholder="Enter something..."
          value={userInput}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
        />
        <button>Add</button>
      </div>
    </form>
  );
};

export default ToDoForm;
