import React from 'react'
import { TaskList } from '../models'
import "../styles/ListComponents.css"

interface Props {
    completed: boolean,
    setCompleted:  React.Dispatch<React.SetStateAction<boolean>>,
    taskList: TaskList[]
    setTaskList : React.Dispatch<React.SetStateAction<TaskList[]>>
}
const ListComponent: React.FC<Props> = ({completed,setCompleted,taskList,setTaskList}) => {

    const handleCompleteTask = (id: string) => {
        setTaskList(prevTasks => {
          return prevTasks.map(task => {
            if (task.id === id) {
              return { ...task, taskCompleted:true};
            }
            return task;
          });
        });
    };

    const handleDeleteTask = (id: string) => {
        setTaskList(prevTasks => {
            return prevTasks.filter((task) => task.id !== id)
        })
    }
   
  return (
    <div className="list-container">
        {
            !!taskList && taskList.map((task: TaskList) => (
                <>
                    {task.taskCompleted === false && completed === false ? (
                       <>
                            <div className='list-item' key={task.id} style={{backgroundColor:"rgb(81, 120, 155)"}}>
                                <div className="list-item-text">
                                    {task.task.length > 8 ? ( 
                                        <p title={task.task}>{`${task.task.slice(0,8)}....`}</p> 
                                    ): task.task}
                                </div>
                                <div className="list-item-complete">
                                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleCompleteTask(task.id)}>mark as complete</button>
                                </div>
                                <div className="list-item-delete">
                                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleDeleteTask(task.id)}>Delete</button>
                                </div>
                            </div>    
                       </>
                    ) : task.taskCompleted === true && completed ? (
                        <>
                          <div className='list-item' key={task.id} style={{backgroundColor:"gray"}}>
                                <div className="list-item-text">
                                    {task.task.length > 14 ? ( 
                                        <p title={task.task}>{`${task.task.slice(0,14)}....`}</p> 
                                    ): task.task}
                                </div>
                                <div className="list-item-delete">
                                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleDeleteTask(task.id)}>Delete</button>
                                </div>
                            </div>    
                       </>
                    ): (
                        <div></div>
                    )
                    }
                </>    
            ))
        }
    </div>
  )
}

export default ListComponent