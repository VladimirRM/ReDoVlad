import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {

const handleChange =(e)=>{
    setUserInput(e.currentTarget.value)
}
const handleSubmit =(e)=>{
  e.preventDefault()
  addTask(userInput)
  setUserInput('')

}
const handleKeyPress=(e)=>{
  if(e.key==='Enter')
  handleSubmit(e)

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
