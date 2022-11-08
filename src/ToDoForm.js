import React, { useState } from "react";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = () => {};
  const handleChange =()=>{

  }
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
