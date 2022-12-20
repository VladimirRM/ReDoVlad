import React from 'react'

const ToDo = ({todo,removeTask,handleToggle}) => {
  return (
    <div key={todo.id}>
      <div className={todo.complete ? 'item-text strike ':'item-text'}>{todo.task}</div>
      <div onClick={handleToggle} className='delete-todo'>Delete</div>
      
    </div>
  )
}

export default ToDo
