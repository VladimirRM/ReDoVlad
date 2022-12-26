import React, { useState } from "react";

const ToDoForm = ({ addTask, todo }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} />
    </form>
  );
};

export default ToDoForm;
