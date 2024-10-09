import React from 'react'
import "../styles/inputField.css"
import { TaskList } from '../models'

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    setTaskList : React.Dispatch<React.SetStateAction<TaskList[]>>
}

const InputField : React.FC<Props> = ({todo,setTodo,setTaskList}) => {

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    setTaskList(prev => [...prev, {id: new Date().toISOString(), task: todo, taskCompleted: false}])
  }

  return (
    <div className='inputFieldContainer'>
        <div className="inputField">
        <input type="text" placeholder="Enter a task" 
        name={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}>Go</button>
        </div>
    </div>
  )
}

export default InputField