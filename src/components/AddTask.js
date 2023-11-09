import React, { useState } from 'react'
import '../components/AddTask.css';
export const AddTask = () => {
   const [addTask,setAddTask]=useState("")
 
    const handleChange = (event) =>{
       setAddTask(event.target.value)
    }
    const handleReset = ()=>{
      setAddTask("");
    }

  return (
    <section className='add-task'>
        <form >
            <label htmlFor='addTask'>Name</label>
            <input onChange={handleChange} className='name' type="text" placeholder='name' value={addTask} />
            {addTask}
            <button>Add Task</button>
            <button onClick={handleReset} className='reset'>Reset</button>
        </form>
    </section>
  )
}
