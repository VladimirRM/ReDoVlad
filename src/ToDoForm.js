import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange=()=>{
    
  }
  const handleSubmit=()=>{

  }
  const handleKeyPress=()=>{

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
       onChange={handleChange}
       value={userInput}
       placeholder='Enter someThing...'
       onKeyDown={handleKeyPress}
       />
    </form>
  );
};

export default ToDoForm;
