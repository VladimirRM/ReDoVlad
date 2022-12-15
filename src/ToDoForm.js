import React,{useState} from 'react'

const ToDoForm = ({addTask}) => {

  const [userInput,setUserInput]= useState('')
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      onChange={handleChange}

      
      
      
      />
    </form>
  )
}

export default ToDoForm
