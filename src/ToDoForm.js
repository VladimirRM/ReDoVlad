import React, { useState } from "react";

const ToDoForm = ({ addTask, todo }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange =(e)=>{
       setUserInput(e.currentTarget.value)
  }
  const handleSubmit =(e)=>{
     e.preventDefault(e)
     addTask(userInput)
     setUserInput('')
  }
  const handleKeyPress =(e)=>{
        if(e.key==='Enter'){
          setUserInput(e)
        }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter something"
      />
      <button>Add</button>
    </form>
  );
};

export default ToDoForm;
