import React from 'react'

export const TaskCard = ({task,handleDelete,info}) => {
  return (
    <>
     <li key={task.id} className={task.isCompleted ? "completed":"uncompleted"}>
         <span>{task.id}-{task.Name} {info} </span>
         <button onClick={()=>handleDelete(task.id)} className="delete">Delete</button>
     </li>
    </>
  )
}
