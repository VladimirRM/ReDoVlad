import React, { useState } from "react";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = () => {};
  const handleChange =()=>{
    
  }

  return <form onSubmit={handleSubmit}>
    <input  value={userInput}type="text" onChange={handleChange}/>
  </form>;
};

export default ToDoForm;
