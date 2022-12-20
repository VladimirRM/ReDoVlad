import React from 'react'

const ToDo = ({todo,removeTask,handleToggle}) => {
  return (
    <div key={todo.id}>
      <div>{todo.task}</div>
      <div onClick={removeTask} className='delete-todo'>Delete</div>
      
    </div>
  )
}

export default ToDo
