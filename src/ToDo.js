import React from 'react'

const ToDo = ({todo,removeTask,handleToggle}) => {
  return (
    <div key={todo.id}>
      <div></div>
      <div onClick={removeTask}>Delete</div>
      
    </div>
  )
}

export default ToDo
