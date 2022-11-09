import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
  const [userInput, setUserInput] = useState("");
  const handleChange =(e)=>{
    setUserInput(e.currentTarget.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  };
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
