import React, { useState } from "react";

const ToDoForm = ({ addTask, todo }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit =()=>{
    
  }
  const handleChange =()=>{

  }
  const handleKeyPress =()=>{

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
