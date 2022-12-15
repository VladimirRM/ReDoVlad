import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={userInput}
        placeholder="Enter someThing..."
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};

export default ToDoForm;
