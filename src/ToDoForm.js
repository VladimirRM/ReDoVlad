import React, { useState } from "react";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");
  const handleChange =()=>{
    setUserInput(e.currentTarget.value)
  }
  const handleSubmit = () => {};
const handleKeyPress =()=>{

  }

  return <form onSubmit={handleSubmit}>
    <input  value={userInput}type="text" onChange={handleChange}
    onKeyDown={handleKeyPress}
    placeholder='Enter'
    />
    <button>Save</button>
  </form>;
};

export default ToDoForm;
