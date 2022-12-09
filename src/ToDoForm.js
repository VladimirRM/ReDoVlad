import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {

const handleChange =()=>{
  
}
const handleSubmit =()=>{

}
const handleKeyPress=()=>{

}



  const [userInput, setUserInput] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter something"
      />
    </form>
  );
};

export default ToDoForm;
