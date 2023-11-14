import React, { useState } from 'react'
import '../components/AddTask.css';
export const AddTask = () => {
   const [addTask,setAddTask]=useState("")
   const[progress,setProgress] =useState(false)

    const handleChange = (event) =>{
       setAddTask(event.target.value)
    }
    const handleReset = ()=>{
      setAddTask("");
      setProgress(false)
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      const Task = {
         id:Math.floor(Math.random()*10000),
         name:addTask,
         isCompleted:Boolean(progress),
      }
      console.log("Print Task",Task)
      handleReset()
    }

  return (
    <section className='add-task'>
        <form  onSubmit={handleSubmit}>
            <label htmlFor='addTask'>Name</label>
            <input onChange={handleChange} className='name' type="text" placeholder='name' value={addTask} />
            <select onChange={(event)=>setProgress(event.target.value)} className='completed' value={progress}>
              <option value="true">Completed</option>
              <option value="false">Pending</option>
            </select>
            {addTask}
            <button>Add Task</button>
            <button onClick={handleReset} className='reset'>Reset</button>
        </form>
    </section>
  )
}
