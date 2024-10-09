import React, { useState } from 'react'
import './styles/App.css'
import InputField from './components/InputField'
import ListComponent from './components/ListComponent'
import { TaskList } from './models'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [taskList,setTaskList] = useState<TaskList[]>([])
  const [completed,setCompleted] = useState<boolean>(false)

  return (
    <div className="container">
      <nav className="heading">
      <h1>
        TASKIFY
      </h1>
      </nav>
      <div className="body">
        <InputField todo={todo} setTodo={setTodo} setTaskList={setTaskList}/>
         
        {taskList.length && (
        <>
          <div className="sub-heading">
           <h3>My Tasks</h3>
          </div> 
          <div className="class-classification">
            <div className="progress">
              <button 
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setCompleted(!completed)}
              style={{
                color: completed ? "rgb(99, 95, 95)" : "rgb(81, 120, 155)", 
                borderBottomColor : completed ? "rgb(237, 243, 248)"  :"rgb(81, 120, 155)"
              }}
              >
              In Progress</button>
            </div>
            <div className="completed">
              <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setCompleted(!completed)}
                  style={{
                    color: completed ? "rgb(81, 120, 155)": "rgb(99, 95, 95)"  , 
                    borderBottomColor : completed ? "rgb(81, 120, 155)" : "rgb(237, 243, 248)"  
                  }}
              >
              Completed</button>
            </div>
          </div>  
          <ListComponent completed={completed} setCompleted={setCompleted} taskList={taskList} setTaskList={setTaskList}/>
        </>
        )} 
      </div>
    </div>
  )
}

export default App