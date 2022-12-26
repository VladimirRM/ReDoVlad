import React from "react";

const ToDo = ({ todo, removeTask, toggleTask }) => {
  return (
    <div key={todo.id} className="item-todo">
      <div className={todo.complete ? "item-text strike" : "item-text"}>
        {todo.task}
      </div>
      <div onClick={() => removeTask(todo.id)}></div>
    </div>
  );
};

export default ToDo;
