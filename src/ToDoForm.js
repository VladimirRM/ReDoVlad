import React from 'react'

const ToDoForm = ({addTask,todo}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      value={userInput} />
    </form>
  )
}

export default ToDoForm